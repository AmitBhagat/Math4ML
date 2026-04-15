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
        className="flex items-center gap-2 px-3 py-1.5 bg-secondary/50 border border-border rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-all group w-40 md:w-48"
      >
        <SearchIcon size={14} />
        <span className="text-xs font-medium flex-1 text-left truncate">Search...</span>
        <div className="flex items-center gap-0.5 opacity-50 px-1 py-0.5 border border-border rounded text-[10px] font-medium">
          <Command size={10} />
          <span>K</span>
        </div>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          
          <div className="relative w-full max-w-2xl bg-background border border-border rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center gap-4 p-4 border-b border-border">
              <SearchIcon size={18} className="text-muted-foreground" />
              <input 
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search by topic, keyword, or category..."
                className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground text-base"
              />
              <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-secondary rounded-lg text-muted-foreground transition-colors">
                <X size={18} />
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
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-all text-left ${idx === selectedIndex ? 'bg-accent text-accent-foreground shadow-md' : 'hover:bg-secondary'}`}
                    >
                      <div className="flex flex-col gap-0.5">
                        <span className={`text-sm font-semibold ${idx === selectedIndex ? 'text-accent-foreground' : 'text-foreground'}`}>{topic.title}</span>
                        <span className={`text-[10px] uppercase tracking-wide font-medium opacity-70 ${idx === selectedIndex ? 'text-accent-foreground' : 'text-muted-foreground'}`}>{topic.category}</span>
                      </div>
                      <div className="flex gap-1 flex-wrap justify-end max-w-[40%]">
                        {topic.keywords.slice(0, 2).map(kw => (
                          <span key={kw} className={`text-[9px] px-1.5 py-0.5 rounded border ${idx === selectedIndex ? 'border-accent-foreground/30 text-accent-foreground/80' : 'border-border text-muted-foreground'}`}>
                            {kw}
                          </span>
                        ))}
                      </div>
                    </button>
                  ))}
                </div>
              ) : query ? (
                <div className="p-8 text-center text-muted-foreground text-sm">No topics found for "{query}"</div>
              ) : (
                <div className="p-6 text-center text-muted-foreground">
                  <div className="text-xs font-medium uppercase tracking-wider mb-3 opacity-60">Suggestions</div>
                  <div className="flex flex-wrap justify-center gap-2">
                    {['SVD', 'Entropy', 'Gradient', 'MLE', 'Probability'].map(term => (
                      <button key={term} onClick={() => setQuery(term)} className="px-3 py-1.5 bg-secondary border border-border rounded-md text-xs font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="p-3 bg-secondary/50 border-t border-border flex items-center justify-between text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded bg-background border border-border">↵</kbd> Select</span>
                <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded bg-background border border-border">↑↓</kbd> Navigate</span>
              </div>
              <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded bg-background border border-border">esc</kbd> Close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
