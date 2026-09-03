"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BrainCircuit, 
  Database, 
  BarChart3, 
  TerminalSquare, 
  Sparkles,
  CheckCircle,
  Cpu
} from "lucide-react";

const skillCategories = [
  {
    id: "ml",
    title: "Machine Learning",
    badge: "Supervised & Gradient Boosting",
    icon: BrainCircuit,
    description: "Architecting gradient-boosted decision trees, ensemble pipelines, and robust validation frameworks for high-stakes tabular and physical data.",
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
    title: "Data Science & Analytics",
    badge: "Statistical Profiling & ETL",
    icon: Database,
    description: "Transforming ambiguous, multi-channel transactional records and physical sensor feeds into clean, normalized dimensional representations.",
    technologies: [
      {
        name: "Python (Scientific Stack)",
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
        role: "Vectorized linear algebra, multi-dimensional array math, and trigonometric equations",
        type: "Math Engine"
      },
      {
        name: "PostgreSQL & SQL",
        role: "Relational database queries, window functions, and aggregation indexing",
        type: "Database"
      },
      {
        name: "Feature Engineering",
        role: "Domain-specific physical feature synthesis (solar angles, pressure differentials, rolling lags)",
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
    title: "Applied AI & LLMs",
    badge: "Hybrid Systems & NLP",
    icon: Sparkles,
    description: "Combining deterministic mathematical data profiling with modern large language models to build trustworthy, hallucination-free analytical assistants.",
    technologies: [
      {
        name: "LLM Orchestration",
        role: "Connecting programmatic statistical profiling schemas to Gemini and OpenAI API endpoints",
        type: "GenAI"
      },
      {
        name: "Deterministic Guardrails",
        role: "Pre-computing all numerical stats in Python so the LLM cannot hallucinate calculations",
        type: "Architecture"
      },
      {
        name: "NLP & TF-IDF",
        role: "Sublinear n-gram frequency extraction, text preprocessing, and tokenization",
        type: "NLP"
      },
      {
        name: "Sentiment Classification",
        role: "Multi-class NLP classifiers identifying polarity and extracting defect keywords",
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
    badge: "Interactive Decision Tools",
    icon: BarChart3,
    description: "Designing responsive, intuitive dashboards where operators and stakeholders can slice data, inspect metrics, and simulate scenarios.",
    technologies: [
      {
        name: "Streamlit",
        role: "Rapid production deployment of machine learning interfaces and exploratory tools",
        type: "Web Framework"
      },
      {
        name: "Plotly Express",
        role: "Interactive multi-axis time series, interactive cohort heatmaps, and scatter plots",
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
        role: "Allowing end-users to simulate real-time 'what-if' lead-time and pricing scenarios",
        type: "UX Pattern"
      }
    ]
  },
  {
    id: "engineering",
    title: "Engineering & Cloud",
    badge: "Reproducibility & Hosting",
    icon: TerminalSquare,
    description: "Building reproducible, version-controlled machine learning pipelines packaged for dependable deployment on modern cloud platforms.",
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
    <section id="skills" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full text-[11px] font-bold text-cyan-400 uppercase tracking-widest mb-2.5">
            <Cpu size={12} />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            Technical <span className="text-cyan-400">Capabilities</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1.5 max-w-xl">
            Select an engineering domain below to inspect verified technologies, algorithms, and practical applications.
          </p>
        </div>

        {/* Interactive Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {skillCategories.map((cat) => {
            const isCurrent = activeTab === cat.id;
            const TabIcon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap min-h-[44px] ${
                  isCurrent
                    ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/25 scale-[1.02]"
                    : "bg-slate-900/50 border border-white/[0.06] text-slate-300 hover:text-white hover:bg-slate-900"
                }`}
              >
                <TabIcon size={15} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Domain View Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCategory.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="bg-slate-900/40 border border-white/[0.08] rounded-3xl p-5 sm:p-7 shadow-xl"
          >
            {/* Domain Overview Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b border-white/[0.06]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                  <IconComponent size={20} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {currentCategory.title}
                  </h3>
                  <span className="text-xs font-mono text-cyan-400">
                    {currentCategory.badge}
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-300 max-w-md leading-relaxed">
                {currentCategory.description}
              </p>
            </div>

            {/* Interactive Technology Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {currentCategory.technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="bg-slate-950/60 border border-white/[0.06] hover:border-cyan-500/30 rounded-2xl p-4 transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {tech.name}
                    </h4>
                    <span className="text-[10px] font-mono font-medium text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
                      {tech.type}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {tech.role}
                  </p>
                </div>
              ))}
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
