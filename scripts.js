import { ITEMS } from './data.js';

document.addEventListener("DOMContentLoaded", initializeCards);

function initializeCards() {
    console.log("hi");

    const cardContainer = document.getElementById("card-container");
    const cardTemplate = document.querySelector(".card");

    cardContainer.innerHTML = "";

    for (let i = 0; i < ITEMS.length; i++) {
        let currentVenue = ITEMS[i];

        const card = cardTemplate.cloneNode(true);              //create clone of empty card div in html
        card.style.display = "block";                           //set style of card from none to block (make it visible)
        
        const venueName = card.querySelector(".venue-name");    //fill in data from ITEMS list
        venueName.textContent = currentVenue.name;
        const image = card.querySelector(".image-container");
        image.src = currentVenue.images[0];                     //use first image as main
        
        card.dataset.id = currentVenue.id;                      //set ID of div id need later for functions

        cardContainer.appendChild(card);                        //add to parent div
    }
}