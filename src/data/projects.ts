export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  details?: {
    overview: string;
    keyFeatures: string[];
    challenges: string[];
    timeline: {
      duration: string;
      completed: string;
    };
  };
};

export const projectsList: Project[] = [
  {
    id: 1,
    title: "Dog Breed Recognition",
    description: "An AI-powered application that accurately identifies dog breeds from images using deep learning models trained on a comprehensive dataset.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["Python", "TensorFlow", "Computer Vision", "Deep Learning"],
    github: "https://github.com/yourusername/dog-breed-recognition",
    demo: "https://dog-breed-recognition-demo.com",
    details: {
      overview: "This project showcases the implementation of a convolutional neural network (CNN) for dog breed classification. The model was trained on a dataset containing over 20,000 images of 120 different dog breeds, achieving an accuracy of 85% on the test set.",
      keyFeatures: [
        "Real-time breed prediction from uploaded images",
        "Detailed breed information and characteristics",
        "Confidence scores for predictions",
        "Mobile-responsive web interface",
        "API integration for batch processing"
      ],
      challenges: [
        "Handling imbalanced dataset with rare dog breeds",
        "Optimizing model performance for mobile devices",
        "Implementing real-time image processing",
        "Dealing with varying image quality and lighting conditions"
      ],
      timeline: {
        duration: "2 months",
        completed: "December 2023"
      }
    }
  },
  {
    id: 2,
    title: "Predictive Healthcare System",
    description: "A comprehensive healthcare analytics platform that predicts patient health outcomes using machine learning algorithms and historical medical data.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["Python", "Scikit-learn", "Healthcare", "Data Analysis"],
    github: "https://github.com/yourusername/healthcare-predictor",
    demo: "https://healthcare-predictor-demo.com",
    details: {
      overview: "This system integrates multiple machine learning models to predict various health outcomes, including disease progression, readmission rates, and treatment effectiveness. It processes structured and unstructured medical data to provide actionable insights for healthcare providers.",
      keyFeatures: [
        "Multi-model prediction system",
        "Natural language processing of medical notes",
        "Interactive visualization dashboard",
        "HIPAA-compliant data handling",
        "Automated report generation"
      ],
      challenges: [
        "Ensuring patient data privacy and HIPAA compliance",
        "Handling missing and inconsistent medical records",
        "Integrating multiple data sources and formats",
        "Developing interpretable ML models for healthcare professionals"
      ],
      timeline: {
        duration: "3 months",
        completed: "January 2024"
      }
    }
  },
  {
    id: 3,
    title: "Smart Energy Consumption",
    description: "An IoT-based energy monitoring and optimization system that helps users reduce their energy consumption through real-time analytics and smart recommendations.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    tags: ["Python", "IoT", "Time Series", "Data Visualization"],
    github: "https://github.com/yourusername/smart-energy",
    demo: "https://smart-energy-demo.com",
    details: {
      overview: "This project combines IoT sensors, time series analysis, and machine learning to provide detailed insights into energy consumption patterns. It helps users identify energy-saving opportunities and optimize their usage based on historical data and weather conditions.",
      keyFeatures: [
        "Real-time energy monitoring",
        "Predictive consumption modeling",
        "Smart device integration",
        "Cost optimization recommendations",
        "Environmental impact tracking"
      ],
      timeline: {
        duration: "4 months",
        completed: "February 2024"
      }
    }
  },
  {
    id: 4,
    title: "Natural Language Processing Tool",
    description: "A comprehensive NLP toolkit for sentiment analysis, text classification, and language understanding, built with state-of-the-art transformer models.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["Python", "PyTorch", "NLP", "Transformers"],
    github: "https://github.com/yourusername/nlp-toolkit",
    demo: "https://nlp-toolkit-demo.com",
    details: {
      overview: "This toolkit implements various NLP tasks using modern transformer architectures. It provides pre-trained models for multiple languages and supports fine-tuning for specific use cases. The system achieves state-of-the-art performance on standard benchmarks.",
      keyFeatures: [
        "Multi-language support",
        "Custom model training",
        "API endpoints for integration",
        "Advanced text preprocessing",
        "Model performance analytics"
      ],
      timeline: {
        duration: "3 months",
        completed: "March 2024"
      }
    }
  }
];
