
export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
};

export const projectsList: Project[] = [
  {
    id: 1,
    title: "AI-Powered Market Analysis",
    description: "Developed a machine learning model to predict market trends using historical data and NLP on financial news.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["Python", "Machine Learning", "NLP", "Financial Analysis"],
    github: "#",
    demo: "#"
  },
  {
    id: 2,
    title: "Predictive Healthcare System",
    description: "Created a predictive system for early disease detection using patient data and advanced classification algorithms.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["TensorFlow", "Healthcare", "Data Visualization", "ML"],
    github: "#",
    demo: "#"
  },
  {
    id: 3,
    title: "Smart Energy Consumption",
    description: "Built an IoT-based solution to monitor and optimize energy consumption using real-time data analytics.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    tags: ["IoT", "Time Series", "Dashboard", "Sustainable Tech"],
    github: "#",
    demo: "#"
  },
  {
    id: 4,
    title: "Natural Language Processing Tool",
    description: "Developed a tool for sentiment analysis and text classification using state-of-the-art NLP techniques.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["NLP", "BERT", "Python", "Deep Learning"],
    github: "#"
  }
];
