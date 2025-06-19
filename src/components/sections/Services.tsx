import { Code2, Layout, Database, Smartphone, ArrowUpRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const Services = () => {
  const { ref, inView } = useInView();

  const services = [
    {
      title: "Frontend Development",
      icon: <Layout />,
      description: "Building responsive and interactive web interfaces using Angular, React, Vue.js, and Ionic.",
    },
    {
      title: "Backend Development",
      icon: <Database />,
      description: "Developing robust server-side applications and APIs with Laravel and CodeIgniter, integrating relational databases.",
    },
    {
      title: "Mobile App Development",
      icon: <Smartphone />,
      description: "Creating cross-platform mobile applications using Ionic and Angular for seamless user experiences.",
    },
    {
      title: "Full Stack Solutions",
      icon: <Code2 />,
      description: "Delivering end-to-end solutions, from database design to deployment, using modern web and mobile technologies.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-dark-800">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16">
          <h3 className="section-subtitle">What I do</h3>
          <h2 className="section-title">My Services</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
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
