import React from 'react'

const AboutPage = () => {
  return (
      <section id="about" className="border-4 border-blue-900 border-dotted bg-gradient-to-r from-green-500 via-purple-500 to-green-500 py-4 text-center">
  <h2 className="text-3xl font-bold mb-2">About Me</h2>
  <p className="text-lg max-w-2xl mx-auto"><b>Now I am studying in Certified Cloud Applied Generative AI Engineer (GenEng) by Governor Sindh Kamran Khan</b></p>
  <div className="grid grid-cols-3 gap-x-6 gap-y-4 py-6">
  <div>
  <h3 className="text-left font-black text-2xl">Personal Information:</h3>
  <div className="space-y-2">
  <div className="flex space-x-4"><b>Date of Birth:</b><span> 20-12-1990</span></div>
  <div className="flex space-x-4"><b>Age:</b><span>29 years</span></div>
  <div className="flex space-x-4"><b>Email:</b><span>sumerahashim208@gmail.com</span></div>
  <div className="flex space-x-4"><b>Contact:</b><span>03093671527</span></div>
  <div className="flex space-x-4"><b>City:</b><span>Karachi</span></div>
  </div>
  </div>

  <div>
  <h3 className="text-left font-black text-2xl">Education:</h3>
  <div className="space-y-2">
  <div className="flex space-x-4"><b>Degree:</b><span>Masters in Isl.Studies from University of Karachi</span></div>
  <div className="flex space-x-4"><b>Degree:</b><span>Beachlor in Humanities from Sir Syed College</span></div>
  <div className="flex space-x-4"><b>Certificate:</b><span>Inter in Humanities from Sir Syed College</span></div>
  <div className="flex space-x-4"><b>Certificate:</b><span>SSC in Humanities from SITE Model School</span></div>
  </div>
  </div>

  <div>
    <h2 className="font-black text-2xl space-y-2">Skills</h2>
    <ul className="space-y-2">
      <li>JavaScript</li>
      <li>TypeScript</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>Tailwind CSS</li>
      <li>React.js</li>
      <li>Next.js</li>
    </ul>
  </div>
</div>
  
  
</section>
  )
}

export default AboutPage
