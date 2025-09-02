import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      {/* Top bar with contact info */}
      <div className="bg-gradient-to-r from-brand-blue-light to-brand-blue-dark text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>888-305-9390</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>support@bluesq.pro</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Free Credit Consultation Available</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F73cef5d45d4148daa57a98053c90e59f%2Fe10a085771f24e478a2d38f0d8c608b0?format=webp&width=800"
                alt="BSQ Financials"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 group-hover:text-brand-blue">
                BSQ Financials
              </h1>
              <p className="text-xs text-gray-600">Building Made Smart</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-brand-blue font-medium"
            >
              Home
            </a>
            <a
              href="/credit-repair"
              className="text-gray-700 hover:text-brand-blue font-medium"
            >
              Credit Repair
            </a>
            <a
              href="/cfo-services"
              className="text-gray-700 hover:text-brand-blue font-medium"
            >
              CFO Services
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-brand-blue font-medium"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-brand-blue font-medium"
            >
              Contact
            </a>
            <Button
              className="bg-gradient-to-r from-brand-blue-light to-brand-blue-dark hover:from-brand-blue-dark hover:to-brand-blue"
              asChild
            >
              <a
                href="https://calendly.com/brandonswealth/15min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Consultation
              </a>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a
                href="/"
                className="text-gray-700 hover:text-brand-blue font-medium"
              >
                Home
              </a>
              <a
                href="/credit-repair"
                className="text-gray-700 hover:text-brand-blue font-medium"
              >
                Credit Repair
              </a>
              <a
                href="/cfo-services"
                className="text-gray-700 hover:text-brand-blue font-medium"
              >
                CFO Services
              </a>
              <a
                href="/about"
                className="text-gray-700 hover:text-brand-blue font-medium"
              >
                About
              </a>
              <a
                href="/contact"
                className="text-gray-700 hover:text-brand-blue font-medium"
              >
                Contact
              </a>
              <Button
                className="bg-gradient-to-r from-brand-blue-light to-brand-blue-dark hover:from-brand-blue-dark hover:to-brand-blue w-fit"
                asChild
              >
                <a
                  href="https://calendly.com/brandonswealth/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Consultation
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
