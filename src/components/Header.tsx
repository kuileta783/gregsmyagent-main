import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "For Buyers", href: "/for-buyers" },
  { name: "For Sellers", href: "/for-sellers" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-800">Greg's My Agent</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-800 font-medium transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
