import { Element } from "react-scroll";
import { Container } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useState } from "react";

import Particles from "react-tsparticles";

import {
ResponsiveContainer,
PieChart,
Pie,
Cell,
Tooltip
} from "recharts";

export default function Transcript(){

const [filter,setFilter]=useState("All");

const semesters = [

{
title:"1ST SEMESTER 2024",
key:"1ST-2024",
gpa:"2.35",
courses:[
{code:"030523105",name:"Computer Programming",credit:2,grade:"D",skill:"Programming"},
{code:"030523106",name:"Electronics Technology",credit:2,grade:"A",skill:"Electronics"},
{code:"030523205",name:"Computer Programming Lab",credit:1,grade:"D",skill:"Programming"},
{code:"030523206",name:"Electronics Technology Lab",credit:1,grade:"A",skill:"Electronics"},
{code:"030523500",name:"Database & Data Technology",credit:2,grade:"B",skill:"Database"},
{code:"030523501",name:"Computer Network System & Data Communication",credit:2,grade:"D+",skill:"Networking"},
{code:"030523600",name:"Database & Data Tech Lab",credit:1,grade:"B",skill:"Database"},
{code:"030523601",name:"Computer Network System & Data Lab",credit:1,grade:"D+",skill:"Networking"},
{code:"030931152",name:"Communication Engineering & Report Writing",credit:3,grade:"C",skill:"Communication"},
{code:"030943111",name:"Differential Equations",credit:3,grade:"C",skill:"Mathematics"},
{code:"030953103",name:"Entrepreneurship",credit:3,grade:"B",skill:"Business"}
]
},

{
title:"2ND SEMESTER 2024",
key:"2ND-2024",
gpa:"1.63",
courses:[
{code:"030523107",name:"Microcontroller System",credit:2,grade:"C",skill:"Embedded"},
{code:"030523118",name:"Object Oriented Programming",credit:2,grade:"D",skill:"OOP"},
{code:"030523124",name:"Web Application Development",credit:2,grade:"F",skill:"Web"},
{code:"030523126",name:"Linux Operating System & Admin",credit:2,grade:"D",skill:"Linux"},
{code:"030523207",name:"Microcontroller System Lab",credit:1,grade:"D+",skill:"Embedded"},
{code:"030523218",name:"Object Oriented Program Lab",credit:1,grade:"D",skill:"OOP"},
{code:"030523224",name:"Web Application Development Lab",credit:1,grade:"F",skill:"Web"},
{code:"030523226",name:"Linux Operating System & Admin Lab",credit:1,grade:"D",skill:"Linux"},
{code:"030943112",name:"Matrices & Vector Analysis",credit:3,grade:"C",skill:"Mathematics"},
{code:"08030701",name:"Design Thinking",credit:3,grade:"A",skill:"Design"}
]
},

{
title:"1ST SEMESTER 2025",
key:"1ST-2025",
gpa:"2.77",
courses:[
{code:"030523200",name:"Special Project I",credit:1,grade:"A",skill:"Project"},
{code:"030523503",name:"Mobile Application Development",credit:2,grade:"A",skill:"Mobile"},
{code:"030523504",name:"Artificial Intelligence",credit:2,grade:"C+",skill:"AI"},
{code:"030523505",name:"Cybersecurity",credit:2,grade:"D+",skill:"Security"},
{code:"030523603",name:"Mobile Application Development Lab",credit:1,grade:"A",skill:"Mobile"},
{code:"030523604",name:"Artificial Intelligence Lab",credit:1,grade:"C+",skill:"AI"},
{code:"030523605",name:"Cybersecurity Laboratory",credit:1,grade:"D+",skill:"Security"},
{code:"030523701",name:"Cloud Computing",credit:2,grade:"D+",skill:"Cloud"},
{code:"030523801",name:"Cloud Computing Laboratory",credit:1,grade:"D+",skill:"Cloud"},
{code:"030923102",name:"Sciences in Daily Life",credit:3,grade:"A",skill:"Science"},
{code:"030923103",name:"Science & Tech for Quality of Life & Society",credit:3,grade:"B",skill:"Science"},
{code:"030933155",name:"English Conversation for Daily Life",credit:3,grade:"C+",skill:"Communication"}
]
}

];

const gradeColor=(g)=>{
if(g==="A") return "#00E676";     // green
if(g==="B") return "#29B6F6";     // blue
if(g==="C") return "#FFCA28";     // yellow
if(g==="C+") return "#FFD54F";    // light yellow
if(g==="D") return "#FF7043";     // orange
if(g==="D+") return "#FF8A65";    // light orange
if(g==="F") return "#FF1744";     // red
return "#999";

};

const gradeStats=[
{name:"A",value:8},
{name:"B",value:4},
{name:"C+",value:3},
{name:"C",value:4},
{name:"D+",value:7},
{name:"D",value:6},
{name:"F",value:2}
];

const skills=[
"React",
"JavaScript",
"SQL",
"Linux",
"OOP",
"Embedded Systems",
"Computer Vision",
"Web Development"
];

const filtered=
filter==="All"
?semesters
:semesters.filter(s=>s.key===filter);

return(

<Element name="Transcript">

<section
style={{
background:"#000",
color:"#fff",
padding:"50px 0",
position:"relative"
}}
>

{/* PARTICLES BACKGROUND */}

<Particles
options={{
particles:{
number:{value:40},
size:{value:2},
move:{speed:0.3},
color:{value:"#d4af37"}
}
}}
/>

<Container style={{maxWidth:"1150px",position:"relative"}}>

{/* HERO */}

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:.8}}
>

