// src/data.js

export const education = [
  {
    school: "New Horizon College of Engineering",
    degree: "Bachelor of Engineering",
    field: "Computer Science",
    startDate: "August 2017",
    endDate: "May 2021",
    description: [
      "Graduated with CGPA of 9.09 out of 10",
      "Final Project: Development of a blockchain based system for energy trading in smart grids",
    ]
  }
];

export const workExperience = [
  {
    company: "IBM",
    roles: [
      {
        title: "AI Engineer",
        startDate: "October 2023",
        endDate: "Present",
        description: [
          "AI Solution Development: Developed and deployed AI solutions using the WatsonX platform to address specific client needs and challenges.",
          "Foundation Models Expertise: Focused on leveraging foundation models, including large language models, to create AI solution.",
          "Client Collaboration: Worked closely with clients to understand business needs, ensuring the solutions provided were tailored and effective.",
          "POC Development: Created and tested Proof of Concept (POC) to validate AI solutions and confirm alignment with client expectations.",
          "Industry Awareness: Stayed updated with the latest AI industry trends, especially in foundation and large language models.",
          "Technology Stack: Proficient in WatsonX, Python, TensorFlow, and PyTorch to architect and implement ML solutions."
        ]
      }
    ]
  },
  {
    company: "Oracle Health",
    roles: [
      {
        title: "Software Engineer",
        startDate: "June 2021",
        endDate: "August 2023",
        description: [
          "Healthcare Data Analysis: Developed and tested data pipelines to analyse patient health records, leading to significant improvements in healthcare provider evaluations' accuracy and efficiency.",
          "Performance Optimization: Streamlined query design within the pipeline, achieving a 90% reduction in processing time (from several days to less than a day) and enhancing overall system performance.",
          "ETL Tools and Data Efficiency: Leveraged Oracle Cerner's internal ETL tools and popular platforms like Apache Airflow and Apache Spark, accelerating client data processing and enabling early report submission (one month ahead of schedule).",
          "Software Lifecycle Management and Tech Proficiency: Skilfully utilized Git, GitHub, Crucible, and Jira for software development lifecycle management. Showcased expertise in Python, Oracle"
        ]
      }
    ]
  }
];

export const projects = [
    {
      title: "Prediction of Future Cursor Movement",
      subtitle: "Python, SciKit Learn",
      description:
        "Built a data pipeline for ECoG data analysis, achieving a 49.3% R-square, 5ms latency reduction, and identifying correlations with specific Brodmann areas.",
      image: "ecog_pred.jpg",
      link: "https://google.com",
    },
    {
      title: "Analyzing Dataset Artifacts using ELECTRA",
      subtitle: "Python, PyTorch, HuggingFace Transformers",
      description:
        "Developed an advanced NLI model with ELECTRA, achieving 88.24% accuracy, improved dataset artifact correction, created an error analysis framework, and enhanced model generalizability through diverse dataset training.",
      image: "nli.jpg",
      link: "https://google.com",
    },
    {
      title: "Autonomous Ice Hockey Agent",
      subtitle: "Python, PyTorch",
      description:
        "Developed an autonomous agent using different reinforcement learning techniques to play ice hockey in SuperTuxKart, achieving over 80% win rate.",
      image: "gokart_agent.jpg",
      link: "https://google.com",
    },
    {
      title: "Adversarial Tweet Sentiment Analysis",
      subtitle: "Python, PyTorch, HuggingFace Transformers",
      description:
        "Executed sentiment analysis on Sentiment140 using SBERT and PCA, trained a logistic regression model, identified significant predictors, and noted classification failures due to Twitter-specific slang.",
      image: "tweet_sentiment.jpg",
      link: "https://github.com/ruman-shaikh/NLP_Project_Grp_1",
    }
  ];

// Define your skills array here
export const skills = [
  "C/C++",
  "Python",
  "Java",
  "PyTorch",
  "TensorFlow",
  "SQL",
  "PySpark",
  "Hadoop",
  "Cuda",
  "Docker",
  "AWS",
  "IBM Cloud",
  "Git",
  "Linux"
];