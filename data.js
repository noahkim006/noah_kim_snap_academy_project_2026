export const ITEMS = [
  {
    id: 1,
    name: "Sea Aire Golf Course",
    sport: "golf",
    location: "22730 Lupine Dr, Torrance, CA 90505",
    images: ["/assets/sea_aire_image_1.jpg", "/assets/sea_aire_image_2.png", "/assets/sea_aire_image_3.jpg"], //populate later
    rating: 4,
    pros: ["Not very packed", "Quiet neighborhood", "Well maintained course", "Rents decent quality clubs and balls", "Extremely affordable for golf"],
    cons: ["Parking lot is very small", "Very sloped terrain on hole 2"],
    review: "Sea Aire is a great golf course for people new to the sport of golf. It is a smaller course located in a quiet Torrance neighborhood, so there it is less packed than larger courses and allows for you and friends to take your time enjoying the wonderful views and practicing your swings!"
  },

  {
    id: 2,
    name: "Wilson Park Tennis Courts",
    sport: "tennis",
    location: "2300 Washington Ave, Torrance, CA 90501",
    images: ["/assets/wilson_park_image_1.png", "/assets/wilson_park_image_2.png", "/assets/wilson_park_image_3.png"],
    rating: 3.5,
    pros: ["Very nice park to walk", "Good location close to food", "Multiple courts for tennis and pickleball", "Farmers Market on Tuesday and Saturday"],
    cons: ["EXTREMELY PACKED on a busy day", "Poorly maintained parking lot", "You WILL lose balls if you are bad at tennis (like me)"],
    review: "Wilson Park is very large park in located in the city of Torrance. It is popular with families, which makes finding a spot at the tennis courts difficult at peak hours. When you do manage to get a court, be prepared to lose a couple balls over the fence as it lower than you think. Wilson Park also hosts a farmers market on Tuesday and Thursday, so that provides a nice way to get food after a game and also support local farmers."
  },
  
  {
    id: 3,
    name: "Torrance Honda Wellness Center",
    sport: "tennis",
    location: "1919 Torrance Blvd #100, Torrance, CA 90501",
    images: [], //add error handler or something for this cuz there are 0 pics online of this
    rating: 3,
    pros: ["Not very packed", "Well maintained courts", "Restrooms closeby", "Great location for food afterwards"],
    cons: ["Driving here/out of here", "Not open to the public"],
    review: "The tennis and pickleball courts at the Torrance Honda Wellness Center are great and would have been rated higher if it was not for the fact that it is not open to the public. I lucky enough to get in with permission from a friend, and this makes me want to work at Honda for perks like this. Only major con I would say is the fact that it is located in Old Torrance and I despise driving in Old Torrance."
  },

  {
    id: 4,
    name: "Hollyglen Park",
    sport: "tennis",
    location: "5255 137th St, Hawthorne, CA 90250",
    images: ["/assets/hollyglen_image_1.png", "/assets/hollyglen_image_2.png", "/assets/hollyglen_image_3.png"], 
    rating: 4,
    pros: ["Not alot of people", "Nice neighborhood", "Easy to find a court to play for long time", "Trail to walk after playing"],
    cons: ["Sorta dirty courts (scattered leaves and plant debris)", "Parking lot is SMALL (street parking is almost required)"],
    review: "The public tennis courts at Hollyglen park are a very nice and quiet place to try and learn the sport of tennis. At the times that I have been, it was extremely easy to find an open court that me and my friends could play and practice at, uninteruppted by people are waiting for the next open court."
  },

  {
    id: 5,
    name: "The Islands Golf Center",
    sport: "golf",
    location: "14893 E Ball Rd, Anaheim, CA 92806",
    images: ["/assets/islands_image_1.png", "/assets/islands_image_2.png", "/assets/islands_image_3.png"],
    rating: 3.5,
    pros: ["Cheap rate for balls and clubs", "Yummy food", "Great driving range and chipping green", "Helpful and friendly employees"],
    cons: ["ITS FAR (Anaheim)", "VERY popular on weekends, good luck finding a spot"],
    review: `The Islands is a great place to meet up with friends after a long week and hit some balls over a large "lake" while enjoying some good food. The major con taking away from the rating is how popular this place is. If you are coming during peak hours, you WILL be waiting for a while for a spot to open up.`,
  },

  { 
    id: 6,
    name: "Topgolf El Segundo",
    sport: "golf",
    location: "400 Pacific Coast Hwy, El Segundo, CA 90245",
    images: ["/assets/topgolf_image_1.png", "/assets/topgolf_image_2.png", "/assets/topgolf_image_3.png"],
    rating: 2,
    pros: ["High tech looking facility", "Fun minigames to practice swing", "Easily accessible restroom and restaurant", "Large parking lot"],
    cons: ["EVERYTHING IS EXPENSIVE",  "Far away"],
    review: "Topgolf is a great place to casually meet friends and play some golf minigames while having some food or a drink ...  is what I would say if everythign wasn't so expensive. It does not make sense how expensive Topgolf is. From the food / drinks to booking by the hour, I wish I can be someone who can casually afford a couple hours at Topgolf."
  },
]