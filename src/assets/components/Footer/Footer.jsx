import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#101727] text-white pt-30 pb-7.5 px-4 md:px-50">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-20">
          
          {/* Logo and Description */}
          <div className="max-w-[320px]">
            <h2 className="text-2xl font-bold mb-4">DigiTools</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium digital tools for creators, professionals, and businesses. 
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Links Grid */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Product */}
            <div>
              <h3 className="font-semibold mb-5">Product</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">Features</li>
                <li className="hover:text-white cursor-pointer transition-colors">Pricing</li>
                <li className="hover:text-white cursor-pointer transition-colors">Templates</li>
                <li className="hover:text-white cursor-pointer transition-colors">Integrations</li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold mb-5">Company</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">About</li>
                <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
                <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
                <li className="hover:text-white cursor-pointer transition-colors">Press</li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold mb-5">Resources</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">Documentation</li>
                <li className="hover:text-white cursor-pointer transition-colors">Help Center</li>
                <li className="hover:text-white cursor-pointer transition-colors">Community</li>
                <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold mb-5">Social Links</h3>
              <div className="flex gap-4">
                {/* Social Icons Placeholder - replace with actual icons */}
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#101727] hover:bg-gray-200 cursor-pointer">
                  <span className="text-xs font-bold">In</span>
                </div>
                {/* X (Twitter) */}
    
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#101727] hover:bg-gray-200 cursor-pointer">
                  <span className="text-xs font-bold">f</span>
                </div>
                {/* Facebook */}
    
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#101727] hover:bg-gray-200 cursor-pointer">
                  <span className="text-xs font-bold">X</span>
                </div>
                {/* Instagram */}
   
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 DigiTools. All rights reserved.</p>
          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;