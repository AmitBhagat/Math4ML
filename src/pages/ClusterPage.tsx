import { Link, useParams } from "react-router-dom";
import { ChevronRight, Layers } from "lucide-react";
import { CLUSTERS, CATEGORY_META, ICON_MAP, preloadCategory } from "@/src/data/topics";

const TopicCard = ({ topic, ...props }: { topic: any, key?: string }) => {
  const Icon = ICON_MAP[topic.id] ?? Layers;
  
  // Custom colors for topic badges to match the provided design
  const getAccentColor = (id: string) => {
    const isMath = id === 'linear-algebra' || id === 'calculus' || id === 'probability' || id === 'statistics';
    if (isMath) {
        switch (id) {
            case 'linear-algebra': return 'text-purple-500 bg-purple-500/10 border-purple-500/20';
            case 'calculus': return 'text-blue-500 bg-blue-500/10 border-blue-500/20';
            case 'probability': return 'text-teal-500 bg-teal-500/10 border-teal-500/20';
            default: return 'text-orange-500 bg-orange-500/10 border-orange-500/20';
        }
    }
    return 'text-teal-500 bg-teal-500/10 border-teal-500/20'; // Default for ML
  };

  const accentStyles = getAccentColor(topic.id);

  return (
    <Link 
      to={`/${topic.clusterId}/${topic.id}`}
      onMouseEnter={() => preloadCategory(topic.id)}
      className="group relative bg-surface-container border-none p-8 rounded transition-all duration-300 hover:-translate-y-2 hover:bg-surface-container-high hover:shadow-2xl flex flex-col h-full"
    >
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-8 border ${accentStyles.split(' ').slice(1).join(' ')}`}>
        <Icon className={`w-6 h-6 ${accentStyles.split(' ')[0]}`} />
      </div>
      <h3 className="text-xl font-headline font-black mb-2 text-on-surface">{topic.title}</h3>
      <p className="text-on-surface-variant text-xs mb-8 leading-relaxed flex-grow">{topic.description}</p>
    </Link>
  );
};

export const ClusterPage = () => {
  const { clusterId } = useParams();
  const cluster = CLUSTERS.find(c => c.id === clusterId);

  if (!cluster) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl font-black text-on-surface mb-4">Cluster Not Found</h1>
        <Link to="/" className="text-accent-teal hover:underline tracking-widest uppercase text-xs font-black">Return Home</Link>
      </div>
    );
  }

  const topics = cluster.categories.map(catId => {
    const meta = CATEGORY_META.find(m => m.id === catId);
    return {
      ...meta,
      clusterId: cluster.id
    };
  }).filter(t => t.id);

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
      {/* Breadcrumb */}
      <div className="flex flex-wrap items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant mb-12">
        <Link to="/" className="hover:text-accent-teal transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3 opacity-30" />
        <span className="text-on-surface">{cluster.title}</span>
      </div>

      {/* Header */}
      <div className="mb-20">
        <h1 className="text-4xl md:text-6xl font-headline font-black text-on-surface tracking-tighter mb-8 leading-none">
          {cluster.title}
        </h1>
        <p className="text-lg md:text-xl text-on-surface-variant max-w-4xl leading-relaxed font-light text-editorial-justify">
          {cluster.description}
        </p>
      </div>

      {/* Topics Grid Section */}
      <section className="mb-24">
        <div className="flex items-center gap-6 mb-12 border-b border-black/5 dark:border-white/5 pb-6">
          <h2 className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.3em]">Curriculum Pathways</h2>
          <div className="h-[2px] flex-grow bg-gradient-to-r from-accent-teal/30 to-transparent"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      </section>
    </div>
  );
};
