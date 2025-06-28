
import { Award, Coffee, Code2, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Code2 className="w-6 h-6" />, value: "3+", label: "Years Experience" },
    { icon: <Award className="w-6 h-6" />, value: "50+", label: "Projects Completed" },
    { icon: <Coffee className="w-6 h-6" />, value: "∞", label: "Cups of Coffee" },
    { icon: <Heart className="w-6 h-6" />, value: "100%", label: "Passion for Code" }
  ];

  return (
    <section id = "about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                I'm a passionate full-stack developer with a love for creating digital experiences 
                that make a difference. My journey in web development started 3 years ago, and 
                I've been constantly learning and evolving ever since.
              </p>
              <p>
                I believe in writing clean, maintainable code and staying up-to-date with the 
                latest technologies. When I'm not coding, you'll find me exploring new frameworks, 
                contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
              <p>
                My goal is to build applications that not only function flawlessly but also 
                provide exceptional user experiences. I'm always excited to take on new challenges 
                and collaborate with like-minded individuals.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow hover-scale"
              >
                <div className="text-blue-500 flex justify-center mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;