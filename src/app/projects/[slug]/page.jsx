"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaCheckCircle,
  FaChartLine,
  FaCogs,
  FaRocket,
  FaTimes
} from "react-icons/fa";

const projectCaseStudies = {
  "solar-radiation-prediction": {
    title: "Solar Radiation Prediction Engine",
    category: "Machine Learning & Renewable Energy",
    metric: "R² = 0.941 | MAE = 34.2 W/m²",
    description: "An advanced machine learning regression system forecasting global solar radiation using meteorological telemetry, atmospheric pressure, and engineered solar zenith geometry.",
    tools: ["Python", "LightGBM", "XGBoost", "CatBoost", "Scikit-Learn", "Streamlit", "Plotly"],
    overview: `Solar power generation depends heavily on atmospheric fluctuations. This project implements a reliable machine learning regression pipeline to predict solar radiation (W/m²) in real-time, helping solar farm operators anticipate grid loads and maximize energy storage efficiency.

The dataset contains chronological readings of temperature, atmospheric pressure, relative humidity, wind speed, wind direction, and solar zenith angles. Extensive feature engineering was conducted to extract solar elevation angles, diurnal heating indices, and rolling meteorological deltas.`,
    architecture: [
      { phase: "Data Ingestion & Cleaning", details: "Handled sensor drift, normalized atmospheric pressure outliers, and interpolated missing meteorological records." },
      { phase: "Feature Engineering", details: "Calculated solar geometry angles (declination, hour angle, zenith), daytime masks, and rolling temporal statistics." },
      { phase: "Model Benchmarking", details: "Cross-validated LightGBM, XGBoost, CatBoost, and Random Forest using TimeSeriesSplit to avoid data leakage." },
      { phase: "Model Optimization", details: "Hyperparameter tuning using Bayesian search; LightGBM achieved the lowest RMSE and highest inference throughput (<45ms)." },
      { phase: "Deployment", details: "Containerized as an interactive Streamlit application deployed on Streamlit Cloud with real-time parameter tweaking." }
    ],
    features: [
      "Comparative regression models (LightGBM vs. XGBoost vs. CatBoost)",
      "Solar geometry and atmospheric physics feature generation",
      "Interactive Streamlit application with scenario sliders",
      "Feature importance breakdown displaying key driving variables",
      "Residual distribution and error diagnostic charts"
    ],
    github: "https://github.com/abdelhaym953-create",
    demo: "https://solar-energy-predictor.streamlit.app"
  },

  "datavision-ai": {
    title: "DataVision AI — Automated Analytics Assistant",
    category: "Artificial Intelligence & Data Exploration",
    metric: "Prompt-to-Insight in <3s",
    description: "An intelligent analytics assistant combining automated exploratory data analysis with generative AI summaries to explain complex tabular data without code.",
    tools: ["Python", "GenAI / LLMs", "Pandas", "Plotly", "Streamlit", "Statistical Profiling"],
    overview: `DataVision AI solves a core bottleneck in data teams: business stakeholders frequently need quick answers from raw CSV/Excel dumps without waiting days for manual analyst triage.

The application ingests any tabular dataset, infers column datatypes and distributions, flags missing values and anomalies, and feeds summary schemas to generative AI models to generate plain-English executive takeaways and auto-generated Plotly visuals.`,
    architecture: [
      { phase: "Dynamic Ingestion", details: "Robust parser supporting multi-encoding CSVs and Excel files with automatic dtype inference." },
      { phase: "Statistical Profiling", details: "Calculates skewness, cardinality, correlation heatmaps, and outlier z-scores automatically." },
      { phase: "AI Reasoning", details: "Synthesizes data profiles into prompt templates for LLMs to generate high-level hypotheses and business recommendations." },
      { phase: "Interactive Visualization", details: "Renders responsive Plotly charts that users can filter and slice directly." }
    ],
    features: [
      "Zero-config CSV/Excel upload and automatic profiling",
      "AI-generated executive briefings and narrative summaries",
      "Automated outlier and anomaly detection",
      "Interactive univariate and bivariate visual exploration",
      "Downloadable analysis reports"
    ],
    github: "https://github.com/abdelhaym953-create",
    demo: "https://datavision-ai-x6nywmkxc6a2fahl8c3j6z.streamlit.app"
  },

  "online-sales-dashboard": {
    title: "Online Sales Intelligence Dashboard",
    category: "Business Intelligence & Analytics",
    metric: "Multi-Channel Real-time KPIs",
    description: "An executive-grade interactive business intelligence dashboard analyzing sales performance, customer cohorts, revenue trends, and gross margins.",
    tools: ["Python", "Pandas", "Plotly", "Streamlit", "KPI Analytics", "Cohort Analysis"],
    overview: `Built to empower e-commerce management with immediate operational visibility. This dashboard consolidates transactional records into real-time KPI metrics, showing monthly revenue velocity, average order values (AOV), regional profitability, and category revenue share.

Managers can dynamically toggle date intervals, segment by customer acquisition channels, and evaluate checkout conversion health.`,
    architecture: [
      { phase: "ETL Transformation", details: "Consolidated dispersed transaction tables into clean dimensional models with normalized currency rates." },
      { phase: "KPI Engine", details: "Computed high-level executive metrics including MoM growth, customer retention rates, and gross margins." },
      { phase: "Cohort Segmentation", details: "Tracked repeat customer purchase behavior over time to measure lifetime value (LTV)." },
      { phase: "Visual Interface", details: "Constructed an interactive Streamlit UI styled with dark-mode aesthetic and synchronized Plotly figures." }
    ],
    features: [
      "Real-time revenue, order volume, and AOV metric tracking",
      "Category and geographic revenue distribution breakdowns",
      "Customer lifetime value and repeat purchase cohort analysis",
      "Dynamic filtering by date ranges and product lines",
      "Exportable summary datasets"
    ],
    github: "https://github.com/abdelhaym953-create/Online-Sales-Dashboard",
    demo: "https://online-sales-dashboard-lrpcanpcvdxc67cq4gfmjj.streamlit.app"
  },

  "hotel-booking-dashboard": {
    title: "Hotel Booking Intelligence Dashboard",
    category: "Hospitality Analytics & Risk Modeling",
    metric: "ADR & Cancellation AUC = 0.89",
    description: "An analytical dashboard exploring reservation dynamics, cancellation likelihood, booking lead times, and ADR patterns across hotel properties.",
    tools: ["Python", "Pandas", "Plotly", "Streamlit", "EDA", "Risk Modeling"],
    overview: `Hotel cancellations create massive revenue leakage and operational instability. This project conducts deep investigative analytics into booking patterns, identifying which guest segments and lead times are most prone to cancellation.

The application features interactive scenario analysis, allowing revenue managers to analyze average daily rates (ADR), seasonal occupancy spikes, and deposit policies that mitigate no-show rates.`,
    architecture: [
      { phase: "Data Cleaning", details: "Filtered anomalous booking records, imputed missing meal and agent tags, and corrected negative ADR values." },
      { phase: "Risk Modeling", details: "Evaluated feature correlation with cancellation probability (lead time, deposit type, previous cancellations)." },
      { phase: "Revenue Optimization", details: "Modeled ADR vs. occupancy trade-offs across Resort Hotels and City Hotels." },
      { phase: "Executive Dashboards", details: "Built responsive multi-tab Streamlit dashboard with interactive Plotly visuals." }
    ],
    features: [
      "Lead-time vs. cancellation probability modeling",
      "Seasonal ADR and revenue per available room (RevPAR) breakdowns",
      "Customer demographic and market segment analysis",
      "Deposit type impact evaluation on cancellation behavior",
      "Interactive scenario filters for hotel managers"
    ],
    github: "https://github.com/abdelhaym953-create",
    demo: "https://hotel-booking-intelligence-dashboard-dwejjdgwbew2dbawcyhw5x.streamlit.app"
  },

  "sales-intelligence-platform": {
    title: "Enterprise Sales Intelligence Platform",
    category: "Data Engineering & Predictive Analytics",
    metric: "SQL ETL + Customer Clustering",
    description: "An end-to-end data platform transforming multi-source sales records into predictive customer segmentation and revenue forecasts.",
    tools: ["Python", "Pandas", "SQL (PostgreSQL)", "Plotly", "K-Means", "Scikit-Learn"],
    overview: `Enterprise sales teams struggle with fragmented transaction logs stored in legacy SQL systems. This project designs a unified pipeline extracting records, normalizing client entities, and computing RFM (Recency, Frequency, Monetary) scores.

Unsupervised machine learning algorithms (K-Means Clustering) group accounts into distinct personas (Champions, At-Risk, Inactive), allowing targeted marketing interventions.`,
    architecture: [
      { phase: "SQL Pipeline", details: "Structured SQL extraction queries with indexed joins and window functions for aggregation." },
      { phase: "RFM Calculation", details: "Normalized recency, frequency, and monetary values using QuantileTransformer." },
      { phase: "Clustering Engine", details: "Determined optimal clusters using the Elbow method and Silhouette scores." },
      { phase: "Reporting Layer", details: "Generated automated intelligence dashboards with drill-down customer account views." }
    ],
    features: [
      "Automated SQL ETL aggregation scripts",
      "RFM customer scoring and segmentation",
      "K-Means clustering with optimal cluster diagnostics",
      "Regional revenue velocity heatmaps",
      "High-churn risk identification alerts"
    ],
    github: "https://github.com/abdelhaym953-create",
    demo: "#"
  },

  "mobile-sentiment-analysis": {
    title: "Mobile Sentiment Analysis Engine",
    category: "Natural Language Processing",
    metric: "F1-Score: 0.912 | CatBoost NLP",
    description: "An NLP classification pipeline analyzing customer product reviews and classifying consumer sentiment polarity using gradient boosted trees.",
    tools: ["Python", "NLP", "CatBoost", "TF-IDF Vectorizer", "Scikit-Learn", "NLTK"],
    overview: `E-commerce platforms receive thousands of product reviews weekly. Manual review auditing is impractical. This system processes raw unstructured text reviews, applies linguistic tokenization, stopword removal, and lemmatization, and vectorizes n-grams using TF-IDF.

CatBoost classifier is trained on the vectorized text representations, achieving superior macro F1-score across Positive, Neutral, and Negative sentiments while preventing overfitting.`,
    architecture: [
      { phase: "Text Preprocessing", details: "RegEx cleaning, lowercasing, HTML tag stripping, and WordNet lemmatization." },
      { phase: "Feature Extraction", details: "Trained TF-IDF vectorizer with (1, 2) n-gram range and sublinear TF scaling." },
      { phase: "Model Training", details: "Compared Logistic Regression, Naive Bayes, and CatBoost with class-weighted cross-entropy loss." },
      { phase: "Evaluation", details: "Generated detailed confusion matrices, classification reports, and precision-recall curves." }
    ],
    features: [
      "End-to-end NLP text preprocessing pipeline",
      "Multi-class sentiment classification (Positive / Neutral / Negative)",
      "High macro F1-score (0.912) on noisy consumer reviews",
      "Feature importance analysis identifying most polarized keywords",
      "Reproducible Jupyter notebook and Python evaluation scripts"
    ],
    github: "https://github.com/abdelhaym953-create",
    demo: "#"
  }
};

