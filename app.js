let picker1 = document.querySelector(".picker1");
let picker2 = document.querySelector(".picker2");
let body = document.querySelector("body");
let currentColor = document.querySelector(".currentColor");
let value1 = picker1.value;
let value2 = picker2.value;

function showColor() {
  currentColor.textContent = "First Color: " + value1 + " Second Color: " + value2;
}

showColor();



let colorChanger = {

  setColor1: function() {

    value1 = picker1.value;
    value2 = picker2.value;

    body.style.background = `linear-gradient( ${value1} , ${value2})`;
    showColor();

  },


  setColor2: () => {
    value1 = picker1.value;
    value2 = picker2.value;

    body.style.background = `linear-gradient( ${value1} , ${value2})`;
    showColor();
  },

};


picker1.addEventListener("input", colorChanger.setColor1);
picker2.addEventListener("input", colorChanger.setColor2);
