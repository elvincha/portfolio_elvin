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
    goal?: string;
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
    image: "/dog_breed.jpg",
    tags: ["Python", "TensorFlow", "Computer Vision", "Streamlit"],
    github: "https://github.com/elvincha/dog_breed_recognition",
    demo: "https://dog-breed-recognition-elvin-cha.streamlit.app/",
    details: {
      overview: "This project showcases the implementation of a deep learning model for dog breed classification. A pre-trained ResNet-50 model was fine-tuned on a dataset containing over 9,000 images of 70 different dog breeds. The dataset is available on Kaggle: https://www.kaggle.com/datasets/gpiosenka/70-dog-breedsimage-data-set?select=train. The fine-tuned model achieved an accuracy of 91% on the test set.",
      keyFeatures: [
        "Breed prediction from uploaded images",
        "Detailed breed information and characteristics",
        "Confidence scores for predictions",
        "Chat Bot integrated for questions about dog breeds",
      ],
      challenges: [
        "Handling imbalanced dataset with rare dog breeds",
        "Dog breed which are similar in appearance but different in breed",
        "LLM integration for the chat bot",
        "Dealing with varying image quality and lighting conditions"
      ],
      goal: "This project aims to leverage my computer vision skils and also to increase successful dog adoption rates by providing prospective owners with comprehensive breed-specific advice. By educating potential adopters about both the advantages and challenges associated with particular breeds, we hope to create better matches between dogs and owners, ultimately reducing abandonment rates. Our system helps prepare new owners for the realities of dog ownership, ensuring they make informed decisions that lead to lifelong companionship rather than surrendered pets.",
      timeline: {
        duration: "Unknown",
        completed: "January 2025"
      }
    }
  },
  {
    "id": 2,
    "title": "Restaurant Recommendation",
    "description": "A tool for collecting and analyzing restaurant information to help tourists decide where to eat during their trips.",
    "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    "tags": ["Python", "Web Scraping", "Data Analysis","streamlit"],
    "github": "https://github.com/elvincha/web-scrapping",
    "demo": "https://restaurant-recommendation-elvin-cha.streamlit.app/",
    "details": {
        "overview": "This project aims to create an interactive map that allows users to discover restaurants based on key criteria such as cuisine type, adresse, customer reviews. The data comes from restaurant APIs and web scraping techniques, including Playwright.",
        "keyFeatures": [
            "Cosine similarity-based recommendation system",
            "Interactive map for visualization",
            "Two recommendation options: Similarity or Location"
        ],
        "challenges": [
            "Accessing and complying with data from platforms",
            "Cleaning and managing unstructured data",
            "Optimizing recommendation using cosine similarity"
        ],
        "timeline": {
            "duration": "Unknown",
            "completed": "December 2024"
        }
    }
}/*,
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
      challenges: [
        "Ensuring patient data privacy and HIPAA compliance",
        "Handling missing and inconsistent medical records",
        "Integrating multiple data sources and formats",
        "Developing interpretable ML models for healthcare professionals"
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
  }*/
];
