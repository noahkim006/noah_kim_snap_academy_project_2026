import { ITEMS } from './data.js';

let activeList = ITEMS;                                            //for later sorting functions
let popupImageIndex = 0;                                           //all popup images use the first image in array element 
let openPopupVenue = null;

const resetFilterButton = document.getElementById("reset-filter");
const golfFilterButton  = document.getElementById("golf-filter"); 
const tennisFilterButton = document.getElementById("tennis-filter");
const headerCounter = document.getElementById("header-count");
const popupContainer = document.getElementById("popup-container");
const popupCloseButton = document.getElementById("popup-close");

document.addEventListener("DOMContentLoaded", render());            //have the initalieze cards function run on the page loading to populate the card container div

document.getElementById("reset-filter").addEventListener("click", () => render());
document.getElementById("golf-filter").addEventListener("click", golfFilter);
document.getElementById("tennis-filter").addEventListener("click", tennisFilter);

document.getElementById("sort-select").addEventListener("change", (e) => {
    const selectedSortOption = e.target.value;

    if(selectedSortOption == "rating-desc") {
        sortByRating(true);
    } else if (selectedSortOption == "rating-asc") {
        sortByRating(false);
    } else if (selectedSortOption == "alphabetical") {
        sortByAlphabetical();
    } else {
        render();
    }
})

function imageScrollHandler(scrollValue, popup) {
    
    const image = popup.querySelector(".venue-image-large");

    let newIndex = popupImageIndex + scrollValue;
    
    if(newIndex < 0) {
        newIndex = openPopupVenue.images.length - 1;
    } else if(newIndex >= openPopupVenue.images.length) {
        newIndex = 0;
    }
    
    console.log(newIndex);

    popupImageIndex = newIndex;
    image.src = openPopupVenue.images[popupImageIndex];
}


function createStars(rating) {
    let html = "";

    for (let i = 0; i < 5; i++) {
        if (i + 1 <= rating) {
            html += "★";
        } else if (i + 0.5 === rating) {
            html += `<span class="half-star"><span class="half-fill">★</span><span class="half-empty">★</span></span>`;
        } else {
            html += `<span class="empty-star">★</span>`;
        }
    }

    return html;
}

function render(venues) {

    if (venues == undefined) {                                      //if an empty parameter is sent, we use default list, otherwise use the list that was sent as venues parameter
        venues = ITEMS;
        activeList = venues;                                        //set the active list that is being used 
        
        resetFilterButton.classList.add("active");                  //set reset button as active - underline with css styling
        golfFilterButton.classList.remove("active");
        tennisFilterButton.classList.remove("active");
        headerCounter.innerHTML = ITEMS.length;
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
            image.src = `./assets/${currentVenue.sport}_placeholder.png`;
        } else {
            image.src = currentVenue.images[0];
        }

        card.dataset.id = currentVenue.id;                          //set ID of div id need later for functions

        const venueInformation = card.querySelector(".venue-information");
        venueInformation.textContent = currentVenue.review;

        const venueStars = card.querySelector(".venue-rating");
        venueStars.innerHTML = createStars(currentVenue.rating);
        
        const currentVenueRating = currentVenue.rating;
        const numericalRating = document.createElement("span");
        numericalRating.classList.add("numerical-rating");
        numericalRating.innerHTML = `<span class = "decimal-rating">${currentVenueRating}</span>`;
        venueStars.appendChild(numericalRating);

        cardTemplate.value = currentVenue;

        card.addEventListener("click", () => {                      //handle click event for each individual card and their data
            // console.log(currentVenue);
            console.log("aaa" + currentVenue.name);
            createVenuePopup(currentVenue);
            openPopupVenue = currentVenue;                          //set the currently open venue as the one clicke don by user 
            
        })

        cardContainer.appendChild(card);                            //add to parent div
    }
}  

