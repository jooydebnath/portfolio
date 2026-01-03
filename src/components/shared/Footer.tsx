import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { FaArrowUp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" border-t border-common-border py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left: Name & Copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-header mb-2">Joy Debnath</h3>
            <p className="text-title text-lg">
              © {new Date().getFullYear()} All rights reserved.
            </p>
            <p className="text-sm mt-1 text-gray-400">
              Built with using Next.js & Tailwind CSS
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-title hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-title hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-title hover:text-white transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-title hover:text-white transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Right: Back to Top (Optional) */}
          <div className="text-center md:text-right">
            <a
              href="#home"
              className="text-paragraph hover:text-white text-sm transition-colors duration-300"
            >
              <FaArrowUp size={30} className=" animate-bounce text-fuchsia-500"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;