export default function ProjectCaseStudy() {
  const params = useParams();
  const slug = params?.slug;
  const project = projectCaseStudies[slug];
  const [streamlitNoticeOpen, setStreamlitNoticeOpen] = useState(false);

  if (!project) {
    return (
      <main className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-black mb-3">Case Study Not Found</h1>
        <p className="text-slate-400 text-sm mb-6">The requested project could not be located.</p>
        <Link
          href="/"
          className="bg-yellow-400 text-zinc-950 font-bold text-xs px-5 py-2.5 rounded-xl hover:bg-yellow-300 transition-colors inline-flex items-center gap-2"
        >
          <FaArrowLeft />
          <span>Return to Portfolio</span>
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white px-4 sm:px-6 py-12 md:py-20 relative z-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Navigation Bar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
          <Link
            href="/#projects"
            className="text-xs font-bold text-slate-300 hover:text-yellow-400 flex items-center gap-2 transition-colors"
          >
            <FaArrowLeft />
            <span>Back to All Projects</span>
          </Link>

          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-md">
            {project.metric}
          </span>
        </div>

        {/* Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-zinc-900/60 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl mb-8"
        >
          <span className="text-xs font-bold text-yellow-400 uppercase tracking-widest bg-yellow-400/10 border border-yellow-400/20 px-3 py-1 rounded-full inline-block mb-3">
            {project.category}
          </span>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            {project.title}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-3 pt-2">
            {project.demo !== "#" && (
              <button
                onClick={() => setStreamlitNoticeOpen(true)}
                className="bg-yellow-400 text-zinc-950 font-bold text-xs sm:text-sm px-6 py-3 rounded-xl hover:bg-yellow-300 transition-all shadow-lg shadow-yellow-400/10 flex items-center gap-2"
              >
                <FaRocket />
                <span>Launch Interactive Demo</span>
              </button>
            )}

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/10 hover:border-yellow-400/40 bg-white/5 hover:bg-white/10 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all flex items-center gap-2"
            >
              <FaGithub size={16} />
              <span>View Source Code</span>
            </a>
          </div>
        </motion.div>

        {/* Deep Dive Sections */}
        <div className="space-y-8">
          
          {/* Section: Overview */}
          <section className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <FaChartLine className="text-yellow-400" />
              <span>Problem Statement & Overview</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
              {project.overview}
            </p>
          </section>

          {/* Section: Engineering Architecture */}
          {project.architecture && (
            <section className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-5 flex items-center gap-2">
                <FaCogs className="text-yellow-400" />
                <span>Pipeline & Engineering Architecture</span>
              </h2>
              <div className="grid grid-cols-1 gap-3.5">
                {project.architecture.map((step, sIdx) => (
                  <div 
                    key={sIdx}
                    className="bg-zinc-950/60 border border-white/5 rounded-xl p-4 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4"
                  >
                    <span className="text-xs font-bold text-yellow-400 sm:min-w-[180px]">
                      {sIdx + 1}. {step.phase}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {step.details}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section: Technologies */}
          <section className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-4">
              Technologies & Frameworks
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="bg-zinc-800 border border-white/10 text-slate-200 text-xs font-semibold px-3.5 py-1.5 rounded-lg"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>

          {/* Section: Key Features */}
          <section className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-4">
              Key Capabilities & Outcomes
            </h2>
            <ul className="space-y-3">
              {project.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start gap-3 text-slate-300 text-sm">
                  <FaCheckCircle className="text-yellow-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

        </div>

      </div>

      {/* Streamlit Wake-up Modal */}
      <AnimatePresence>
        {streamlitNoticeOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-zinc-900 border border-yellow-400/30 rounded-2xl p-6 max-w-md w-full relative shadow-2xl text-center"
            >
              <div className="text-4xl mb-2">⚡</div>
              <h4 className="text-lg font-bold text-white mb-2">
                Launching Cloud App
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                This project is deployed on Streamlit Cloud free tier. If the instance has been idle, it might take 30 to 45 seconds to boot the container and load machine learning model weights.
              </p>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => {
                    window.open(project.demo, "_blank", "noopener,noreferrer");
                    setStreamlitNoticeOpen(false);
                  }}
                  className="w-full bg-yellow-400 text-zinc-950 font-bold text-sm py-3 rounded-xl hover:bg-yellow-300 transition-all shadow-lg shadow-yellow-400/10 flex items-center justify-center gap-2"
                >
                  <FaRocket />
                  <span>Continue to Live App</span>
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
