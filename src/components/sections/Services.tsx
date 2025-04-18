
import { Code2, Layout, Database, ArrowUpRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const Services = () => {
  const { ref, inView } = useInView();

  const services = [
    {
      title: "Frontend Development",
      icon: <Layout />,
      description: "Creating responsive and interactive user interfaces using modern frameworks like React, Angular and Vue.",
    },
    {
      title: "Backend Development",
      icon: <Database />,
      description: "Building robust server-side applications with Node.js, Laravel and databases to power your web applications.",
    },
    {
      title: "Full Stack Solutions",
      icon: <Code2 />,
      description: "End-to-end development from database design to user interface, handling the complete application lifecycle.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-dark-800">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16">
          <h3 className="section-subtitle">What I do</h3>
          <h2 className="section-title">My Services</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`card group hover:-translate-y-2 appear ${inView ? "active" : ""}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="icon-circle">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
              <a href="#contact" className="inline-flex items-center text-orange-500 font-medium group-hover:text-orange-600">
                <span>Learn More</span>
                <ArrowUpRight size={18} className="ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
