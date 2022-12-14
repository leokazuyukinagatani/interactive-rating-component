const card = document.querySelector(".flip-card");
const cardFront = document.querySelector(".flip-card-front");
const cardBack = document.querySelector(".flip-card-back");
const cardInner = document.querySelector(".flip-card-inner");

const rating1 = document.getElementById("rating-1");
const rating2 = document.getElementById("rating-2");
const rating3 = document.getElementById("rating-3");
const rating4 = document.getElementById("rating-4");
const rating5 = document.getElementById("rating-5");
const selectedRating = document.getElementById("selected");
const ratings = [rating1, rating2, rating3, rating4, rating5];

let userName = document.querySelector("#name");

let ratingScore=1;

function flipCard() {
  card.classList.toggle("is-flipped");
}

function ratingReset() {
  for (let index = 0; index < ratings.length; index++) {
    ratings[index].classList.remove("active");
  }
}

function ratingChange(event) {
  let ratingTextButton = event.target.textContent;
  ratingReset();
  for (let i = 0; i < ratingTextButton; i++) {
    ratings[i].classList.add("active");
  }

  ratingScore = (Number(event.target.textContent));
}

function submit() {
  selectedRating.textContent= `You selected ${ratingScore} out of 5`;
  flipCard();
}
