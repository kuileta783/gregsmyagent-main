import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About - Greg's My Agent",
  description: "Learn about Greg, your trusted real estate and insurance expert in Los Angeles.",
};

export default function About() {
  return (
    <>
      <Header />
      
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Greg</h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="w-full h-96 bg-gray-200 rounded-xl flex items-center justify-center">
                <span className="text-8xl">👨‍💼</span>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Your Trusted Partner in Real Estate</h2>
              <p className="text-gray-600 mb-6">
                Hello! I'm Greg, and I've been helping clients navigate the Los Angeles real estate market for over 15 years. 
                My mission is to provide personalized, professional service to every client.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you're buying your first home, selling a property, or looking for insurance coverage, 
                I'm here to guide you through every step of the process.
              </p>
              
              <h3 className="text-xl font-bold mb-3">Expertise</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>✓ Residential Buying & Selling</li>
                <li>✓ Investment Properties</li>
                <li>✓ Home Insurance</li>
                <li>✓ Mortgage Guidance</li>
              </ul>
              
              <h3 className="text-xl font-bold mb-3">Local Knowledge</h3>
              <p className="text-gray-600">
                As a Los Angeles native, I know the local market inside and out. 
                From Beverly Hills to Santa Monica, from Pasadena to Long Beach — 
                I can help you find the perfect neighborhood for your lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
