const card = document.querySelectorAll(".card--picture");
const cardImg = document.getElementById("cardImg");
const cardHeading = document.getElementById("cardHeading");
const cardText = document.getElementById("cardText");

const listbox = document.querySelectorAll(".card__list-item");

const list = [
  document.getElementById("list1"),
  document.getElementById("list2"),
  document.getElementById("list3"),
];

const heading = ["Family Gatherings", "Special Events", "Social Events"];
const text = [
  "We love catering for entire families. So bring the extended family along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
  "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
  "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
];
const picture = [
  `<picture class="card__picture card__picture--1" id="cardImg">
<source media="(min-width: 1000px)" srcset="images/homepage/family-gathering-desktop@2x.jpg" alt="Family Gathering" width="540px" height="600px">
<source media="(min-width: 600px)" srcset="images/homepage/family-gathering-tablet.jpg" alt="Family Gathering" >
<source media="(max-width: 599px)" srcset="images/homepage/family-gathering-mobile.jpg" alt="Family Gathering" >
<img src="/images/homepage/family-gathering-desktop.jpg" alt="Family Gathering" >
</picture>`,
  `    <picture class="card__picture card__picture--2" >
<source media="(min-width: 1000px)" srcset="images/homepage/special-events-desktop@2x.jpg" alt="Special Events" width="540px" height="600px">
<source media="(min-width: 600px)" srcset="images/homepage/special-events-tablet.jpg" alt="Special Events" >
<source media="(max-width: 599px)" srcset="images/homepage/special-events-mobile.jpg" alt="Special Events" >
<img src="/images/homepage/special-events-desktop.jpg" alt="Special Events" id="cardImg2">
</picture>`,
  ` <picture class="card__picture card__picture--3" id="cardImg3">
<source media="(min-width: 1000px)" srcset="images/homepage/social-events-desktop@2x.jpg" alt="Social Events" width="540px" height="600px">
<source media="(min-width: 600px)" srcset="images/homepage/social-events-tablet.jpg" alt="Social Events" >
<source media="(max-width: 599px)" srcset="images/homepage/social-events-mobile.jpg" alt="Social Events" >
<img src="/images/homepage/social-events-desktop.jpg" alt="Social Events" >
</picture>`,
];

// Functions
let counter = 1;

function changeUI() {
  cardHeading.textContent = heading[counter];
  cardText.textContent = text[counter];
  cardImg.innerHTML = picture[counter];

  // toggle list
  list[counter].classList.add("active");
  if (counter === 1) {
    list[0].classList.remove("active");
    list[2].classList.remove("active");
  } else if (counter === 2) {
    list[0].classList.remove("active");
    list[1].classList.remove("active");
  } else if (counter === 0) {
    list[1].classList.remove("active");
    list[2].classList.remove("active");
  }
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}

let timer = setInterval(changeUI, 4000);

document.getElementById("list3").addEventListener("click", () => {
  counter = 2;
  changeUI();
  clearInterval(timer);
  timer = setInterval(changeUI, 4000);
});

document.getElementById("list2").addEventListener("click", () => {
  counter = 1;
  changeUI();
  clearInterval(timer);
  timer = setInterval(changeUI, 4000);
});

document.getElementById("list1").addEventListener("click", () => {
  counter = 0;
  changeUI();
  clearInterval(timer);
  timer = setInterval(changeUI, 4000);
});

// listbox.forEach((item) => {
//   item.addEventListener("click", () => {
//     counter = ;
//     changeUI();
//     clearInterval(timer);
//     timer = setInterval(changeUI, 4000);
//   });
// });
