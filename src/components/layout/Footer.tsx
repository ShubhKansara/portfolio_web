
import { ArrowUp, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: <Mail size={18} />, href: "mailto:abc@gmail.com" },
    { icon: <Phone size={18} />, href: "tel:+915959595959" },
    { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/abc" },
    { icon: <Github size={18} />, href: "#" },
    { icon: <MapPin size={18} />, href: "https://maps.google.com/?q=Mansa,Gujarat,India" },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 pb-8">
          <div>
            <a href="#home" className="text-3xl font-bold text-orange-500 mb-4 block">
              SK<span className="text-gray-300">.dev</span>
            </a>
            <p className="text-gray-400 mb-6">
              Full Stack Web Developer specialized in building exceptional digital
              experiences that are responsive, accessible, and performant.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-orange-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-400">
              Feel free to reach out for collaborations or just a friendly chat!
            </p>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Shubh Kansara. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
