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
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center mb-12">
          <div className="text-4xl mr-4">🎣</div>
          <h2 className="text-4xl font-bold text-blue-900 font-serif">{title}</h2>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {posts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl p-8 shadow-lg border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🎣</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900">{post.title}</h3>
                  <p className="text-gray-600">By {post.author}</p>
                  <p className="text-sm text-blue-600">{post.date}</p>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <div className="text-gray-700 leading-relaxed">
                  <h4 className="text-xl font-semibold mb-3 text-blue-800">Drop-shotting Done Right</h4>
                  <p>
                    If you've ever wondered why your drop-shot rig isn't getting bites, it might be your leader length...
                  </p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-blue-100">
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  Read Full Article →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
