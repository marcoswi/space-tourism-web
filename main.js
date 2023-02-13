
/* ------ Here you can see the js for all the pages: destination, crew, & technology -------- */

/* ------ DESTINATION PAGE -------- */

$(".option").click(function(event){
    var options = document.getElementsByClassName("option");
    for (var i = 0; i < options.length; i++){
        options[i].classList.remove("selected-destination");
    };
    var selectedDestination = ((event.currentTarget.innerText).toLowerCase())
    var destination = document.getElementById(selectedDestination);
    destination.classList.add("selected-destination");
    changeDestinationImg(selectedDestination);
    changeDestinationInfo (selectedDestination);
});


function changeDestinationImg (selectedDestination){
    document.getElementById("destination-img").src="/assets/destination/image-" + selectedDestination + ".png";
};

function changeDestinationInfo (selectedDestination){
    document.getElementById("destination-title").innerHTML = (selectedDestination).toUpperCase();
    var destinationDescription = document.getElementById("destination-description");
    switch (selectedDestination) {
        case "moon":
            destinationDescription.innerHTML = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
            document.getElementById("destination-kms").innerHTML = "384,400 km";
            document.getElementById("destination-days").innerHTML = "3 days";
            break;
        case "mars":
            destinationDescription.innerHTML = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
            document.getElementById("destination-kms").innerHTML = "225 mil. km";
            document.getElementById("destination-days").innerHTML = "9 months";
            break;      
        case "europa":
            destinationDescription.innerHTML = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
            document.getElementById("destination-kms").innerHTML = "628 mil. km";
            document.getElementById("destination-days").innerHTML = "3 years";
            break;    
        case "titan":
            destinationDescription.innerHTML = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
            document.getElementById("destination-kms").innerHTML = "1.6 bil. km";
            document.getElementById("destination-days").innerHTML = "7 years";
            break;
        default : console.log("something went wrong")
        };
};

/* ------ CREW PAGE -------- */


$(".crew-option").click(function(event){
    var selectedCrewOption = event.target.id;
    var crewOptions = document.getElementsByClassName("crew-option");
    for (var i =0 ; i < crewOptions.length; i++){
        crewOptions[i].classList.remove("selected-crew-option");
    };
    document.getElementById(event.target.id).classList.add("selected-crew-option");
    changeCrewPage(selectedCrewOption);
});

function changeCrewPage (selectedCrewOption){
    switch (selectedCrewOption){
        case "commander":
            document.getElementById("crew-title").innerHTML = "COMMANDER";
            document.getElementById("crew-name").innerHTML = "DUGLAS HURLEY";
            document.getElementById("crew-description").innerHTML = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
            document.getElementById("crew-img").src = ("/assets/crew/image-"+ "douglas-hurley" + ".png");
            break;
        case "engineer":
            document.getElementById("crew-title").innerHTML = "ENGINEER";
            document.getElementById("crew-name").innerHTML = "ANOUSHEH ANSARI";
            document.getElementById("crew-description").innerHTML = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ";
            document.getElementById("crew-img").src = ("/assets/crew/image-"+ "anousheh-ansari" + ".png");
            break;
        case "pilot":
            document.getElementById("crew-title").innerHTML = "PILOT";
            document.getElementById("crew-name").innerHTML = "VICTOR GLOVER";
            document.getElementById("crew-description").innerHTML = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ";
            document.getElementById("crew-img").src = ("/assets/crew/image-"+ "victor-glover" + ".png");
            break;
        case "specialist":
            document.getElementById("crew-title").innerHTML = "SPECIALIST";
            document.getElementById("crew-name").innerHTML = "MARK SHUTTLEWORTH";
            document.getElementById("crew-description").innerHTML = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
            document.getElementById("crew-img").src = "/assets/crew/image-"+ "mark-shuttleworth" + ".png";
            break;
        default: console.log("something went wrong");
    };
};

/* ------ TECHNOLOGY PAGE -------- */

$(".tech-option").click(function(event){
    var selectedTechOption = event.target.id;
    var techOptions = document.getElementsByClassName("tech-option");
    for (var i =0 ; i < techOptions.length; i++){
        techOptions[i].classList.remove("selected-tech-option");
    };
    document.getElementById(event.target.id).classList.add("selected-tech-option");
    changeTechPage(selectedTechOption);
});

function changeTechPage (selectedTechOption) {
    switch (selectedTechOption) {
        case "space-capsule" :
            document.getElementById("tech-title").innerHTML = "SPACE CAPSULE";
            document.getElementById("tech-description").innerHTML = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
            document.getElementById("tech-img").src = "/assets/technology/image-space-capsule-portrait.jpg";
            break;
        case "spaceport" :
            document.getElementById("tech-title").innerHTML = "SPACEPORT";
            document.getElementById("tech-description").innerHTML = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
            document.getElementById("tech-img").src = "/assets/technology/image-spaceport-portrait.jpg";
            break;
        case "vehicle" :
            document.getElementById("tech-title").innerHTML = "VEHICLE";
            document.getElementById("tech-description").innerHTML = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
            document.getElementById("tech-img").src = "/assets/technology/image-launch-vehicle-portrait.jpg";
            break;  
        default: console.log("something went wrong");      
    };
};