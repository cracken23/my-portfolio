import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend",
      skills: ["Node.js", "Python", "Express", "Flask"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database",
      skills: ["PostgreSQL", "MongoDB", "Supabase"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Tools & Platforms",
      skills: ["Git", "Docker", "AWS", "Vercel"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title} 
              className="bg-gray-700 p-6 rounded-xl hover:shadow-lg transition-shadow animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-blue-500 mb-4">{category.icon}</div>
              <h3 className="font-bold text-xl mb-4 text-white">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="inline-block bg-white px-3 py-1 rounded-full text-sm text-gray-700 mr-2 mb-2 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;