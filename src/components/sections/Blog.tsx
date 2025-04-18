
import { Calendar, ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const Blog = () => {
  const { ref, inView } = useInView();

  const posts = [
    {
      id: 1,
      title: "10 Tips for Writing Clean React Code",
      excerpt: "Learn how to write maintainable and efficient React components with these best practices.",
      date: "October 15, 2023",
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=600&h=400",
      category: "React",
    },
    {
      id: 2,
      title: "Understanding Laravel Middleware",
      excerpt: "Dive deep into Laravel middleware and learn how to use it effectively in your projects.",
      date: "September 22, 2023",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=600&h=400",
      category: "Laravel",
    },
    {
      id: 3,
      title: "Getting Started with TypeScript",
      excerpt: "A beginner-friendly guide to TypeScript and how it improves your JavaScript development.",
      date: "August 10, 2023",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600&h=400",
      category: "TypeScript",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-white dark:bg-dark-800">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16">
          <h3 className="section-subtitle">Latest Articles</h3>
          <h2 className="section-title">From My Blog</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div 
              key={post.id} 
              className={`card overflow-hidden appear ${inView ? 'active' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 hover:text-orange-500 transition-colors">
                  <a href="#">{post.title}</a>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600"
                >
                  <span>Read More</span>
                  <ArrowRight size={18} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="btn-primary"
          >
            <span>View All Posts</span>
            <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
