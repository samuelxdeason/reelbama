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
  return (
    <section className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 md:p-8 flex flex-col md:h-full">
      <div className="flex items-center mb-6 md:mb-8">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blog-accent to-purple-800 rounded-xl flex items-center justify-center mr-3 shadow-lg flex-shrink-0">
          <span className="text-xl md:text-2xl">📝</span>
        </div>
        <div className="min-w-0">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 font-heading">{title}</h2>
          <p className="text-gray-600 text-xs md:text-sm">Expert tips and techniques from our fishing columnists</p>
        </div>
      </div>
      
      <div className="flex flex-col gap-2 md:flex-1 md:flex">
        {posts.map((post, index) => (
          <article key={index} className="bg-gray-50 rounded-xl p-5 md:p-7 shadow-lg border border-gray-200 hover:shadow-xl hover:border-blog-accent transition-all duration-300 md:flex-1">
            <div className="flex items-start gap-3 mb-3 md:mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blog-accent to-purple-800 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                <span className="text-white text-base md:text-lg">🎣</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base md:text-xl font-bold text-gray-900 mb-1 break-words">{post.title}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <p className="text-gray-600 text-xs md:text-sm">By {post.author}</p>
                  <span className="hidden sm:inline text-gray-400">•</span>
                  <p className="text-xs text-blog-accent font-medium">{post.date}</p>
                </div>
              </div>
            </div>
            
            <div className="mb-4 md:mb-5 md:flex-1">
              <div className="text-gray-700 leading-relaxed">
                <p className="text-xs md:text-base text-gray-600 md:line-clamp-8">
                  {post.markdown.replace(/#{1,6}\s/g, '').replace(/\n/g, ' ')}
                </p>
              </div>
            </div>
            
            <div className="pt-3 md:pt-4 border-t border-gray-200">
              <button className="text-blog-accent hover:text-purple-900 font-medium flex items-center text-xs md:text-sm transition-colors duration-300">
                Read Full Article
                <svg className="ml-1 h-3 w-3 md:h-4 md:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
