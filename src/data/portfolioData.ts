
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  link?: string;
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  tags: string[];
}

export interface Resume {
  name: string;
  role: string;
  summary: string;
  education: Education[];
  experience: Experience[];
  skills: Skill[];
  certifications: Certification[];
  languages: Language[];
  pdfLink: string;
}

interface Education {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  description?: string;
}

interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements?: string[];
}

interface Skill {
  name: string;
  level: number; // 1-5
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

interface Language {
  name: string;
  proficiency: string; // e.g., "Native", "Fluent", "Intermediate", "Basic"
}

export interface PersonalInfo {
  name: string;
  photo: string;
  role: string;
  bio: string;
  quote: string;
  location: string;
  email: string;
  phone?: string;
  socialLinks: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

const personalInfo: PersonalInfo = {
  name: "Febrian Yudhistira",
  photo: "1.jpg",
  role: "Financial Analyst & Investment Consultant",
  bio: "I am a Financial Management student specializing in Finance and Investment. With a strong academic foundation and a passion for financial analysis and investment strategies, I am committed to continuously enhancing my skills in asset management, market analysis, and making informed investment decisions. I am eager to apply my knowledge in real-world scenarios and contribute to challenging financial projects.",
  quote: "\"The best investment you can make is in yourself and your financial education.\"",
  location: "Bandung, Indonesia",
  email: "febrianydhs@gmail.com",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/febrianyudhistira/",
    github: "https://github.com/febrianydhs"
  }
};

const projects: Project[] = [
  {
    id: "proj1",
    title: "Market Analysis: Indonesian Tech Sector",
    description: "Comprehensive analysis of investment opportunities in Indonesia's emerging technology sector, with focus on growth potential and risk assessment.",
    image: "/placeholder.svg",
    category: "Market Analysis",
    date: "2023-04-15",
    link: "#"
  },
  {
    id: "proj2",
    title: "Portfolio Optimization Strategy",
    description: "Development of a diversified investment strategy for high-net-worth individuals, focusing on balancing risk and return across multiple asset classes.",
    image: "/placeholder.svg",
    category: "Investment Strategy",
    date: "2023-01-22",
    link: "#"
  },
  {
    id: "proj3",
    title: "Financial Risk Assessment Tool",
    description: "Created a proprietary tool for assessing investment risks across various market conditions, integrating both technical and fundamental analysis methods.",
    image: "/placeholder.svg",
    category: "Risk Management",
    date: "2022-11-10",
    link: "#"
  },
  {
    id: "proj4",
    title: "Sustainable Investment Framework",
    description: "Developed a framework for evaluating and implementing sustainable investment strategies for institutional clients with ESG priorities.",
    image: "/placeholder.svg",
    category: "ESG Investing",
    date: "2022-09-04",
    link: "#"
  }
];

const blogPosts: Post[] = [
  {
    id: "post1",
    title: "The Future of Fintech in Southeast Asia",
    excerpt: "An exploration of emerging trends in financial technology across the ASEAN region and their potential impact on traditional banking systems.",
    content: `
      # The Future of Fintech in Southeast Asia
      
      ## Introduction
      
      Southeast Asia's financial landscape is undergoing a radical transformation driven by fintech innovations. With a population of over 650 million and increasing smartphone penetration, the region presents immense opportunities for financial technology solutions.
      
      ## Key Trends
      
      ### Digital Banking Revolution
      
      Traditional banks are facing unprecedented competition from digital-only challengers that offer streamlined services with minimal overhead costs. These neo-banks are particularly attractive to the region's young, tech-savvy population who value convenience and mobile-first solutions.
      
      ### Payment Systems Evolution
      
      Mobile payment systems are rapidly replacing cash transactions across Southeast Asia. From Singapore's PayNow to Indonesia's GoPay, digital wallets are becoming the preferred payment method for millions of consumers.
      
      ## Regulatory Landscape
      
      Regulators across the region are working to balance innovation with stability. Singapore's MAS has established itself as a progressive regulator, while other countries are quickly developing frameworks to support fintech growth while protecting consumers.
      
      ## Investment Opportunities
      
      For investors, Southeast Asian fintech represents a high-growth sector with multiple entry points:
      
      - Early-stage startups focusing on specific pain points
      - Scale-ups expanding across the region
      - Infrastructure players building the backbone of the digital economy
      
      ## Conclusion
      
      The fintech revolution in Southeast Asia is just beginning. The combination of young populations, increasing wealth, and technological leapfrogging creates perfect conditions for continued disruption and growth in the financial sector.
    `,
    image: "/placeholder.svg",
    date: "2023-05-12",
    author: "John Doe",
    tags: ["Fintech", "Southeast Asia", "Digital Banking", "Investment"]
  },
  {
    id: "post2",
    title: "ESG Investing: Trend or Paradigm Shift?",
    excerpt: "Examining whether environmental, social, and governance criteria in investment decisions represent a lasting change in global finance.",
    content: `
      # ESG Investing: Trend or Paradigm Shift?
      
      The rise of Environmental, Social, and Governance (ESG) investing has been one of the most significant developments in financial markets over the past decade. But does this represent a fundamental shift in how investment decisions are made, or is it simply a passing trend?
      
      ## The Growth of ESG
      
      Assets under management in ESG-focused funds have grown exponentially, reaching over $35 trillion globally. This growth has been driven by increasing awareness of climate risks, social justice issues, and corporate governance failures.
      
      ## Beyond Marketing
      
      While critics argue that much of ESG investing is "greenwashing," evidence suggests that companies with strong ESG profiles often demonstrate better long-term financial performance and resilience during market downturns.
      
      ## Regulatory Momentum
      
      Governments worldwide are implementing regulations that mandate ESG disclosures and integrate climate risks into financial oversight. These regulatory changes are institutionalizing ESG considerations in ways that will be difficult to reverse.
      
      ## Investment Performance
      
      The data on ESG fund performance shows that responsible investing doesn't necessarily mean sacrificing returns. Many ESG funds have outperformed their conventional counterparts, particularly during recent market volatility.
      
      ## Looking Forward
      
      As ESG metrics become more standardized and data quality improves, we can expect ESG factors to be integrated into fundamental investment analysis rather than treated as a separate investment approach.
      
      ## Conclusion
      
      ESG investing appears to be a genuine paradigm shift rather than a passing trend. It represents an evolution in how risk is assessed and how value creation is measured, reflecting a broader understanding that financial returns are linked to environmental and social sustainability.
    `,
    image: "/placeholder.svg",
    date: "2023-03-28",
    author: "John Doe",
    tags: ["ESG", "Sustainable Investing", "Financial Markets"]
  },
  {
    id: "post3",
    title: "Inflation Risks in Emerging Markets",
    excerpt: "Analysis of how global inflation pressures are affecting emerging market economies and investment strategies for navigating this environment.",
    content: "Full article content to be loaded dynamically.",
    image: "/placeholder.svg",
    date: "2023-02-15",
    author: "John Doe",
    tags: ["Inflation", "Emerging Markets", "Monetary Policy", "Risk Management"]
  }
];

const resumeData: Resume = {
  name: "John Doe",
  role: "Financial Analyst & Investment Consultant",
  summary: "Experienced financial professional with expertise in investment analysis, portfolio management, and market research. Proven track record of developing successful investment strategies and delivering actionable insights to clients.",
  education: [
    {
      institution: "Harvard University",
      degree: "Master of Business Administration",
      fieldOfStudy: "Finance",
      startDate: "2010",
      endDate: "2012",
      description: "Specialized in Investment Management and Financial Analysis"
    },
    {
      institution: "University of Indonesia",
      degree: "Bachelor of Economics",
      fieldOfStudy: "Economics and Finance",
      startDate: "2006",
      endDate: "2010"
    }
  ],
  experience: [
    {
      company: "Global Investment Partners",
      role: "Senior Investment Analyst",
      startDate: "2018",
      endDate: "Present",
      description: "Lead analyst for emerging market investments, focusing on Southeast Asian equity opportunities. Develop comprehensive investment strategies and present recommendations to institutional clients.",
      achievements: [
        "Managed a $200M portfolio with 15% average annual return",
        "Developed proprietary market analysis methodology adopted company-wide",
        "Led team of 5 junior analysts in market research initiatives"
      ]
    },
    {
      company: "Financial Solutions Inc.",
      role: "Investment Consultant",
      startDate: "2012",
      endDate: "2018",
      description: "Provided investment advisory services to high-net-worth individuals and small institutional clients. Conducted market research and developed customized portfolio strategies.",
      achievements: [
        "Grew client assets under advisement by 45%",
        "Implemented risk management framework that reduced client portfolio volatility by 20%"
      ]
    }
  ],
  skills: [
    { name: "Financial Analysis", level: 5 },
    { name: "Portfolio Management", level: 5 },
    { name: "Risk Assessment", level: 4 },
    { name: "Market Research", level: 5 },
    { name: "Investment Strategy", level: 5 },
    { name: "Financial Modeling", level: 4 },
    { name: "Client Relations", level: 4 },
    { name: "Data Analysis", level: 4 }
  ],
  certifications: [
    {
      name: "Chartered Financial Analyst (CFA)",
      issuer: "CFA Institute",
      date: "2014",
      link: "https://www.cfainstitute.org/"
    },
    {
      name: "Financial Risk Manager (FRM)",
      issuer: "Global Association of Risk Professionals",
      date: "2016",
      link: "https://www.garp.org/"
    }
  ],
  languages: [
    { name: "English", proficiency: "Fluent" },
    { name: "Indonesian", proficiency: "Native" },
    { name: "Mandarin", proficiency: "Intermediate" }
  ],
  pdfLink: "/resume.pdf"
};

export { personalInfo, projects, blogPosts, resumeData };
