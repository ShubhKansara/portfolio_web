
import { useInView } from "@/hooks/useInView";

const Experience = () => {
  const { ref, inView } = useInView();

  const experiences = [
    {
      title: "Full Stack Web Developer",
      company: "Kshitiz Infotech Pvt. Ltd.",
      period: "July 2022 – Sep 2023",
      description: "Built dynamic apps, integrated APIs, and improved performance"
    },
    {
      title: "Web Developer Trainee",
      company: "Kshitiz Infotech",
      period: "March 2022 – July 2022",
      description: "Designed UI components and supported backend logic"
    },
    {
      title: "Web Developer Trainee",
      company: "Syn-Soft Technologies",
      period: "March 2021 – June 2021",
      description: "Learned Laravel, worked on UI logic, and created mini projects"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-dark-700 relative overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16">
          <h3 className="section-subtitle">My Journey</h3>
          <h2 className="section-title">Work Experience</h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`timeline-item appear ${inView ? "active" : ""}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="timeline-dot"></div>
              <div className="card mb-0">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <span className="bg-orange-100 dark:bg-dark-600 text-orange-600 dark:text-orange-400 text-sm rounded-full px-3 py-1 md:ml-4 inline-block mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-orange-500 font-medium text-sm mb-2">{exp.company}</p>
                <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute left-0 top-0 w-64 h-64 bg-orange-500 opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-blue-500 opacity-5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Experience;
