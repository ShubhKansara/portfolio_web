
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const Portfolio = () => {
  const { ref, inView } = useInView();
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1556742049-0a8e1b31c3b4?auto=format&fit=crop&q=80&w=600&h=400',
      description: 'Full stack e-commerce platform with product management and payment integration',
    },
    {
      id: 2,
      title: 'Admin Dashboard',
      category: 'ui',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=400',
      description: 'Administrative dashboard with data visualization and user management',
    },
    {
      id: 3,
      title: 'Restaurant App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=600&h=400',
      description: 'Mobile application for restaurant ordering and table reservations',
    },
    {
      id: 4,
      title: 'Blogging Platform',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=600&h=400',
      description: 'Content management system for bloggers with rich text editing',
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&q=80&w=600&h=400',
      description: 'Mobile app for tracking workouts, nutrition and personal progress',
    },
    {
      id: 6,
      title: 'Real Estate Platform',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600&h=400',
      description: 'Property listing website with advanced filtering and map integration',
    }
  ];

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ui', name: 'UI/UX Design' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-dark-800">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16">
          <h3 className="section-subtitle">Recent Work</h3>
          <h2 className="section-title">My Portfolio</h2>
        </div>

        <div className="flex flex-wrap justify-center mb-12">
          <div className="bg-gray-100 dark:bg-dark-600 p-1 rounded-full inline-flex space-x-1 mb-6">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter.id
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'hover:bg-gray-200 dark:hover:bg-dark-500'
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
              className={`group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-dark-400 appear ${inView ? 'active' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-52">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-5 flex justify-between items-center">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-500 flex items-center justify-center group-hover:bg-orange-500 transition-colors"
                >
                  <ArrowUpRight size={20} className="group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
