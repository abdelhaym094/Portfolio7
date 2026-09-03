"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Rocket, 
  ExternalLink, 
  X, 
  ArrowRight, 
  Info,
  CheckCircle2,
  Cpu,
  Layers,
  BarChart3,
  Code2,
  SlidersHorizontal,
  ChevronRight,
  TrendingUp,
  Sparkles
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projectsData = [
  {
    id: "solar-radiation-prediction",
    slug: "solar-radiation-prediction",
    category: "Machine Learning",
    isFlagship: true,
    title: "Solar Radiation Prediction Engine",
    oneLiner: "Physics-informed time-series regression predicting solar irradiance for renewable energy grid scheduling.",
    metricBadge: "R² = 0.941 | MAE = 34.2 W/m²",
    keyResult: "R² = 0.941 with <45ms inference latency",
    technologies: ["LightGBM", "CatBoost", "Scikit-Learn", "Streamlit", "Python"],
    live: "https://solar-energy-predictor.streamlit.app",
    github: "https://github.com/abdelhaym953-create",
    
    // Interactive Tab Content
    overview: {
      problem: "Solar photovoltaic output fluctuates with cloud cover and atmospheric drift, causing severe electric load imbalances on regional utility grids and necessitating costly backup spinning reserves.",
      solution: "Engineered an end-to-end regression pipeline combining astronomical solar geometry equations with gradient-boosted decision trees (LightGBM, CatBoost) to anticipate generation curves hours in advance.",
      impact: "Enables solar farm dispatchers to anticipate ramp-rate events, optimize battery charging cycles, and reduce grid balance penalties."
    },
    methodology: {
      pipeline: [
        { step: "Data Ingestion", desc: "Clean and synchronize sensor feeds (Temperature, Pressure, Humidity, Wind Vector)." },
        { step: "Solar Physics Features", desc: "Calculate astronomical zenith angle, solar declination, and diurnal thermal differential (ΔT)." },
        { step: "TimeSeriesSplit CV", desc: "Strict forward-chaining cross-validation preventing temporal data leakage." },
        { step: "GBDT Optimization", desc: "Hyperparameter tuning of LightGBM histogram splitters against CatBoost baselines." }
      ],
      keyFeature: "Incorporating Solar Zenith Angle and rolling 1-hour pressure drop (ΔP) captured cloud arrival dynamics far better than raw temperature alone."
    },
    results: {
      benchmarks: [
        { name: "Linear Regression (Baseline)", mae: "68.1 W/m²", r2: "0.784" },
        { name: "Random Forest Regressor", mae: "41.5 W/m²", r2: "0.892" },
        { name: "CatBoost Regressor", mae: "35.8 W/m²", r2: "0.933" },
        { name: "LightGBM Regressor (Tuned)", mae: "34.2 W/m²", r2: "0.941", best: true }
      ],
      takeaway: "LightGBM achieved the lowest MAE (34.2 W/m²) while reducing inference latency to under 45ms, making it ideal for edge deployment at solar inverter stations."
    },
    techStack: [
      { name: "LightGBM", role: "Primary gradient boosted regressor with histogram-based split finding" },
      { name: "CatBoost", role: "Benchmarked gradient boosting engine handling continuous feature interactions" },
      { name: "Scikit-Learn", role: "TimeSeriesSplit cross-validation, scaling pipelines, and error metric scoring" },
      { name: "Streamlit & Plotly", role: "Interactive scenario simulator allowing real-time parameter sweeps in cloud" }
    ]
  },
  {
    id: "datavision-ai",
    slug: "datavision-ai",
    category: "Artificial Intelligence",
    isFlagship: true,
    title: "DataVision AI — Automated Analytics Assistant",
    oneLiner: "Autonomous data profiling engine paired with LLM-grounded narrative takeaways for instant tabular analysis.",
    metricBadge: "Zero-Config Ingestion + Sub-4s Profiling",
    keyResult: "Instant automated EDA & zero calculation hallucination",
    technologies: ["LLM APIs", "Pandas Profiling", "Plotly", "Streamlit", "Python"],
    live: "https://datavision-ai-x6nywmkxc6a2fahl8c3j6z.streamlit.app",
    github: "https://github.com/abdelhaym953-create",

    overview: {
      problem: "Business operators struggle to extract actionable insights from raw CSV/Excel dumps without waiting for data analyst triage, creating multi-day bottlenecks for routine questions.",
      solution: "Constructed a 2-stage hybrid architecture: Stage 1 executes deterministic mathematical data profiling in Python; Stage 2 feeds verified distribution schemas to an LLM for grounded narrative summaries.",
      impact: "Allows non-technical product leads and operations managers to diagnose datasets in seconds without manual Jupyter notebook exploration."
    },
    methodology: {
      pipeline: [
        { step: "Polymorphic Ingestion", desc: "Automatic encoding and delimiter detection for CSV, TSV, and Excel spreadsheets." },
        { step: "Statistical Profiling", desc: "Calculate Pearson/Spearman correlation matrices, distribution skew, and missingness patterns." },
        { step: "Schema Grounding", desc: "Abstract data metrics into a token-efficient JSON payload passed to the LLM." },
        { step: "Narrative & Chart Gen", desc: "Prompt engine generates executive takeaways and dynamic Plotly visualizations." }
      ],
      keyFeature: "Strict mathematical guardrail: all calculations happen in NumPy/Pandas first, completely preventing hallucinated numbers from generative models."
    },
    results: {
      benchmarks: [
        { name: "Manual Notebook Analysis", mae: "N/A", r2: "3.5 Hours Turnaround" },
        { name: "DataVision AI Automated", mae: "N/A", r2: "< 4 Seconds Execution", best: true }
      ],
      takeaway: "Stress-tested across 50+ diverse public datasets (finance, clinical, retail) with zero parsing crashes and instant zero-code visual summaries."
    },
    techStack: [
      { name: "LLM Orchestration", role: "Synthesizes narrative observations and business implications from verified stats" },
      { name: "Pandas & NumPy", role: "Vectorized statistical computation, quantile estimates, and skew analysis" },
      { name: "Streamlit Cloud", role: "Interactive web deployment supporting user file drag-and-drop" },
      { name: "Plotly Express", role: "Dynamic scatter plots, correlation heatmaps, and distribution histograms" }
    ]
  },
  {
    id: "online-sales-dashboard",
    slug: "online-sales-dashboard",
    category: "Business Intelligence",
    isFlagship: false,
    title: "Online Sales Intelligence Dashboard",
    oneLiner: "Executive analytical dashboard consolidating transaction records into customer cohort retention and revenue velocity insights.",
    metricBadge: "Real-Time Cohort Heatmaps & LTV",
    keyResult: "Identified Month 2-3 customer retention drop-offs",
    technologies: ["Pandas", "Plotly", "Streamlit", "Cohort Analysis", "Python"],
    live: "https://online-sales-dashboard-lrpcanpcvdxc67cq4gfmjj.streamlit.app",
    github: "https://github.com/abdelhaym953-create/Online-Sales-Dashboard",

    overview: {
      problem: "Disparate e-commerce orders, customer profiles, and shipping logs leave leadership blind to true customer lifetime value (LTV), repurchase decay, and product margin velocity.",
      solution: "Built a modular dimensional ETL pipeline that aggregates transactions into cohort retention matrices, calculates average order value (AOV) elasticity, and renders dark-mode Plotly visuals.",
      impact: "Gives e-commerce operators immediate decision-grade clarity on customer acquisition health and product inventory priorities."
    },
    methodology: {
      pipeline: [
        { step: "ETL Cleansing", desc: "Normalize timestamps, clean currency mismatches, and filter test/cancelled orders." },
        { step: "Cohort Indexing", desc: "Assign customer acquisition month indices and track subsequent monthly repurchase activity." },
        { step: "KPI Aggregation", desc: "Compute MoM revenue, average order value (AOV), and gross margins." },
        { step: "Interactive BI Layer", desc: "Build interactive drill-downs with regional heatmaps and Pareto 80/20 curves." }
      ],
      keyFeature: "Vectorized cohort matrix computations allow real-time slicing by date range and geography without database bottlenecks."
    },
    results: {
      benchmarks: [
        { name: "Static Spreadsheet Reports", mae: "N/A", r2: "Manual Weekly Updates" },
        { name: "Dynamic Streamlit BI Platform", mae: "N/A", r2: "Real-Time Slice & Dice", best: true }
      ],
      takeaway: "Surfaced a high-value customer retention drop-off between Month 2 and Month 3, guiding targeted email re-engagement campaigns."
    },
    techStack: [
      { name: "Pandas", role: "Vectorized transactional aggregation and multi-index cohort matrix construction" },
      { name: "Plotly", role: "Interactive heatmaps, regional choropleths, and revenue velocity charts" },
      { name: "Streamlit", role: "Responsive dark-mode UI with sidebar date-range and category filters" }
    ]
  },
  {
    id: "hotel-booking-dashboard",
    slug: "hotel-booking-dashboard",
    category: "Analytics & Risk",
    isFlagship: false,
    title: "Hotel Booking Intelligence Dashboard",
    oneLiner: "Reservation cancellation risk classification and Average Daily Rate (ADR) dynamics for hotel revenue optimization.",
    metricBadge: "Cancellation Model AUC = 0.89",
    keyResult: "AUC = 0.89 & non-linear lead time risk modeling",
    technologies: ["LightGBM", "Plotly", "Streamlit", "Pandas", "Python"],
    live: "https://hotel-booking-intelligence-dashboard-dwejjdgwbew2dbawcyhw5x.streamlit.app",
    github: "https://github.com/abdelhaym953-create",

    overview: {
      problem: "Unanticipated hotel cancellations cause revenue leakage, staffing misallocations, and volatile occupancy rates across city and resort properties.",
      solution: "Conducted exploratory analytics and predictive risk modeling on reservation records to quantify cancellation probability factors and test ADR sensitivity corridors.",
      impact: "Empowers revenue managers to dynamically calibrate overbooking thresholds and non-refundable deposit terms."
    },
    methodology: {
      pipeline: [
        { step: "Data Sanitation", desc: "Filter anomalous records (0 adults + 0 children) and rectify negative ADR errors." },
        { step: "Lead-Time Risk Bins", desc: "Calculate non-linear lead time distributions and previous cancellation ratios." },
        { step: "Risk Classifier", desc: "Train gradient boosted classifiers to calculate individual reservation cancellation risk." },
        { step: "Decision Tool", desc: "Deploy interactive Streamlit application with scenario simulators." }
      ],
      keyFeature: "Revealed that reservations booked >90 days in advance exhibit an exponential increase in cancellation likelihood if booked with refundable deposits."
    },
    results: {
      benchmarks: [
        { name: "Baseline Heuristic", mae: "N/A", r2: "AUC = 0.62" },
        { name: "LightGBM Risk Model", mae: "N/A", r2: "AUC = 0.89", best: true }
      ],
      takeaway: "Achieved an AUC of 0.89 in predicting reservation cancellations, with lead time and deposit type proving to be the strongest explanatory drivers."
    },
    techStack: [
      { name: "LightGBM & Scikit-Learn", role: "Supervised classification with stratified cross-validation" },
      { name: "Pandas", role: "Feature engineering, outlier detection, and quantile binning" },
      { name: "Streamlit", role: "Interactive dashboard with risk threshold adjustment sliders" }
    ]
  },
  {
    id: "mobile-sentiment-analysis",
    slug: "mobile-sentiment-analysis",
    category: "Machine Learning",
    isFlagship: false,
    title: "Mobile Sentiment Analysis Engine",
    oneLiner: "Multi-class NLP classification categorizing customer reviews with high-precision product defect keyword extraction.",
    metricBadge: "Macro F1 = 0.912 | CatBoost NLP",
    keyResult: "Macro F1 = 0.912 on imbalanced sentiment classes",
    technologies: ["CatBoost", "Scikit-Learn", "NLTK", "TF-IDF", "Python"],
    live: null,
    github: "https://github.com/abdelhaym953-create",

    overview: {
      problem: "Manual review auditing is slow and inconsistent, delaying the detection of severe customer dissatisfaction and product hardware flaws across high-volume e-commerce channels.",
      solution: "Engineered an NLP preprocessing and sublinear TF-IDF n-gram vectorization pipeline feeding into a CatBoost multiclass classifier with class-balanced weighting.",
      impact: "Enables product engineering teams to detect hardware faults (e.g. overheating, battery drain) early in the release cycle from unstructured feedback."
    },
    methodology: {
      pipeline: [
        { step: "Text Normalization", desc: "HTML stripping, emoji decoding, case folding, and contraction expansion." },
        { step: "Linguistic Tokenization", desc: "NLTK tokenization, custom stopword removal, and WordNet lemmatization." },
        { step: "N-Gram TF-IDF", desc: "Sublinear TF-IDF transformation spanning unigrams and bigrams." },
        { step: "CatBoost Classifier", desc: "Gradient boosted tree training with multi-class cross-entropy loss." }
      ],
      keyFeature: "Applied inverse class frequency weighting in CatBoost to ensure rare negative reviews receive proportional gradient updates despite severe class imbalance."
    },
    results: {
      benchmarks: [
        { name: "Multinomial Naive Bayes", mae: "N/A", r2: "Macro F1 = 0.814" },
        { name: "Logistic Regression (L2)", mae: "N/A", r2: "Macro F1 = 0.867" },
        { name: "CatBoost Classifier (Tuned)", mae: "N/A", r2: "Macro F1 = 0.912", best: true }
      ],
      takeaway: "Achieved a balanced Macro F1 score of 0.912 across all sentiment classes, reliably surfacing defect keywords with high precision."
    },
    techStack: [
      { name: "CatBoost", role: "Primary gradient boosted decision tree classifier with categorical loss weighting" },
      { name: "Scikit-Learn & NLTK", role: "Text lemmatization, stopword filtering, and TF-IDF vectorization" },
      { name: "Python", role: "Modular pipeline scripts with complete execution reproducibility" }
    ]
  }
];

