const myWorks = [
  {
    title: "Movie Recommendation System",
    imageUrl: "images/movie_recommendation_system.PNG",
    shortDescription: "Built a robust recommendation engine from scratch using Matrix Factorization and optimized SVD to predict user ratings.",
    fullDescription: `
      <p>This project aimed to build a robust movie recommendation engine capable of predicting user ratings based on historical data from the MovieLens dataset.</p>
      
      <strong>My Approach:</strong>
      <ul>
        <li>Implemented two distinct collaborative filtering models: one using custom Matrix Factorization with gradient descent, and another leveraging a GridSearchCV-optimized SVD model.</li>
        <li>Engineered a user-movie rating matrix, effectively handling data sparsity through dimensionality reduction techniques.</li>
        <li>Conducted thorough hyperparameter tuning to balance model accuracy against overfitting risks and computational cost.</li>
      </ul>
      
      <strong>Key Results:</strong>
      <ul>
        <li>The custom implementation successfully predicted user preferences, achieving F1-scores over 0.84 for some user profiles.</li>
        <li>Demonstrated that the from-scratch model's performance was comparable to the optimized library-based SVD, showcasing a deep understanding of the underlying algorithms.</li>
      </ul>
      
      <strong>Tech Stack:</strong> Python, NumPy, Pandas, Matplotlib, scikit-surprise
    `,
    skills: ["Python", "Machine Learning", "Matrix Factorization", "SVD"],
    pdfUrl: "pdfs/EEE_6608_Movie_Recommendation_System_Report.pdf",
  },
  {
    title: "LCC Prediction for Rice Fields",
    imageUrl: "images/LCC_pics.PNG",
    shortDescription: "Developed an automated system using drone imagery and machine learning (K-Means & SVM) to optimize fertilizer usage in agriculture.",
    fullDescription: `
      <p>This project provides an automated, scalable solution for assessing nitrogen levels in rice fields, helping farmers reduce costs and environmental impact by optimizing urea usage.</p>
      
      <strong>My Approach:</strong>
      <ul>
        <li>Utilized drone imagery to capture aerial photos of rice paddies.</li>
        <li>Applied  K-Means clusteringto segment images and extract the most dominant RGB color values as features.</li>
        <li>Trained a Support Vector Machine (SVM) classifier to predict the correct Leaf Color Chart (LCC) reading based on these features.</li>
      </ul>
      
      <strong>Key Results:</strong>
      <ul>
        <li>The model achieved 100% accuracy for LCC-2 and 87.5% accuracy for LCC-3 on the test dataset.</li>
        <li>Created a system that eliminates the need for manual, time-consuming LCC readings, making precision agriculture more accessible.</li>
      </ul>
      
      <strong>Tech Stack:</strong> Python, K-Means Clustering, SVM, OpenCV
    `,
    skills: ["SVM", "K-Means", "Drone Imaging", "Python"],
    pdfUrl: "pdfs/EEE6209_Digital_Image_Processing_Report.pdf",
  },
  {
    title: "Semantic Segmentation of Drone Images",
    imageUrl: "images/image_segmentation.PNG",
    shortDescription: "Built and trained a U-Net-like model with an EfficientNet encoder to perform high-resolution semantic segmentation on aerial imagery.",
    fullDescription: `
      <p>The goal of this project was to develop a deep learning model capable of segmenting high-resolution drone imagery into 17 distinct classes, such as buildings, vegetation, and water, based on the AI Crowd Drone Image Segmentation Challenge dataset.</p>
      
      <strong>My Approach:</strong>
      <ul>
        <li>Designed a hybrid architecture combining a pre-trained EfficientNetB0 as the encoder (for powerful feature extraction) and a U-Net-style decoder (for precise localization).</li>
        <li>Implemented a complete data pipeline including image resizing, normalization, and one-hot encoding for masks using PyTorch.</li>
        <li>Trained the model for 20 epochs, targeting a high mean Intersection over Union (mIOU) score.</li>
      </ul>
      
      <strong>Key Results:</strong>
      <ul>
        <li>The model achieved a validation mIOU of 0.517, establishing a strong baseline for a complex dataset with a limited number of samples.</li>
        <li>Identified key challenges, such as spatial information loss from downsampling, and proposed future improvements like patch-based training and GANs.</li>
      </ul>
      
      <strong>Tech Stack:</strong> Python, PyTorch, Deep Learning, Semantic Segmentation, EfficientNet, U-Net
    `,
    skills: ["Deep Learning", "Segmentation", "EfficientNet", "U-Net", "PyTorch"],
    pdfUrl: "pdfs/EEE_6609_Deep_Learning_Final_Report.pdf",
  },
  {
    title: "Bangladesh Interactive GIS Portal",
    imageUrl: "images/bd_gis_portal.PNG", 
    shortDescription: "A professional full-stack spatial data application using React (Leaflet) and .NET Core 8 API to visualize Bangladesh's administrative hierarchy.",
    fullDescription: `
      <p>A professional Full-Stack Spatial Data Application designed to visualize and analyze Bangladesh's administrative hierarchy. This project bridges complex spatial data with a user-friendly interactive interface, featuring a dark-themed UI and seamless navigation.</p>
      
      <h5>My Approach:</h5>
      <ul>
        <li>Built a responsive frontend using <strong>React 18</strong> and <strong>Leaflet.js</strong> to render interactive maps with togglable Division and District layers.</li>
        <li>Engineered a robust RESTful backend using <strong>ASP.NET Core 8.0 Web API</strong> and <strong>SQLite</strong> to serve dynamic census data (Population, Literacy, Area) based on unique P-Codes.</li>
        <li>Implemented advanced GIS interactions including auto-zoom "fly-to" animations, dynamic highlighting, and real-time data fetching for region-specific popups.</li>
      </ul>
      
      <h5>Key Features & Results:</h5>
      <ul>
        <li><strong>Dual-Layer Architecture:</strong> Successfully implemented seamless switching between 8 Divisions and 64 Districts with distinctive thematic styling (Blue vs. Green).</li>
        <li><strong>Dynamic Linking:</strong> Achieved instant synchronization between GeoJSON shapes and backend database records, providing rich context on every click.</li>
      </ul>
      
      <h5>Tech Stack:</h5>
      <p>React, Leaflet.js, ASP.NET Core 8, SQLite, Entity Framework Core</p>
    `,
    skills: ["React", ".NET Core", "GIS", "Leaflet", "Full Stack"],
    pdfUrl: null,
    githubUrl: "https://github.com/AbrarZahin247/Full_Stack_BD_GISApp"
  },
  
];

