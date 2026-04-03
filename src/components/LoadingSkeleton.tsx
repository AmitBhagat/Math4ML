import React from 'react';

export const LoadingSkeleton: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="animate-pulse space-y-6">
        <div className="h-4 w-48 bg-gray-200 rounded" />
        <div className="h-12 w-96 bg-gray-200 rounded" />
        <div className="h-6 w-2/3 bg-gray-100 rounded" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 space-y-3">
              <div className="h-5 w-3/4 bg-gray-200 rounded" />
              <div className="h-4 w-full bg-gray-100 rounded" />
              <div className="h-4 w-5/6 bg-gray-100 rounded" />
              <div className="flex gap-2 mt-4">
                <div className="h-6 w-16 bg-gray-100 rounded" />
                <div className="h-6 w-20 bg-gray-100 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
