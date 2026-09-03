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
  Database,
  Sliders,
  Cpu,
  CheckCircle2,
  Layers,
  BarChart3,
  Code2
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projectsData = [
  {
    id: "solar-radiation-prediction",
    slug: "solar-radiation-prediction",
    category: "Machine Learning",
    title: "Solar Radiation Prediction Engine",
    oneLiner: "Predictive model for solar irradiance forecasting and renewable grid scheduling.",
    technologies: ["LightGBM", "CatBoost", "Scikit-Learn", "Streamlit"],
    live: "https://solar-energy-predictor.streamlit.app",
    github: "https://github.com/abdelhaym953-create",
    
    // Interactive Tab Content
    overview: {
      problem: "Solar photovoltaic generation fluctuates with cloud cover and atmospheric drift, creating utility grid imbalances and necessitating costly backup spinning reserves.",
      solution: "Engineered an end-to-end regression pipeline combining solar geometry equations with gradient-boosted decision trees (LightGBM, CatBoost) to forecast generation curves hours in advance.",
      impact: "Enables solar farm dispatchers to anticipate ramp-rate events, optimize battery charging cycles, and reduce grid balance penalties."
    },
    methodology: {
      data: "Multi-year synchronized telemetry feeds (ambient temperature, barometric pressure, relative humidity, wind speed vector).",
      featureEngineering: "Astronomical solar zenith angle, solar declination, rolling pressure drop (ΔP), and diurnal thermal differential (ΔT).",
      model: "Histogram-based gradient boosted decision trees (LightGBM) optimized with Bayesian search against CatBoost baselines.",
      validation: "Strict TimeSeriesSplit temporal forward-chaining cross-validation preventing future lookahead leakage."
    },
    results: {
      metrics: [
        { label: "Coefficient of Determination", value: "R² = 0.941", highlight: true },
        { label: "Mean Absolute Error", value: "MAE = 34.2 W/m²" },
        { label: "Inference Latency", value: "< 45 ms" },
        { label: "Validation Strategy", value: "5-Fold TimeSeriesSplit" }
      ],
      summary: "LightGBM achieved the lowest holdout MAE (34.2 W/m²) with sub-45ms single-sample inference latency, suitable for solar inverter edge stations."
    },
    techStack: [
      { name: "LightGBM", role: "Primary gradient boosted regressor with histogram-based split finding" },
      { name: "CatBoost", role: "Benchmarked boosting engine handling continuous feature interactions" },
      { name: "Scikit-Learn", role: "TimeSeriesSplit cross-validation, scaling pipelines, and evaluation metrics" },
      { name: "Streamlit", role: "Interactive parameter simulator allowing real-time scenario sweeps" }
    ]
  },
  {
    id: "datavision-ai",
    slug: "datavision-ai",
    category: "AI",
    title: "DataVision AI — Automated Analytics Assistant",
    oneLiner: "Autonomous data profiling engine paired with LLM-grounded narrative takeaways for instant tabular analysis.",
    technologies: ["LLM APIs", "Pandas", "Plotly", "Streamlit"],
    live: "https://datavision-ai-x6nywmkxc6a2fahl8c3j6z.streamlit.app",
    github: "https://github.com/abdelhaym953-create",

    overview: {
      problem: "Teams often wait days for data analyst triage to answer routine exploratory questions on tabular CSV/Excel data dumps.",
      solution: "Constructed a 2-stage hybrid architecture: Stage 1 executes deterministic statistical profiling in Python; Stage 2 passes verified distribution schemas to an LLM for grounded narrative summaries.",
      impact: "Allows non-technical product leads and operations managers to diagnose datasets in seconds without manual Jupyter notebook exploration."
    },
    methodology: {
      data: "Polymorphic ingestion engine supporting CSV, TSV, and Excel spreadsheets with automatic delimiter detection.",
      featureEngineering: "Distribution skew calculation, missingness indexing, and Pearson/Spearman correlation matrices.",
      model: "Hybrid architecture: Vectorized Python statistical computation + structured LLM narrative orchestration.",
      validation: "Deterministic guardrail: Zero calculations delegated to generative models, preventing mathematical hallucination."
    },
    results: {
      metrics: [
        { label: "Profiling Execution Time", value: "< 4 Seconds", highlight: true },
        { label: "Calculations Hallucination", value: "0% (Deterministic)" },
        { label: "Supported Formats", value: "CSV, TSV, Excel" },
        { label: "Visual Outputs", value: "Dynamic Plotly Charts" }
      ],
      summary: "Tested across 50+ diverse public datasets with zero parsing crashes and instant zero-code visual summaries."
    },
    techStack: [
      { name: "LLM Orchestration", role: "Synthesizes narrative observations and business implications from verified stats" },
      { name: "Pandas & NumPy", role: "Vectorized statistical computation, quantile estimates, and skew analysis" },
      { name: "Plotly Express", role: "Dynamic correlation heatmaps, box plots, and distribution histograms" },
      { name: "Streamlit Cloud", role: "Responsive browser deployment supporting drag-and-drop uploads" }
    ]
  },
  {
    id: "online-sales-dashboard",
    slug: "online-sales-dashboard",
    category: "Analytics & BI",
    title: "Online Sales Intelligence Dashboard",
    oneLiner: "Executive analytical dashboard consolidating transaction records into customer cohort retention and revenue velocity insights.",
    technologies: ["Pandas", "Plotly", "Streamlit", "Cohort Analysis"],
    live: "https://online-sales-dashboard-lrpcanpcvdxc67cq4gfmjj.streamlit.app",
    github: "https://github.com/abdelhaym953-create/Online-Sales-Dashboard",

    overview: {
      problem: "Disparate transaction logs leave leadership without clear visibility into customer lifetime value (LTV), repurchase decay, and product margin velocity.",
      solution: "Built a modular dimensional ETL pipeline that aggregates transactions into cohort retention matrices, calculates average order value (AOV), and renders interactive Plotly visuals.",
      impact: "Gives e-commerce operators immediate decision-grade clarity on customer acquisition health and product inventory priorities."
    },
    methodology: {
      data: "Raw multi-channel transaction records, customer account profiles, and order status histories.",
      featureEngineering: "Acquisition cohort index assignment, Month 0–12 repurchase flags, and customer LTV quantiles.",
      model: "Vectorized cohort matrix computations with dimensional aggregation by category and geography.",
      validation: "Automated data sanitation reconciling currency discrepancies and filtering test/cancelled orders."
    },
    results: {
      metrics: [
        { label: "Cohort Retention Tracking", value: "Month 0 — 12", highlight: true },
        { label: "Key Behavioral Insight", value: "M2-M3 Drop-Off Identified" },
        { label: "Data Slicing Latency", value: "Real-Time (< 100ms)" },
        { label: "Reporting Format", value: "Interactive Heatmaps" }
      ],
      summary: "Surfaced a high-value customer retention drop-off between Month 2 and Month 3, guiding targeted email re-engagement campaigns."
    },
    techStack: [
      { name: "Pandas", role: "Vectorized transactional aggregation and multi-index cohort matrix construction" },
      { name: "Plotly", role: "Interactive heatmaps, regional breakdowns, and revenue velocity charts" },
      { name: "Streamlit", role: "Responsive dark-mode UI with sidebar date-range and category filters" }
    ]
  },
  {
    id: "hotel-booking-dashboard",
    slug: "hotel-booking-dashboard",
    category: "Analytics & BI",
    title: "Hotel Booking Intelligence Dashboard",
    oneLiner: "Reservation cancellation risk classification and Average Daily Rate (ADR) dynamics for hotel revenue optimization.",
    technologies: ["LightGBM", "Plotly", "Streamlit", "Pandas"],
    live: "https://hotel-booking-intelligence-dashboard-dwejjdgwbew2dbawcyhw5x.streamlit.app",
    github: "https://github.com/abdelhaym953-create",

    overview: {
      problem: "Unanticipated hotel cancellations cause revenue leakage, staffing misallocations, and volatile occupancy rates across city and resort properties.",
      solution: "Conducted exploratory analytics and predictive risk modeling on reservation records to quantify cancellation probability factors and test ADR sensitivity corridors.",
      impact: "Empowers revenue managers to dynamically calibrate overbooking thresholds and non-refundable deposit terms."
    },
    methodology: {
      data: "Historical hotel booking records spanning arrival dates, lead times, deposit types, and room categories.",
      featureEngineering: "Non-linear lead-time buckets, previous cancellation ratios, and special request flags.",
      model: "Supervised gradient boosted classification model (LightGBM) outputting calibrated cancellation probabilities.",
      validation: "Stratified 5-fold cross-validation accounting for booking seasonalities."
    },
    results: {
      metrics: [
        { label: "Classification ROC-AUC", value: "AUC = 0.89", highlight: true },
        { label: "Primary Explanatory Driver", value: "Lead Time (>90 Days)" },
        { label: "Secondary Driver", value: "Deposit Type (Non-Refund)" },
        { label: "Simulator Feature", value: "Risk Threshold Sliders" }
      ],
      summary: "Achieved an AUC of 0.89 in predicting reservation cancellations, with lead time and deposit type proving to be the strongest explanatory drivers."
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
    title: "Mobile Sentiment Analysis Engine",
    oneLiner: "Multi-class NLP classification categorizing customer reviews with high-precision product defect keyword extraction.",
    technologies: ["CatBoost", "Scikit-Learn", "NLTK", "TF-IDF"],
    live: null,
    github: "https://github.com/abdelhaym953-create",

    overview: {
      problem: "Manual review auditing is slow and inconsistent, delaying the detection of severe customer dissatisfaction and product hardware flaws across high-volume e-commerce channels.",
      solution: "Engineered an NLP preprocessing and sublinear TF-IDF n-gram vectorization pipeline feeding into a CatBoost multiclass classifier with class-balanced weighting.",
      impact: "Enables product engineering teams to detect hardware faults (e.g. overheating, battery drain) early in the release cycle from unstructured feedback."
    },
    methodology: {
      data: "Unstructured mobile device customer reviews and rating metadata from e-commerce platforms.",
      featureEngineering: "HTML cleaning, emoji parsing, WordNet lemmatization, and sublinear n-gram TF-IDF vectorization.",
      model: "CatBoost multi-class classifier trained with categorical cross-entropy loss.",
      validation: "Stratified k-fold cross-validation with inverse class frequency weights to protect minority negative classes."
    },
    results: {
      metrics: [
        { label: "Classification Macro F1", value: "Macro F1 = 0.912", highlight: true },
        { label: "Baseline Comparison", value: "+0.098 vs Naive Bayes" },
        { label: "Feature Space", value: "Unigram + Bigram TF-IDF" },
        { label: "Key Capability", value: "Defect Keyword Extraction" }
      ],
      summary: "Achieved a balanced Macro F1 score of 0.912 across all sentiment classes, reliably surfacing hardware defect complaints."
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
  "AI",
  "Analytics & BI"
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState(null);
  const [activeTab, setActiveTab] = useState("overview"); // overview | methodology | results | techStack
  const [streamlitModalUrl, setStreamlitModalUrl] = useState(null);

  const filteredProjects = projectsData.filter((p) => {
    if (selectedCategory === "All") return true;
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
    <section id="projects" className="py-14 sm:py-18 md:py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Featured <span className="text-cyan-400">Projects</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-lg">
              Practical machine learning models, analytical pipelines, and deployed applications.
            </p>
          </div>

          {/* Interactive Category Tabs */}
          <div className="flex flex-wrap items-center gap-1 bg-slate-900/60 border border-white/[0.07] p-1 rounded-xl self-start sm:self-auto">
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

        {/* Minimal, Disciplined Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="bg-slate-900/40 border border-white/[0.08] hover:border-cyan-500/40 rounded-2xl p-5 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Category Pill */}
                <div className="mb-2.5">
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 rounded-md">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                {/* One-Line Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {project.oneLiner}
                </p>
              </div>

              <div>
                {/* 3-4 Key Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-medium text-slate-300 bg-slate-800/80 border border-white/[0.05] px-2.5 py-0.5 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions: View Details, Live App, GitHub */}
                <div className="flex items-center justify-between gap-2 pt-3 border-t border-white/[0.06]">
                  <button
                    onClick={() => handleOpenDetails(project)}
                    className="flex-1 min-h-[40px] bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs px-3.5 py-2 rounded-xl transition-all shadow-sm shadow-cyan-500/20 flex items-center justify-center gap-1.5 active:scale-98"
                  >
                    <span>View Details</span>
                    <ArrowRight size={13} />
                  </button>

                  {project.live && (
                    <button
                      onClick={(e) => handleLaunchLive(e, project.live)}
                      className="min-h-[40px] border border-white/[0.1] hover:border-amber-400/40 text-amber-300 hover:text-amber-200 bg-slate-800/50 hover:bg-slate-800 px-3 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5"
                      title="Launch live interactive app"
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
                    className="min-h-[40px] min-w-[40px] border border-white/[0.08] hover:border-white/20 text-slate-400 hover:text-white p-2 rounded-xl transition-colors bg-slate-800/40 hover:bg-slate-800 flex items-center justify-center"
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
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-[#0b101c] border border-white/[0.12] rounded-3xl max-w-2xl w-full p-5 sm:p-7 relative shadow-2xl my-6 max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-xl hover:bg-white/5 transition-colors z-10"
                aria-label="Close project modal"
              >
                <X size={18} />
              </button>

              {/* Modal Header */}
              <div className="pr-8 mb-4 shrink-0">
                <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 rounded-md inline-block mb-1.5">
                  {activeProject.category}
                </span>
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
                      className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap min-h-[38px] ${
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

              {/* Tab Content Area */}
              <div className="overflow-y-auto pr-1 flex-1 text-slate-300 text-xs sm:text-sm">
                
                {/* 1. OVERVIEW TAB */}
                {activeTab === "overview" && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15 }}
                    className="space-y-3"
                  >
                    <div className="bg-slate-950/60 border border-white/[0.06] rounded-2xl p-4">
                      <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
                        Problem
                      </span>
                      <p className="leading-relaxed text-slate-200">
                        {activeProject.overview.problem}
                      </p>
                    </div>

                    <div className="bg-slate-950/60 border border-white/[0.06] rounded-2xl p-4">
                      <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                        Solution
                      </span>
                      <p className="leading-relaxed text-slate-200">
                        {activeProject.overview.solution}
                      </p>
                    </div>

                    <div className="bg-slate-950/60 border border-white/[0.06] rounded-2xl p-4">
                      <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                        Operational Value
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
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                  >
                    <div className="bg-slate-950/60 border border-white/[0.06] rounded-2xl p-4">
                      <div className="flex items-center gap-1.5 text-cyan-400 font-bold text-xs uppercase tracking-wider mb-1.5">
                        <Database size={14} />
                        <span>Data Ingestion</span>
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        {activeProject.methodology.data}
                      </p>
                    </div>

                    <div className="bg-slate-950/60 border border-white/[0.06] rounded-2xl p-4">
                      <div className="flex items-center gap-1.5 text-amber-400 font-bold text-xs uppercase tracking-wider mb-1.5">
                        <Sliders size={14} />
                        <span>Feature Engineering</span>
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        {activeProject.methodology.featureEngineering}
                      </p>
                    </div>

                    <div className="bg-slate-950/60 border border-white/[0.06] rounded-2xl p-4">
                      <div className="flex items-center gap-1.5 text-sky-400 font-bold text-xs uppercase tracking-wider mb-1.5">
                        <Cpu size={14} />
                        <span>Model Architecture</span>
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        {activeProject.methodology.model}
                      </p>
                    </div>

                    <div className="bg-slate-950/60 border border-white/[0.06] rounded-2xl p-4">
                      <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-1.5">
                        <CheckCircle2 size={14} />
                        <span>Validation Strategy</span>
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        {activeProject.methodology.validation}
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* 3. RESULTS TAB (ONLY VERIFIED METRICS) */}
                {activeTab === "results" && (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-2 gap-2.5">
                      {activeProject.results.metrics.map((m, idx) => (
                        <div
                          key={idx}
                          className={`rounded-2xl p-3.5 border ${
                            m.highlight 
                              ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-300" 
                              : "bg-slate-950/60 border-white/[0.06] text-slate-200"
                          }`}
                        >
                          <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider block mb-1">
                            {m.label}
                          </span>
                          <span className="text-sm sm:text-base font-mono font-black text-white">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-slate-950/60 border border-white/[0.06] rounded-2xl p-4">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        Verified Outcome
                      </span>
                      <p className="leading-relaxed text-slate-200">
                        {activeProject.results.summary}
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* 4. TECH STACK TAB */}
                {activeTab === "techStack" && (
                  <motion.div
                    key="techStack"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-2.5"
                  >
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
                  </motion.div>
                )}

              </div>

              {/* Modal Footer Actions */}
              <div className="pt-4 mt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3 shrink-0">
                <Link
                  href={`/projects/${activeProject.slug}`}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 py-1"
                >
                  <span>Standalone Case Study</span>
                  <ArrowRight size={13} />
                </Link>

                <div className="flex items-center gap-2">
                  {activeProject.live && (
                    <button
                      onClick={(e) => handleLaunchLive(e, activeProject.live)}
                      className="min-h-[40px] bg-amber-400 hover:bg-amber-300 text-slate-950 px-4 py-2 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm shadow-amber-400/20"
                    >
                      <Rocket size={13} />
                      <span>Launch App</span>
                    </button>
                  )}

                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[40px] border border-white/[0.1] hover:border-white/20 bg-slate-800 text-slate-200 hover:text-white px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5"
                  >
                    <FaGithub size={14} />
                    <span>GitHub</span>
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
              transition={{ duration: 0.15 }}
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
                    Free-tier instances sleep when idle. If sleeping, Streamlit Cloud takes approximately <strong>30–45 seconds</strong> to spin up.
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
                  <span>Continue to App</span>
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
