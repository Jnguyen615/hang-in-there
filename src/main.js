// query selector variables go here 👇
var poster = document.querySelector('poster');
var posterImg = document.querySelector('.poster-img');
var posterTitle = document.querySelector('.poster-quote');
var posterForm = document.querySelector('.poster-form hidden');
var posterImgUrl = document.querySelector('#poster-image-url');
var posterTitle = document.querySelector('#poster-title');
var posterQuote = document.querySelector('#poster-quote');
var savePosterButton = document.querySelector('.save-poster');
var showSavedPostersButton = document.querySelector('.show-saved');
var showRandomPoster = document.querySelector('.show-random');
var showForm = document.querySelector('.show-form');
var makePoster = document.querySelector('.make-poster');
var showMainButton = document.querySelector('.show-main');
var backToMainButton = document.querySelector('.back-to-main');
var showMainButton = document.querySelector('.show-main');

//Global Variables 
var savedPosters = [];
var currentPoster;
// we've provided you with some data to work with 👇

// event listeners go here 👇

// event handlers go here 👇

// functions here 
// (we've provided two to get you started)!

// show() {

// }

// hide() {

// }
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(), 
    imageURL: imageURL, 
    title: title, 
    quote: quote}
}