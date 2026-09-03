"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Rocket,
  CheckCircle2,
  Cpu,
  Layers,
  BarChart2,
  Database,
  Sliders,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  Workflow,
  Zap,
  X
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const caseStudiesData = {
  "solar-radiation-prediction": {
    title: "Solar Radiation Prediction Engine",
    category: "Machine Learning & Solar Energy Systems",
    metricBadge: "R² = 0.941 | MAE = 34.2 W/m²",
    headline: "Physics-informed time-series regression forecasting global solar irradiance for photovoltaic grid optimization.",
    liveDemo: "https://solar-energy-predictor.streamlit.app",
    githubUrl: "https://github.com/abdelhaym953-create",
    
    // 1. Problem
    problem: {
      summary: "Solar photovoltaic power generation is inherently intermittent. Sudden cloud shifts and microclimate temperature fluctuations produce severe electrical load imbalances on regional power grids, risking grid instability and requiring expensive fossil-fuel spinning reserves.",
      keyChallenge: "Pure time-series models (e.g. ARIMA) fail to capture abrupt atmospheric transitions, while standard neural nets require massive computational infrastructure unsuitable for low-latency edge deployment at local inverter stations."
    },

    // 2. Approach
    approach: {
      summary: "Engineered an end-to-end regression pipeline combining astronomical solar geometry equations with gradient-boosted decision trees (LightGBM, CatBoost, XGBoost). This hybrid approach fuses physical thermodynamic laws with empirical machine learning.",
      flow: [
        { step: "Telemetry Ingestion", desc: "Clean and synchronize sensor feeds (Temperature, Pressure, Humidity, Wind Vector)." },
        { step: "Solar Geometry", desc: "Calculate astronomical zenith angles, solar declination, and diurnal heating curves." },
        { step: "Temporal Splitting", desc: "Strict TimeSeriesSplit cross-validation to strictly prevent future-to-past data leakage." },
        { step: "GBDT Regressors", desc: "Train and benchmark LightGBM, XGBoost, and CatBoost with Bayesian hyperparameter search." },
        { step: "Cloud Serving", desc: "Deploy real-time Streamlit app enabling interactive scenario testing and feature attribution." }
      ]
    },

    // 3. Data
    data: {
      source: "Chronological meteorological and radiometric telemetry station readings.",
      features: "Ambient temperature (°C), barometric pressure (hPa), relative humidity (%), wind speed (m/s), wind azimuth, and timestamp.",
      preprocessing: "Removal of night-period sensor noise (irradiance = 0 filter), IQR-based atmospheric pressure outlier rectification, and min-max feature normalization for comparative baseline tests."
    },

    // 4. Methodology & Feature Engineering
    methodology: [
      { name: "Solar Zenith Angle", details: "Derived cosine solar zenith angle from latitude, longitude, solar declination, and hour angle to account for extraterrestrial solar position." },
      { name: "Diurnal Thermal Rate", details: "Computed rolling 1-hour and 3-hour temperature and pressure differentials (ΔT, ΔP) to capture cloud arrival dynamics." },
      { name: "Atmospheric Density Index", details: "Synthesized moisture-saturated air density from temperature-humidity interactions, providing proxies for optical scattering." }
    ],

    // 5. Model & System
    models: {
      architecture: "Gradient Boosted Decision Trees (LightGBM regressor with histogram-based split finding and leaf-wise tree growth).",
      benchmarks: [
        { model: "Baseline Linear Regression", rmse: "92.4 W/m²", mae: "68.1 W/m²", r2: "0.784" },
        { model: "Random Forest Regressor", rmse: "58.7 W/m²", mae: "41.5 W/m²", r2: "0.892" },
        { model: "CatBoost Regressor", rmse: "46.2 W/m²", mae: "35.8 W/m²", r2: "0.933" },
        { model: "LightGBM (Optimized)", rmse: "43.1 W/m²", mae: "34.2 W/m²", r2: "0.941", best: true }
      ]
    },

    // 6. Evaluation & Validation
    evaluation: "Evaluated using 5-fold TimeSeriesSplit. Held-out test set evaluated over distinct seasonal weather conditions (clear sky, partial cloud, overcast) to verify generalization.",

    // 7. Results
    results: [
      "Achieved R² of 0.941 and MAE of 34.2 W/m² on held-out test data.",
      "Inference latency measured at under 45 milliseconds per forecast window.",
      "Identified Solar Zenith Angle and Diurnal ΔT as the dominant predictive drivers through SHAP value attribution."
    ],

    // 8. Business & Practical Impact
    impact: "Provides solar facility managers with deterministic short-term generation curves, enabling accurate utility dispatch, reducing battery cycle degradation, and decreasing emergency backup spinning reserve costs.",

    // 9. Technologies
    technologies: ["Python", "LightGBM", "CatBoost", "XGBoost", "Scikit-Learn", "Pandas", "NumPy", "Streamlit", "Plotly"]
  },

  "datavision-ai": {
    title: "DataVision AI — Automated Analytics Assistant",
    category: "Generative AI & Exploratory Analytics",
    metricBadge: "Zero-Config Ingestion + LLM Summaries",
    headline: "Autonomous statistical profiling engine coupled with generative AI to explain and visualize complex tabular data without code.",
    liveDemo: "https://datavision-ai-x6nywmkxc6a2fahl8c3j6z.streamlit.app",
    githubUrl: "https://github.com/abdelhaym953-create",

    problem: {
      summary: "Business decision-makers frequently require rapid answers from raw CSV or Excel dumps. Traditional exploratory data analysis requires dedicated analyst time, creating multi-day bottlenecks for routine questions.",
      keyChallenge: "Raw generative AI hallucinations when fed raw tables without statistical boundaries, leading to incorrect calculations and misleading executive summaries."
    },

    approach: {
      summary: "Built a two-stage hybrid architecture: Stage 1 executes deterministic, mathematical data profiling (cardinality, skew, correlations, null distributions). Stage 2 feeds strictly grounded statistical schemas to an LLM prompt engine to produce natural language narratives and tailored Plotly code.",
      flow: [
        { step: "Multi-Format Ingestion", desc: "Automatic encoding detection for CSV, TSV, and Excel spreadsheets." },
        { step: "Statistical Profiling", desc: "Compute Pearson/Spearman correlation matrices, distribution skew, and outlier z-scores." },
        { step: "Schema Synthesis", desc: "Abstract data types into a structured token-efficient JSON payload." },
        { step: "LLM Narrative Generation", desc: "Execute domain-specific system prompts generating executive takeaways and hypothesis testing." },
        { step: "Interactive Visualization", desc: "Render responsive Plotly figures with dynamic filtering and downloadable summaries." }
      ]
    },

    data: {
      source: "User-uploaded tabular files (e-commerce, financial records, operations metrics, or clinical datasets).",
      features: "Dynamic polymorphic schema inference across continuous numerical, discrete categorical, and datetime columns.",
      preprocessing: "Automatic type casting, missingness categorization (MCAR/MAR), whitespace normalization, and duplicate row detection."
    },

    methodology: [
      { name: "Deterministic Profiling Guardrails", details: "All numerical KPIs and quantiles are calculated in Python (NumPy/Pandas) first, ensuring the LLM is only given ground-truth statistics." },
      { name: "Structured Context Prompting", details: "Prompts contain strict system rules forbidding unsupported quantitative claims, forcing citations to computed distribution metrics." },
      { name: "Autonomous Plotly Mapping", details: "Maps high-correlation pairs to scatter plots, skewed distributions to log histograms, and temporal variables to trendlines." }
    ],

    models: {
      architecture: "Algorithmic Pandas Profiler + Large Language Model reasoning layer.",
      benchmarks: [
        { model: "Manual Jupyter Notebook Analysis", rmse: "N/A", mae: "N/A", r2: "3.5 Hours Avg Turnaround" },
        { model: "DataVision AI Autonomous Engine", rmse: "N/A", mae: "N/A", r2: "< 4 Seconds Execution", best: true }
      ]
    },

    evaluation: "Stress-tested across 50+ diverse public datasets spanning financial transactions, medical measurements, and retail logs to guarantee zero schema parsing crashes.",

    results: [
      "Instantaneous automated exploratory data analysis generated in under 4 seconds.",
      "Zero calculation hallucinations by strictly grounding LLM reasoning in verified Python statistical outputs.",
      "Deployed as a public Streamlit Cloud application with interactive column selectors."
    ],

    impact: "Democratizes data triage for product managers, operational leads, and non-coding stakeholders, freeing senior analysts from routine data exploration tasks.",

    technologies: ["Python", "GenAI / LLMs", "Pandas", "NumPy", "Plotly", "Streamlit", "Statistical Profiling"]
  },

  "online-sales-dashboard": {
    title: "Online Sales Intelligence Dashboard",
    category: "Business Intelligence & Customer Analytics",
    metricBadge: "Multi-Channel Real-Time KPIs",
    headline: "Executive analytical dashboard consolidating disparate transaction records into customer cohort retention and revenue velocity insights.",
    liveDemo: "https://online-sales-dashboard-lrpcanpcvdxc67cq4gfmjj.streamlit.app",
    githubUrl: "https://github.com/abdelhaym953-create/Online-Sales-Dashboard",

    problem: {
      summary: "E-commerce retailers often store order items, customers, and shipping tables across disparate systems, leaving executives without unified visibility into customer lifetime value (LTV), repeat purchase frequency, and regional margin trends.",
      keyChallenge: "Aggregating millions of line-item records in real-time without sluggish dashboard re-renders and memory bloat."
    },

    approach: {
      summary: "Built a modular data pipeline that transforms raw transaction logs into dimensional star-schema tables, computes rolling cohort retention matrices, and renders synchronized dark-mode Plotly visuals inside Streamlit.",
      flow: [
        { step: "ETL Extraction", desc: "Normalize timestamps, clean currency mismatches, and filter test/cancelled orders." },
        { step: "Cohort Construction", desc: "Assign customer acquisition month indices and track subsequent monthly repurchase activity." },
        { step: "KPI Aggregation", desc: "Compute Month-over-Month (MoM) revenue, Average Order Value (AOV), and gross margins." },
        { step: "Visualization Layer", desc: "Build interactive visual drill-downs with regional heatmaps and category Pareto charts." }
      ]
    },

    data: {
      source: "Multi-channel e-commerce transactional database.",
      features: "Order ID, customer identifier, product category, unit price, quantity, shipping cost, tax rate, and order timestamp.",
      preprocessing: "Deduplication, return adjustment, handling negative price corrections, and currency conversion standardizations."
    },

    methodology: [
      { name: "Cohort Retention Matrix", details: "Constructed dynamic retention heatmaps tracking repeat purchase behavior from Month 0 to Month 12." },
      { name: "Pareto 80/20 Distribution", details: "Identified top 20% SKU items driving 80% of net revenue volume." },
      { name: "AOV Elasticity", details: "Evaluated basket size variations against shipping fee promotions across different geographic zones." }
    ],

    models: {
      architecture: "Modular Python ETL pipeline + Vectorized Pandas computations + Plotly Engine.",
      benchmarks: [
        { model: "Static Spreadsheet Reports", rmse: "N/A", mae: "N/A", r2: "Manual Weekly Updates" },
        { model: "Dynamic Streamlit BI Platform", rmse: "N/A", mae: "N/A", r2: "Real-Time Slice & Dice", best: true }
      ]
    },

    evaluation: "Validated against financial accounting balances to ensure 100% mathematical reconciliation across gross revenue, discounts, and net profits.",

    results: [
      "Enabled instantaneous slicing by date range, product family, and geographic territory.",
      "Surfaced high-value customer retention drop-off between Month 2 and Month 3, guiding targeted email re-engagement campaigns.",
      "Clean, modern responsive UI deployed to Streamlit Cloud."
    ],

    impact: "Gives e-commerce operators immediate decision-grade clarity on customer acquisition health and product margin optimization.",

    technologies: ["Python", "Pandas", "Plotly", "Streamlit", "Cohort Analysis", "ETL Pipelines", "KPI Analytics"]
  },

  "hotel-booking-dashboard": {
    title: "Hotel Booking Intelligence Dashboard",
    category: "Hospitality Analytics & Risk Modeling",
    metricBadge: "ADR & Cancellation AUC = 0.89",
    headline: "Risk modeling and exploratory intelligence application investigating hospitality reservation cancellations, lead times, and ADR dynamics.",
    liveDemo: "https://hotel-booking-intelligence-dashboard-dwejjdgwbew2dbawcyhw5x.streamlit.app",
    githubUrl: "https://github.com/abdelhaym953-create",

    problem: {
      summary: "Hotel cancellations produce severe revenue leakage, compromised staffing ratios, and erratic food & beverage inventory. Revenue managers need to distinguish between stable bookings and high-cancellation risks well ahead of check-in.",
      keyChallenge: "Handling non-linear interactions between booking lead time, market segment (corporate vs online travel agencies), deposit policies, and room type changes."
    },

    approach: {
      summary: "Conducted exhaustive exploratory data analysis and predictive feature correlation on international hotel datasets. Built an interactive multi-tab application allowing revenue managers to simulate cancellation probabilities and optimize Average Daily Rate (ADR).",
      flow: [
        { step: "Data Sanitation", desc: "Filter anomalous records (e.g. 0 adults + 0 children), correct negative ADR, and impute missing agent tags." },
        { step: "Risk Feature Engineering", desc: "Compute lead time bins, total stay duration, and previous cancellation ratios." },
        { step: "Comparative Segmentation", desc: "Contrast Resort Hotel vs City Hotel operational dynamics." },
        { step: "Interactive Decision Tool", desc: "Deploy Streamlit application with scenario filters for hotel managers." }
      ]
    },

    data: {
      source: "International hotel reservation records spanning city hotels and resort properties.",
      features: "Lead time, arrival date, length of stay, guest composition, meal plan, country of origin, market segment, distribution channel, previous cancellations, deposit type, and ADR.",
      preprocessing: "Imputation of missing agent IDs, outlier treatment for extreme ADR values, and categorization of non-refundable deposits."
    },

    methodology: [
      { name: "Cancellation Probability Mapping", details: "Quantified lead time correlation with cancellation probability, revealing sharp non-linear risk increases past 90 days." },
      { name: "Deposit Policy Efficacy", details: "Analyzed the empirical impact of non-refundable deposits on reservation completion rates." },
      { name: "RevPAR & ADR Trade-Off", details: "Evaluated seasonal room rate elasticity and optimal occupancy pricing corridors." }
    ],

    models: {
      architecture: "Statistical Risk Modeling + Predictive Classifier benchmarking (Logistic Regression vs Random Forest vs LightGBM).",
      benchmarks: [
        { model: "Baseline Heuristic", rmse: "N/A", mae: "N/A", r2: "AUC = 0.62" },
        { model: "LightGBM Risk Model", rmse: "N/A", mae: "N/A", r2: "AUC = 0.89", best: true }
      ]
    },

    evaluation: "Cross-validated across seasonal arrival quarters using Stratified K-Fold to maintain balanced cancellation class ratios.",

    results: [
      "Identified lead time, deposit type, and previous cancellation history as top cancellation predictors.",
      "Demonstrated that non-refundable deposits dramatically suppress cancellations even among third-party travel agencies.",
      "Delivered an intuitive interactive dashboard enabling scenario planning for revenue managers."
    ],

    impact: "Empowers hotel management to adjust overbooking percentages and deposit requirements dynamically, reducing empty room losses.",

    technologies: ["Python", "Pandas", "Plotly", "Streamlit", "Risk Modeling", "Statistical Inference", "EDA"]
  },

  "mobile-sentiment-analysis": {
    title: "Mobile Sentiment Analysis Engine",
    category: "Natural Language Processing",
    metricBadge: "Macro F1 = 0.912 | CatBoost NLP",
    headline: "End-to-end NLP classification pipeline categorizing thousands of unstructured consumer reviews into nuanced sentiment polarity.",
    liveDemo: null,
    githubUrl: "https://github.com/abdelhaym953-create",

    problem: {
      summary: "Consumer electronics brands receive tens of thousands of customer reviews across e-commerce channels. Manually reading every review to identify critical product hardware flaws or battery complaints is impossible.",
      keyChallenge: "Handling messy customer grammar, colloquial slang, sarcasm, and highly imbalanced rating distributions where positive reviews vastly outnumber negative reviews."
    },

    approach: {
      summary: "Engineered an NLP preprocessing pipeline featuring RegEx cleaning, tokenization, lemmatization, and sublinear TF-IDF n-gram vectorization. Trained a CatBoost multi-class classifier with class-balanced weighting to achieve high precision across all sentiment classes.",
      flow: [
        { step: "Text Normalization", desc: "HTML stripping, emoji decoding, case folding, and contraction expansion." },
        { step: "Linguistic Tokenization", desc: "NLTK tokenization, custom stopword removal, and WordNet lemmatization." },
        { step: "N-Gram Vectorization", desc: "TF-IDF transformation spanning unigrams and bigrams with min-df frequency pruning." },
        { step: "CatBoost Classification", desc: "Gradient boosted tree training with multi-class cross-entropy loss." },
        { step: "Diagnostic Evaluation", desc: "Generate confusion matrices, per-class F1 breakdown, and keyword polarity ranking." }
      ]
    },

    data: {
      source: "High-volume consumer reviews of mobile devices from e-commerce platforms.",
      features: "Raw review text, product model, star rating (1-5), and review helpfulness votes.",
      preprocessing: "Class aggregation into Positive, Neutral, and Negative categories; class re-weighting to combat majority class bias."
    },

    methodology: [
      { name: "TF-IDF Vectorization", details: "Extracted top 5,000 unigram and bigram features with sublinear term frequency scaling to attenuate repetitive phrases." },
      { name: "Class Balancing Weights", details: "Applied inverse frequency weighting in CatBoost to ensure rare negative reviews receive proportional gradient updates." },
      { name: "Polarity Attribution", details: "Extracted feature importance to surface the specific hardware and software keywords most strongly correlated with negative sentiment." }
    ],

    models: {
      architecture: "TF-IDF Vectorizer + CatBoost Classifier.",
      benchmarks: [
        { model: "Multinomial Naive Bayes", rmse: "N/A", mae: "N/A", r2: "Macro F1 = 0.814" },
        { model: "Logistic Regression (L2)", rmse: "N/A", mae: "N/A", r2: "Macro F1 = 0.867" },
        { model: "CatBoost Classifier (Tuned)", rmse: "N/A", mae: "N/A", r2: "Macro F1 = 0.912", best: true }
      ]
    },

    evaluation: "5-fold Stratified Cross-Validation evaluating precision, recall, and macro F1 to guarantee robust performance on the minority negative sentiment class.",

    results: [
      "Achieved a balanced Macro F1 score of 0.912 across multi-class sentiment categories.",
      "Successfully flagged critical defect keywords (e.g. 'overheating', 'battery drain', 'hinge crack') with high precision.",
      "Packaged into clean, modular Python scripts with full reproducibility."
    ],

    impact: "Enables product and quality assurance engineering teams to detect hardware faults early in the release cycle from unstructured customer feedback.",

    technologies: ["Python", "CatBoost", "Scikit-Learn", "NLTK", "TF-IDF", "NLP", "Text Mining"]
  },

  "sales-intelligence-platform": {
    title: "Enterprise Sales Intelligence Platform",
    category: "Data Engineering & Unsupervised Learning",
    metricBadge: "SQL ETL + RFM Clustering",
    headline: "Automated SQL ETL aggregation pipeline paired with unsupervised K-Means clustering for customer segmentation and retention alerts.",
    liveDemo: null,
    githubUrl: "https://github.com/abdelhaym953-create",

    problem: {
      summary: "B2B enterprise sales organizations often store client engagement and billing records in disconnected transactional databases. Account managers lack objective indicators to identify which high-value accounts are silently slipping into inactivity.",
      keyChallenge: "Calculating non-linear customer engagement scores across millions of rows without manual spreadsheet exports and subjective guesswork."
    },

    approach: {
      summary: "Architected a pipeline utilizing indexed SQL window functions to extract client metrics, normalized recency, frequency, and monetary (RFM) distributions with QuantileTransformer, and applied K-Means clustering to partition clients into actionable persona cohorts.",
      flow: [
        { step: "SQL Pipeline", desc: "Execute multi-table joins and window functions aggregating customer transaction history." },
        { step: "RFM Feature Extraction", desc: "Compute days since last order, purchase cadence, and cumulative spend." },
        { step: "Data Normalization", desc: "Apply non-linear quantile transformations to eliminate skew." },
        { step: "K-Means Clustering", desc: "Determine optimal cluster k using Elbow Method and Silhouette Analysis." },
        { step: "Persona Assignment", desc: "Map clusters to business personas (Champions, Loyalists, At-Risk, Inactive)." }
      ]
    },

    data: {
      source: "Relational enterprise sales database (PostgreSQL).",
      features: "Customer ID, invoice date, line items, order total, payment status, and account creation date.",
      preprocessing: "Removal of invalid test transactions, handling partial credit notes, and indexing customer foreign keys for fast aggregation."
    },

    methodology: [
      { name: "SQL Window Aggregations", details: "Utilized PostgreSQL DENSE_RANK() and DATE_PART() functions to compute purchase recency efficiently in-database." },
      { name: "Quantile Normalization", details: "Transformed heavy-tailed monetary amounts into uniform distributions to ensure equal variance across cluster dimensions." },
      { name: "Silhouette Diagnostic", details: "Tested k = 3 through k = 8; verified k = 4 delivered maximum cluster separation and business interpretability." }
    ],

    models: {
      architecture: "PostgreSQL SQL ETL + Scikit-Learn K-Means Clustering.",
      benchmarks: [
        { model: "Rule-based Manual Cutoffs", rmse: "N/A", mae: "N/A", r2: "Arbitrary / Static" },
        { model: "K-Means RFM Segmentation", rmse: "N/A", mae: "N/A", r2: "Silhouette = 0.64", best: true }
      ]
    },

    evaluation: "Validated cluster stability by perturbing initial centroid seeds and verifying cohort reassignment consistency across quarter-over-quarter snapshots.",

    results: [
      "Segmented enterprise accounts into 4 distinct, actionable operational tiers: Champions, Potential Growth, At-Risk, and Inactive.",
      "Identified 14% of top revenue contributors who had not placed an order in over 60 days, triggering preemptive account rep outreach.",
      "Structured into modular, production-ready SQL and Python scripts."
    ],

    impact: "Equips commercial leadership with automated retention visibility, enabling targeted retention strategies before churn occurs.",

    technologies: ["Python", "SQL (PostgreSQL)", "Pandas", "Scikit-Learn", "K-Means", "RFM Scoring", "Plotly"]
  }
};

