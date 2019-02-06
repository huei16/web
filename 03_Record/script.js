// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction1()};
// // Get the header
// var header = document.getElementById("myHeader");
// // Get the offset position of the navbar
// var sticky = (header.offsetTop);
// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction1() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky1");
//   } else {
//     header.classList.remove("sticky1");
//   }
// }




$(function() {
    var rotation = 0,
        scrollLoc = $(document).scrollTop();
    $(window).scroll(function() {
        var newLoc = $(document).scrollTop();
        var diff = scrollLoc - newLoc;
        rotation += diff, scrollLoc = newLoc;
        var rotationStr = "rotate(" + rotation + "deg)";
        $(".rotate").css({
            "-webkit-transform": rotationStr,
            "-moz-transform": rotationStr,
            "transform": rotationStr
        });
    });
})
