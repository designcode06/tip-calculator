"use strict";

// //////////////////////////////
// DOM Elements
// //////////////////////////////
const inputBill = document.getElementById("input-bill");
const inputTip = document.getElementById("input-tip");
const btnCalc = document.getElementById("btn-calculate");
const btnClr = document.getElementById("btn-clear");
const tipEl = document.getElementById("tip");
const totalEl = document.getElementById("total");

// //////////////////////////////
// Functions
// //////////////////////////////
const calcTip = function (tipPerc, bill) {
  const tip = Number(bill * tipPerc);
  return tip.toFixed(2);
};

const calcTotal = function (tip, bill) {
  const total = Number(tip) + Number(bill);
  return total.toFixed(2);
};

const showResults = function (tip, total) {
  tipEl.textContent = tip;
  totalEl.textContent = total;
};

const clear = function () {
  inputBill.value = "";
  inputTip.value = "";
  tipEl.textContent = "";
  totalEl.textContent = "";
};

const calculate = function () {
  const bill = Number(inputBill.value);
  const tipPerc = Number(inputTip.value) * 0.01;
  const tip = calcTip(tipPerc, bill);
  const total = calcTotal(tip, bill);
  showResults(tip, total);
};

// //////////////////////////////
// Event Listners
// //////////////////////////////
window.onload = clear();

btnCalc.addEventListener("click", calculate);
btnClr.addEventListener("click", clear);

inputBill.addEventListener("keydown", function (key) {
  const code = key.code;

  if (code === "Enter") {
    inputTip.focus();
  }
});

inputTip.addEventListener("keydown", function (key) {
  const code = key.code;

  if (code === "Enter") {
    inputBill.focus();
    calculate();
  }
});
