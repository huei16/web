var bg = document.getElementById("bg");
var button = document.getElementById("button");

button.onclick = function(){
  if(bg.className == "show"){
    bg.className = "";
    button.innerHTML = "Show Original Poster by Josef Müller-Brockmann";
  } else {
    bg.className = "show";
    button.innerHTML = "Hide Original Poster by Josef Müller-Brockmann";
  }
};
