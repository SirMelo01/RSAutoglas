const button = document.querySelector("#menu-button");
const cookie = document.querySelector("#menu-cookie");
const menu = document.querySelector("#navbar-cta");

//dropdown var
const informationen = document.querySelector("#eins");
const leistungen = document.querySelector("#zwei");
const bilder = document.querySelector("#drei");
const standort = document.querySelector("#vier");
const kontakt = document.querySelector("#fuenf");

//code dropdown
informationen.addEventListener("click", () => {
  menu.classList.add("hidden");
});
leistungen.addEventListener("click", () => {
  menu.classList.add("hidden");
});
bilder.addEventListener("click", () => {
  menu.classList.add("hidden");
});
standort.addEventListener("click", () => {
  menu.classList.add("hidden");
});
kontakt.addEventListener("click", () => {
  menu.classList.add("hidden");
});

button.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

function cookieRefresh() {
  if (window.location.pathname !== "/impressum.html" && window.location.pathname !== "/datenschutz.html"){
    if (cookieselect == null) {
      cookie.classList.add("block");
      cookie.classList.remove("hidden");
    } else {
      cookie.classList.add("hidden");
    } 
  }
}

function acceptCookie() {
  // Dauer der Cookies noch einstellen (Johannes 29.01 meint 1 Jahr)
  document.cookie =
    "Cookie-Consent=true; expires=" + new Date(9999, 0, 1).toUTCString() + "; path=/";
  document.cookie =
    "Cookie-Map=true; expires=" + new Date(9999, 0, 1).toUTCString() + "; path=/";
  document.cookie =
    "Cookie-Fond=true; expires=" + new Date(9999, 0, 1).toUTCString() + "; path=/";
  location.reload();
  cookieRefresh();
}

function refuseCookie() {
  // Dauer der Cookies noch einstellen (Johannes 29.01 meint 1 Jahr)
  document.cookie =
    "Cookie-Consent=false; expires=" + new Date(9999, 0, 1).toUTCString() + "; path=/";
  document.cookie =
    "Cookie-Map=false; expires=" + new Date(9999, 0, 1).toUTCString() + "; path=/";
  document.cookie =
    "Cookie-Fond=false; expires=" + new Date(9999, 0, 1).toUTCString() + "; path=/";
  location.reload();
  cookieRefresh();
}

cookieRefresh();