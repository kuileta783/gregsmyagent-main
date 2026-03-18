import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Blog - Greg's My Agent",
  description: "Latest real estate news, tips, and insights from Greg's My Agent.",
};

const blogPosts = [
  {
    id: 1,
    title: "Los Angeles Housing Market Update 2026",
    excerpt: "A comprehensive look at the current state of the LA real estate market, including price trends, inventory levels, and predictions for the coming months.",
    date: "March 15, 2026",
    category: "Market Trends",
    slug: "la-housing-market-2026"
  },
  {
    id: 2,
    title: "First-Time Home Buyer's Guide in Los Angeles",
    excerpt: "Everything you need to know about buying your first home in LA, from saving for a down payment to closing the deal.",
    date: "March 10, 2026",
    category: "Buyers Guide",
    slug: "first-time-buyer-guide"
  }
];

export default function Blog() {
  return (
    <>
      <Header />
      
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-blue-100">
            Tips, News, and Insights from Greg
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="h-48 bg-gradient-to-br from-blue-800 to-blue-900 flex items-center justify-center">
                  <span className="text-6xl">📰</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-blue-800 font-medium">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-800 font-semibold hover:underline"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Want Regular Updates?</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for the latest LA real estate news and tips.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800"
            />
            <button
              type="submit"
              className="bg-blue-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-900 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
