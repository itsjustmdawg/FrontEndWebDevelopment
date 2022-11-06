"use strict";

// Title: today.js
// Author: Mahesha Uthayakumar
// Display today's date

const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 1
let dd = today.getDate();

if (dd < 10) {
    dd = '0' + dd;
}

if (mm < 10) {
    mm = '0' + mm;
}

const formattedToday = dd + '/' + mm + '/' + yyyy;

document.getElementById('DATE').innerHTML = formattedToday;