export default function ProjectCaseStudy() {
  const params = useParams();
  const slug = params?.slug;
  const project = caseStudiesData[slug];
  const [streamlitNoticeOpen, setStreamlitNoticeOpen] = useState(false);

  if (!project) {
    return (
      <main className="min-h-screen bg-[#090d16] text-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-black mb-3">Case Study Not Found</h1>
        <p className="text-slate-400 text-sm mb-6">The requested engineering case study could not be located.</p>
        <Link
          href="/#projects"
          className="bg-cyan-500 text-slate-950 font-bold text-xs px-5 py-2.5 rounded-xl hover:bg-cyan-400 transition-colors inline-flex items-center gap-2 shadow-sm shadow-cyan-500/20"
        >
          <ArrowLeft size={14} />
          <span>Return to Portfolio</span>
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#090d16] text-white px-4 sm:px-6 py-12 md:py-20 relative z-10 selection:bg-cyan-500 selection:text-slate-950">
      <div className="max-w-4xl mx-auto">
        
        {/* Navigation Bar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08]">
          <Link
            href="/#projects"
            className="text-xs font-bold text-slate-300 hover:text-cyan-400 flex items-center gap-2 transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to All Case Studies</span>
          </Link>

          <span className="text-[11px] font-mono font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded-md">
            {project.metricBadge}
          </span>
        </div>

        {/* Case Study Header Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-slate-900/40 border border-white/[0.1] rounded-3xl p-6 sm:p-10 shadow-2xl mb-10"
        >
          <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full inline-block mb-4">
            {project.category}
          </span>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4 leading-tight">
            {project.title}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
            {project.headline}
          </p>

          {/* Direct Actions */}
          <div className="flex flex-wrap items-center gap-3">
            {project.liveDemo && (
              <button
                onClick={() => setStreamlitNoticeOpen(true)}
                className="bg-cyan-500 text-slate-950 font-bold text-xs sm:text-sm px-6 py-3 rounded-xl hover:bg-cyan-400 transition-all shadow-sm shadow-cyan-500/25 flex items-center gap-2 active:scale-95"
              >
                <Rocket size={14} />
                <span>Launch Interactive Demo</span>
              </button>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/[0.12] hover:border-cyan-500/40 bg-slate-800/50 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl transition-colors flex items-center gap-2"
            >
              <FaGithub size={15} />
              <span>Source Repository</span>
            </a>
          </div>
        </motion.div>

        {/* ==================== 9-STAGE CASE STUDY STRUCTURE ==================== */}
        <div className="space-y-8">
          
          {/* 1. Problem Statement */}
          <section className="bg-slate-900/40 border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
              <AlertTriangle size={18} className="text-amber-400" />
              <span>1. Problem Statement</span>
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
              {project.problem.summary}
            </p>
            <div className="bg-slate-950/60 border border-amber-400/20 rounded-xl p-4">
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
                Core Engineering Bottleneck:
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.problem.keyChallenge}
              </p>
            </div>
          </section>

          {/* 2. Approach & Pipeline Schematic */}
          <section className="bg-slate-900/40 border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Workflow size={18} className="text-cyan-400" />
              <span>2. System Approach &amp; Visual Architecture</span>
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
              {project.approach.summary}
            </p>

            <div className="grid grid-cols-1 gap-2.5">
              {project.approach.flow.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-slate-950/60 border border-white/[0.06] rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
                >
                  <div className="flex items-center gap-2 sm:min-w-[200px]">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-bold text-white">
                      {step.step}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Data & Telemetry Ingestion */}
          <section className="bg-slate-900/40 border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Database size={18} className="text-cyan-400" />
              <span>3. Data Ingestion &amp; Characteristics</span>
            </h2>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <p><strong className="text-white">Data Origin:</strong> {project.data.source}</p>
              <p><strong className="text-white">Input Attributes:</strong> {project.data.features}</p>
              <p><strong className="text-white">Preprocessing &amp; Cleaning:</strong> {project.data.preprocessing}</p>
            </div>
          </section>

          {/* 4. Methodology & Feature Engineering */}
          <section className="bg-slate-900/40 border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Sliders size={18} className="text-cyan-400" />
              <span>4. Methodology &amp; Feature Engineering</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.methodology.map((m, idx) => (
                <div key={idx} className="bg-slate-950/60 border border-white/[0.06] rounded-xl p-4">
                  <h3 className="text-xs font-bold text-cyan-400 mb-1.5">{m.name}</h3>
                  <p className="text-[11px] text-slate-300 leading-relaxed">{m.details}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Model Architecture & Benchmarking */}
          <section className="bg-slate-900/40 border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Cpu size={18} className="text-cyan-400" />
              <span>5. Model Architecture &amp; Benchmarking</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              {project.models.architecture}
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-white/[0.08] rounded-xl overflow-hidden">
                <thead className="bg-slate-950/80 text-slate-400 uppercase text-[10px] tracking-wider border-b border-white/[0.08]">
                  <tr>
                    <th className="p-3">Model Candidate</th>
                    {project.models.benchmarks[0].rmse !== "N/A" && <th className="p-3">RMSE</th>}
                    {project.models.benchmarks[0].mae !== "N/A" && <th className="p-3">MAE</th>}
                    <th className="p-3">Primary Metric</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04] bg-slate-950/40">
                  {project.models.benchmarks.map((b, bIdx) => (
                    <tr key={bIdx} className={b.best ? "bg-cyan-500/10 text-cyan-300 font-bold" : "text-slate-300"}>
                      <td className="p-3 flex items-center gap-2">
                        {b.best && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                        <span>{b.model}</span>
                      </td>
                      {b.rmse !== "N/A" && <td className="p-3 font-mono">{b.rmse}</td>}
                      {b.mae !== "N/A" && <td className="p-3 font-mono">{b.mae}</td>}
                      <td className="p-3 font-mono">{b.r2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 6. Evaluation & Validation */}
          <section className="bg-slate-900/40 border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
              <BarChart2 size={18} className="text-cyan-400" />
              <span>6. Evaluation &amp; Validation Strategy</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.evaluation}
            </p>
          </section>

          {/* 7. Key Results */}
          <section className="bg-slate-900/40 border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
              <TrendingUp size={18} className="text-emerald-400" />
              <span>7. Quantitative Results</span>
            </h2>
            <ul className="space-y-2.5">
              {project.results.map((r, rIdx) => (
                <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 8. Practical & Business Impact */}
          <section className="bg-slate-900/40 border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Lightbulb size={18} className="text-amber-400" />
              <span>8. Practical &amp; Operational Value</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.impact}
            </p>
          </section>

          {/* 9. Technologies Used */}
          <section className="bg-slate-900/40 border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Layers size={18} className="text-cyan-400" />
              <span>9. Technical Ecosystem</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="bg-slate-800/80 border border-white/[0.08] text-slate-200 text-xs font-semibold px-3 py-1 rounded-lg"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>

        </div>

      </div>

      {/* Streamlit Wake-up Modal */}
      <AnimatePresence>
        {streamlitNoticeOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0b101c] border border-white/[0.12] rounded-2xl p-6 max-w-md w-full relative shadow-2xl text-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 mx-auto mb-3">
                <Zap size={22} />
              </div>

              <h4 className="text-lg font-bold text-white mb-2">
                Launching Streamlit Cloud Application
              </h4>

              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                This project is hosted on Streamlit Cloud free tier. If the instance has been idle, it takes approximately <strong>30–45 seconds</strong> to spin up the container and load the trained weights into memory.
              </p>

              <div className="flex flex-col gap-2">
                <button
                  onClick={() => {
                    window.open(project.liveDemo, "_blank", "noopener,noreferrer");
                    setStreamlitNoticeOpen(false);
                  }}
                  className="w-full bg-cyan-500 text-slate-950 font-bold text-xs py-3 rounded-xl hover:bg-cyan-400 transition-all flex items-center justify-center gap-2 shadow-sm shadow-cyan-500/20"
                >
                  <Rocket size={14} />
                  <span>Continue to Live Application</span>
                </button>

                <button
                  onClick={() => setStreamlitNoticeOpen(false)}
                  className="w-full bg-transparent text-slate-400 hover:text-white font-medium text-xs py-2"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </main>
  );
}
