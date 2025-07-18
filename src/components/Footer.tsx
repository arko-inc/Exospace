"use client";
import { Rocket, Satellite, Telescope, Globe, Shield, Mail, Phone, MapPin, Twitter, Youtube, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-gray-300 border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        
        {/* Agency Information */}
        <div className="col-span-2 lg:col-span-1">
          <div className="flex items-center mb-4">
            <span className="text-3xl font-thin text-white">EXOSPACE</span>
          </div>
          <p className="mb-4 text-sm">
            Pioneering humanity's journey into the cosmos through innovation, exploration, and scientific discovery.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Missions Section */}
        <div>
          <h3 className="text-white font-semibold mb-4 flex items-center">
            <Satellite className="h-5 w-5 mr-2 text-white" />
            Missions
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white hover:underline">Artemis Program</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Mars Exploration</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Europa Clipper</a></li>
            <li><a href="#" className="hover:text-white hover:underline">James Webb Telescope</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Venus Atmospheric Probe</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Lunar Gateway</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Asteroid Redirect</a></li>
          </ul>
        </div>

        {/* Technologies Section */}
        <div>
          <h3 className="text-white font-semibold mb-4 flex items-center">
            <Telescope className="h-5 w-5 mr-2 text-white" />
            Technologies
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white hover:underline">Propulsion Systems</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Life Support</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Space Habitats</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Robotics</a></li>
            <li><a href="#" className="hover:text-white hover:underline">AI in Space</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Materials Science</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Quantum Communication</a></li>
          </ul>
        </div>

        {/* Research Section */}
        <div>
          <h3 className="text-white font-semibold mb-4 flex items-center">
            <Globe className="h-5 w-5 mr-2 text-white" />
            Research
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white hover:underline">Astrophysics</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Planetary Science</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Heliophysics</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Exobiology</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Climate Studies</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Space Medicine</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Earth Observation</a></li>
          </ul>
        </div>

        {/* About & Legal */}
        <div>
          <h3 className="text-white font-semibold mb-4 flex items-center">
            <Shield className="h-5 w-5 mr-2 text-white" />
            About
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white hover:underline">API</a></li>
            <li><a href="#" className="hover:text-white hover:underline">History</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Leadership</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Careers</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Internships</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Procurement</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Terms of Use</a></li>
          </ul>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-black/50 py-8">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start">
            <Mail className="h-5 w-5 mr-3 text-white mt-1" />
            <div>
              <h4 className="text-white font-medium mb-1">Contact Us</h4>
              <p className="text-sm">info@cosmicexploration.space</p>
              <p className="text-sm">media@cosmicexploration.space</p>
            </div>
          </div>
          <div className="flex items-start">
            <Phone className="h-5 w-5 mr-3 text-white mt-1" />
            <div>
              <h4 className="text-white font-medium mb-1">Phone</h4>
              <p className="text-sm">+1 (800) 555-1969 (Public Inquiries)</p>
              <p className="text-sm">+1 (800) 555-1971 (Media)</p>
            </div>
          </div>
          <div className="flex items-start">
            <MapPin className="h-5 w-5 mr-3 text-white mt-1" />
            <div>
              <h4 className="text-white font-medium mb-1">Headquarters</h4>
              <p className="text-sm">300 Cosmic Exploration Way</p>
              <p className="text-sm">Houston, TX 77058, United States</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/70 py-4 border-t border-gray-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <div className="mb-2 md:mb-0">
            © {new Date().getFullYear()} Cosmic Exploration Agency. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">Accessibility</a>
            <a href="#" className="hover:text-gray-300">FOIA</a>
            <a href="#" className="hover:text-gray-300">No Fear Act</a>
            <a href="#" className="hover:text-gray-300">Office of Inspector General</a>
            <a href="#" className="hover:text-gray-300">Budget & Annual Reports</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;