<h1 style={{fontSize:"70px",fontWeight:"900"}}>
Academic <span style={{color:"#d4af37"}}>Transcript</span>
</h1>

<p style={{color:"#888"}}>
KMUTNB | Electronics Computer Engineering
</p>

</motion.div>

{/* DASHBOARD */}

<div
style={{
display:"grid",
gridTemplateColumns:"1.7fr 1fr",
gap:"24px",
marginTop:"40px",
alignItems:"stretch"
}}
>

{/* LEFT : GRADE DISTRIBUTION */}

<div
style={{
background:"#0f0f0f",
border:"1px solid #222",
borderRadius:"18px",
padding:"28px",
display:"flex",
flexDirection:"column",
height:"100%"
}}
>

<h4 style={{marginBottom:"20px"}}>
<Icon icon="mdi:chart-donut" style={{marginRight:"8px"}}/>
Grade Distribution
</h4>

<div style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center"}}>

<div style={{height:"260px",width:"100%"}}>

<ResponsiveContainer width="100%" height="100%">
<PieChart>

<Pie
data={gradeStats}
dataKey="value"
innerRadius={70}
outerRadius={100}
paddingAngle={5}
>

{gradeStats.map((g,i)=>(
<Cell key={i} fill={gradeColor(g.name)}/>
))}

</Pie>

<Tooltip/>

</PieChart>
</ResponsiveContainer>

</div>

</div>

</div>



{/* RIGHT : ACADEMIC STATS */}

<div
style={{
background:"#0f0f0f",
border:"1px solid #222",
borderRadius:"18px",
padding:"28px",
display:"flex",
flexDirection:"column",
justifyContent:"space-between",
height:"100%"
}}
>

<h4 style={{marginBottom:"18px"}}>
<Icon icon="mdi:school-outline" style={{marginRight:"8px"}}/>
Academic Stats
</h4>


{/* STATS */}

<div
style={{
display:"grid",
gridTemplateColumns:"1fr 1fr 1fr",
gap:"14px"
}}
>

{/* GPAX */}

<div
style={{
background:"#111",
padding:"16px",
borderRadius:"12px",
border:"1px solid #222",
textAlign:"center"
}}
>
<p style={{fontSize:"12px",color:"#888"}}>GPAX</p>
<h3 style={{margin:0}}>2.29</h3>
</div>


{/* CREDITS */}

<div
style={{
background:"#111",
padding:"16px",
borderRadius:"12px",
border:"1px solid #222",
textAlign:"center"
}}
>
<p style={{fontSize:"12px",color:"#888"}}>Credits</p>
<h3 style={{margin:0}}>61</h3>
</div>


{/* SEMESTERS */}

<div
style={{
background:"#111",
padding:"16px",
borderRadius:"12px",
border:"1px solid #222",
textAlign:"center"
}}
>
<p style={{fontSize:"12px",color:"#888"}}>Semesters</p>
<h3 style={{margin:0}}>3</h3>
</div>

</div>


{/* DOWNLOAD BUTTON */}

