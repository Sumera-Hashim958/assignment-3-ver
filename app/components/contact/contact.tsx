import React from 'react'

    const ContactPage = () => (
  <section id="contact" className="border-4 border-blue-900 border-dotted bg-gradient-to-r from-green-500 via-purple-500 to-green-500 py-16 text-center">
    <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
    <form className="max-w-lg mx-auto">
      <div className="mb-4">
        <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <textarea placeholder="Your Message" className="w-full p-2 border rounded" />
      </div>
      <button className="bg-green-500 hover:bg-purple-900 text-white py-2 px-4 rounded">Send Message</button>
    </form>
  </section>
);


export default ContactPage;
