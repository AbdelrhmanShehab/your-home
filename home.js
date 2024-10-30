//2.1 FEATURE LOGOUT
let headerGuest = document.querySelector(".header-nav");
let headerProfile = document.querySelector(".header-nav-login");
let logoutBtn = document.querySelector(".op4");
// showing and hiding profile dropdown
let dropdownProfile = document.querySelector(".dropdown-profile");
let userProfile = document.querySelector(".user-profile-photo-nav");

userProfile.addEventListener("click", function (event) {
  if (dropdownProfile.style.display === "block") {
    dropdownProfile.style.display = "none";
  } else {
    dropdownProfile.style.display = "block";
  }
});

logoutBtn.addEventListener("click", function (event) {
  headerGuest.style.display = "flex";
  headerProfile.style.display = "none";
  event.preventDefault();
});
// END OF FEATURE LOGOUT

let observer = new IntersectionObserver((entites) => {
  entites.forEach((entity) => {
    if (entity.isIntersecting) entity.target.classList.add("show");
  });
});

let hiddenSections = document.querySelectorAll(".hidden");
hiddenSections.forEach((el) => observer.observe(el));