import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "How to Sell Your Los Angeles Home Fast - Greg's My Agent",
  description: "Learn proven strategies to sell your LA home quickly and for the best price. Tips from local real estate expert Greg.",
};

export default function BlogPost() {
  return (
    <>
      <Header />
      
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/blog" className="text-blue-800 hover:underline mb-4 inline-block">← Back to Blog</Link>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How to Sell Your Los Angeles Home Fast
          </h1>
          
          <div className="flex items-center gap-4 text-gray-600 mb-8">
            <span>March 15, 2026</span>
            <span>•</span>
            <span>6 min read</span>
            <span>•</span>
            <span>Sellers Guide</span>
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Beautiful Los Angeles Home"
            className="w-full h-64 object-cover rounded-lg mb-8"
          />

          <div className="prose max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              Selling a home in Los Angeles requires strategy. With the right approach, you can sell faster and for more money. Here's what works in today's market.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Price It Right From Day One</h2>
            <p className="text-gray-700 mb-4">
              The most important factor is pricing. Overpricing leads to your home sitting on the market, which signals to buyers that something is wrong. Work with an agent to analyze comparable sales and price competitively from the start.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Boost Curb Appeal</h2>
            <p className="text-gray-700 mb-4">
              First impressions matter. In LA, outdoor living is important:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Fresh landscaping and flowers</li>
              <li>Clean driveways and walkways</li>
              <li>Modern house numbers and mailbox</li>
              <li>Exterior paint touch-ups</li>
              <li>Inviting entrance with potted plants</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Stage Professionally</h2>
            <p className="text-gray-700 mb-4">
              Professional staging helps buyers envision themselves in your home. It typically costs 1-2% of your home's value but can increase sale price by 5-15%. Focus on decluttering, rearranging furniture, and adding neutral decor.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Professional Photography</h2>
            <p className="text-gray-700 mb-4">
              95% of buyers start their search online. Professional photos are essential. Consider video tours and drone footage for larger properties. This investment typically pays for itself many times over.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Market Aggressively</h2>
            <p className="text-gray-700 mb-4">
              Your agent should use multiple marketing channels:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>MLS listing with professional description</li>
              <li>Social media marketing</li>
              <li>Email campaigns to agent networks</li>
              <li>Virtual tours and 3D walkthroughs</li>
              <li>Targeted online advertising</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Be Flexible with Showings</h2>
            <p className="text-gray-700 mb-4">
              The more people who see your home, the better. Make your home available for showings, even on short notice. Lockboxes make after-hours showings easy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Consider Pre-Listing Inspections</h2>
            <p className="text-gray-700 mb-4">
              Getting inspections before listing prevents surprises during escrow. Address issues upfront or price accordingly. This builds trust with buyers and smoother transactions.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Ready to Sell Your Home?</h3>
              <p className="text-blue-800 mb-4">
                Get a free home valuation and personalized selling strategy. Let's make your LA home sale a success.
              </p>
              <Link href="/contact" className="inline-block bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-900">
                Get Free Valuation
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
