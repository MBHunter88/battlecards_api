//create a event class
class Event {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.availableTickets = [];
    }
}
 //create object using event class
const eventObj1 = new Event("Ghoul Grammy" , "An monsterous music event");
const eventObj2 = new Event("Beyonce", "A night with the legend herself");
const eventObj3 = new Event("Comicon 24", "Destination for heroes and villians alike");
//create empty event array and push events into array
const eventArr = new Array();
eventArr.push(eventObj1, eventObj2, eventObj3); 
//console.log(eventArr);


//DOMContentLoaded event handler. This is to prevent any javascript code from running
//before the document is finished loading (is ready).
document.addEventListener("DOMContentLoaded", () => {
    let html = ''; 
    eventArr.forEach((item) => {
        html += `<li>${item.name} -  ${item.description}`;
    });
    document.querySelector("#event").innerHTML = html;
})