<a
href="/Transcript.pdf"
download
style={{textDecoration:"none"}}
>

<motion.div
whileHover={{
scale:1.04,
boxShadow:"0 10px 40px rgba(212,175,55,.45)"
}}
whileTap={{scale:.96}}
style={{
marginTop:"18px",
background:"#d4af37",
color:"#000",
padding:"16px",
borderRadius:"12px",
textAlign:"center",
fontWeight:"600",
display:"flex",
alignItems:"center",
justifyContent:"center",
gap:"10px"
}}
>

<Icon icon="mdi:download"/>

Download Transcript

</motion.div>

</a>

</div>

</div>

{/* SEMESTER FILTER */}

<div style={{marginTop:"50px"}}>

<h3>Semester Filter</h3>

<div style={{
display:"flex",
gap:"10px",
marginTop:"15px"
}}>

{["All","1ST-2024","2ND-2024","1ST-2025"].map((f,i)=>(

<motion.button
key={i}
onClick={()=>setFilter(f)}
whileHover={{scale:1.05}}
style={{
background:filter===f?"#d4af37":"#111",
color:filter===f?"#000":"#fff",
border:"1px solid #333",
padding:"8px 16px",
borderRadius:"10px",
cursor:"pointer"
}}
>

{f}

</motion.button>

))}

</div>

</div>


{/* TIMELINE */}

<div style={{marginTop:"50px"}}>

<h3>Semester Timeline</h3>

<div style={{
borderLeft:"2px solid #d4af37",
paddingLeft:"20px",
marginTop:"30px"
}}>

{filtered.map((sem,i)=>(

<motion.div
key={i}
initial={{opacity:0,x:-40}}
whileInView={{opacity:1,x:0}}
style={{marginBottom:"40px"}}
>

<div
style={{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
marginBottom:"15px"
}}
>

<h4 style={{margin:0}}>
{sem.title}
</h4>

<div
style={{
border:"1px solid #d4af37",
borderRadius:"20px",
padding:"4px 14px",
color:"#d4af37",
fontSize:"13px",
fontWeight:"600"
}}
>
GPA {sem.gpa}
</div>

</div>

{sem.courses.map((c,j)=>(

<motion.div
key={j}
whileHover={{
scale:1.02,
boxShadow:"0 0 20px rgba(212,175,55,0.2)"
}}
style={{
display:"grid",
gridTemplateColumns:"140px 1fr 80px 80px",
background:"#0f0f0f",
padding:"16px",
borderRadius:"12px",
border:"1px solid #222",
marginBottom:"10px"
}}
>

<div style={{color:"#777"}}>{c.code}</div>

<div>{c.name}</div>

<div style={{textAlign:"center"}}>
{c.credit}
</div>

<div style={{
color:gradeColor(c.grade),
fontWeight:"700",
textAlign:"center"
}}>
{c.grade}
</div>

</motion.div>

))}

</motion.div>

))}

</div>

</div>

{/* SKILLS */}

<div style={{marginTop:"50px"}}>

<h3 style={{marginBottom:"20px"}}>
<Icon icon="mdi:lightning-bolt-outline" style={{marginRight:"8px"}}/>
Skills From Coursework
</h3>

<div
style={{
display:"flex",
flexWrap:"wrap",
gap:"14px",
justifyContent:"center"
}}
>

{skills.map((s,i)=>{

const iconMap={
React:"logos:react",
JavaScript:"logos:javascript",
SQL:"vscode-icons:file-type-sql",
Linux:"logos:linux-tux",
OOP:"mdi:shape-outline",
"Embedded Systems":"mdi:chip",
"Computer Vision":"mdi:eye-outline",
"Web Development":"mdi:web"
};

return(

<motion.div
key={i}
whileHover={{
scale:1.08,
boxShadow:"0 0 18px rgba(212,175,55,0.35)"
}}
transition={{type:"spring",stiffness:300}}
style={{
display:"flex",
alignItems:"center",
gap:"8px",
background:"linear-gradient(145deg,#0f0f0f,#141414)",
border:"1px solid #2a2a2a",
padding:"9px 16px",
borderRadius:"20px",
fontSize:"14px",
cursor:"default"
}}
>

<Icon icon={iconMap[s]} width="16"/>

{s}

</motion.div>

)

})}

</div>

</div>

</Container>

</section>

</Element>

)
}