const myResearch = [
  {
    title: "Lightweight Human Activity Recognition",
    imageUrl: "images/thesis_pics.PNG",
    shortDescription: "Designed and trained YOLOv5 nano-lite, a highly efficient model for real-time human action recognition on edge devices like Raspberry Pi.",
    fullDescription: `
      <p>This M.Sc. thesis proves that an object detector can be both smaller and more accurate on low-power hardware. I developed YOLOv5 nano-lite, a model designed for resource-constrained platforms.</p>
      
      <strong>My Approach:</strong>
      <ul>
        <li>Streamlined the standard YOLOv5 nano by removing redundant layers, reducing the model size to just 0.9 MB and 2.8 GFLOPs.</li>
        <li>Developed a novel three-stage training pipeline (PWPR-SFGKD) that combines pre-training, structured pruning, and focused knowledge distillation to maximize accuracy without increasing model size.</li>
      </ul>
      
      <strong>Key Results:</strong>
      <ul>
        <li>YOLOv5 nano-lite runs faster than the standard YOLOv5 nano on both edge (Raspberry Pi) and desktop hardware.</li>
        <li>The PWPR-SFGKD training pipeline boosted the standard YOLOv5 nano's accuracy from 0.643 to 0.709 mAP@50.</li>
        <li>This work demonstrates a practical methodology for creating high-performance, lightweight detectors suitable for drones or embedded systems.</li>
      </ul>
      
      <strong>Tech Stack:</strong> Python, PyTorch, YOLOv5, Model Pruning, Knowledge Distillation, Edge AI
    `,
    skills: ["Deep Learning", "YOLOv5", "Model Pruning", "Edge AI"],
    pdfUrl: "pdfs/MSc_Thesis_Md.Abrar_Zahin_compressed.pdf",
  },
  {
    title: "Groundwater Level Forecasting",
    imageUrl: "images/water_level_forecasting.PNG",
    shortDescription: "Implemented and compared GRU and LSTM models for time-series prediction of groundwater levels for environmental resource management.",
    fullDescription: `
        <p>This research focused on applying deep learning models to forecast groundwater levels, a critical task for sustainable water resource management and agricultural planning.</p>

        <strong>My Approach:</strong>
        <ul>
            <li>Processed and prepared time-series data representing historical groundwater levels.</li>
            <li>Implemented two popular Recurrent Neural Network (RNN) architectures: Gated Recurrent Unit (GRU) and Long Short-Term Memory (LSTM).</li>
            <li>Trained and evaluated both models on their ability to predict future water levels based on past trends.</li>
        </ul>

        <strong>Key Results:</strong>
        <ul>
            <li>Successfully demonstrated the viability of using RNNs for accurate hydrological forecasting.</li>
            <li>Provided a comparative analysis of the performance and computational efficiency of GRU vs. LSTM for this specific task.</li>
        </ul>
        <strong>Tech Stack:</strong> Python, TensorFlow/Keras, Time Series Analysis, RNN, LSTM, GRU
    `,
    skills: ["Time Series", "RNN", "LSTM", "GRU"],
    pdfUrl: null,
  },
  {
    title: "Zero-Inflated Rainfall Forecasting",
    imageUrl: "images/zeroinflated_rainfall.png", // Ensure you add a relevant image to your folder
    shortDescription: "Developed 'ZARQ-Net', a specialized deep learning architecture with a custom composite loss function (ZILoss) to accurately forecast rainfall in sparse, zero-dominated datasets.",
    fullDescription: `
      <p>Standard forecasting models often fail on environmental data because of "mean-collapse"—the tendency to predict safe averages instead of capturing extreme weather events. To solve this, I developed a novel framework tailored for zero-inflated (sparse) time-series data.</p>
      
      <strong>My Approach:</strong>
      <ul>
        <li><strong>New Architecture (ZARQ-Net):</strong> Designed a 1D-CNN backbone incorporating dilated convolutions for long-range dependencies and Squeeze-and-Excitation (SE) blocks for feature selection. I implemented a unique "hard gating" mechanism that decouples event detection (classification) from magnitude estimation (regression).</li>
        <li><strong>New Loss Function (ZILoss):</strong> Formulated a composite objective function that combines <em>Focal Loss</em> (to handle extreme class imbalance) with <em>Asymmetric MSE</em> (to heavily penalize under-predictions), forcing the model to learn rare rainfall spikes rather than collapsing to zero.</li>
      </ul>
      
      <strong>Key Results:</strong>
      <ul>
        <li>Achieved a perfect Q50 MSE of 0.00, effectively distinguishing true dry days from low-magnitude noise, significantly outperforming LSTM and XGBoost baselines.</li>
        <li>Eliminated the "mean-collapsing" bias, successfully capturing the timing and magnitude of sudden precipitation spikes where traditional models failed.</li>
        <li>Demonstrated a robust methodology for handling high-sparsity datasets in environmental science.</li>
      </ul>
      
      <strong>Tech Stack:</strong> Python, PyTorch, Deep Learning, 1D-CNN, Custom Loss Functions, Time-Series Analysis
    `,
    skills: ["Deep Learning", "Time-Series", "PyTorch", "Research"],
    pdfUrl: "pdfs/v2_BMD_RainFall_IEEE_Template.pdf",
  },
];

