import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Greg's My Agent</h3>
            <p className="text-gray-400">
              Your trusted real estate and insurance expert in Los Angeles.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/for-buyers" className="hover:text-white">For Buyers</Link></li>
              <li><Link href="/for-sellers" className="hover:text-white">For Sellers</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Home Buying</li>
              <li>Home Selling</li>
              <li>Insurance</li>
              <li>Mortgage</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Los Angeles, CA</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: greg@gregsmyagent.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Greg's My Agent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
