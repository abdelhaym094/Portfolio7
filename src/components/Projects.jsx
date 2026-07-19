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
py-16
md:py-24
px-4
sm:px-6

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
text-3xl
sm:text-4xl
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
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-5
md:gap-8
mt-10
md:mt-16

"

>



{

projects.map((project,index)=>(


<motion.div


key={project.title}


initial={{
opacity:0,
y:40
}}


whileInView={{
opacity:1,
y:0
}}


transition={{
delay:index*0.1
}}


viewport={{
once:true
}}



whileHover={{

scale:
typeof window !== "undefined" && window.innerWidth > 768
?
1.03
:
1

}}



className="

relative

bg-white/5

backdrop-blur-lg

border

border-white/10

rounded-3xl

p-5

sm:p-6

flex

flex-col

hover:border-yellow-400

transition

overflow-hidden

"

>




<div

className="
absolute
top-0
right-0
w-24
h-24
bg-yellow-400/20
blur-3xl
rounded-full
"

/>







<div

className="
text-yellow-400
text-4xl
mb-4
"

>

{project.icon}

</div>








<span

className="
text-yellow-400
text-xs
sm:text-sm
font-semibold
"

>

{project.type}

</span>







<h3

className="
text-lg
sm:text-xl
font-bold
mt-3
break-words
"

>

{project.title}

</h3>







<p

className="
text-slate-300
text-sm
mt-3
leading-relaxed
flex-grow
"

>

{project.description}

</p>









<div

className="
flex
flex-wrap
gap-2
mt-5

"

>


{

project.tech.map((tech)=>(


<span

key={tech}

className="

px-2.5

py-1

rounded-full

bg-yellow-400/10

text-yellow-400

text-xs

sm:text-sm

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
flex-col
gap-3
mt-6

"

>


<a

href={`/projects/${project.slug}`}

className="
w-full
text-center
bg-yellow-400
text-black
py-2.5
rounded-xl
font-bold
text-sm
"

>

View Details

</a>





{

project.demo &&

<a

href={project.demo}

target="_blank"

className="
w-full
text-center
border
border-yellow-400
py-2.5
rounded-xl
font-bold
text-sm
hover:bg-yellow-400
hover:text-black
transition
"

>

Live App

</a>

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