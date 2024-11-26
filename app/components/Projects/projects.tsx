import React from 'react'
import ProjectCard from "../ProjectCard/projectcard";

const Project = () => {
  const projectData = [
    {
      title: "Weather-Widget",
      description: "I built a sleek and responsive weather widget using Next.js. The widget fetches real-time weather data and displays it in a user-friendly interface. It dynamically updates the temperature, weather conditions, and location details, providing an intuitive experience for users. The widget is fully styled using Tailwind CSS to ensure responsiveness and a clean, modern look across devices.",
      link: "https://github.com/Sumera-Hashim958/Home-Page.git"
    },
    {
      title: "Count-Down-Timer",
      description: "This project is a countdown timer application developed with Next.js and styled using Tailwind CSS. It allows users to set a countdown duration, visually displaying the remaining time with a modern and responsive design. The timer updates in real-time, ensuring users always have an accurate view of the countdown. Leveraging Next.js’s powerful features, this project demonstrates effective state management and the use of React components to create an interactive and user-friendly experience..",
      link: "https://github.com/Sumera-Hashim958/CountDown-Timer.git"
    },
    {
      title: "Static-Resume-Builder",
      description: "A Static Resume Builder using HTML, CSS, and TypeScript is a web-based tool that allows users to generate a resume directly in the browser. The interface typically includes predefined sections (like personal information, education, work experience, and skills) that the user can fill out via input fields. Once completed, the data is rendered on the page as a static resume using HTML and CSS for layout and styling. TypeScript is used to handle form validation, manage user inputs, and dynamically update the resume preview based on the provided data.",
      link: "https://github.com/Sumera-Hashim958/Static-Resume-New.git"
    }
  ];

  return (
    <section id="projects" className="border-4 border-blue-900 border-dotted bg-gradient-to-r from-green-500 via-purple-500 to-green-500 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Our Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <ProjectCard 
            key={index} 
            title={project.title} 
            description={project.description} 
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Project;