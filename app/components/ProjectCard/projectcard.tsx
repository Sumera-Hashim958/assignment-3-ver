interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
  }
  
  const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link }) => {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <div className="bg-white p-6">
          <h3 className="text-xl font-bold mb-3 text-center">{title}</h3>
          <p className="text-black mb-4 text-center">{description}</p>
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex justify-center bg-purple-500 text-white py-2 px-4 rounded hover:bg-green-500 transition-colors duration-300"
          >
            View Project
          </a>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  