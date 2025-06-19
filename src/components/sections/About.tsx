import { useEffect } from "react";
import { Phone, Mail, MapPin, Linkedin, Github, Languages } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const About = () => {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-700">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16">
          <h3 className="section-subtitle">About Me</h3>
          <h2 className="section-title">Who I Am</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className={`appear ${inView ? "active" : ""}`}>
            <h3 className="text-2xl font-bold mb-4">Profile Summary</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Full-stack developer with hands-on experience delivering scalable web
              and mobile solutions for diverse industries, including healthcare,
              e-commerce, and logistics. Skilled in Angular, React, Vue.js,
              Laravel, CodeIgniter, and Ionic, I have led and contributed to
              projects ranging from AI-powered SaaS platforms and custom CRM
              systems to B2B/B2C e-commerce, delivery ecosystems, and service
              management apps. My expertise extends to developing custom Laravel
              plugins, such as seamless QuickBooks Desktop/Online integrations,
              and implementing third-party services like payment gateways. I am
              passionate about building robust, user-centric applications that
              solve real-world business challenges.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-orange-100 dark:bg-dark-500 p-2 rounded-lg mr-4">
                  <Phone className="h-5 w-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Phone
                  </p>
                  <p className="font-medium">+91 6354980273</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 dark:bg-dark-500 p-2 rounded-lg mr-4">
                  <Mail className="h-5 w-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Email
                  </p>
                  <p className="font-medium">shubh.k.kansara@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 dark:bg-dark-500 p-2 rounded-lg mr-4">
                  <MapPin className="h-5 w-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Location
                  </p>
                  <p className="font-medium">Mansa, Gujarat</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 dark:bg-dark-500 p-2 rounded-lg mr-4">
                  <Linkedin className="h-5 w-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    LinkedIn
                  </p>
                  <a
                    href="https://www.linkedin.com/in/shubhkansara/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-orange-500"
                  >
                    linkedin.com/in/shubhkansara/
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 dark:bg-dark-500 p-2 rounded-lg mr-4">
                  <Github className="h-5 w-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    GitHub
                  </p>
                  <a
                    href="https://www.github.com/ShubhKansara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-orange-500"
                  >
                    github.com/ShubhKansara
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 dark:bg-dark-500 p-2 rounded-lg mr-4">
                  <Languages className="h-5 w-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Languages
                  </p>
                  <p className="font-medium">Gujarati, Hindi, English</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`appear ${inView ? "active" : ""}`}>
            <h3 className="text-2xl font-bold mb-4">Education</h3>
            <div className="space-y-6">
              <div className="card">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-semibold">
                      Computer Science & Engineering
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Gujarat Technological University
                    </p>
                  </div>
                  <span className="bg-orange-100 dark:bg-dark-600 text-orange-600 dark:text-orange-400 text-sm rounded-full px-3 py-1">
                    2021
                  </span>
                </div>
              </div>

              {/* <div className="card">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-semibold">HSC (Science)</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Gujarat Secondary & Higher Secondary Education Board
                    </p>
                  </div>
                  <span className="bg-orange-100 dark:bg-dark-600 text-orange-600 dark:text-orange-400 text-sm rounded-full px-3 py-1">
                    2017
                  </span>
                </div>
              </div>

              <div className="card">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-semibold">SSC</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Gujarat Secondary Education Board
                    </p>
                  </div>
                  <span className="bg-orange-100 dark:bg-dark-600 text-orange-600 dark:text-orange-400 text-sm rounded-full px-3 py-1">
                    2015
                  </span>
                </div>
              </div> */}
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Skills</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="text-orange-500 bg-white dark:bg-dark-400 p-3 rounded-lg shadow">
                <h4 className="font-semibold">Core</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Angular, Laravel, JavaScript, React, Node.js
                </p>
              </div>
              <div className="text-orange-500 bg-white dark:bg-dark-400 p-3 rounded-lg shadow">
                <h4 className="font-semibold">UI/UX</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  HTML, CSS, Bootstrap
                </p>
              </div>
              <div className="text-orange-500 bg-white dark:bg-dark-400 p-3 rounded-lg shadow">
                <h4 className="font-semibold">Tools</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Git, VSCode, Postman
                </p>
              </div>
              <div className="text-orange-500 bg-white dark:bg-dark-400 p-3 rounded-lg shadow">
                <h4 className="font-semibold">Others</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  AWS EC2, C2, DSA Basics
                </p>
              </div>
              <div className="text-orange-500 bg-white dark:bg-dark-400 p-3 rounded-lg shadow">
                <h4 className="font-semibold">Third-Party Integrations</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Payment Gateways, QuickBooks (Desktop & Online), SMS/Email APIs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
