const salon={
    name:"<h2>The Fashion Pet</h2>",
    address:{
        street:"Av. University",
        number:"192-k"
    },
    hours:{
        open:"8:00 am",
        close:"5:00 pm"
    },
    pets:[
    //  {name:"Scoody", age:50, breed:"Dane", gender:"Male", owner:"Shaggy",phine:"555-555-5555"},
    //  {name:"Scrapy", age:40, breed:"Dane", gender:"Male", owner:"Shaggy",phine:"555-555-5555"},
    //  {name:"Speedy", age:60, breed:"Mixed", gender:"Male", owner:"Bugs",phine:"444-444-4444"}
    ]
}

 //name,age,breed,gender,service,owner's name, contact phone
 
 function displayInfo(){
 document.getElementById("footer-text").innerHTML=`
    <p><h5>${salon.name}</h5></p>
    <p><h5>${salon.address.street}, ${salon.address.number}</h5></p>
    <p><h5>It opens from ${salon.hours.open} to ${salon.hours.close}</h5></p>
`;
 }

 displayInfo()
// user clicks on a submit message button, create a message object and log it on the console (console.log)
 var mySubmit = document.getElementById("signUp");

 mySubmit.addEventListener("submit", (e) => {
     e.preventDefault();
     console.log("Thank You! Your data has been submitted!");
    document.write("<br><br><br><center><h1>Thank You, Your data has been submitted!</h1></center>");
 });

