import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "10 Essential Tips for First-Time Home Buyers in Los Angeles - Greg's My Agent",
  description: "Complete guide for first-time home buyers in LA. Learn about down payments, neighborhoods, mortgages, and more from local expert Greg.",
};

export default function BlogPost() {
  return (
    <>
      <Header />
      
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/blog" className="text-blue-800 hover:underline mb-4 inline-block">← Back to Blog</Link>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            10 Essential Tips for First-Time Home Buyers in Los Angeles
          </h1>
          
          <div className="flex items-center gap-4 text-gray-600 mb-8">
            <span>March 18, 2026</span>
            <span>•</span>
            <span>8 min read</span>
            <span>•</span>
            <span>Buyers Guide</span>
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Los Angeles Home"
            className="w-full h-64 object-cover rounded-lg mb-8"
          />

          <div className="prose max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              Buying your first home in Los Angeles is both exciting and challenging. As someone who's helped hundreds of first-time buyers, I'm here to share what you need to know to make the best decision.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Know Your Budget</h2>
            <p className="text-gray-700 mb-4">
              Before you start house hunting, get pre-approved for a mortgage. In LA, home prices vary dramatically - from $600k in some areas to $3M+ in Beverly Hills. Know what you can realistically afford.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Los Angeles Neighborhoods Matter</h2>
            <p className="text-gray-700 mb-4">
              LA is a collection of unique neighborhoods. Consider:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Westside</strong> - Santa Monica, Brentwood, Culver City - Great schools, beach close</li>
              <li><strong>San Fernando Valley</strong> - More affordable, family-friendly</li>
              <li><strong>Downtown LA</strong> - Urban living, condos, investment potential</li>
              <li><strong>South Bay</strong> - Beach cities, more reasonable prices</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Down Payment Programs</h2>
            <p className="text-gray-700 mb-4">
              California offers several down payment assistance programs:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>CalHFA</strong> - First-time buyer loans with low rates</li>
              <li><strong>MyHome Assistance</strong> - Up to $15,000 in assistance</li>
              <li><strong>Federal FHA loans</strong> - As little as 3.5% down</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Competition is Fierce</h2>
            <p className="text-gray-700 mb-4">
              In popular LA neighborhoods, homes often receive multiple offers within days. Be prepared to act quickly and make strong offers. Having your financing pre-approved gives you an edge.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Inspection Contingencies</h2>
            <p className="text-gray-700 mb-4">
              Always include inspection contingencies. In older LA homes, hidden issues are common. A thorough inspection can save you thousands in repairs.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Consider Future Value</h2>
            <p className="text-gray-700 mb-4">
              Look for neighborhoods with good schools, upcoming development, and transportation access. These factors typically drive appreciation.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Don't Forget Closing Costs</h2>
            <p className="text-gray-700 mb-4">
              Budget for 2-5% of the purchase price in closing costs. In LA, with median home prices over $1M, that's $20,000-$50,000 in addition to your down payment.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Get a Great Real Estate Agent</h2>
            <p className="text-gray-700 mb-4">
              A local expert agent knows the market, can identify good deals, and negotiate effectively on your behalf. This is especially crucial in LA's competitive market.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Understand Property Taxes</h2>
            <p className="text-gray-700 mb-4">
              California Prop 13 limits property tax increases. New homeowners pay based on purchase price. Research tax rates in different areas as they vary significantly.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Be Patient</h2>
            <p className="text-gray-700 mb-4">
              Finding the right home takes time. Don't settle for less than what you need. The perfect home is out there - it just might take a few months to find it.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Ready to Start Your Home Search?</h3>
              <p className="text-blue-800 mb-4">
                Contact Greg for a free consultation. I'll help you navigate the LA market and find your perfect home.
              </p>
              <Link href="/contact" className="inline-block bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-900">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
