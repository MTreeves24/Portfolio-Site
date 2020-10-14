function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getRandomBetween(min = 50, max = 150, randomNumber = Math.random()) {
  return Math.floor(randomNumber * (max - min) + min);
}

//Typed-Effect Text
async function draw(el) {
  const text = el.textContent;

  let soFar = "";
  for (const letter of text) {
    soFar += letter;
    el.textContent = soFar;
    // wait for some amount of time
    const { typeMin, typeMax } = el.dataset;
    const waitTime = getRandomBetween(typeMin, typeMax);
    await wait(waitTime);
  }
}

document.querySelectorAll(".title").forEach(draw);

//code to turn navbar opaque on scroll
var nav = document.querySelector("nav");

window.addEventListener("scroll", function (event) {
  event.preventDefault();

  if (window.scrollY >= 450) {
    nav.classList.add("solid-navbar");
    nav.classList.remove("opaque-navbar");
  } else {
    nav.classList.add("opaque-navbar");
    nav.classList.remove("solid-navbar");
  }
});

// // code to open and close hamburger menu
// const hamburger = document.querySelector(".menu-toggle");
// const hamburgerItem = document.querySelectorAll(".hamburger-item");

// var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
// if (viewportWidth < 679) {
//   hamburgerItem.forEach((x) =>
//     x.addEventListener("click", () =>
//       document.querySelector("ul").classList.toggle("opening")
//     )
//   );
//   hamburger.addEventListener("click", () =>
//     document.querySelector("ul").classList.toggle("opening")
//   );
// }

//////////NAVBAR HAMBURGER DROPDOWN//////////
const ul = document.querySelector("ul");
const hamburgerToggle = document.querySelector(".menu-toggle");

hamburgerToggle.addEventListener("click", function () {
  ul.classList.toggle("opening");
  this.classList.toggle("open");
});

document.querySelectorAll("a").forEach((item) =>
  item.addEventListener("click", function () {
    ul.classList.remove("opening");
    hamburgerToggle.classList.remove("open");
  })
);

//////////ACTIVATE DROPDOWN ON CLICK//////////
const dropdown = document.querySelector(".dropdown");
const dropdownRoot = document.querySelector(".dropdown-root");

dropdownRoot.addEventListener("click", function () {
  dropdown.classList.contains("dropdown-hide")
    ? dropdown.classList.toggle("dropdown-show")
    : null;
});
