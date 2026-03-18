import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact - Greg's My Agent",
  description: "Contact Greg for all your real estate and insurance needs in Los Angeles.",
};

export default function Contact() {
  return (
    <>
      <Header />
      
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100">
            Get in Touch for a Free Consultation
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Ready to buy, sell, or need insurance? Contact Greg today for a free consultation.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    📍
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-600">Los Angeles, CA</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    📞
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    ✉️
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">greg@gregsmyagent.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-6">Send a Message</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">I'm interested in:</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent">
                      <option>Buying a home</option>
                      <option>Selling a home</option>
                      <option>Insurance</option>
                      <option>Mortgage</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                      placeholder="Tell us about your needs..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-800 text-white py-3 rounded-lg font-semibold hover:bg-blue-900 transition"
                  >
                    Send Message
                  </button>
                </div>
                
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Or email us directly at greg@gregsmyagent.com
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
