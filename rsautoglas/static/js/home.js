const realmap = document.querySelector("#map");
const covermap = document.querySelector("#covermap");
var currentSlideId = 1;
var map;
var sliderElement = document.getElementById("slider");
var totalSlides = sliderElement.childElementCount;
let myInterval = setInterval(next, 7000);

function mapLoad() {
  if (cookiemapselect === null || cookiemapselect === "false") {
    covermap.classList.remove("hidden");
    realmap.classList.add("hidden");
  } else {
    covermap.classList.add("hidden");
    realmap.classList.remove("hidden");

    // Karte wird geladen
    map.setView([48.6987771, 13.1176147], 13);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
    var marker = L.marker([48.698771, 13.1176147]).addTo(map);
    map.scrollWheelZoom.disable();
  }
}

// Image slider
function next() {
  if (currentSlideId < totalSlides) {
    currentSlideId++;
    showSlide();
  } else {
    currentSlideId = 1;
    showSlide();
  }
  clearInterval(myInterval);
  myInterval = setInterval(next, 7000);
}

function prev() {
  if (currentSlideId > 1) {
    currentSlideId--;
    showSlide();
  } else {
    currentSlideId = totalSlides;
    showSlide();
  }
  clearInterval(myInterval);
  myInterval = setInterval(next, 7000);
}

function showSlide() {
  slides = document.getElementById("slider").getElementsByTagName("img");
  for (let index = 0; index < totalSlides; index++) {
    const element = slides[index];
    if (currentSlideId == index + 1) {
      element.classList.add("animate-fade-in-down");
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
      element.classList.remove("animate-fade-in-down");
    }
  }
}

setTimeout(() => {
  if (cookiemapselect !== null && cookiemapselect !== "false") {
    map = L.map("map");
    map.on("focus", function () {
      map.scrollWheelZoom.enable();
    });
    map.on("blur", function () {
      map.scrollWheelZoom.disable();
    });
  }
  mapLoad();
}, 500);
