interface DropShotPost {
  title: string;
  author: string;
  date: string;
  markdown: string;
}

interface DropShotColumnProps {
  title: string;
  posts: DropShotPost[];
}

export default function DropShotColumn({ title, posts }: DropShotColumnProps) {
  const hasContent = posts && posts.length > 0;

  return (
    <section className="bg-white rounded-lg shadow-xl border-2 border-slate-300 p-4 md:p-8 flex flex-col md:h-full">
      <div className="flex items-center mb-6 md:mb-8 border-b-2 border-slate-800 pb-4">
        <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-800 rounded-md flex items-center justify-center mr-4 shadow-lg flex-shrink-0">
          <span className="text-2xl md:text-3xl">📝</span>
        </div>
        <div className="min-w-0">
          <h2 className="text-xl md:text-3xl font-black text-slate-900 font-heading tracking-tight uppercase">{title}</h2>
          <p className="text-amber-600 text-sm md:text-base font-bold tracking-wide uppercase">Expert Tips & Techniques</p>
        </div>
      </div>
      
      {!hasContent ? (
        <div className="flex-1 flex items-center justify-center py-16">
          <div className="text-center">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No Articles Yet</h3>
            <p className="text-slate-600 font-medium">Check back soon for fishing tips and techniques</p>
          </div>
        </div>
      ) : (
      <div className="flex flex-col gap-4 md:flex-1 md:flex">
        {posts.map((post, index) => (
          <article key={index} className="bg-gray-50 rounded-lg p-5 md:p-7 shadow-lg border-2 border-slate-300 hover:shadow-2xl hover:border-amber-600 transition-all duration-300 md:flex-1">
            <div className="flex items-start gap-3 mb-3 md:mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-500 rounded flex items-center justify-center shadow-lg flex-shrink-0 border-2 border-amber-600">
                <span className="text-white text-base md:text-lg">🎣</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base md:text-xl font-black text-slate-900 mb-1 break-words tracking-tight">{post.title}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <p className="text-slate-700 text-xs md:text-sm font-bold uppercase tracking-wide">By {post.author}</p>
                  <span className="hidden sm:inline text-slate-400">•</span>
                  <p className="text-xs md:text-sm text-amber-600 font-semibold">{post.date}</p>
                </div>
              </div>
            </div>
            
            <div className="mb-4 md:mb-5 md:flex-1">
              <div className="text-slate-700 leading-relaxed">
                <p className="text-xs md:text-base text-slate-700 md:line-clamp-8 font-medium">
                  {post.markdown.replace(/#{1,6}\s/g, '').replace(/\n/g, ' ')}
                </p>
              </div>
            </div>
            
            <div className="pt-3 md:pt-4 border-t-2 border-slate-300">
              <button className="text-slate-800 hover:text-amber-600 font-bold flex items-center text-xs md:text-sm transition-colors duration-300 uppercase tracking-wide border-b-2 border-transparent hover:border-amber-600">
                Read Full Article
                <svg className="ml-1 h-3 w-3 md:h-4 md:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </article>
        ))}
      </div>
      )}
    </section>
  );
}
