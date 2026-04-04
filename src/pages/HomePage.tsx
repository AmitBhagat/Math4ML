import { Link } from "react-router-dom";
import { ArrowRight, PlayCircle, Layers, FunctionSquare, BarChart3, Dice5 } from "lucide-react";
import { preloadCategory, CATEGORY_META, ICON_MAP } from "@/src/data/topics";

const TopicCard = ({ topic, ...props }: { topic: any, key?: string }) => {
  const Icon = topic.icon;
  
  // Custom colors for topic badges to match the provided design
  const getAccentColor = (id: string) => {
    switch (id) {
      case 'linear-algebra': return 'text-purple-500 bg-purple-500/10 border-purple-500/20';
      case 'calculus': return 'text-blue-500 bg-blue-500/10 border-blue-500/20';
      case 'probability': return 'text-teal-500 bg-teal-500/10 border-teal-500/20';
      default: return 'text-orange-500 bg-orange-500/10 border-orange-500/20';
    }
  };

  const accentStyles = getAccentColor(topic.categoryId);

  return (
    <Link 
      to={topic.link}
      onMouseEnter={() => preloadCategory(topic.categoryId)}
      className="group relative bg-surface-container border-none p-8 rounded transition-all duration-300 hover:-translate-y-2 hover:bg-surface-container-high hover:shadow-2xl flex flex-col h-full"
    >
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-8 border ${accentStyles.split(' ').slice(1).join(' ')}`}>
        <Icon className={`w-6 h-6 ${accentStyles.split(' ')[0]}`} />
      </div>
      <h3 className="text-2xl font-headline font-black mb-3 text-on-surface">{topic.title}</h3>
      <p className="text-on-surface-variant text-sm mb-10 leading-relaxed flex-grow">{topic.description}</p>
      

    </Link>
  );
};

export const HomePage = () => {
  const topics = CATEGORY_META.map((meta) => ({
    title: meta.title,
    description: meta.description,
    icon: ICON_MAP[meta.id] ?? Layers,
    link: `/${meta.id}`,
    categoryId: meta.id,
  }));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center px-8 md:px-16 overflow-hidden">
        <div className="absolute inset-0 z-0 vector-field-bg"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-transparent to-accent-teal/5"></div>
        
        <div className="relative z-10 max-w-5xl">
          <div className="inline-block py-1 px-4 mb-8 bg-surface-container-high rounded text-accent-teal font-black text-[10px] uppercase tracking-[0.25em] shadow-sm">
            The Intellectual Curator Series
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-black tracking-tighter text-on-surface leading-[0.95] mb-8">
            Mathematics for <br/>
            <span className="text-accent-teal italic">Machine Intelligence.</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant font-light leading-relaxed max-w-2xl mb-12 text-editorial-justify">
            An editorial deep-dive into the foundational structures that power modern intelligence. Rigorous, visual, and meticulously organized.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6">
            <Link 
              to="/linear-algebra"
              className="bg-on-surface text-background px-10 py-5 rounded font-black uppercase text-xs tracking-widest flex items-center justify-center gap-3 hover:scale-[1.03] transition-transform shadow-xl"
            >
              Explore Curriculum
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button className="bg-surface-container text-on-surface px-10 py-5 rounded font-black uppercase text-xs tracking-widest hover:bg-surface-container-high transition-colors">
              View Visualizations
            </button>
          </div>
        </div>

        {/* Asymmetric Hero Visual Element */}
        <div className="hidden lg:block absolute right-[-5%] top-1/2 -translate-y-1/2 w-2/5 aspect-square">
          <div className="relative w-full h-full p-12">
            <div className="absolute inset-0 bg-accent-teal/10 rounded-full blur-[120px] animate-pulse"></div>
            <img 
              className="w-full h-full object-contain opacity-90 drop-shadow-2xl" 
              alt="Mathematical manifold"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw06AlNb5nXQFxWv9O-Ph6P7No25SY3G3cxd9WTShtLuOF9lmMHHkCVi4SRBI7c9KbT9NjTnZF2EcJhDYhq63Yw-ISwPzhSv-un9IdI-RwAQYV7k8R0M4cIMeV5EgYEwWwep05VhZaXxBJ1PqeWAb_hwXk43WBl6kgu9WbOzfxmnRpPYQ01szJ8hiopEQgGyXOYjF82gOheHTSJImhtDmyE1Sbqz2dO6XqJrhMXleq1FI519fVObexT6vAuH1B8XEC0ZszkJxHgzA5"
            />
          </div>
        </div>
      </section>

      {/* Topics Grid Section */}
      <section className="py-32 px-8 md:px-16 bg-surface-container-low/30">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-headline font-black tracking-tight mb-6 text-on-surface">Browse Topics</h2>
            <p className="text-on-surface-variant text-xl leading-relaxed">Curated paths through the landscape of linear algebra, calculus, and probability theory.</p>
          </div>
          <div className="text-[10px] font-black tracking-[0.3em] uppercase text-accent-teal pb-4 border-b-2 border-accent-teal/20 self-start md:self-auto">
            {topics.length} Core Domains
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {topics.map((topic) => (
            <TopicCard key={topic.title} topic={topic} />
          ))}
        </div>
      </section>

      {/* Editorial Feature Section */}
      <section className="py-40 px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
        <div className="lg:col-span-7">
          <div className="aspect-video bg-surface-container rounded overflow-hidden relative group shadow-2xl">
            <div className="absolute inset-0 bg-accent-teal/5 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
            <img 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 brightness-90 contrast-110" 
              alt="Interactive visualization"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP4wJZsT8W2Vc63QnH4wMXgA-o7dxag1BDDT9SJ7l_u_DpdJQuvS5_06MS64ooaV1whi60NwK9aFiaTubM7syXeA5t28Mba0cL2sUfcHOLEse9dJsPZYRVOgY1BwwT9xXXhMvnUASv2qG5Ez8764h41iIPfXP19TPCpArWZIvGid0KRlsmLPRey-W2RBhNv3S3yfLDOA9Xb3KKkTQBmlv2wi3YuaWWXez9svtTkpMV2McwZFTJjUr_VbSci5T_WlcQ4PapvD83mPTJ"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
               <div className="bg-white/10 backdrop-blur-xl p-6 rounded-full border border-white/20">
                  <PlayCircle className="w-16 h-16 text-white" />
               </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-5 space-y-10">
          <h2 className="text-6xl font-headline font-black tracking-tighter leading-none text-on-surface">Learn through <br/><span className="text-on-surface-variant italic opacity-50 underline decoration-accent-teal/30">interaction.</span></h2>
          <p className="text-xl text-on-surface-variant leading-relaxed font-light text-editorial-justify">
            Mathematics shouldn't be static. Our platform provides live, browser-based visualizations that allow you to manipulate parameters and see the results in real-time.
          </p>
          
          <ul className="space-y-8">
            <li className="flex items-start gap-6">
              <span className="w-6 h-6 rounded-full bg-accent-teal/20 flex items-center justify-center mt-1">
                <div className="w-2 h-2 rounded-full bg-accent-teal"></div>
              </span>
              <div>
                <span className="font-headline font-black text-2xl block text-on-surface">Live Equations</span>
                <p className="text-on-surface-variant leading-relaxed">Alter coefficients and watch the function shape change across multi-dimensional manifolds.</p>
              </div>
            </li>
            <li className="flex items-start gap-6">
              <span className="w-6 h-6 rounded-full bg-accent-purple/20 flex items-center justify-center mt-1">
                <div className="w-2 h-2 rounded-full bg-accent-purple"></div>
              </span>
              <div>
                <span className="font-headline font-black text-2xl block text-on-surface">Vector Field Sandbox</span>
                <p className="text-on-surface-variant leading-relaxed">Simulate flow and gradients in a 3D environment with real-time computational feedback.</p>
              </div>
            </li>
          </ul>
          
          <div className="pt-6">
            <button className="text-xs font-black uppercase tracking-[0.25em] border-b-2 border-accent-teal text-on-surface hover:text-accent-teal transition-colors pb-2">Start Experimenting</button>
          </div>
        </div>
      </section>
    </div>
  );
};