function createVenuePopup(venueObject) {                                //EXTREMELEY MESSY FUNCTION - BASIC IDEA IS THAT IT DYNAMICALLY CREATES POPUP WINDOW AND POPULATED BASED ON WHICH VENUE IS CLICKED BY THE USER
    const popupTemplate = document.querySelector(".venue-info-template");
    const popup = popupTemplate.cloneNode(true);
    popup.style.display = "block";

    const venueName = popup.querySelector(".venue-title");
    venueName.textContent = venueObject.name;

    const closeButton = popup.querySelector(".popup-close");
    closeButton.addEventListener("click", (e) => {
        if(e.target === closeButton) {
        popupContainer.innerHTML = "";
        popupContainer.style.display = "none";
        popupImageIndex = 0;                                
        openPopupVenue = null;                                           //clear the variables used to hold the current open venue
        }
    });

    const scrollBackBtn = popup.querySelector(".image-scroll-back");
    const scrollForwardsBtn = popup.querySelector(".image-scroll-forwards");

    if(venueObject.images.length > 1) {                                  //if there are more than 1 image, give users the option to scroll images
        scrollBackBtn.addEventListener("click", () => imageScrollHandler(-1, popup));
        scrollForwardsBtn.addEventListener("click", () => imageScrollHandler(1, popup));
    } else {
        scrollBackBtn.style.display = "none";
        scrollForwardsBtn.style.display = "none";
    }

    const venueImage = popup.querySelector(".venue-image-large");
    if(venueObject.images.length == 0) {                                 //if images array is empty, use placeholder as main image
            
            venueImage.classList.add("placeholder-image")                //add this as class so can scale the placehodler image better for the size of the card
            venueImage.src = `./assets/${venueObject.sport}_placeholder.png`;
        } else {
            venueImage.src = venueObject.images[0];
    }

    const venueAddress = popup.querySelector(".venue-address");
    venueAddress.textContent = venueObject.location;

    const venueStars = popup.querySelector(".venue-full-rating");
    venueStars.innerHTML = createStars(venueObject.rating);

    const fullReview = popup.querySelector(".venue-full-review");
    fullReview.textContent = venueObject.review;


    const prosList = popup.querySelector(".pros-list");
    const consList = popup.querySelector(".cons-list");


    for(let i = 0; i < venueObject.pros.length; i++) {
        const listElement = document.createElement("li");
        listElement.appendChild(document.createTextNode(venueObject.pros[i]));

        prosList.appendChild(listElement);
    }

     for(let i = 0; i < venueObject.cons.length; i++) {
        const listElement = document.createElement("li");
        listElement.innerText = venueObject.cons[i];
        consList.appendChild(listElement);
    }

    
    popupContainer.style.display = "flex";
    popupContainer.appendChild(popup);
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


    activeList = filteredByGolf;
    headerCounter.innerHTML = filteredByGolf.length;
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

    activeList = filteredByTennis;
    headerCounter.innerHTML = filteredByTennis.length;
    render(filteredByTennis);
}

function sortByRating(byDescending) {

    let sorted = activeList.slice();               //create shallow copy of acitvelist
    let isSwapped;

    if(byDescending == true) {   
        do {                                       //implementaion of bubble sort - check two array elements, if the one to the right of index i is less than i, swap them so that the largest number flows tot he right
            isSwapped = false;                
            for(let i = 0; i < sorted.length - 1; i++) {
                if(sorted[i].rating > sorted[i + 1].rating) {
                    let temp = sorted[i];
                    sorted[i] = sorted[i + 1];
                    sorted[i + 1] = temp;
                    isSwapped = true; 
                }
            }
        } while (isSwapped);
    } else {
        do {                                       //just same bubble sort implementation but have the largest value float to the left ofthe array
            isSwapped = false;                
            for(let i = 0; i < sorted.length - 1; i++) {
                if(sorted[i].rating < sorted[i + 1].rating) {
                    let temp = sorted[i];
                    sorted[i] = sorted[i + 1];
                    sorted[i + 1] = temp;
                    isSwapped = true; 
                }
            }
        } while(isSwapped);
    }
    
    render(sorted)
}

function sortByAlphabetical() {
    let sorted = activeList.slice();                //create shallow copy of active list
    let isSwapped;

    do {
        isSwapped = false;
        for(let i = 0; i < sorted.length - 1; i++) {
            if(sorted[i].name > sorted[i + 1].name) {
                let temp = sorted[i];
                sorted[i] = sorted[i + 1];
                sorted[i + 1] = temp;
                isSwapped = true; 
            }
        }
    } while(isSwapped);

    render(sorted);
}