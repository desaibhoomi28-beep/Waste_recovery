import { FaLeaf, FaRecycle, FaHandsHelping, FaCalendarAlt } from "react-icons/fa";

function Stats() {

const stats=[
{
icon:<FaCalendarAlt/>,
number:"125+",
title:"Events"
},
{
icon:<FaLeaf/>,
number:"980 Kg",
title:"Food Saved"
},
{
icon:<FaHandsHelping/>,
number:"42",
title:"NGOs"
},
{
icon:<FaRecycle/>,
number:"2.4 Tons",
title:"Waste Recovered"
}
];

return(

<section className="stats">

<div className="container">

<div className="row">

{
stats.map((item,index)=>(

<div className="col-md-3" key={index}>

<div className="stat-card">

<div className="stat-icon">

{item.icon}

</div>

<h2>{item.number}</h2>

<p>{item.title}</p>

</div>

</div>

))
}

</div>

</div>

</section>

);

}

export default Stats;