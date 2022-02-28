"use strict";

const Switch = document.querySelector(".switch");
const slider = document.querySelector(".switch-btn");
let isMonthly = true;
const free = document.querySelector(".table:nth-child(1) .table-heading span");
const premium = document.querySelector(
  ".table:nth-child(2) .table-heading span"
);
const enterprise = document.querySelector(
  ".table:nth-child(3) .table-heading span"
);

Switch.addEventListener("click", function (e) {
  if (slider.style.left === "50%") {
    slider.style.left = "0";
    free.textContent = "$0 / month";
    premium.textContent = "$6.99 / month";
    enterprise.textContent = "$12.99 / month";
  } else {
    slider.style.left = "50%";
    free.textContent = "$0 / year";
    premium.textContent = "$69.99 / year";
    enterprise.textContent = "$110.99 / year";
  }
});
