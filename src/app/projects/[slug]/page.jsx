"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaDatabase,
  FaChartLine,
  FaBrain
} from "react-icons/fa";


const projects = {

"sales-intelligence-platform":{

title:"Sales Intelligence Platform",

category:"Data Analytics",

description:
"An end-to-end analytics platform that transforms raw sales data into meaningful business insights using data processing, visualization and intelligent analysis.",


tools:[
"Python",
"Pandas",
"SQL",
"Plotly",
"Machine Learning"
],


overview:
`
This project focuses on analyzing sales data to discover trends,
customer behavior and business performance indicators.
The goal is to convert raw transactional data into actionable insights.
`,


features:[
"Data cleaning and preprocessing",
"Exploratory Data Analysis",
"Business KPI tracking",
"Interactive visualizations",
"Machine learning based insights"
],


github:"#",

demo:"#"

},






"mobile-sentiment-analysis":{

title:"Mobile Sentiment Analysis",

category:"NLP / Machine Learning",


description:
"Natural Language Processing system that analyzes mobile reviews and predicts customer sentiment.",


tools:[
"Python",
"NLP",
"CatBoost",
"Scikit-learn"
],


overview:
`
A machine learning classification system built to understand customer opinions
from mobile reviews and categorize them into Positive, Neutral and Negative sentiments.
`,


features:[
"Text preprocessing",
"Sentiment classification",
"Machine learning modeling",
"Model evaluation",
"Customer feedback analysis"
],


github:"#",

demo:"#"

},






"datavision-ai":{

title:"DataVision AI",

category:"Artificial Intelligence",


description:
"AI-powered analytics assistant that helps users understand datasets and generate automatic insights.",


tools:[
"Python",
"AI",
"Data Analysis",
"Streamlit"
],


overview:
`
DataVision AI combines data analysis and artificial intelligence
to simplify dataset exploration and generate useful summaries.
`,


features:[
"Automatic data understanding",
"AI generated insights",
"Interactive dashboard",
"Data exploration assistance"
],


github:"#",

demo:
"https://datavision-ai-x6nywmkxc6a2fahl8c3j6z.streamlit.app"

},






"solar-radiation-prediction":{

title:"Solar Radiation Prediction",

category:"Machine Learning",


description:
"Regression machine learning system predicting solar radiation using weather conditions.",


tools:[
"LightGBM",
"XGBoost",
"CatBoost",
"Regression"
],


overview:
`
This project predicts solar radiation levels using weather measurements
and engineered time-based features.
`,


features:[
"Feature engineering",
"Regression modeling",
"Model comparison",
"Feature importance analysis"
],


github:"#",

demo:
"https://solar-energy-predictor.streamlit.app"

},






"online-sales-dashboard":{

title:"Online Sales Dashboard",

category:"Business Intelligence",


description:
"Interactive dashboard analyzing sales performance, revenue trends and customer behavior.",


tools:[
"Python",
"Pandas",
"Plotly",
"Streamlit"
],


overview:
`
A business intelligence dashboard designed to transform sales transactions
into clear visual reports and decision-making insights.
`,


features:[
"Sales trend analysis",
"Revenue monitoring",
"Customer analysis",
"Interactive charts"
],


github:"#",

demo:
"https://online-sales-dashboard-lrpcanpcvdxc67cq4gfmjj.streamlit.app"

},






"hotel-booking-dashboard":{

title:"Hotel Booking Intelligence Dashboard",

category:"Data Analytics",


description:
"Dashboard analyzing hotel bookings, cancellations and customer segments.",


tools:[
"Python",
"Pandas",
"Plotly",
"Streamlit"
],


overview:
`
Analytics project exploring hospitality data to understand booking patterns,
cancellation reasons and revenue behavior.
`,


features:[
"Booking analysis",
"Cancellation insights",
"Customer segmentation",
"Revenue trends"
],


github:"#",

demo:
"https://hotel-booking-intelligence-dashboard-dwejjdgwbew2dbawcyhw5x.streamlit.app"

}


};







export default function ProjectPage(){


const params = useParams();

const project = projects[params.slug];



if(!project){

return (

<div className="
min-h-screen
flex
items-center
justify-center
text-white
">

<h1 className="text-4xl font-bold">

Project Not Found

</h1>

</div>

)

}





return (


<main

className="
min-h-screen
px-6
py-24
text-white
"


>



<div

className="
max-w-5xl
mx-auto
"

>



<motion.div


initial={{
opacity:0,
y:50
}}


animate={{
opacity:1,
y:0
}}



className="
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-3xl
p-10
"

>



<p className="
text-yellow-400
text-lg
">

{project.category}

</p>




<h1 className="
text-5xl
font-bold
mt-4
">

{project.title}

</h1>






<p className="
text-slate-300
text-lg
leading-relaxed
mt-6
">

{project.description}

</p>







<h2 className="
text-3xl
font-bold
mt-12
">

Overview

</h2>


<p className="
text-slate-300
mt-4
leading-relaxed
whitespace-pre-line
">

{project.overview}

</p>








<h2 className="
text-3xl
font-bold
mt-12
">

Technologies

</h2>



<div className="
flex
flex-wrap
gap-3
mt-5
">


{

project.tools.map((tool)=>(

<span

key={tool}

className="
bg-yellow-400/10
text-yellow-400
px-4
py-2
rounded-full
"

>

{tool}

</span>


))


}


</div>








<h2 className="
text-3xl
font-bold
mt-12
">

Key Features

</h2>



<ul className="
mt-5
space-y-3
text-slate-300
">


{

project.features.map((item)=>(

<li key={item}>

✓ {item}

</li>

))


}


</ul>







<div className="
flex
gap-5
mt-12
">


{

project.demo !== "#" && (

<a

href={project.demo}

target="_blank"

className="
bg-yellow-400
text-black
px-8
py-3
rounded-xl
font-bold
flex
items-center
gap-2
"

>

<FaExternalLinkAlt/>

Live Demo

</a>

)

}






<a

href={project.github}

target="_blank"

className="
border
border-yellow-400
px-8
py-3
rounded-xl
font-bold
flex
items-center
gap-2
"

>

<FaGithub/>

GitHub

</a>



</div>




</motion.div>


</div>


</main>


)


}