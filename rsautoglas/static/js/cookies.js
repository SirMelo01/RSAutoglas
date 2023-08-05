var form = document.querySelector("form");
var cookieslider = document.getElementById("cookie");
var mapslider = document.getElementById("map");
var fondslider = document.getElementById("fond");

function cookiereload2() {
  if (cookieslider.checked === true) {
    document.cookie =
      "Cookie-Consent=true; expires=" + new Date(9999, 0, 1).toUTCString() + "; path=/";
  } else {
    document.cookie =
      "Cookie-Consent=false; expires=" + new Date(9999, 0, 1).toUTCString() + "; path=/";
  }

  if (mapslider.checked === true) {
    document.cookie =
      "Cookie-Map=true; expires=" + new Date(9999, 0, 1).toUTCString() + "; path=/";
  } else {
    document.cookie =
      "Cookie-Map=false; expires=" + new Date(9999, 0, 1).toUTCString() + "; path=/";
  }

  if (fondslider.checked === true) {
    document.cookie =
      "Cookie-Fond=true; expires=" + new Date(9999, 0, 1).toUTCString() + "; path=/";
  } else {
    document.cookie =
      "Cookie-Fond=false; expires=" + new Date(9999, 0, 1).toUTCString() + "; path=/";
  }
}

onload = function () {
  if (cookieselect === "true") {
    cookieslider.checked = true;
  }

  if (cookiemapselect === "true") {
    mapslider.checked = true;
  }

  if (cookiefondselect === "true") {
    fondslider.checked = true;
  }
};

cookieslider.addEventListener("change", (e) => {
  if (cookieslider.checked === true) {
    mapslider.checked = true;
    fondslider.checked = true;
  } else {
    mapslider.checked = false;
    fondslider.checked = false;
  }
  cookiereload2();
});

mapslider.addEventListener("change", (e) => {
  if (mapslider.checked === true) {
    if (fondslider.checked === true) {
      cookieslider.checked = true;
    }
  } else {
    cookieslider.checked = false;
  }
  cookiereload2();
});

fondslider.addEventListener("change", (e) => {
  if (fondslider.checked === true) {
    if (mapslider.checked === true) {
      cookieslider.checked = true;
    }
  } else {
    cookieslider.checked = false;
  }
  cookiereload2();
});