const myArticles = [
  
  {
    title: "Introduction to Large Language Models",
    imageUrl: "images/LLM_Introduction.PNG", // Recommended: Snapshot of Slide 3 (Evolution) or Slide 5 (Components)
    shortDescription: "A comprehensive technical overview of LLMs, covering the evolution from RNNs to Transformers, key architectural components, and fine-tuning strategies.",
    fullDescription: `
      <p>This presentation provides a technical deep-dive into Large Language Models (LLMs), exploring how they generate and understand text using billions of parameters trained on massive datasets.</p>
      
      <h5>Evolution & Architecture:</h5>
      <ul>
        <li>Traces the history of NLP from rule-based systems and RNNs to the modern <strong>Transformer</strong> era[cite: 199, 203, 205].</li>
        <li>Explains the critical role of the <strong>Attention Mechanism</strong> and positional encoding in enabling parallel processing and context awareness[cite: 221, 224, 226].</li>
      </ul>

      <h5>Customization & Optimization:</h5>
      <ul>
        <li>Differentiates between <strong>Foundation Models</strong> (general-purpose) and <strong>Fine-Tuned Models</strong> (domain-specific)[cite: 211, 214].</li>
        <li>Covers advanced optimization techniques including <strong>PEFT</strong> (LoRA, P-tuning) and <strong>RLHF</strong> (Reinforcement Learning from Human Feedback)[cite: 261, 262].</li>
      </ul>
      
      <h5>Challenges & Evaluation:</h5>
      <p>Discusses critical deployment challenges such as bias, interpretability, and infrastructure costs, along with evaluation benchmarks like GLUE and SuperGLUE[cite: 250, 253, 270].</p>
    `,
    skills: ["Generative AI", "NLP", "Transformers", "PEFT", "LLM"],
    pdfUrl: "pdfs/articles/LLM_nvidia_part_1.pdf", // Ensure you rename your file to this
    linkUrl: null
  },
  {
    title: "Retrieval-Augmented Generation (RAG) Pipeline",
    imageUrl: "images/RAG_Pipeline.PNG", // Recommended: Snapshot of Slide 4 (Overview) or Slide 8 (Flow)
    shortDescription: "A technical guide to RAG systems: solving LLM hallucinations by injecting external, domain-specific knowledge at runtime.",
    fullDescription: `
      <p>This presentation outlines the architecture of Retrieval-Augmented Generation (RAG), a method to fix LLM hallucinations and lack of domain knowledge without expensive fine-tuning.</p>
      
      <h5>The Core Problem:</h5>
      <ul>
        <li>LLMs often lack access to private or latest data, leading to "hallucinations" (invented answers).</li>
        <li>RAG bridges this gap by injecting relevant external context directly into the model's prompt at runtime.</li>
      </ul>

      <h5>The 3-Stage Pipeline:</h5>
      <ul>
        <li><strong>Ingestion:</strong> Converting raw documents (PDFs, text) into chunked, searchable vector embeddings stored in a Vector DB.</li>
        <li><strong>Retrieval:</strong> converting a user query into an embedding to fetch the most relevant context chunks.</li>
        <li><strong>Generation:</strong> Passing the retrieved data to the LLM to generate a grounded, fact-based answer.</li>
      </ul>
      
      <h5>Key Impact:</h5>
      <p>Transforms vague guesses (e.g., "I think accuracy is 60%") into precise, cited answers (e.g., "Accuracy is 84.2% based on internal reports").</p>
    `,
    skills: ["RAG", "LLM", "Vector DB", "System Design", "Generative AI"],
    pdfUrl: "pdfs/articles/RAG_v2.pdf", 
    linkUrl: null
  }
];