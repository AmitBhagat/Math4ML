import { useParams, Link } from "react-router-dom";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { CATEGORIES, ContentBlock } from "@/src/data/topics";
import { CodeSnippet } from "@/src/components/MathComponents";

const ContentSection = ({ section }: { section: ContentBlock; key?: number }) => (
  <div className="mb-10">
    {section.heading && (
      <h3 className="text-xl font-bold text-gray-900 mb-4">{section.heading}</h3>
    )}
    {section.paragraphs.length > 0 && (
      <div className="space-y-3 text-gray-700 text-[17px] leading-relaxed">
        {section.paragraphs.map((p, idx) => {
          // Detect numbered sub-headings like "1. Row and Column Vectors"
          if (/^\d+\.\s/.test(p) && p.length < 80) {
            return <h4 key={idx} className="font-semibold text-gray-900 mt-4 text-lg">{p}</h4>;
          }
          // Detect formula-like short lines (e.g., "v = (x₁, x₂)")
          if (p.startsWith("v =") || p.startsWith("û =") || p.startsWith("Y =")) {
            return (
              <div key={idx} className="font-mono text-blue-700 bg-blue-50/50 px-5 py-3 rounded-lg text-lg border border-blue-100 inline-block">
                {p}
              </div>
            );
          }
          // Detect bullet-like entries (starts with a capitalized word followed by colon)
          if (/^[A-Z][a-zA-Z\s()]+:/.test(p)) {
            const colonIdx = p.indexOf(":");
            return (
              <p key={idx} className="pl-4 border-l-2 border-gray-200">
                <strong className="text-gray-900">{p.slice(0, colonIdx + 1)}</strong>
                {p.slice(colonIdx + 1)}
              </p>
            );
          }
          return <p key={idx}>{p}</p>;
        })}
      </div>
    )}
    {section.code && (
      <div className="mt-4">
        <CodeSnippet code={section.code} staticOutput={section.output} />
      </div>
    )}
  </div>
);

export const ProblemPage = () => {
  const { categoryId, problemId } = useParams<{ categoryId: string; problemId: string }>();
  
  const category = categoryId ? CATEGORIES[categoryId] : null;
  const problem = category?.sections.find(s => s.id === problemId);

  if (!category || !problem) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Problem not found</h1>
        <Link to="/" className="text-blue-600 hover:underline">Return Home</Link>
      </div>
    );
  }

  const hasRichContent = problem.contentSections && problem.contentSections.length > 0;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">


      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8 font-medium">
        <Link to="/" className="hover:text-gray-900 hover:underline transition-colors">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <Link to={`/${categoryId}`} className="hover:text-gray-900 hover:underline transition-colors">{category.title}</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-900">{problem.title}</span>
      </div>

      <div className="max-w-4xl">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          {problem.title}
        </h1>
        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          {problem.description}
        </p>

        {/* Rich Content Sections (new GfG-style) */}
        {hasRichContent ? (
          <div className="mb-12">
            {problem.contentSections!.map((section, idx) => (
              <ContentSection key={idx} section={section} />
            ))}
          </div>
        ) : (
          /* Fallback: Legacy flat content for topics without contentSections */
          <>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">What is {problem.title}?</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                {problem.details.map((detail, idx) => (
                  <p key={idx}>{detail}</p>
                ))}
              </div>
              {problem.formula && (
                <div className="mt-6 font-mono text-blue-700 bg-blue-50/50 px-6 py-4 rounded-xl inline-block text-xl border border-blue-100 shadow-sm">
                  {problem.formula}
                </div>
              )}
            </div>

            {/* Code Snippet */}
            {problem.code && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Code Example</h2>
                <div className="mt-4">
                  <CodeSnippet code={problem.code} />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
