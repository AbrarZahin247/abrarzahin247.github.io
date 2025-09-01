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
];