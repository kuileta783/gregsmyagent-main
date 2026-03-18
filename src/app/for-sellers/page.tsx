import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "For Sellers - Greg's My Agent",
  description: "Sell your home for the best price with Greg's expert marketing and negotiation.",
};

export default function ForSellers() {
  return (
    <>
      <Header />
      
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">For Sellers</h1>
          <p className="text-xl text-blue-100">
            Get the Best Value for Your Property
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Selling Process</h2>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Property Valuation</h3>
                <p className="text-gray-600">
                  We provide a comprehensive market analysis to price your home competitively for maximum return.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Strategic Marketing</h3>
                <p className="text-gray-600">
                  Professional photography, virtual tours, and targeted online marketing to attract qualified buyers.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Negotiation</h3>
                <p className="text-gray-600">
                  We negotiate the best terms and price to maximize your profit.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Closing Support</h3>
                <p className="text-gray-600">
                  We guide you through all paperwork and ensure a smooth closing process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Why Sell With Us?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">Professional Marketing</h3>
              <p className="text-gray-600">
                We use cutting-edge marketing techniques to showcase your property.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">Expert Negotiation</h3>
              <p className="text-gray-600">
                Get the best price with our experienced negotiation skills.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">Local Expertise</h3>
              <p className="text-gray-600">
                Know the LA market to price and market your home effectively.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">Full Support</h3>
              <p className="text-gray-600">
                We're with you from listing to closing and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Sell Your Home?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free home valuation today!
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Get Free Valuation
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
