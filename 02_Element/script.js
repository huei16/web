// ------------------
// Hover Appear Logo
// ------------------
var theBox=document.querySelector(".hovercontainer1");
var theLogo=document.querySelector(".logo");

theLogo.addEventListener("mouseover", In1);
theLogo.addEventListener("mouseout", Out1);

function In1() {
  theBox.classList.add("hovered");
}
function Out1() {
  theBox.classList.remove("hovered");
}

// -------------------
// Hover Appear Intro1
// -------------------

var thePic=document.querySelector(".hovercontainer2");
var theImg=document.querySelector(".make-img");

theImg.addEventListener("mouseover", In2);
theImg.addEventListener("mouseout", Out2);

function In2() {
  thePic.classList.add("hovered");
}
function Out2() {
  thePic.classList.remove("hovered");
}
