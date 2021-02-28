function display(aPet){
    //display the number of pets
    document.getElementById("numberPets").innerHTML=`Registered pets: ${salon.pets.length}`;
    //clear the field
    //document.getElementById("pets").innerHTML="";


    //travel the pet's array
    //for(var i=0;i<salon.pets.length;i++){

        // assign a price for each service(TIP: you have to use if)
        //nails ->15, shower ->20, hair ->15, full ->25
    //create a tmp
    if(aPet.service==="Nails"){
        aPet.price=15;
    }else if(aPet.service==="Shower"){
        aPet.price=20;
    }else if(aPet.service==="Hair"){
        aPet.price=15;
    }else if(aPet.service==="Full"){
        aPet.price=25;
    }

    //create a table
    var table=`
    <tr id ="${aPet.id}" class="pets"> 
        <td><h3>${aPet.name}</h3></td>
        <td> Age: ${aPet.age}</td>
        <td> Gender: ${aPet.gender}</td>
        <td> Breed: ${aPet.breed}</td>
        <td> Color: ${aPet.color}</td>
        <td> Owner: ${aPet.owner}</td>
        <td> Phone: ${aPet.phone}</td>
        <td> Service: ${aPet.service}</td>
        <td> Price: $${aPet.price}</td>
        <td> Payment: ${aPet.payment}</td> 
        <td><button onclick="deletePet(${aPet.id})">Delete</button></td>
    </tr>`;       
    //$("#pets").append(table);
    //concentrate all the info and display the tmp on the html
    document.getElementById("pets").innerHTML+=table;
    //}
    //document.getElementById("pt").innerHTML=`<h2>You have registered ${salon.pets.length} pets.</h2>`;
    //document.getElementById("pets").appendChild(tmp);
    profitCalculation();
}
    //use the function
    //display();
