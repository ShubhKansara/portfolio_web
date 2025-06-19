import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const Portfolio = () => {
  const { ref, inView } = useInView();
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "ResumeBoss for Physician Assistants",
      category: ["web"],
      image: "/portfolio_imgs/resumeboss_v2.png",
      description:
        "An AI-powered resume and cover letter builder tailored for physician assistants. Features include customizable templates, clinical bullet suggestions, expert guidance, cover letter builder, and ATS parser compatibility to help users “beat the bot” and get noticed by employers.",
    },
    {
      id: 2,
      title: "INNOVEE CRM System",
      category: ["web"],
      image: "/portfolio_imgs/Innovee_v2.png",
      description:
        "Custom CRM platform built for INNOVEE, a Mumbai-based healthcare equipment provider. Includes multi-user management, lead tracking, quotation and proposal generation, invoice handling, and product lifecycle management — streamlining operations across their nationwide dealer network.",
    },
    {
      id: 3,
      title: "Crystal Frozen – B2B CRM & eCommerce Platform",
      category: ["web", "mobile"],
      image: "/portfolio_imgs/crystal_frozen_v2.png",
      description:
        "A complete platform for CrystalFrozen.com enabling B2C food and liquor sales and a B2B CRM for wholesale clients. Features include product management, mobile ordering apps, QuickBooks integration, invoicing, and a powerful admin panel.",
    },
    {
      id: 4,
      title: "Mytro Food & Grocery Delivery Platform",
      category: ["web", "mobile"],
      image: "/portfolio_imgs/mytro_v2.png",
      description:
        "An all-in-one food and grocery delivery ecosystem built for the local market in Gandhinagar. Includes user mobile app, delivery agent app, vendor/store app, and a complete backend CRM. Serving 65K+ users and 300+ local vendors.",
    },
    {
      id: 5,
      title: "UserX – Electronics Sales & Service Platform",
      category: ["web", "mobile"],
      image: "/portfolio_imgs/user_x_v2.png",
      description:
        "End-to-end platform for electronics product sales and repair service management. Includes customer app, engineer app, and an admin CRM. Built using Vue.js, Laravel, and Ionic for a fast and responsive experience across web and mobile.",
    },
    {
      id: 6,
      title: "PharmaHome – Prescription Delivery Platform",
      category: ["web", "mobile"],
      image: "/portfolio_imgs/Pharmahome_v2.png",
      description:
        "A complete HIPAA-compliant platform designed to simplify prescription delivery across the U.S. Includes mobile apps for customers and delivery partners, plus a pharmacy web app to manage profiles, prescriptions, and fulfillment. Prioritizes secure, real-time medication delivery.",
    },
    {
      id: 7,
      title: "Laravel QuickBooks Integration Plugin",
      category: ["web", "plugin"],
      image: "/portfolio_imgs/quickbooks_plugin_v2.png",
      description:
        "A custom Laravel plugin developed to seamlessly integrate QuickBooks Desktop and QuickBooks Online with web applications. Enables automated syncing of invoices, customers, and financial data between Laravel projects and QuickBooks platforms.",
    },
  ];

  const filters = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Apps" },
    { id: "mobile", name: "Mobile Apps" },
    // { id: "ui", name: "UI/UX Design" },
    { id: "plugin", name: "Plugins" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) =>
          Array.isArray(project.category)
            ? project.category.includes(activeFilter)
            : project.category === activeFilter
        );

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-dark-800">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16">
          <h3 className="section-subtitle">Recent Work</h3>
          <h2 className="section-title">My Portfolio</h2>
        </div>

        <div className="flex flex-wrap justify-center mb-12">
          <div className="bg-gray-100 dark:bg-dark-600 p-1 rounded-full inline-flex space-x-1 mb-6">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter.id
                    ? "bg-orange-500 text-white shadow-lg"
                    : "hover:bg-gray-200 dark:hover:bg-dark-500"
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-dark-400 appear ${
                inView ? "active" : ""
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 scale-100 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-5 flex justify-between items-center">
                <h3 className="font-bold text-lg">{project.title}</h3>
                {/* <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-500 flex items-center justify-center group-hover:bg-orange-500 transition-colors"
                >
                  <ArrowUpRight
                    size={20}
                    className="group-hover:text-white transition-colors"
                  />
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
