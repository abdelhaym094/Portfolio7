"use client";

import { useState, useRef } from "react";
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
  Code2,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import SectionHeader from "@/components/SectionHeader";

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

function ProjectCard({ project, onOpenDetails, onLaunchLive, isFeatured = false }) {
  const highlightMetric =
    project.results?.metrics?.find((m) => m.highlight) ||
    project.results?.metrics?.[0];

  return (
    <article
      className={`bg-slate-900/40 border border-white/[0.08] hover:border-cyan-500/40 rounded-2xl p-4 sm:p-5 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 h-full shadow-lg ${
        isFeatured ? "ring-1 ring-cyan-500/20" : ""
      }`}
    >
      <div>
        {/* 1. IMAGE / VISUAL HIERARCHY (Compact, Recognizable Technical Visual) */}
        <div className="h-20 sm:h-24 w-full rounded-xl bg-slate-950/80 border border-white/[0.06] p-3 flex flex-col justify-between relative overflow-hidden mb-3.5 group-hover:border-white/[0.12] transition-colors">
          {/* Subtle Ambient Telemetry Wave Graphic */}
          <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-end pr-3 overflow-hidden">
            {project.id === "solar-radiation-prediction" && (
              <svg viewBox="0 0 160 50" className="w-36 h-12 text-amber-400 stroke-current fill-none stroke-[1.5]">
                <path d="M0,40 Q30,38 50,15 T100,8 T135,35 T160,40" />
                <circle cx="80" cy="14" r="3.5" className="fill-amber-400" />
              </svg>
            )}
            {project.id === "datavision-ai" && (
              <svg viewBox="0 0 160 50" className="w-36 h-12 text-cyan-400 stroke-current fill-none stroke-[1.5]">
                <path d="M5,42 L35,22 L65,35 L95,12 L125,28 L155,8" />
                <circle cx="95" cy="12" r="3" className="fill-cyan-400" />
                <circle cx="155" cy="8" r="3" className="fill-cyan-400" />
              </svg>
            )}
            {project.id === "online-sales-dashboard" && (
              <svg viewBox="0 0 160 50" className="w-36 h-12 text-emerald-400 stroke-current fill-none stroke-[1.5]">
                <rect x="25" y="28" width="10" height="18" className="fill-emerald-400/30" />
                <rect x="45" y="20" width="10" height="26" className="fill-emerald-400/45" />
                <rect x="65" y="12" width="10" height="34" className="fill-emerald-400/60" />
                <rect x="85" y="16" width="10" height="30" className="fill-emerald-400/50" />
                <rect x="105" y="8" width="10" height="38" className="fill-emerald-400/80" />
              </svg>
            )}
            {project.id === "hotel-booking-dashboard" && (
              <svg viewBox="0 0 160 50" className="w-36 h-12 text-sky-400 stroke-current fill-none stroke-[1.5]">
                <path d="M5,42 C40,42 60,8 155,8" />
                <path d="M5,42 L155,8" strokeDasharray="3 3" opacity="0.4" />
              </svg>
            )}
            {project.id === "mobile-sentiment-analysis" && (
              <svg viewBox="0 0 160 50" className="w-36 h-12 text-purple-400 stroke-current fill-none stroke-[1.5]">
                <path d="M10,25 Q40,8 75,25 T135,25 T160,12" />
                <circle cx="75" cy="25" r="3" className="fill-purple-400" />
              </svg>
            )}
          </div>

          {/* Top Identifier Row */}
          <div className="flex items-center justify-between relative z-10">
            <span className="text-[10px] font-mono font-semibold text-slate-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block animate-pulse" />
              {project.id.replace(/-/g, "_")}
            </span>
            {isFeatured && (
              <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-cyan-300 bg-cyan-500/15 border border-cyan-500/30 px-2 py-0.5 rounded">
                Featured
              </span>
            )}
          </div>

          {/* Bottom Metric Row */}
          <div className="flex items-end justify-between relative z-10 pt-1">
            <div>
              <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-medium">
                {highlightMetric?.label || "Key Metric"}
              </span>
              <span className="text-xs sm:text-sm font-mono font-bold text-white tracking-tight">
                {highlightMetric?.value}
              </span>
            </div>
          </div>
        </div>

        {/* 2. PROJECT TITLE */}
        <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors line-clamp-2">
          {project.title}
        </h3>

        {/* 3. CATEGORY */}
        <div className="mb-2.5">
          <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 rounded-md inline-block">
            {project.category}
          </span>
        </div>

        {/* 4. SHORT DESCRIPTION */}
        <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mb-4 line-clamp-3">
          {project.oneLiner}
        </p>
      </div>

      <div>
        {/* 5. TECH TAGS (2-4 Key Technologies) */}
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

        {/* 6. ACTION: View Details (with Live App and GitHub options) */}
        <div className="flex items-center justify-between gap-2 pt-3 border-t border-white/[0.06]">
          <button
            onClick={() => onOpenDetails(project)}
            className="flex-1 min-h-[40px] bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs px-3.5 py-2 rounded-xl transition-all shadow-sm shadow-cyan-500/20 flex items-center justify-center gap-1.5 group/btn active:scale-98"
          >
            <span>View Details</span>
            <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform motion-reduce:transform-none" />
          </button>

          {project.live && (
            <button
              onClick={(e) => onLaunchLive(e, project.live)}
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
  );
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState(null);
  const [activeTab, setActiveTab] = useState("overview"); // overview | methodology | results | techStack
  const [streamlitModalUrl, setStreamlitModalUrl] = useState(null);

  // Mobile carousel tracking
  const carouselRef = useRef(null);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  const filteredProjects = projectsData.filter((p) => {
    if (selectedCategory === "All") return true;
    return p.category === selectedCategory;
  });

  const handleSelectCategory = (cat) => {
    setSelectedCategory(cat);
    setActiveMobileIndex(0);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const handleCarouselScroll = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const scrollLeft = container.scrollLeft;
    const children = Array.from(container.children);
    if (children.length === 0) return;

    const containerCenter = scrollLeft + container.offsetWidth / 2;
    let closestIndex = 0;
    let minDiff = Infinity;

    children.forEach((child, index) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const diff = Math.abs(containerCenter - childCenter);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = index;
      }
    });

    setActiveMobileIndex(closestIndex);
  };

  const scrollToProject = (index) => {
    if (!carouselRef.current) return;
    const children = carouselRef.current.children;
    if (children[index]) {
      children[index].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
      setActiveMobileIndex(index);
    }
  };

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
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-4 sm:mb-6">
          <SectionHeader
            number="01"
            eyebrow="SELECTED WORK"
            title="Featured"
            titleHighlight="Projects"
            description="Selected machine learning, AI, and data applications."
            className="mb-0"
          />

          {/* Interactive Category Tabs */}
          <div className="flex flex-wrap items-center gap-1 bg-slate-900/60 border border-white/[0.07] p-1 rounded-xl self-start sm:self-end shrink-0">
            {categoryTabs.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleSelectCategory(cat)}
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

        {/* Mobile Horizontal Swipeable Carousel (md:hidden) */}
        <div className="md:hidden w-full overflow-hidden">
          <div
            ref={carouselRef}
            onScroll={handleCarouselScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-3.5 pb-2 pt-0.5 scrollbar-none scroll-smooth items-stretch -mx-4 px-4 sm:-mx-6 sm:px-6"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="w-[84vw] max-w-[340px] shrink-0 snap-center flex flex-col"
              >
                <ProjectCard
                  project={project}
                  onOpenDetails={handleOpenDetails}
                  onLaunchLive={handleLaunchLive}
                  isFeatured={idx === 0 && selectedCategory === "All"}
                />
              </div>
            ))}
          </div>

          {/* Mobile Pagination Indicator & Nav Controls */}
          {filteredProjects.length > 1 && (
            <div className="flex items-center justify-between px-1 mt-3">
              {/* Pagination Dots */}
              <div className="flex items-center gap-1.5" role="tablist" aria-label="Project slide indicator">
                {filteredProjects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToProject(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeMobileIndex === idx
                        ? "w-5 bg-cyan-400"
                        : "w-1.5 bg-slate-700 hover:bg-slate-500"
                    }`}
                    aria-label={`Jump to project ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Progress Count & Step Buttons */}
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-slate-400">
                  <span className="text-cyan-400 font-bold">{activeMobileIndex + 1}</span>
                  <span className="text-slate-600"> / </span>
                  <span>{filteredProjects.length}</span>
                </span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => scrollToProject(activeMobileIndex - 1)}
                    disabled={activeMobileIndex === 0}
                    className="p-1.5 rounded-lg border border-white/[0.08] text-slate-400 hover:text-white disabled:opacity-25 disabled:pointer-events-none transition-colors min-h-[32px] min-w-[32px] flex items-center justify-center active:bg-white/[0.05]"
                    aria-label="Previous project"
                  >
                    <ChevronLeft size={14} />
                  </button>
                  <button
                    onClick={() => scrollToProject(activeMobileIndex + 1)}
                    disabled={activeMobileIndex === filteredProjects.length - 1}
                    className="p-1.5 rounded-lg border border-white/[0.08] text-slate-400 hover:text-white disabled:opacity-25 disabled:pointer-events-none transition-colors min-h-[32px] min-w-[32px] flex items-center justify-center active:bg-white/[0.05]"
                    aria-label="Next project"
                  >
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Desktop / Tablet Curated 2-Column Showcase Grid (hidden md:grid) */}
        <div className="hidden md:grid md:grid-cols-2 gap-4 lg:gap-5">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={handleOpenDetails}
              onLaunchLive={handleLaunchLive}
              isFeatured={idx === 0 && selectedCategory === "All"}
            />
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
