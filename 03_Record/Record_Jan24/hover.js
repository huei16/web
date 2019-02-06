
// ------------------
// Hover House 1
// ------------------
var theBox1=document.querySelector(".building-MET");
var theInfo1=document.querySelector(".METinfo");
var theBubble1=document.querySelector(".METbubble");

theBox1.addEventListener("mouseover", Show1);
// theBox1.addEventListener("mouseout", Hide1);

function Show1() {
  theInfo1.classList.add("hovered");
  theBubble1.classList.add("hovered");
}
// function Hide1() {
//   theInfo1.classList.remove("hovered");
//   theBubble1.classList.remove("hovered");
// }



// ------------------
// Hover House 2
// ------------------
var theBox2=document.querySelector(".building-BS1");
var theInfo2=document.querySelector(".BSinfo1");
var theBubble2=document.querySelector(".BSbubble1");

theBox2.addEventListener("mouseover", Show2);
// theBox2.addEventListener("mouseout", Hide2);

function Show2() {
  theInfo2.classList.add("hovered");
  theBubble2.classList.add("hovered");
}
// function Hide2() {
//   theInfo2.classList.remove("hovered");
//   theBubble2.classList.remove("hovered");
// }




// ------------------
// Hover House 3
// ------------------
var theBox3=document.querySelector(".building-BS2");
var theInfo3=document.querySelector(".BSinfo2");
var theBubble3=document.querySelector(".BSbubble2");

theBox3.addEventListener("mouseover", Show3);
// theBox3.addEventListener("mouseout", Hide3);

function Show3() {
  theInfo3.classList.add("hovered");
  theBubble3.classList.add("hovered");
}
// function Hide3() {
//   theInfo3.classList.remove("hovered");
//   theBubble3.classList.remove("hovered");
// }
