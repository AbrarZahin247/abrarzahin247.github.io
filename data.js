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
    status: "Completed",
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
    title: "A Lightweight YOLO for Human Action Recognition on Resource-Constrained Devices",
    status: "Completed",
    imageUrl: "images/nano_lite_yolo_architecture.png",
    shortDescription: "IEEE paper (with Prof. Mohammad Ariful Haque, BUET) introducing YOLOv5 Nano-Lite plus two weight-redistribution training strategies, LMWP and HMWH, evaluated on 12-class aerial human-action detection.",
    fullDescription: `
      <p>A paper co-authored with my thesis advisor, Prof. Mohammad Ariful Haque (BUET), formalizing and extending the Nano-Lite work with two new training strategies aimed at squeezing more accuracy out of lightweight detectors without growing them.</p>

      <strong>Contributions:</strong>
      <ul>
        <li><strong>YOLOv5 Nano-Lite:</strong> a trimmed backbone/neck (removing the final ConvBnSiLU+C3 block and simplifying the neck to a single 80&times;80 detection scale) that cuts compute from 4.2 to 2.7 GFLOPs (-35.71%) while improving conventional-training mAP@50 by 7.28% over stock YOLOv5 Nano.</li>
        <li><strong>Low-Magnitude Weights Pruning (LMWP):</strong> zero out the lowest-magnitude weights after initial training, then fine-tune &mdash; forces the optimizer into a different weight distribution and a better local minimum.</li>
        <li><strong>High-Magnitude Weights Halving (HMWH):</strong> halve the highest-magnitude weights instead of zeroing them, to reduce a small set of dominant connections crowding out other useful ones.</li>
      </ul>

      <strong>Key Results (UAV-Action, 12 security-relevant action classes, 20,145 images):</strong>
      <ul>
        <li>LMWP raised YOLOv5 Nano's mAP@50 by up to 9.26% (80% pruning ratio); HMWH raised it by up to 7.89% (10% halving ratio) &mdash; low-magnitude weights tolerate aggressive pruning, high-magnitude weights need a much lighter touch.</li>
        <li>Nano-Lite itself benefited most from plain conventional training; LMWP/HMWH gave smaller, sometimes negative gains on Nano-Lite specifically, and the paper is explicit about this rather than glossing over it.</li>
        <li>On real hardware (Raspberry Pi 4B+ and an i5 laptop), Nano-Lite ran ~28% faster than standard Nano at the same 640px input size.</li>
      </ul>

      <strong>Tech Stack:</strong> Python, PyTorch, YOLOv5, Weight Pruning, Model Compression, Edge AI
    `,
    skills: ["Deep Learning", "YOLOv5", "Model Pruning", "Edge AI", "Research"],
    pdfUrl: "pdfs/A_Lightweight_YOLO_for_HAR_IEEE_Paper.pdf",
  },
  {
    title: "Groundwater Level Forecasting",
    status: "Completed",
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
    status: "Completed",
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
  {
    title: "Probabilistic Groundwater-Level Forecasting (Extended Study)",
    status: "Ongoing",
    imageUrl: "images/groundwater_v4_pipeline.svg",
    shortDescription: "A follow-on to the GRU/LSTM groundwater work: a 34-model benchmark plus a rigorous ablation study converging on a PatchTST variant with a Student-t distributional head for robust uncertainty on extreme readings.",
    fullDescription: `
      <p>A deeper, extended follow-up to the earlier GRU/LSTM groundwater forecasting study, run on multi-year BADC groundwater-level data (2014-2020). Instead of comparing two architectures, this phase benchmarks a much wider model zoo and uses controlled, single-variable ablations to isolate exactly which design choices actually help.</p>

      <strong>Approach So Far:</strong>
      <ul>
        <li>Benchmarked 34 models end-to-end — including XGBoost, Random Forest, LSTM, GRU, CNN-GRU, ProbLSTM, Transformer, SARIMA, TiDE, TimesNet, PINN-GRU, STGNN, and five PatchTST variants (v1-v5) — logged across multiple seeds for mean ± std comparison.</li>
        <li>Ran a component-level ablation matrix (A0-A8) that changes exactly one architectural choice at a time (e.g. anchor formulation, RevIN normalization, location embedding) against a fixed baseline, to separate real gains from run-to-run noise.</li>
        <li>Identified and fixed a scale-mismatch bug in the lag-1 anchor calculation that was silently suppressing performance across specialist model versions.</li>
        <li>Iterated a "specialist" PatchTST line (v1 through v10) built on Robust IQR RevIN instance normalization, patch embedding, and a transformer covariate encoder.</li>
      </ul>

      <strong>Current Focus:</strong>
      <ul>
        <li>Validating a Student-t distributional output head (v9), swapped in for the prior Gaussian head, specifically to handle heavy-tailed extreme readings in the 2019-2020 test set without distorting uncertainty estimates for normal readings — it improves on its own Gaussian-head baseline on every tracked metric (RMSE, MAE, R², CRPS).</li>
        <li>Being honest about where it still trails: plain PatchTST and TimesNet edge it out slightly on raw RMSE/MAE, so the current write-up frames v9's contribution precisely (robustness on outlier-heavy bands) rather than claiming a blanket state-of-the-art win.</li>
        <li>Writing up the model-comparison and ablation tables for the results section of the paper.</li>
      </ul>

      <strong>Tech Stack:</strong> Python, PyTorch, PatchTST, Transformers, XGBoost, SARIMA, TimesNet, TiDE, uncertainty-aware (Student-t) forecasting
    `,
    skills: ["Time-Series", "PatchTST", "Uncertainty Quantification", "PyTorch", "Research"],
    pdfUrl: null,
  },
  {
    title: "Offline Signature Forgery Detection",
    status: "Ongoing",
    imageUrl: "images/signature_forgery_research.svg",
    shortDescription: "Writer-independent signature verification on a 14K-image Kaggle dataset, progressing from a Siamese baseline to a CurricularFace metric-learning model, now unifying prior experiments to test a proposed dual-branch InkFuseNet.",
    fullDescription: `
      <p>Offline, writer-independent handwritten signature verification: given a few genuine reference signatures from a writer the model has never seen before, decide whether a query signature is genuine or forged. Built and evaluated on the Kaggle Signature Verification dataset (686 writers, ~14,600 genuine/forged images).</p>

      <strong>Progress So Far:</strong>
      <ul>
        <li><strong>Baseline (Siamese pair classifier, EfficientNet-B4):</strong> 95.3% validation accuracy — but validation pairs came from the same writers as training, which inflated the score; on genuinely unseen writers it drops to 74.35% accuracy (EER 25.65%, AUC 0.82).</li>
        <li><strong>Current internal best (CurricularFace metric learning, EfficientNet-B4):</strong> switching from pair classification to embedding + margin-softmax metric learning cut EER from 25.65% to 13.35% (a 48% relative improvement) and raised AUC to 0.935, evaluated on 137 held-out unseen writers.</li>
        <li>Consolidated five independent, inconsistently-configured notebooks (different image sizes, backbones, schedulers, and even a data-leakage bug in one validation protocol) into a single pipeline with shared base classes, a canonical config, and a proper writer-disjoint N-shot evaluation protocol.</li>
      </ul>

      <strong>Current Focus:</strong>
      <ul>
        <li>Implementing and validating <strong>InkFuseNet</strong>: a proposed dual-branch architecture that fuses an ink-cropped ROI view (local stroke texture) with a full-page view (global layout), plus GeM pooling and an auxiliary batch-hard triplet loss alongside CurricularFace.</li>
        <li>Running an ablation study (full model vs. ROI-only vs. full-page-only vs. no auxiliary triplet vs. no GeM) to isolate which of these proposed components actually earns its place, rather than assuming the combination helps.</li>
        <li>Testing whether ink-crop + CLAHE preprocessing — which showed the best validation EER (7.71%) on a smaller backbone in earlier notebooks — closes more of the gap to published SOTA (2-8% EER on standard benchmarks) than architecture changes alone.</li>
      </ul>

      <strong>Tech Stack:</strong> Python, PyTorch, timm, EfficientNet, CurricularFace loss, GeM pooling, metric learning
    `,
    skills: ["Computer Vision", "Metric Learning", "Signature Verification", "PyTorch", "Research"],
    pdfUrl: null,
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

const profileStats = [
  { icon: "fas fa-graduation-cap", value: "2+", label: "Years Grad Research" },
  { icon: "fas fa-project-diagram", value: "8+", label: "Projects Delivered" },
  { icon: "fas fa-file-alt", value: "6", label: "Publications" },
  { icon: "fas fa-microchip", value: "0.9MB", label: "Smallest Model Built" }
];

const skillCategories = [
  {
    category: "Languages",
    icon: "fas fa-code",
    skills: ["Python", "C#", "JavaScript", "C", "MATLAB", "SQL"]
  },
  {
    category: "ML & Deep Learning",
    icon: "fas fa-brain",
    skills: ["PyTorch", "TensorFlow", "YOLOv5", "OpenCV", "scikit-learn", "Keras", "Model Pruning", "Knowledge Distillation"]
  },
  {
    category: "Web & Full Stack",
    icon: "fas fa-globe",
    skills: ["React", ".NET Core", "ASP.NET", "Leaflet.js", "Bootstrap", "HTML/CSS", "REST APIs"]
  },
  {
    category: "Tools & Platforms",
    icon: "fas fa-tools",
    skills: ["Git", "Docker", "SQLite", "Raspberry Pi", "Edge AI", "VS Code", "Jupyter"]
  },
  {
    category: "Domain Expertise",
    icon: "fas fa-flask",
    skills: ["Computer Vision", "NLP", "Time-Series", "GIS", "Semantic Segmentation", "Object Detection", "Data Analysis"]
  }
];

const experienceTimeline = [
  {
    type: "education",
    title: "M.Sc. in Electrical & Electronic Engineering",
    institution: "Bangladesh University of Engineering and Technology (BUET)",
    period: "2022 – 2024",
    description: "Specialized in lightweight deep learning models for edge deployment. Developed YOLOv5 nano-lite for real-time human activity recognition, achieving 0.709 mAP@50 with only 0.9 MB model size.",
    highlight: "Thesis: Lightweight Human Activity Recognition using Optimized YOLOv5",
    icon: "fas fa-graduation-cap"
  },
  {
    type: "education",
    title: "B.Sc. in Electrical & Electronic Engineering",
    institution: "Chittagong University of Engineering and Technology (CUET)",
    period: "2015 – 2019",
    description: "Built foundational knowledge in embedded systems, signal processing, and machine learning. Developed an embedded health-monitoring system for underserved regions as a capstone project.",
    highlight: "Capstone: Embedded Health Monitoring System",
    icon: "fas fa-university"
  }
];