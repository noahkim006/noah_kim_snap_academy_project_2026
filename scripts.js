import { ITEMS } from './data.js';

let activeFilter = "default";


const resetFilterButton = document.getElementById("reset-filter");
const golfFilterButton  = document.getElementById("golf-filter"); 
const tennisFilterButton = document.getElementById("tennis-filter");

document.addEventListener("DOMContentLoaded", render());            //have the initalieze cards function run on the page loading to populate the card container div
document.getElementById("reset-filter").addEventListener("click", () => render());
document.getElementById("golf-filter").addEventListener("click", golfFilter);
document.getElementById("tennis-filter").addEventListener("click", tennisFilter);


function createStars(rating) {
    let html = "";

    for (let i = 0; i < 5; i++) {
        if (i + 1 <= rating) {
            html += "★";
        } else if (i + 0.5 === rating) {
            html += `<span class="half-star">★</span>`;
        } else {
            html += `<span class="empty-star">★</span>`;
        }
    }

    return html;
}

function render(venues) {

    if (venues == undefined) {                                      //if an empty parameter is sent, we use default list, otherwise use the list that was sent as venues parameter
        venues = ITEMS;
        
        resetFilterButton.classList.add("active");                  //set reset button as active - underline with css styling
        golfFilterButton.classList.remove("active");
        tennisFilterButton.classList.remove("active");

    }                        

    const cardContainer = document.getElementById("card-container");
    const cardTemplate = document.querySelector(".card");

    cardContainer.innerHTML = "";

    for (let i = 0; i < venues.length; i++) {
        let currentVenue = venues[i];

        const card = cardTemplate.cloneNode(true);                  //create clone of empty card div in html
        card.style.display = "block";                               //set style of card from none to block (make it visible)
        
        const venueName = card.querySelector(".venue-name");        //fill in data from ITEMS list
        venueName.textContent = currentVenue.name;

        const image = card.querySelector(".image-container");
        
        if(currentVenue.images.length == 0) {                       //if images array is empty, use placeholder as main image
            
            // console.log(currentVenue.name + " requires placeholder of type: " + currentVenue.sport);
            image.classList.add("placeholder-image")                //add this as class so can scale the placehodler image better for the size of the card
            image.src = `/assets/${currentVenue.sport}_placeholder.png`;
        } else {
            image.src = currentVenue.images[0];
        }

        card.dataset.id = currentVenue.id;                          //set ID of div id need later for functions

        const venueStars = card.querySelector(".venue-rating");
        venueStars.innerHTML = createStars(currentVenue.rating);
        
        const currentVenueRating = currentVenue.rating;
        const numericalRating = document.createElement("span");
        numericalRating.classList.add("numerical-rating");
        numericalRating.innerHTML = `<span class = "decimal-rating">${currentVenueRating}</span>`;
        venueStars.appendChild(numericalRating);

        cardContainer.appendChild(card);                            //add to parent div
    }
}   


function golfFilter() {
    let filteredByGolf = [];

    golfFilterButton.classList.add("active");                       //set golf button as active                  
    resetFilterButton.classList.remove("active");
    tennisFilterButton.classList.remove("active");

    for(let i = 0; i < ITEMS.length; i++) {
        if(ITEMS[i].sport == "golf") {
            filteredByGolf.push(ITEMS[i]);
        }
    }

    render(filteredByGolf);
}

function tennisFilter() {
    let filteredByTennis = [];

    tennisFilterButton.classList.add("active");                     //set tennis button as active 
    resetFilterButton.classList.remove("active");
    golfFilterButton.classList.remove("active");

    for(let i = 0; i < ITEMS.length; i++) {
        if(ITEMS[i].sport == "tennis") {
            filteredByTennis.push(ITEMS[i]);
        }
    }

    render(filteredByTennis);
}