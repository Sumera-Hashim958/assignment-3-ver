import React from 'react'
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FooterPage = () => (
      <footer className="border-4 border-blue-900 border-dotted bg-gradient-to-r from-green-500 via-purple-500 to-green-500 py-4 text-center">
  <p><b>© 2024 Sumera Hashim</b></p>
  <div className="flex justify-center space-x-4">
    <a href="http://www.linkedin.com/in/sumera-hashim-ab444b2a8/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin size={24}className="hover:text-green-900"/>
    </a>
    <a href="http://github.com/Sumera-Hashim958" target="_blank" rel="noopener noreferrer"> 
    <FaGithub size={24} className="hover:text-green-900"/>
    </a>
    <a href="http://facebook.com/sumera.ansari.1/" target="_blank" rel="noopener noreferrer">
    <FaFacebook size={24} className="hover:text-green-900"/>
    </a>
    <a href="http://instagram.com/ahmadansari8700/" target="_blank" rel="noopener noreferrer">
    <FaInstagram size={24} className="hover:text-green-900"/>
    </a>
    <a href="http://twitter.com/@SumeraHashim39796/" target="_blank" rel="noopener noreferrer">
    <FaTwitter size={24} className="hover:text-green-900"/>
    </a>

  </div>
</footer>
  )

export default FooterPage
