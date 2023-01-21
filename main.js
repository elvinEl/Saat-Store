// var swiper = new Swiper(".mySwiper", {
//   pagination: {
//     el: ".swiper-pagination",
//     type: "progressbar",
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// AOS.init({
//   disable: 'phone'
// });



// FUNCTION
function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}

// FUNCTION1
function increaseValue1() {
  var value = parseInt(document.getElementById('number1').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number1').value = value;
}

function decreaseValue1() {
  var value = parseInt(document.getElementById('number1').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number1').value = value;
}


// FUNCTION2
function increaseValue2() {
  var value = parseInt(document.getElementById('number2').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number2').value = value;
}

function decreaseValue2() {
  var value = parseInt(document.getElementById('number2').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number2').value = value;
}

// FUNCTION3
function increaseValue3() {
  var value = parseInt(document.getElementById('number3').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number3').value = value;
}

function decreaseValue3() {
  var value = parseInt(document.getElementById('number3').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number3').value = value;
}

// FUNCTION4
function increaseValue4() {
  var value = parseInt(document.getElementById('number4').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number4').value = value;
}

function decreaseValue4() {
  var value = parseInt(document.getElementById('number4').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number4').value = value;
}

// FUNCTION5
function increaseValue5() {
  var value = parseInt(document.getElementById('number5').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number5').value = value;
}

function decreaseValue5() {
  var value = parseInt(document.getElementById('number5').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number5').value = value;
}

// FUNCTION6
function increaseValue6() {
  var value = parseInt(document.getElementById('number6').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number6').value = value;
}

function decreaseValue6() {
  var value = parseInt(document.getElementById('number6').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number6').value = value;
}

// FUNCTION7
function increaseValue7() {
  var value = parseInt(document.getElementById('number7').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number7').value = value;
}

function decreaseValue7() {
  var value = parseInt(document.getElementById('number7').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number7').value = value;
}

// FUNCTION8
function increaseValue8() {
  var value = parseInt(document.getElementById('number8').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number8').value = value;
}

function decreaseValue8() {
  var value = parseInt(document.getElementById('number8').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number8').value = value;
}

// FUNCTION9
function increaseValue9() {
  var value = parseInt(document.getElementById('number9').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number9').value = value;
}

function decreaseValue9() {
  var value = parseInt(document.getElementById('number9').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number9').value = value;
}
function increaseValue10() {
  var value = parseInt(document.getElementById('number10').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number10').value = value;
}

function decreaseValue10() {
  var value = parseInt(document.getElementById('number10').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number10').value = value;
}



document.getElementsByTagName('figure').addEventListener('click', myFunc);

function myFunc() {
  return window.location.href = 'index2.html';
}
myFunc();


document.querySelector('.anasehife').addEventListener('click', newFunc);

function newFunc() {
  return window.location.href = 'index.html';
}
newFunc();


document.querySelector('.drpDwn').addEventListener('click', switchfunc);
function switchfunc() {
  return window.location.href = 'index3.html';
}
switchfunc();

