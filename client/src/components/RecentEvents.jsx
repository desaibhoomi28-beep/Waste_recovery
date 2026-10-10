function RecentEvents(){

const events=[

{
name:"College Fest",
location:"Ahmedabad",
food:"250 KG",
status:"Completed",
},

{
name:"Blood Donation",
location:"Surat",
food:"180 KG",
status:"Scheduled",
},

{
name:"NGO Meetup",
location:"Vadodara",
food:"90 KG",
status:"Pending",
},

];

return(

<div className="recent-events">

<div className="table-header">

<h3>Recent Events</h3>

<button className="view-btn">
View All
</button>

</div>

<table>

<thead>

<tr>

<th>Event</th>

<th>Location</th>

<th>Food</th>

<th>Status</th>

</tr>

</thead>

<tbody>

{events.map((event,index)=>(

<tr key={index}>

<td>{event.name}</td>

<td>{event.location}</td>

<td>{event.food}</td>

<td>

<span className={`status ${event.status.toLowerCase()}`}>

{event.status}

</span>

</td>

</tr>

))}

</tbody>

</table>

</div>

);

}

export default RecentEvents;