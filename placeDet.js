let rightArrow = document.querySelector(".right-arrow-place");
let leftArrow = document.querySelector(".left-arrow-place");
let photo = document.querySelector(".big-photo-place");

let photosPlaceArr = [
  "imgs//big-photo-place.jpg",
  "imgs//small-photo-place.jpg",
  "imgs//small-photo-place2.jpg",
];

let i = 0;

if (rightArrow.addEventListener("click", rightSlide)) {
  i++;
} else if (leftArrow.addEventListener("click", leftSlide)) {
  i--;
}

function rightSlide() {
  photo.src = photosPlaceArr[i];
  ++i;
  if (i == photosPlaceArr.length) {
    i = 0;
  }
}

function leftSlide() {
  photo.src = photosPlaceArr[i];
  if (i == 0) {
    i = photosPlaceArr.length;
  }
  --i;
}