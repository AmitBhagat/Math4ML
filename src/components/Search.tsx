import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search as SearchIcon, Command, X } from 'lucide-react';
import { SEARCH_INDEX, SearchableTopic } from '../data/search-index';

export const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchableTopic[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter results
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const filtered = SEARCH_INDEX.filter(topic => 
      topic.title.toLowerCase().includes(lowerQuery) || 
      topic.keywords.some(kw => kw.toLowerCase().includes(lowerQuery)) ||
      topic.category.toLowerCase().includes(lowerQuery)
    ).slice(0, 8); // Limit to 8 results

    setResults(filtered);
    setSelectedIndex(0);
  }, [query]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSelect = (topic: SearchableTopic) => {
    navigate(topic.path);
    setIsOpen(false);
    setQuery('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      handleSelect(results[selectedIndex]);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-3 px-3 py-2 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 dark:text-slate-400 transition-all group w-48 md:w-64"
      >
        <SearchIcon size={16} className="group-hover:scale-110 transition-transform" />
        <span className="text-xs font-semibold uppercase tracking-wider flex-1 text-left">Search Topics...</span>
        <div className="flex items-center gap-1 opacity-50 px-1.5 py-0.5 border border-slate-300 dark:border-slate-700 rounded text-[10px] font-bold">
          <Command size={10} />
          <span>K</span>
        </div>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4">
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          
          <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center gap-4 p-4 border-b border-slate-100 dark:border-slate-800">
              <SearchIcon size={20} className="text-slate-400" />
              <input 
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search by topic, keyword, or category..."
                className="flex-1 bg-transparent border-none outline-none text-slate-100 placeholder:text-slate-500 text-lg"
              />
              <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500 transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-2">
              {results.length > 0 ? (
                <div className="space-y-1">
                  {results.map((topic, idx) => (
                    <button
                      key={topic.id}
                      onClick={() => handleSelect(topic)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl transition-all text-left ${idx === selectedIndex ? 'bg-accent text-white shadow-lg shadow-accent/20 scale-[1.02]' : 'hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                    >
                      <div className="flex flex-col">
                        <span className={`text-sm font-bold ${idx === selectedIndex ? 'text-white' : 'text-slate-200'}`}>{topic.title}</span>
                        <span className={`text-[10px] uppercase tracking-widest font-black opacity-60 ${idx === selectedIndex ? 'text-white' : 'text-accent'}`}>{topic.category}</span>
                      </div>
                      <div className="flex gap-1">
                        {topic.keywords.slice(0, 3).map(kw => (
                          <span key={kw} className={`text-[9px] px-1.5 py-0.5 rounded border ${idx === selectedIndex ? 'border-white/30 text-white/80' : 'border-slate-200 dark:border-slate-800 text-slate-500'}`}>
                            {kw}
                          </span>
                        ))}
                      </div>
                    </button>
                  ))}
                </div>
              ) : query ? (
                <div className="p-8 text-center text-slate-500 italic">No topics found for "{query}"</div>
              ) : (
                <div className="p-8 text-center text-slate-500">
                  <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-50">Suggestions</div>
                  <div className="flex flex-wrap justify-center gap-2">
                    {['SVD', 'Entropy', 'Gradient', 'MLE', 'Probability'].map(term => (
                      <button key={term} onClick={() => setQuery(term)} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-[10px] font-bold hover:border-accent transition-colors">
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="p-3 bg-slate-50 dark:bg-slate-950/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-slate-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">↵</kbd> Select</span>
                <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">↑↓</kbd> Navigate</span>
              </div>
              <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">esc</kbd> Close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
