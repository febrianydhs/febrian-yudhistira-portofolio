
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import { personalInfo } from "@/data/portfolioData";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="pt-8 pb-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Get in Touch"
          subtitle="Contact me for financial consulting or collaboration opportunities"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-finance-blue-dark font-playfair">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail size={20} className="mt-1 mr-3 text-finance-blue-dark" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a 
                      href={`mailto:${personalInfo.email}`} 
                      className="text-finance-blue hover:text-finance-blue-dark transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin size={20} className="mt-1 mr-3 text-finance-blue-dark" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p>{personalInfo.location}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Linkedin size={20} className="mt-1 mr-3 text-finance-blue-dark" />
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a 
                      href={personalInfo.socialLinks.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-finance-blue hover:text-finance-blue-dark transition-colors"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
                
                {personalInfo.socialLinks.github && (
                  <div className="flex items-start">
                    <Github size={20} className="mt-1 mr-3 text-finance-blue-dark" />
                    <div>
                      <p className="font-medium">GitHub</p>
                      <a 
                        href={personalInfo.socialLinks.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-finance-blue hover:text-finance-blue-dark transition-colors"
                      >
                        View GitHub Profile
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="bg-finance-blue-dark text-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 font-playfair">
                How I Can Help
              </h3>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-finance-gold rounded-full mt-2 mr-3"></div>
                  <span>Investment strategy development and portfolio optimization</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-finance-gold rounded-full mt-2 mr-3"></div>
                  <span>Financial market analysis and research</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-finance-gold rounded-full mt-2 mr-3"></div>
                  <span>Risk assessment and mitigation planning</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-finance-gold rounded-full mt-2 mr-3"></div>
                  <span>Financial education and workshops</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-finance-gold rounded-full mt-2 mr-3"></div>
                  <span>Collaboration on financial research and publications</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-6 text-finance-blue-dark font-playfair">
              Send Me a Message
            </h3>
            
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
