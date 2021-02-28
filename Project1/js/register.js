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

 /*for(var i=0;i<salon.pets.length;i++){
     console.log(salon.pets[i]);
 }*/

var c= 0;
 //create the pet class

 class Pet{
     constructor(name,age,breed,gender,color,owner,phone,service,payment){
         this.name=name;
         this.age=age;
         this.breed=breed;
         this.gender=gender;
         this.color=color; 
         this.owner=owner;
         this.phone=phone;
         this.service=service;
         this.price=0;
         this.payment=payment;
         this.id=c++;
     }
 }
 //create pets using the constructor
 var scooby=new Pet("Scooby",5, "Dane", "Male", "Black and White", "Shaggy", "555-555-5555","Full", "Cash",)
 var scrapy=new Pet("Scrapy",4, "Dane", "Male", "Brown", "Shaggy", "555-555-5555","Shower", "Credit")
 var lassie=new Pet("Lassie",3, "Collie", "Female", "Brown and White", "Kevin", "777-555-5555","Shower", "Credit")
 var speedy=new Pet("Speedy",6, "Mixed", "Male", "Black", "Bunny", "333-333-3333","Nails", "Cash");
 console.log(scooby,scrapy,lassie,speedy);
 /*document.write(scooby, scrapy, lassie, speedy);*/

 

 
// get the info from the inputs
var txtName=document.getElementById("petNameTxt");
var txtAge=document.getElementById("petAgeTxt");
var txtBreed=document.getElementById("petBreedTxt");
var txtGender=document.getElementById("petGenderTxt");
var txtColor=document.getElementById("petColorTxt");
var txtOwner=document.getElementById("ownerNameTxt");
var txtPhone=document.getElementById("ownerPhoneTxt");
var txtService=document.getElementById("petServiceTxt");
var txtPayment=document.getElementById("petPaymentTxt");

/*console.log(txtName.value);
console.log(txtAge.value);
console.log(txtBreed.value);
console.log(txtGender.value);
console.log(txtService.value);
console.log(txtOwner.value);
console.log(txtPhone.value);*/

function clear(){
    txtName.value="";
    txtAge.value="";
    txtBreed.value="";
    txtGender.value="";
    txtColor.value="";
    txtOwner.value="";
    txtPhone.value="";
    txtService.value="";
    txtPayment.value="";
}
// create the function register
function register(){
//crate a generic constructor
var thePet=new Pet(txtName.value, txtAge.value, txtBreed.value, txtGender.value, txtColor.value, txtOwner.value, txtPhone.value,txtService.value, txtPayment.value)
console.log(thePet)
//push the pet into the array
salon.pets.push(thePet);
//display the function
display(thePet);
clear();

 }

 function profitCalculation(){
     //create a  variable  sum and initializate the variable
    var sum=0;
     //travel the salon.pets[] (for)

     for(var i=0;i<salon.pets.length;i++){
          //sum all the prices
         sum=sum+salon.pets[i].price;
     }
    

     //display the result on the html
     document.getElementById("profits").innerHTML=`Profits: $${sum}`;
 }

function deletePet(petId){
    $('#'+petId).remove();
    //travel the array
    for(var i=0;i<salon.pets.length;i++){
        var pet = salon.pets[i];
    //if thepet.id === petId
    if(pet.id==petId)
        {
            //remove form html
            $('#'+petId).remove();
            //remove from the array
            salon.pets.splice(i,1);
        }
    }
    profitCalculation();
    document.getElementById('numberPets').innerHTML=`Registered pets: ${salon.pets.length}`;
}
function search(){
     var string =$('#search-text').val();//Scooby
     var searchString= string.toLowerCase();//scooby
     for(var i=0;i<salon.pets.length;i++){
         var selected=salon.pets[i];
         if (selected.name.toLowerCase().includes(searchString)||selected.service.toLowerCase().includes(searchString)){
             $('#'+selected.id).show();//addClass('selected');
         }else{
             
             $('#'+selected.id).hide();//removeClass('selected');
             //$('#pets').html("<h2>It doesn't exist</h2>");
         }
     }

     /*var word=document.getElementById("search-text").value;
     for(i=0;i<salon.pets.length;i++){
     if(word===salon.pets[i].name){
     $("#"+ salon.pets[i].id).addClass("bordered");
     }else if(word===salon.pets[i].service){
        $("#"+ salon.pets[i].id).addClass("bordered");
        }else{
         console.log("It doesn't exist!");
     }
    }*/
}

 function init(){
     //default
     console.log("Initalization")
     //push the pets into the array
        //salon.pets=[scooby, scrapy,lassie, speedy];
        salon.pets.push(scooby);
        salon.pets.push(scrapy);
        salon.pets.push(lassie);
        salon.pets.push(speedy);

        display(scooby);
        display(scrapy);
        display(lassie);
        display(speedy);

        console.log(salon.pets);
        displayInfo();

        //hook events
        $('#btn-register').on('click',register);
        //events for search
        $("#search-btn").on('click', search);
        
        $('#search-text').keypress(function(e){
            console.log(e.key);
            if(e.key==="Enter"){
            search();
            }
        });
        
 }

 
 window.onload=init;

