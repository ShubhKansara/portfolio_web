
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    position: "CTO at TechCorp",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Working with Shubh was a fantastic experience. His technical skills are top-notch, and he delivered our project ahead of schedule. I was particularly impressed with his attention to detail and problem-solving abilities.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Product Manager",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Shubh is one of the most talented developers we've worked with. He quickly understood our requirements and delivered an exceptional web application. His communication was clear and his work ethic outstanding.",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "Startup Founder",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    text: "I hired Shubh to build our company's web application from scratch, and I couldn't be happier with the results. He provided valuable insights that enhanced the original concept and delivered a product that exceeded our expectations.",
    rating: 5,
  },
];

const Testimonials = () => {
  const { ref, inView } = useInView();
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handlePrevious = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      handleNext();
    }
    if (touchStart - touchEnd < -100) {
      handlePrevious();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-dark-700 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-60 h-60 bg-orange-500 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16">
          <h3 className="section-subtitle">Client Feedback</h3>
          <h2 className="section-title">Testimonials</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div 
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="min-w-full card flex flex-col md:flex-row gap-8 items-center p-8"
                >
                  <div className="md:w-1/3 flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-orange-500">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-bold text-center">{testimonial.name}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-center">{testimonial.position}</p>
                    <div className="flex items-center mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.4 7.4-6-4.6-6 4.6 2.4-7.4-6-4.6h7.6z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="md:w-2/3 relative">
                    <Quote className="absolute top-0 left-0 w-12 h-12 text-orange-200 dark:text-orange-900/20 -translate-x-1/4 -translate-y-1/4" />
                    <p className="text-gray-700 dark:text-gray-300 italic relative z-10 md:pl-4">
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? "bg-orange-500 w-8" 
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-colors"
              onClick={handlePrevious}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-colors"
              onClick={handleNext}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
