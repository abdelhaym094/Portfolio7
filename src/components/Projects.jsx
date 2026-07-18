"use client";

import { motion } from "framer-motion";

import {
  FaChartLine,
  FaRobot,
  FaBrain,
  FaSun,
  FaHotel,
  FaShoppingCart
} from "react-icons/fa";


export default function Projects(){


const projects=[


{
title:"Sales Intelligence Platform",
type:"Data Analytics",
icon:<FaChartLine/>,

description:
"End-to-end analytics platform that transforms raw sales data into business insights using data processing, visualization and intelligent analysis.",

tech:[
"Python",
"Pandas",
"SQL",
"Plotly",
"Machine Learning"
],

slug:"sales-intelligence-platform",

github:"#"

},




{
title:"Mobile Sentiment Analysis",
type:"NLP / Machine Learning",
icon:<FaRobot/>,

description:
"NLP classification system that analyzes mobile reviews and predicts customer sentiment using machine learning models.",

tech:[
"Python",
"NLP",
"CatBoost",
"Scikit-learn"
],

slug:"mobile-sentiment-analysis",

github:"#"

},




{
title:"DataVision AI",
type:"Artificial Intelligence",
icon:<FaBrain/>,

description:
"AI-powered analytics assistant that automatically generates insights and helps users understand datasets.",

tech:[
"Python",
"AI",
"Data Analysis",
"Streamlit"
],

slug:"datavision-ai",

demo:
"https://datavision-ai-x6nywmkxc6a2fahl8c3j6z.streamlit.app",

github:"#"

},





{
title:"Solar Radiation Prediction",
type:"Machine Learning",
icon:<FaSun/>,

description:
"Machine learning regression model predicting solar radiation using weather conditions and engineered features.",

tech:[
"LightGBM",
"XGBoost",
"CatBoost",
"Regression"
],

slug:"solar-radiation-prediction",

demo:
"https://solar-energy-predictor.streamlit.app",

github:"#"

},





{
title:"Online Sales Dashboard",
type:"Business Intelligence",
icon:<FaShoppingCart/>,

description:
"Interactive dashboard analyzing sales performance, customer behavior, revenue trends and business KPIs.",

tech:[
"Python",
"Pandas",
"Plotly",
"Streamlit"
],

slug:"online-sales-dashboard",

demo:
"https://online-sales-dashboard-lrpcanpcvdxc67cq4gfmjj.streamlit.app",

github:"#"

},






{
title:"Hotel Booking Intelligence Dashboard",
type:"Data Analytics",
icon:<FaHotel/>,

description:
"Business intelligence dashboard exploring booking behavior, cancellations, customer segments and revenue patterns.",

tech:[
"Python",
"Pandas",
"Plotly",
"Streamlit"
],

slug:"hotel-booking-dashboard",

demo:
"https://hotel-booking-intelligence-dashboard-dwejjdgwbew2dbawcyhw5x.streamlit.app",

github:"#"

}


];






return (

<section
id="projects"
className="
py-24
px-6
"
>


<div
className="
max-w-7xl
mx-auto
"
>



<motion.h2

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

className="
text-4xl
md:text-5xl
font-bold
text-center
"

>

Featured

<span className="text-yellow-400">
 Projects
</span>


</motion.h2>






<div
className="
grid
md:grid-cols-3
gap-8
mt-16
"
>



{

projects.map((project,index)=>(


<motion.div


key={project.title}


initial={{
opacity:0,
y:60
}}


whileInView={{
opacity:1,
y:0
}}


transition={{
delay:index*0.12
}}


viewport={{
once:true
}}


whileHover={{
scale:1.03
}}



className="
relative
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-3xl
p-8
overflow-hidden
hover:border-yellow-400
transition
"


>



<div

className="
absolute
top-0
right-0
w-32
h-32
bg-yellow-400
opacity-10
blur-3xl
rounded-full
"

/>





<div

className="
text-yellow-400
text-5xl
mb-6
"

>

{project.icon}

</div>







<span

className="
text-yellow-400
text-sm
font-semibold
"

>

{project.type}

</span>






<h3

className="
text-2xl
font-bold
mt-3
"

>

{project.title}

</h3>







<p

className="
text-slate-300
mt-4
leading-relaxed
"

>

{project.description}

</p>








<div

className="
flex
flex-wrap
gap-2
mt-6
"

>


{

project.tech.map((tech)=>(

<span

key={tech}

className="
px-3
py-1
rounded-full
bg-yellow-400/10
text-yellow-400
text-sm
"

>

{tech}

</span>


))

}


</div>








<div

className="
flex
gap-4
mt-8
"

>


<a

href={`/projects/${project.slug}`}

className="
flex-1
text-center
bg-yellow-400
text-black
py-3
rounded-xl
font-bold
hover:scale-105
transition
"

>

View Details

</a>







{

project.demo && (

<a

href={project.demo}

target="_blank"

className="
flex-1
text-center
border
border-yellow-400
py-3
rounded-xl
font-bold
hover:bg-yellow-400
hover:text-black
transition
"

>

Live App

</a>

)

}





</div>





</motion.div>


))


}



</div>





</div>


</section>


);


}