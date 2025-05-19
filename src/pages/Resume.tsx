
import { resumeData } from "@/data/portfolioData";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Resume = () => {
  return (
    <div className="pt-8 pb-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <SectionTitle 
            title="Resume / CV"
            subtitle="My professional background and qualifications"
            className="md:mb-0"
          />
          
          <Button 
            asChild
            className="mt-4 md:mt-0 bg-finance-blue-dark hover:bg-finance-blue flex items-center gap-2"
          >
            <a href={resumeData.pdfLink} target="_blank" rel="noopener noreferrer">
              <DownloadIcon size={16} /> Download PDF
            </a>
          </Button>
        </div>
        
        {/* Resume Header */}
        <div className="bg-finance-blue-dark text-white p-8 rounded-t-lg">
          <h2 className="text-3xl font-bold font-playfair">{resumeData.name}</h2>
          <p className="text-xl mt-1 text-gray-200">{resumeData.role}</p>
        </div>
        
        {/* Resume Content */}
        <div className="bg-white p-8 rounded-b-lg shadow-md mb-12">
          {/* Summary */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-finance-blue-dark border-b border-gray-200 pb-2 mb-4">
              Professional Summary
            </h3>
            <p className="text-gray-700">{resumeData.summary}</p>
          </div>
          
          {/* Experience */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-finance-blue-dark border-b border-gray-200 pb-2 mb-6">
              Professional Experience
            </h3>
            
            <div className="space-y-8">
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="pl-5 border-l-2 border-finance-gold">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h4 className="text-lg font-bold text-finance-blue-dark">{exp.role}</h4>
                      <p className="text-gray-700 font-medium">{exp.company}</p>
                    </div>
                    <p className="text-gray-600 md:text-right">
                      {exp.startDate} - {exp.endDate}
                    </p>
                  </div>
                  <p className="text-gray-700 mb-3">{exp.description}</p>
                  {exp.achievements && (
                    <ul className="list-disc list-inside text-gray-700">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-finance-blue-dark border-b border-gray-200 pb-2 mb-6">
              Education
            </h3>
            
            <div className="space-y-6">
              {resumeData.education.map((edu, index) => (
                <div key={index} className="pl-5 border-l-2 border-finance-gold">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h4 className="text-lg font-bold text-finance-blue-dark">{edu.degree}</h4>
                      <p className="text-gray-700 font-medium">{edu.institution}</p>
                    </div>
                    <p className="text-gray-600 md:text-right">
                      {edu.startDate} - {edu.endDate}
                    </p>
                  </div>
                  <p className="text-gray-700">{edu.fieldOfStudy}</p>
                  {edu.description && <p className="text-gray-700 mt-1">{edu.description}</p>}
                </div>
              ))}
            </div>
          </div>
          
          {/* Skills */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-finance-blue-dark border-b border-gray-200 pb-2 mb-6">
              Skills & Competencies
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resumeData.skills.map((skill, index) => (
                <div key={index} className="mb-3">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}/5</span>
                  </div>
                  <Progress 
                    value={skill.level * 20} 
                    className="h-2"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications and Languages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-finance-blue-dark border-b border-gray-200 pb-2 mb-4">
                Certifications
              </h3>
              
              <ul className="space-y-3">
                {resumeData.certifications.map((cert, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-2 w-2 bg-finance-gold rounded-full mt-2 mr-3"></div>
                    <div>
                      <div className="font-medium text-finance-blue-dark">{cert.name}</div>
                      <div className="text-gray-600 text-sm">
                        {cert.issuer}, {cert.date}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-finance-blue-dark border-b border-gray-200 pb-2 mb-4">
                Languages
              </h3>
              
              <ul className="space-y-3">
                {resumeData.languages.map((lang, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-2 w-2 bg-finance-gold rounded-full mt-2 mr-3"></div>
                    <div>
                      <div className="font-medium text-finance-blue-dark">{lang.name}</div>
                      <div className="text-gray-600 text-sm">{lang.proficiency}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
