import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Your Trusted Real Estate & Insurance Expert in Los Angeles
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Greg is here to guide you through buying, selling, and protecting your biggest investments. 
                Experience personalized service with a local expert.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition text-center"
                >
                  Get a Free Consultation
                </Link>
                <Link
                  href="/for-buyers"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition text-center"
                >
                  For Buyers
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-6xl">🏠</span>
                  </div>
                  <p className="text-2xl font-bold mb-2">Los Angeles</p>
                  <p className="text-blue-200">Real Estate & Insurance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Comprehensive real estate and insurance solutions tailored to your needs
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">🔑</span>
              </div>
              <h3 className="text-xl font-bold mb-4">For Buyers</h3>
              <p className="text-gray-600 mb-6">
                Find your dream home in Los Angeles. Expert guidance through every step of the buying process.
              </p>
              <Link href="/for-buyers" className="text-blue-800 font-semibold hover:underline">
                Learn more →
              </Link>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">🏷️</span>
              </div>
              <h3 className="text-xl font-bold mb-4">For Sellers</h3>
              <p className="text-gray-600 mb-6">
                Get the best value for your property. Professional marketing and negotiation strategies.
              </p>
              <Link href="/for-sellers" className="text-blue-800 font-semibold hover:underline">
                Learn more →
              </Link>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Insurance</h3>
              <p className="text-gray-600 mb-6">
                Protect your investment with comprehensive home and property insurance coverage.
              </p>
              <Link href="/contact" className="text-blue-800 font-semibold hover:underline">
                Get a quote →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose Greg's My Agent
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="font-bold mb-2">Local Expert</h3>
              <p className="text-gray-600">Deep knowledge of LA neighborhoods</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="font-bold mb-2">Personal Service</h3>
              <p className="text-gray-600">One-on-one attention</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="font-bold mb-2">Best Value</h3>
              <p className="text-gray-600">Competitive rates</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="font-bold mb-2">Proven Track Record</h3>
              <p className="text-gray-600">Successful transactions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact Greg today for a free consultation and let's find your perfect solution.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Contact Greg Now
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
