
import SectionTitle from "@/components/SectionTitle";
import { personalInfo } from "@/data/portfolioData";

const About = () => {
  return (
    <div className="pt-8 pb-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="About Me"
          subtitle="Learn more about my background, expertise, and approach to finance"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <img 
              src={personalInfo.photo} 
              alt={personalInfo.name} 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-finance-blue-dark font-playfair">
              {personalInfo.name}
            </h3>
            <p className="text-gray-600 text-lg">{personalInfo.role}</p>
            
            <div className="prose max-w-none">
              <p>
                With a strong background in financial analysis and investment strategies, 
                I've dedicated my career to helping individuals and businesses make informed 
                financial decisions. My approach combines rigorous data analysis with a deep 
                understanding of market dynamics to develop customized investment solutions.
              </p>
              
              <p>
                I specialize in portfolio optimization, risk management, and identifying emerging 
                investment opportunities across diverse markets. My analytical process involves 
                both quantitative modeling and qualitative assessment to provide a comprehensive 
                perspective on financial scenarios.
              </p>
              
              <p>
                My work is driven by a commitment to transparency, integrity, and client success. 
                I believe that sound financial decisions should be based on clear information and 
                strategic thinking rather than market trends or emotional reactions.
              </p>
              
              <blockquote>
                <p className="italic">
                  "The best investment strategies are built on knowledge, discipline, and a clear vision of your financial goals."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
        
        {/* Expertise Section */}
        <SectionTitle 
          title="Areas of Expertise"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-finance-blue-dark">
            <h3 className="text-xl font-bold mb-3 text-finance-blue-dark">Investment Analysis</h3>
            <p className="text-gray-700">
              Comprehensive evaluation of investment opportunities across various asset classes, 
              with a focus on risk-adjusted returns and market timing.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-finance-blue-dark">
            <h3 className="text-xl font-bold mb-3 text-finance-blue-dark">Portfolio Management</h3>
            <p className="text-gray-700">
              Strategic asset allocation and portfolio construction designed to match client risk 
              tolerance and financial objectives with appropriate investment vehicles.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-finance-blue-dark">
            <h3 className="text-xl font-bold mb-3 text-finance-blue-dark">Market Research</h3>
            <p className="text-gray-700">
              In-depth analysis of market trends, economic indicators, and industry developments to 
              inform investment decisions and identify emerging opportunities.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-finance-blue-dark">
            <h3 className="text-xl font-bold mb-3 text-finance-blue-dark">Risk Assessment</h3>
            <p className="text-gray-700">
              Detailed evaluation of potential investment risks and development of mitigation 
              strategies to protect client assets in various market conditions.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-finance-blue-dark">
            <h3 className="text-xl font-bold mb-3 text-finance-blue-dark">Financial Modeling</h3>
            <p className="text-gray-700">
              Creation of sophisticated financial models to project investment performance and 
              evaluate complex financial scenarios.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-finance-blue-dark">
            <h3 className="text-xl font-bold mb-3 text-finance-blue-dark">Wealth Preservation</h3>
            <p className="text-gray-700">
              Strategies for protecting and growing wealth over the long term, with attention to 
              tax efficiency and estate planning considerations.
            </p>
          </div>
        </div>
        
        {/* Vision & Approach */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <SectionTitle 
            title="My Approach to Finance"
            className="mb-8"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-finance-blue-dark">Vision</h3>
              <p className="text-gray-700">
                My vision is to empower clients with the knowledge and strategies they need to achieve 
                financial security and growth. I believe that financial education and transparent 
                analysis are essential components of successful investment management.
              </p>
              <p className="text-gray-700">
                I aim to bridge the gap between complex financial concepts and practical, actionable 
                investment decisions, making sophisticated strategies accessible to all clients.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-finance-blue-dark">Philosophy</h3>
              <p className="text-gray-700">
                My investment philosophy is centered on disciplined analysis, diversification, and a 
                long-term perspective. I prioritize consistent growth over speculative gains and focus 
                on building resilient portfolios that can withstand market volatility.
              </p>
              <p className="text-gray-700">
                I believe that successful investing requires both analytical rigor and an understanding 
                of behavioral finance—recognizing how human psychology affects market movements and 
                individual investment decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
