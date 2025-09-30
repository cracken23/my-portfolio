
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "kennethjezreel1@gmail.com",
      href: "mailto:kennethjezreel1@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "+91 8850175023",
      href: "tel:+918850175023"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "Mumbai, India",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Let&apos;s start a conversation</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Whether you have a project in mind, want to collaborate, or just want to say hello, 
              I&apos;d love to hear from you. Drop me a message and I&apos;ll get back to you as soon as possible.
            </p>
            
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.href}
                  className="flex items-center p-4 bg-white dark:bg-neutral-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1"
                >
                  <div className="text-blue-500 mr-4">{info.icon}</div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">{info.title}</div>
                    <div className="text-gray-600 dark:text-gray-300">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <Card className="animate-fade-in bg-white dark:bg-neutral-800" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <Input placeholder="Enter Your Name" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="email@example.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell me about your project or just say hello..."
                    rows={5}
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;