const investors = [

{
id:"INV001",
name:"Rahul",
phone:"9876543210",
investment:50000,
share:5
},

{
id:"INV002",
name:"Kiran",
phone:"9876543211",
investment:40000,
share:4
},

{
id:"INV003",
name:"Suresh",
phone:"9876543212",
investment:60000,
share:6
},

{
id:"INV004",
name:"Ramesh",
phone:"9876543213",
investment:70000,
share:7
},

{
id:"INV005",
name:"Tarun",
phone:"9876543214",
investment:30000,
share:3
}

];

const companyProfit = 200000;

const tbody = document.querySelector("#investorTable tbody");

investors.forEach(function(investor){

let profit=(companyProfit*investor.share)/100;

tbody.innerHTML+=`

<tr>

<td>${investor.id}</td>

<td>${investor.name}</td>

<td>${investor.phone}</td>

<td>₹${investor.investment.toLocaleString()}</td>

<td>${investor.share}%</td>

<td>₹${profit.toLocaleString()}</td>

</tr>

`;

});
// Dashboard Statistics

document.getElementById("totalInvestors").innerHTML = investors.length;

let totalInvestment = 0;

investors.forEach(function(investor){

totalInvestment += investor.investment;

});

document.getElementById("totalInvestment").innerHTML =
"₹" + totalInvestment.toLocaleString();

document.getElementById("companyProfit").innerHTML =
"₹" + companyProfit.toLocaleString();

document.getElementById("profitShared").innerHTML = "100%";
document.getElementById("searchBox").addEventListener("keyup",function(){

let value=this.value.toLowerCase();

let rows=document.querySelectorAll("#investorTable tbody tr");

rows.forEach(function(row){

row.style.display=row.innerText.toLowerCase().includes(value)

?

""

:

"none";

});

});