const categoryTabs = [
  "All",
  "Machine Learning",
  "Artificial Intelligence",
  "Analytics & BI"
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState(null);
  const [activeTab, setActiveTab] = useState("overview"); // overview | methodology | results | techStack
  const [streamlitModalUrl, setStreamlitModalUrl] = useState(null);

  const filteredProjects = projectsData.filter((p) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Analytics & BI") {
      return p.category === "Business Intelligence" || p.category === "Analytics & Risk";
    }
    return p.category === selectedCategory;
  });

  const handleOpenDetails = (project) => {
    setActiveProject(project);
    setActiveTab("overview");
  };

  const handleLaunchLive = (e, url) => {
    e.stopPropagation();
    setStreamlitModalUrl(url);
  };

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full text-[11px] font-bold text-cyan-400 uppercase tracking-widest mb-2.5">
              <Sparkles size={12} />
              <span>Selected Work</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
              Featured <span className="text-cyan-400">Engineering Projects</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1.5 max-w-xl">
              Production-tested machine learning models, end-to-end analytical pipelines, and live deployed systems. Click &ldquo;View Details&rdquo; for interactive technical breakdown.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-900/60 border border-white/[0.06] p-1 rounded-xl self-start md:self-auto">
            {categoryTabs.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                    isSelected
                      ? "bg-cyan-500 text-slate-950 shadow-sm shadow-cyan-500/20"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className={`bg-slate-900/40 border border-white/[0.08] hover:border-cyan-500/40 rounded-2xl p-5 sm:p-6 transition-all duration-200 flex flex-col justify-between group hover:shadow-lg hover:shadow-cyan-500/5 ${
                project.isFlagship ? "md:col-span-2 bg-gradient-to-br from-slate-900/60 to-slate-950/80" : ""
              }`}
            >
              <div>
                {/* Top Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 rounded-md">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2.5 py-0.5 rounded-md">
                    {project.metricBadge.split("|")[0].trim()}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {project.oneLiner}
                </p>

                {/* Verified Outcome Strip */}
                <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-950/70 border border-white/[0.06] rounded-xl px-3.5 py-2 mb-4">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                  <span className="font-mono text-[11px] sm:text-xs text-slate-200">
                    {project.keyResult}
                  </span>
                </div>
              </div>

              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-medium text-slate-300 bg-slate-800/80 border border-white/[0.05] px-2.5 py-0.5 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[10px] font-medium text-slate-400 self-center">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between gap-2 pt-3 border-t border-white/[0.05]">
                  <button
                    onClick={() => handleOpenDetails(project)}
                    className="flex-1 min-h-[40px] bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs px-4 py-2 rounded-xl transition-all shadow-sm shadow-cyan-500/20 flex items-center justify-center gap-1.5 active:scale-98"
                  >
                    <span>View Details</span>
                    <ChevronRight size={13} />
                  </button>

                  {project.live && (
                    <button
                      onClick={(e) => handleLaunchLive(e, project.live)}
                      className="min-h-[40px] border border-white/[0.1] hover:border-amber-400/40 text-amber-300 hover:text-amber-200 bg-slate-800/50 hover:bg-slate-800 px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5"
                      title="Launch live Streamlit web app"
                    >
                      <Rocket size={13} className="text-amber-400" />
                      <span>Live App</span>
                    </button>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Source code for ${project.title}`}
                    className="min-h-[40px] min-w-[40px] border border-white/[0.08] hover:border-white/20 text-slate-400 hover:text-white p-2.5 rounded-xl transition-colors bg-slate-800/40 hover:bg-slate-800 flex items-center justify-center"
                  >
                    <FaGithub size={15} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* ==================== INTERACTIVE TABBED PROJECT DETAIL MODAL ==================== */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-[#0b101c] border border-white/[0.12] rounded-3xl max-w-2xl w-full p-5 sm:p-7 relative shadow-2xl my-8 max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-xl hover:bg-white/5 transition-colors z-10"
                aria-label="Close project modal"
              >
                <X size={20} />
              </button>

              {/* Modal Header */}
              <div className="pr-10 mb-4 shrink-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 rounded-md">
                    {activeProject.category}
                  </span>
                  <span className="text-[11px] font-mono font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2.5 py-0.5 rounded-md">
                    {activeProject.metricBadge}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {activeProject.title}
                </h3>
              </div>

              {/* Interactive Tabs Header */}
              <div className="flex items-center gap-1.5 border-b border-white/[0.08] pb-2 mb-4 overflow-x-auto scrollbar-none shrink-0">
                {[
                  { id: "overview", label: "Overview", icon: Info },
                  { id: "methodology", label: "Methodology", icon: Layers },
                  { id: "results", label: "Results", icon: BarChart3 },
                  { id: "techStack", label: "Tech Stack", icon: Code2 },
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isCurrent = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap min-h-[40px] ${
                        isCurrent
                          ? "bg-cyan-500 text-slate-950 shadow-sm shadow-cyan-500/25"
                          : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                      }`}
                    >
                      <Icon size={14} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tab Content Area (Scrollable if tall) */}
              <div className="overflow-y-auto pr-1 flex-1 text-slate-300 text-xs sm:text-sm">
                
                {/* 1. OVERVIEW TAB */}
                {activeTab === "overview" && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="bg-slate-950/60 border border-white/[0.06] rounded-2xl p-4">
                      <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
                        The Core Problem
                      </span>
                      <p className="leading-relaxed text-slate-200">
                        {activeProject.overview.problem}
                      </p>
                    </div>

                    <div className="bg-slate-950/60 border border-white/[0.06] rounded-2xl p-4">
                      <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                        The Applied Solution
                      </span>
                      <p className="leading-relaxed text-slate-200">
                        {activeProject.overview.solution}
                      </p>
                    </div>

                    <div className="bg-slate-950/60 border border-white/[0.06] rounded-2xl p-4">
                      <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                        Operational / Business Impact
                      </span>
                      <p className="leading-relaxed text-slate-200">
                        {activeProject.overview.impact}
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* 2. METHODOLOGY TAB */}
                {activeTab === "methodology" && (
                  <motion.div
                    key="methodology"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="space-y-2.5">
                      <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block">
                        Pipeline Architecture
                      </span>
                      {activeProject.methodology.pipeline.map((p, idx) => (
                        <div
                          key={idx}
                          className="bg-slate-950/60 border border-white/[0.06] rounded-xl p-3 flex items-start gap-3"
                        >
                          <span className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center text-[10px] font-mono font-bold shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <div>
                            <span className="font-bold text-white block text-xs">
                              {p.step}
                            </span>
                            <span className="text-slate-300 text-xs leading-relaxed">
                              {p.desc}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-2xl p-4 text-xs text-cyan-200 leading-relaxed flex items-start gap-2">
                      <Sparkles size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-cyan-300 block mb-0.5">Key Engineering Insight:</strong>
                        <span>{activeProject.methodology.keyFeature}</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 3. RESULTS TAB */}
                {activeTab === "results" && (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
                      Quantitative Model Benchmarks
                    </span>

                    <div className="overflow-x-auto rounded-2xl border border-white/[0.08] bg-slate-950/60">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="border-b border-white/[0.08] bg-white/[0.02] text-slate-400 text-[11px] font-mono">
                            <th className="p-3">Model Candidate</th>
                            <th className="p-3">Holdout Metric</th>
                            <th className="p-3">Score / Latency</th>
                          </tr>
                        </thead>
                        <tbody>
                          {activeProject.results.benchmarks.map((b, idx) => (
                            <tr
                              key={idx}
                              className={`border-b border-white/[0.04] last:border-0 ${
                                b.best ? "bg-cyan-500/10 text-cyan-300 font-bold" : "text-slate-300"
                              }`}
                            >
                              <td className="p-3 flex items-center gap-1.5">
                                {b.best && <CheckCircle2 size={13} className="text-cyan-400 shrink-0" />}
                                <span>{b.name}</span>
                              </td>
                              <td className="p-3 font-mono">{b.mae !== "N/A" ? `MAE: ${b.mae}` : "Evaluated Holdout"}</td>
                              <td className="p-3 font-mono">{b.r2}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="bg-slate-950/60 border border-white/[0.06] rounded-2xl p-4">
                      <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                        Empirical Summary
                      </span>
                      <p className="leading-relaxed text-slate-200">
                        {activeProject.results.takeaway}
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* 4. TECH STACK TAB */}
                {activeTab === "techStack" && (
                  <motion.div
                    key="techStack"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3"
                  >
                    <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block">
                      Production Libraries & Tools
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeProject.techStack.map((tech, idx) => (
                        <div
                          key={idx}
                          className="bg-slate-950/60 border border-white/[0.06] rounded-xl p-3"
                        >
                          <div className="font-bold text-white text-xs mb-1 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                            <span>{tech.name}</span>
                          </div>
                          <p className="text-slate-400 text-[11px] leading-relaxed">
                            {tech.role}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

              </div>

              {/* Modal Footer Actions */}
              <div className="pt-4 mt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3 shrink-0">
                <Link
                  href={`/projects/${activeProject.slug}`}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 py-1"
                >
                  <span>Open Standalone Case Study Page</span>
                  <ArrowRight size={13} />
                </Link>

                <div className="flex items-center gap-2">
                  {activeProject.live && (
                    <button
                      onClick={(e) => handleLaunchLive(e, activeProject.live)}
                      className="min-h-[40px] bg-amber-400 hover:bg-amber-300 text-slate-950 px-4 py-2 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm shadow-amber-400/20"
                    >
                      <Rocket size={13} />
                      <span>Launch Live App</span>
                    </button>
                  )}

                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[40px] border border-white/[0.1] hover:border-white/20 bg-slate-800 text-slate-200 hover:text-white px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5"
                  >
                    <FaGithub size={14} />
                    <span>GitHub Code</span>
                  </a>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ==================== STREAMLIT COLD-START MODAL ==================== */}
      <AnimatePresence>
        {streamlitModalUrl && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="bg-[#0b101c] border border-white/[0.12] rounded-2xl max-w-md w-full p-6 relative shadow-2xl"
            >
              <button
                onClick={() => setStreamlitModalUrl(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                  <Rocket size={18} />
                </div>
                <h3 className="text-base font-bold text-white">Launching Streamlit Cloud</h3>
              </div>

              <div className="bg-slate-950/80 border border-white/[0.08] rounded-xl p-3.5 mb-4 text-xs text-slate-300 leading-relaxed flex items-start gap-2.5">
                <Info size={16} className="text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white mb-1">Cold-Start Notice (Free Tier)</p>
                  <p>
                    Free-tier instances enter sleep mode when idle. If this container was asleep, Streamlit Cloud will take approximately <strong>30–45 seconds</strong> to spin up.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <a
                  href={streamlitModalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setStreamlitModalUrl(null)}
                  className="flex-1 min-h-[44px] bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm shadow-cyan-500/20"
                >
                  <span>Continue to Live App</span>
                  <ExternalLink size={13} />
                </a>
                <button
                  onClick={() => setStreamlitModalUrl(null)}
                  className="min-h-[44px] px-4 border border-white/[0.1] hover:border-white/20 text-slate-300 hover:text-white text-xs font-semibold rounded-xl transition-colors"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
