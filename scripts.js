import { ITEMS } from './data.js';



document.addEventListener("DOMContentLoaded", initializeCards);

function initializeCards() {
    console.log("hi");

    const cardContainer = document.getElementById("card-container");
    const cardTemplate = document.querySelector(".card");

    cardContainer.innerHTML = "";

    for (let i = 0; i < ITEMS.length; i++) {
        let currentVenue = ITEMS[i];

        const card = cardTemplate.cloneNode(true);                  //create clone of empty card div in html
        card.style.display = "block";                               //set style of card from none to block (make it visible)
        
        const venueName = card.querySelector(".venue-name");        //fill in data from ITEMS list
        venueName.textContent = currentVenue.name;

        const image = card.querySelector(".image-container");
        
        if(currentVenue.images.length == 0) {                       //if images array is empty, use placeholder as main image
            console.log(currentVenue.name + " requires placeholder of type: " + currentVenue.sport);
            image.classList.add("placeholder-image")                //add this as class so can scale the placehodler image better for the size of the card
            image.src = `/assets/${currentVenue.sport}_placeholder.png`;
        } else {
            image.src = currentVenue.images[0];
        }

        card.dataset.id = currentVenue.id;                          //set ID of div id need later for functions

        const venueStars = card.querySelector(".venue-rating");
        const currentVenueRating = currentVenue.rating;

        for(let i = 0.0; i < 5.0; i++) {                            //double for-loop is normally not ideal, but this will only go to an index of 5, so its O(n) is negligible            
            
            if(i + 0.5 === currentVenueRating) {                    //check if need to create half star first, else if populate with fully filled / empty stars
                const halfFilledStar = document.createElement("span");
                halfFilledStar.classList.add("half-star");          
                halfFilledStar.innerHTML = `<span class="half-fill">★</span><span class="half-empty">★</span>`;
                venueStars.appendChild(halfFilledStar);
            } else if (i < currentVenueRating) {
                venueStars.append("★");
            } else {
                const emptyStar = document.createElement("span");
                emptyStar.classList.add("empty-star");
                emptyStar.innerHTML = `<span class = "empty-star">★</span>`;
                venueStars.appendChild(emptyStar);
            }

        }
        const numericalRating = document.createElement("span");
        numericalRating.classList.add("numerical-rating");
        numericalRating.innerHTML = `<span class = "decimal-rating">${currentVenueRating}</span>`;
        venueStars.appendChild(numericalRating);

        cardContainer.appendChild(card);                        //add to parent div
    }
}