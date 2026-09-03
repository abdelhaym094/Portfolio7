"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BrainCircuit, 
  Database, 
  BarChart3, 
  TerminalSquare, 
  Sparkles
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const skillCategories = [
  {
    id: "ml",
    title: "Machine Learning",
    shortTitle: "ML",
    badge: "Supervised & Gradient Boosting",
    icon: BrainCircuit,
    description: "Building gradient-boosted decision trees, ensemble pipelines, and strict temporal validation frameworks.",
    technologies: [
      {
        name: "LightGBM",
        role: "Primary GBDT engine with histogram splitters for high-speed tabular regression",
        type: "Algorithm"
      },
      {
        name: "CatBoost",
        role: "Gradient boosting with native categorical handling and symmetric oblivious trees",
        type: "Algorithm"
      },
      {
        name: "XGBoost",
        role: "Regularized extreme gradient boosting for structured benchmarks and competitions",
        type: "Algorithm"
      },
      {
        name: "Scikit-Learn",
        role: "Cross-validation pipelines, feature scalers, metrics evaluation, and baseline models",
        type: "Framework"
      },
      {
        name: "TimeSeriesSplit",
        role: "Temporal forward-chaining cross-validation strictly preventing future lookahead leakage",
        type: "Validation"
      },
      {
        name: "Ensemble Modeling",
        role: "Voting regressors, weighted blending, and stacking for variance reduction",
        type: "Architecture"
      }
    ]
  },
  {
    id: "data-science",
    title: "Data Science",
    shortTitle: "Data",
    badge: "Statistical Profiling & ETL",
    icon: Database,
    description: "Vectorized manipulation, dimensional modeling, and statistical feature engineering on multi-channel records.",
    technologies: [
      {
        name: "Python",
        role: "Core programming language for numerical data structures and model execution",
        type: "Language"
      },
      {
        name: "Pandas",
        role: "High-performance vectorized dataframe manipulation, joins, pivots, and cohort grids",
        type: "Data Wrangling"
      },
      {
        name: "NumPy",
        role: "Vectorized linear algebra, multi-dimensional array math, and physical equations",
        type: "Math Engine"
      },
      {
        name: "PostgreSQL & SQL",
        role: "Relational database queries, window functions, and aggregation indexing",
        type: "Database"
      },
      {
        name: "Feature Engineering",
        role: "Domain-specific physical feature synthesis (solar angles, pressure drops, rolling lags)",
        type: "Methodology"
      },
      {
        name: "Statistical EDA",
        role: "Hypothesis testing, skew analysis, correlation mapping, and outlier isolation",
        type: "Statistics"
      }
    ]
  },
  {
    id: "ai-llm",
    title: "AI & LLM",
    shortTitle: "AI",
    badge: "Hybrid Systems & NLP",
    icon: Sparkles,
    description: "Combining deterministic mathematical profiling with large language models and natural language processing.",
    technologies: [
      {
        name: "LLM Orchestration",
        role: "Connecting programmatic statistical schemas to Gemini and OpenAI API endpoints",
        type: "GenAI"
      },
      {
        name: "Deterministic Guardrails",
        role: "Pre-computing all numerical stats in Python so LLMs cannot hallucinate calculations",
        type: "Architecture"
      },
      {
        name: "NLP & TF-IDF",
        role: "Sublinear n-gram frequency extraction, text preprocessing, and tokenization",
        type: "NLP"
      },
      {
        name: "Sentiment Classification",
        role: "Multi-class NLP classifiers identifying sentiment polarity and defect keywords",
        type: "Modeling"
      },
      {
        name: "NLTK & Text Mining",
        role: "Stopword filtration, WordNet lemmatization, and RegEx cleaning pipelines",
        type: "Text Processing"
      }
    ]
  },
  {
    id: "viz-bi",
    title: "Visualization & BI",
    shortTitle: "BI",
    badge: "Interactive Decision Tools",
    icon: BarChart3,
    description: "Designing responsive, intuitive dashboards where operators and stakeholders can inspect metrics and simulate scenarios.",
    technologies: [
      {
        name: "Streamlit",
        role: "Rapid production deployment of machine learning interfaces and exploratory tools",
        type: "Web Framework"
      },
      {
        name: "Plotly Express",
        role: "Interactive multi-axis time series, cohort heatmaps, and scatter plots",
        type: "Interactive Viz"
      },
      {
        name: "Cohort Retention Matrices",
        role: "Tracking user acquisition cohorts from Month 0 through Month 12 to identify churn",
        type: "Analytics"
      },
      {
        name: "Matplotlib & Seaborn",
        role: "Publication-quality statistical graphics, correlation matrices, and distribution KDEs",
        type: "Static Viz"
      },
      {
        name: "Scenario Sliders & Simulators",
        role: "Allowing end-users to simulate real-time 'what-if' lead-time and parameter scenarios",
        type: "UX Pattern"
      }
    ]
  },
  {
    id: "engineering",
    title: "Engineering",
    shortTitle: "Engineering",
    badge: "Reproducibility & Hosting",
    icon: TerminalSquare,
    description: "Building reproducible, version-controlled machine learning pipelines packaged for dependable cloud hosting.",
    technologies: [
      {
        name: "Git & GitHub",
        role: "Clean commit histories, branch management, and collaborative code organization",
        type: "Version Control"
      },
      {
        name: "Streamlit Cloud",
        role: "Continuous deployment linked to GitHub repositories for live client access",
        type: "Cloud Hosting"
      },
      {
        name: "Model Serialization (Joblib)",
        role: "Exporting pre-fitted pipelines, scalers, and gradient-boosted trees for sub-second inference",
        type: "Deployment"
      },
      {
        name: "Linux & Bash",
        role: "Shell scripting, process management, and automated ETL pipeline executions",
        type: "Operating System"
      },
      {
        name: "Virtual Environments",
        role: "Dependency pinning and environment reproducibility using venv and pip",
        type: "DevOps"
      }
    ]
  }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("ml");

  const currentCategory = skillCategories.find((c) => c.id === activeTab) || skillCategories[0];
  const IconComponent = currentCategory.icon;

  return (
    <section id="skills" className="py-14 sm:py-18 md:py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <SectionHeader
          number="02"
          eyebrow="EXPERTISE"
          title="Technical"
          titleHighlight="Skills"
          description="Tools and methods I use to build practical data systems."
          className="mb-4 sm:mb-6"
        />

        {/* Mobile Horizontal Swipeable Category Selector (md:hidden) */}
        <div className="md:hidden mb-4 -mx-4 px-4 overflow-hidden">
          <div 
            className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none snap-x"
            style={{ WebkitOverflowScrolling: "touch" }}
            role="tablist"
            aria-label="Skill categories"
          >
            {skillCategories.map((cat) => {
              const isCurrent = activeTab === cat.id;
              const TabIcon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  role="tab"
                  aria-selected={isCurrent}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap min-h-[38px] snap-center ${
                    isCurrent
                      ? "bg-cyan-500 text-slate-950 shadow-sm shadow-cyan-500/20"
                      : "bg-slate-900/60 border border-white/[0.08] text-slate-300 hover:text-white"
                  }`}
                >
                  <TabIcon size={13} className={isCurrent ? "text-slate-950" : "text-cyan-400"} />
                  <span>{cat.shortTitle}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop Interactive Two-Part Explorer (Left: Category Nav, Right: Selected Skills) */}
        <div className="bg-slate-900/40 border border-white/[0.08] rounded-2xl p-4 sm:p-5 lg:p-6 shadow-xl">
          <div className="flex flex-col md:flex-row gap-5 lg:gap-7 items-start">
            
            {/* Left Category Selector Column (Desktop md:w-60 lg:w-64) */}
            <div className="hidden md:flex flex-col gap-1.5 w-56 lg:w-64 shrink-0" role="tablist" aria-label="Technical domains">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 px-2 pb-1 font-semibold">
                Select Domain
              </span>
              {skillCategories.map((cat) => {
                const isCurrent = activeTab === cat.id;
                const TabIcon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    role="tab"
                    aria-selected={isCurrent}
                    className={`w-full text-left flex items-center justify-between gap-2.5 px-3.5 py-2.5 rounded-xl transition-all duration-200 group ${
                      isCurrent
                        ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20"
                        : "bg-slate-950/40 hover:bg-slate-950 border border-white/[0.05] hover:border-cyan-500/30 text-slate-300 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className={`p-1.5 rounded-lg shrink-0 ${
                        isCurrent ? "bg-slate-950 text-cyan-400" : "bg-white/[0.05] text-slate-400 group-hover:text-cyan-300"
                      }`}>
                        <TabIcon size={14} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold truncate">
                          {cat.title}
                        </div>
                        <div className={`text-[10px] truncate ${isCurrent ? "text-slate-900 font-medium" : "text-slate-400"}`}>
                          {cat.badge}
                        </div>
                      </div>
                    </div>
                    
                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded shrink-0 ${
                      isCurrent ? "bg-slate-950/20 text-slate-950 font-bold" : "text-slate-400 bg-white/[0.04]"
                    }`}>
                      {cat.technologies.length}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Skills Display Column (flex-1) */}
            <div className="flex-1 min-w-0 w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCategory.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="w-full"
                >
                  {/* Selected Domain Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3.5 mb-4 border-b border-white/[0.06]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                        <IconComponent size={16} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white leading-tight">
                          {currentCategory.title}
                        </h3>
                        <span className="text-[11px] font-mono text-cyan-400 font-medium">
                          {currentCategory.badge}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300/90 max-w-sm leading-relaxed sm:text-right">
                      {currentCategory.description}
                    </p>
                  </div>

                  {/* Clean Skill Chips / Cards Grid (No fake percentages) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentCategory.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="bg-slate-950/70 border border-white/[0.06] hover:border-cyan-500/30 rounded-xl p-3 transition-colors duration-200 group"
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {tech.name}
                          </h4>
                          <span className="text-[9px] font-mono font-medium text-slate-400 bg-white/[0.04] border border-white/[0.05] px-1.5 py-0.5 rounded shrink-0">
                            {tech.type}
                          </span>
                        </div>
                        <p className="text-[11px] sm:text-xs text-slate-300/90 leading-relaxed">
                          {tech.role}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
