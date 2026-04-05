import { Link } from "react-router-dom";
import { ArrowRight, PlayCircle, Layers, FunctionSquare, BarChart3, Dice5 } from "lucide-react";
import { preloadCategory, CATEGORY_META, ICON_MAP } from "@/src/data/topics";

import { CLUSTERS } from "@/src/data/topics";

const DomainCard = ({ cluster, ...props }: { cluster: any, key?: string }) => {
  const isML = cluster.id === 'machine-learning';
  
  return (
    <Link 
      to={`/${cluster.id}`}
      className="group relative bg-surface-container border-none p-12 md:p-16 rounded transition-all duration-500 hover:-translate-y-3 hover:bg-surface-container-high hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] flex flex-col h-full overflow-hidden"
    >
      {/* Decorative Gradient Background */}
      <div className={`absolute top-0 right-0 w-64 h-64 -mr-20 -mt-20 rounded-full blur-[100px] opacity-20 transition-opacity group-hover:opacity-40 ${
        isML ? 'bg-accent-teal' : 'bg-accent-purple'
      }`}></div>

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-10">
           <div className={`w-2 h-10 rounded-full ${isML ? 'bg-accent-teal shadow-[0_0_15px_rgba(45,212,191,0.5)]' : 'bg-accent-purple shadow-[0_0_15px_rgba(168,85,247,0.5)]'}`}></div>
           <span className="text-[10px] font-black uppercase tracking-[0.4em] text-on-surface-variant/60">Curriculum Domain</span>
        </div>
        
        <h2 className={`text-4xl md:text-5xl font-black mb-6 text-on-surface tracking-tighter leading-none ${!isML ? 'font-headline' : ''}`}>
          {cluster.title.split(' ').slice(0, -1).join(' ')} <br/>
          <span className={`${isML ? 'text-accent-teal' : 'text-accent-purple'} italic`}>{cluster.title.split(' ').pop()}</span>
        </h2>
        

        <div className="flex flex-wrap gap-4 mt-auto">
          {cluster.categories.map((catId: string) => {
            const Icon = ICON_MAP[catId] ?? Layers;
            return (
              <div key={catId} className="flex items-center gap-2 px-4 py-2 bg-background/40 backdrop-blur-sm rounded border border-white/5 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">
                 <Icon className="w-3 h-3" />
                 {catId.split('-').join(' ')}
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="mt-16 flex items-center gap-3 text-xs font-black uppercase tracking-widest text-on-surface group-hover:text-accent-teal transition-colors">
        Enter Domain <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
      </div>
    </Link>
  );
};
export const HomePage = () => {
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
          <h1 className="text-4xl md:text-6xl font-headline font-black tracking-tighter text-on-surface leading-[0.95] mb-8">
            Mathematics for <br/>
            <span className="text-accent-teal italic">Machine Intelligence.</span>
          </h1>
          
          <div className="flex flex-col md:flex-row gap-6">
            <a 
              href="#domains"
              className="bg-on-surface text-background px-10 py-5 rounded font-black uppercase text-xs tracking-widest flex items-center justify-center gap-3 hover:scale-[1.03] transition-transform shadow-xl"
            >
              Explore Curriculum
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link 
              to="/visualizations"
              className="bg-surface-container text-on-surface px-10 py-5 rounded font-black uppercase text-xs tracking-widest hover:bg-surface-container-high transition-colors flex items-center justify-center"
            >
              View Visualizations
            </Link>
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

      {/* Domain Portal Grid */}
      <section id="domains" className="py-32 px-8 md:px-16 bg-surface-container-low/30">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-headline font-black tracking-tight mb-6 text-on-surface">Curriculum Domains</h2>
          </div>
          <div className="text-[10px] font-black tracking-[0.3em] uppercase text-accent-teal pb-4 border-b-2 border-accent-teal/20 self-start md:self-auto">
            {CLUSTERS.length} Primary Domains
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {CLUSTERS.map((cluster) => (
            <DomainCard key={cluster.id} cluster={cluster} />
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
          <h2 className="text-5xl font-headline font-black tracking-tighter leading-none text-on-surface">Learn through <br/><span className="text-on-surface-variant italic opacity-50 underline decoration-accent-teal/30">interaction.</span></h2>
          <p className="text-lg text-on-surface-variant leading-relaxed font-light text-editorial-justify">
            Mathematics shouldn't be static. Our platform provides live, browser-based visualizations that allow you to manipulate parameters and see the results in real-time.
          </p>
          
          <ul className="space-y-8">
            <li className="flex items-start gap-6">
              <span className="w-6 h-6 rounded-full bg-accent-teal/20 flex items-center justify-center mt-1">
                <div className="w-2 h-2 rounded-full bg-accent-teal"></div>
              </span>
              <div>
                <span className="font-headline font-black text-xl block text-on-surface">Live Equations</span>
                <p className="text-on-surface-variant text-sm leading-relaxed">Alter coefficients and watch the function shape change across multi-dimensional manifolds.</p>
              </div>
            </li>
            <li className="flex items-start gap-6">
              <span className="w-6 h-6 rounded-full bg-accent-purple/20 flex items-center justify-center mt-1">
                <div className="w-2 h-2 rounded-full bg-accent-purple"></div>
              </span>
              <div>
                <span className="font-headline font-black text-xl block text-on-surface">Vector Field Sandbox</span>
                <p className="text-on-surface-variant text-sm leading-relaxed">Simulate flow and gradients in a 3D environment with real-time computational feedback.</p>
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
