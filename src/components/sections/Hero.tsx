
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center pt-16 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-500 dark:to-dark-800"
    >
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className={`lg:w-1/2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <p className="text-orange-500 font-medium mb-2 text-xl">Hello! 👋</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              I'm <span className="text-orange-500">Shubh Kansara</span>,
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl">Full Stack Web Developer</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-lg">
              Motivated and detail-oriented Full Stack Developer skilled in Angular, Laravel, Node.js, 
              JavaScript, TypeScript, React, and UI/UX.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                <span>Let's Talk</span>
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a 
                href="#portfolio" 
                className="px-6 py-3 rounded-full font-medium transition-all duration-300 
                         border-2 border-gray-300 dark:border-gray-600 hover:border-orange-500 
                         dark:hover:border-orange-500 flex items-center"
              >
                View Portfolio
              </a>
            </div>
          </div>
          <div className={`lg:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 bg-orange-500 rounded-full animate-pulse-slow opacity-20"></div>
              <img 
                src="/my_img_2.jpg"
                alt="Shubh Kansara" 
                className="relative z-10 mx-auto max-w-full h-auto rounded-3xl"
                style={{ maxHeight: '500px' }}
              />
            </div>
            <div className="bg-white dark:bg-dark-400 shadow-lg rounded-2xl p-4 mt-4 flex items-center justify-between mx-auto max-w-md">
              <div>
                <p className="text-gray-500 dark:text-gray-300 text-sm">Full Stack Developer</p>
                <p className="font-medium">Mansa, Gujarat</p>
              </div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.4 7.4-6-4.6-6 4.6 2.4-7.4-6-4.6h7.6z" />
                  </svg>
                ))}
              </div>
              <p className="font-bold">10 Years</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute right-0 top-0 w-72 h-72 bg-orange-500 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
