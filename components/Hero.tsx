
import { Github, Mail} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { saveAs } from 'file-saver';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8 ">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full p-0.5 shadow-xl hover:shadow-2xl transition-shadow flex items-center justify-center text-white text-4xl font-bold shadow-lg bg-black">
            <img 
            className="rounded-full object-cover w-32 h-32 py-0.5 grayscale-35 hover:grayscale-0 transition-all duration-400 onclick:grayscale-0" 
            src="/profile.jpeg"
            alt="Logo" 
            width={32} 
            height={32} 
            ></img>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Kenneth Jezreel
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
            Full Stack Developer
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
            I craft digital experiences through clean code and thoughtful design. 
            Passionate about building web applications that make a difference.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button onClick={() => window.open(process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL, '_blank')} size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-3">
            View My Work
          </Button>
          <Button onClick={() =>  
              fetch('/Kenneth_Jezreel.pdf')
              .then(res => res.blob())
              .then(blob => saveAs(blob, 'Kenneth_Jezreel_Resume.pdf'))} variant="outline" size="lg" className="px-8 py-3">
            Download my Resume
          </Button>
        </div>
        
        <div className="flex justify-center space-x-6">
          <a onClick = {() => window.open(process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL, '_blank')} className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow hover-scale">
            <Github className="w-6 h-6 text-gray-700" />
          </a>
          <a onClick = {() => window.open(process.env.NEXT_PUBLIC_LINKEDIN_PROFILE_URL, '_blank')} className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow hover-scale">
            <svg className="text-gray-700 w-6 h-6"xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
            </svg>
          </a>
          <a href="mailto:kennethjezreel1@gmail.com" className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow hover-scale">
            <Mail className="w-6 h-6 text-gray-700" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
