
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, shopping cart, and order management.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=fill",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://www.google.com",
      live: ""
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application built with React and Firebase. Real-time updates, team collaboration, and progress tracking.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      tech: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
      github: "#",
      live: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics using modern APIs.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      tech: ["Vue.js", "TypeScript", "Chart.js", "OpenWeather API"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in hover-scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="object-none overflow-hidden scale-105 relative h-48 w-full bottom-5 aspect-ratio-16/9">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-fill group-hover:scale-107 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 bg-opacity-0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1" onClick={() => window.open(project.github, '_blank')}>
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button size="sm" className="flex-1" onClick={() => window.open(project.live, '_blank')}>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;