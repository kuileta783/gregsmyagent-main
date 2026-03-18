import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "For Buyers - Greg's My Agent",
  description: "Find your dream home in Los Angeles with Greg's expert guidance.",
};

export default function ForBuyers() {
  return (
    <>
      <Header />
      
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">For Buyers</h1>
          <p className="text-xl text-blue-100">
            Find Your Dream Home in Los Angeles
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">How We Help Buyers</h2>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Understanding Your Needs</h3>
                <p className="text-gray-600">
                  We start by understanding your lifestyle, budget, and preferences to find the perfect home for you.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Market Research</h3>
                <p className="text-gray-600">
                  Our deep knowledge of Los Angeles neighborhoods helps us find properties that match your criteria.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Negotiation & Closing</h3>
                <p className="text-gray-600">
                  We negotiate the best terms and guide you through the closing process smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Los Angeles Neighborhoods We Serve</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "Beverly Hills",
              "Santa Monica",
              "Pasadena",
              "Long Beach",
              "Hollywood",
              "West Hollywood",
              "Malibu",
              "Burbank",
              "Glendale"
            ].map((area) => (
              <div key={area} className="bg-white p-4 rounded-lg shadow">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Los Angeles Market Trends</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-gray-600 mb-4">
              The Los Angeles real estate market continues to be competitive. As of 2026, key trends include:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li>📈 Median home prices remain steady</li>
              <li>🏠 Inventory is gradually increasing</li>
              <li>💼 Interest rates are favorable for buyers</li>
              <li>🌴 Coastal neighborhoods are in high demand</li>
            </ul>
            <p className="mt-4 text-gray-500 text-sm">
              * Market data is for illustration. Contact Greg for current statistics.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's start your home buying journey today!
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Contact Greg
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
