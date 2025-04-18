
import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { ref, inView } = useInView();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91 59595959595",
      link: "tel:+915959595959",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "abc@gmail.com",
      link: "mailto:abc@gmail.com",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Mansa, Gujarat, India",
      link: "https://maps.google.com/?q=Mansa,Gujarat,India",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-dark-700 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500 opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500 opacity-5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16">
          <h3 className="section-subtitle">Get In Touch</h3>
          <h2 className="section-title">Contact Me</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className={`lg:col-span-1 appear ${inView ? "active" : ""}`}>
            <div className="card h-full">
              <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Have a project in mind or just want to say hello? Feel free to reach out.
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start hover:bg-gray-50 dark:hover:bg-dark-600 p-3 rounded-lg transition-colors"
                    target={info.title === "Location" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                  >
                    <div className="bg-orange-100 dark:bg-dark-500 p-3 rounded-lg text-orange-500 mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{info.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className={`lg:col-span-2 appear ${inView ? "active" : ""}`}>
            <div className="card">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-dark-500 bg-white dark:bg-dark-600 focus:outline-none focus:border-orange-500 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-dark-500 bg-white dark:bg-dark-600 focus:outline-none focus:border-orange-500 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-dark-500 bg-white dark:bg-dark-600 focus:outline-none focus:border-orange-500 transition-colors"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-dark-500 bg-white dark:bg-dark-600 focus:outline-none focus:border-orange-500 transition-colors"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
