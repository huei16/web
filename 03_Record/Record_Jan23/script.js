// ------------------
// Running Man
// ------------------
$(window).scroll(function() {

    var currY = $(this).scrollTop();
    var postHeight = $(this).height();
	var scrollHeight = $(document).height();
    // Current percentual position
	var scrollPercent = (currY*3 / (scrollHeight - postHeight)) * 30;
  //  3是速度 30是結束空白


    $('#moi').css('left', scrollPercent+2 +"%");

});
