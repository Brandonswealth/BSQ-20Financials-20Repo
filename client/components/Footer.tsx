import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F73cef5d45d4148daa57a98053c90e59f%2Fe10a085771f24e478a2d38f0d8c608b0?format=webp&width=800"
                  alt="BSQ Financials"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">BSQ Financials</h3>
                <p className="text-sm text-gray-400">Building Made Smart</p>
              </div>
            </a>
            <p className="text-gray-300 mb-4 max-w-md">
              Your trusted partner for credit repair and comprehensive CFO
              services. We help individuals and businesses achieve financial
              success through expert guidance and personalized solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/BSQ-Financial-services/61579583324094/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-400 hover:text-brand-blue" />
              </a>
              <a
                href="https://x.com/BSQfinancials"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter/X"
              >
                <Twitter className="w-5 h-5 text-gray-400 hover:text-brand-blue" />
              </a>
              <a
                href="https://www.linkedin.com/company/bsq-financials/about/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-brand-blue" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/credit-repair" className="hover:text-brand-blue">
                  Credit Repair
                </a>
              </li>
              <li>
                <a href="/cfo-services" className="hover:text-brand-blue">
                  CFO Services
                </a>
              </li>
              <li>
                <a href="/financial-planning" className="hover:text-brand-blue">
                  Financial Planning
                </a>
              </li>
              <li>
                <a href="/debt-consolidation" className="hover:text-brand-blue">
                  Debt Consolidation
                </a>
              </li>
              <li>
                <a
                  href="/business-consulting"
                  className="hover:text-brand-blue"
                >
                  Business Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>888-305-9390</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>support@bluesq.pro</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1" />
                <span>
                  1050 E Flamingo Rd, S107
                  <br />
                  Las Vegas, Nevada 89119
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 BSQ Financials. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
            <a href="/privacy" className="hover:text-brand-blue">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-brand-blue">
              Terms of Service
            </a>
            <a href="/disclaimer" className="hover:text-brand-blue">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
