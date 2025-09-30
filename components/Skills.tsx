import { Code, Database, Globe, Server } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      icon: <Server className="w-8 h-8 text-green-500" />,
      title: "Backend",
      skills: ["Node.js", "Python", "Express", "Flask"]
    },
    {
      icon: <Database className="w-8 h-8 text-yellow-500" />,
      title: "Database",
      skills: ["PostgreSQL", "MongoDB", "Supabase"]
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: "Tools & Platforms",
      skills: ["Git", "Docker", "AWS", "Vercel"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Technologies</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title} 
              className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">{category.icon}</div>
              <h3 className="font-bold text-xl mb-4 text-gray-900 dark:text-white">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="inline-block bg-gray-100 dark:bg-neutral-700 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300 mr-2 mb-2 shadow-sm"
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