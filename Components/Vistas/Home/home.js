"use strict";

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(function () {
    hideLoader();
  }, 2000);
});

const hideLoader = () => {
  const loaderContainer = document.querySelector(".showbox");
  loaderContainer.style.display = "none";
};
