export const projects = [
  {
    title: 'Retrieval Augmented Generation - Specialized LLM',
    description: "As part of my graduation project, I am developing a retrieval-augmented generation (RAG) system designed to assist with regulatory compliance in the automotive industry. Built using the LangChain framework, the model leverages Llama 3.1 LLM, Sentence-BERT embeddings, and the Chroma vector database for efficient document retrieval and contextual understanding. Additionally, I have integrated Elasticsearch to enhance search capabilities across various documents. The model is deployed through a Django-based web interface, enabling company employees to access precise, regulation-backed answers to their queries",
      image: '/images/LLM_1.png',
      tags: ['Django', 'Llama 3.1', 'Elasticsearch', 'LangChain', 'ViteJs', 'ChromaDB'],
    source: '',
    visit: '',
    id: 0,
  },
  {
    title: 'Predictive Modeling for Homework Scores using Machine Learning',
    description:"This project involved developing a machine learning model to predict students' homework scores based on their ChatGPT interaction history. Built using Python with PyTorch and TensorFlow, the model analyzes patterns in students' queries and responses to forecast their performance on the first assignment in the course. By leveraging deep learning techniques, the model aims to identify correlations between engagement with AI tools and academic success.",
    image: '/images/PredictingHWScores.jpeg',
    tags: ['Machine Learning', 'PyTorch', 'TensorFlow'],
    source: 'https://github.com/HFyilmaz/Predicting_Homework_Scores_From_ChatGPT_History',
    visit: '',
    id: 1,
  },
  {
    title: 'Election Sentiment and Popularity Analysis in Türkiye',
    description: "This project aimed to analyze sentiment trends and political division in Türkiye leading up to the 2023 elections. Our hypothesis suggested that as the election approached, sentiment scores would decline, reflecting increased negativity such as hatred, resentment, and sadness. Using Python and machine learning, we conducted sentiment analysis on YouTube comments to quantify political content consumption and assess how negativity was distributed among candidates. We also tracked the frequency of candidate mentions over time to evaluate shifts in popularity and emotional trends toward different politicians.",
      image: '/images/SentimentAnalysis_1.png',
      tags: ['Python', 'Machine Learning'],
      source: 'https://github.com/HFyilmaz/Election_Sentiment_and_Popularity_Analysis_In_Turkiye',
    id: 2,
  },
  {
    title: 'Fitness Tracker Mobile Application',
    description: "Developed a fitness-tracking mobile application using Java and Android Studio, designed to help users monitor their workouts effectively. The app integrates MongoDB for secure storage of user workout logs, ensuring seamless data management. With a user-friendly interface, the application enables individuals to track their fitness progress over time, promoting a structured and data-driven approach to personal health and exercise.",
    image: '/images/FitnessTracker_1.png',
    tags: ['Java', 'Android Studio', 'MongoDB'],
    source: 'https://github.com/HFyilmaz/Fitness-Tracker-Android-Application-CS310-Project',
    visit: '',
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2021, text: 'Started studying Computer Science at Sabanci University', },
  { year: 2024, text: 'Working as a full-stack developer at Pragma', },
  { year: 2025, text: 'To be graduated', },
];

export const Accomplishments = [
  { number: '0.05%', text: 'Ranked in National University Exam'},
  { number: 3.87, text: 'Current Cumulative GPA', },
];
