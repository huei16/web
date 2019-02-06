$(window).load(function(){
    $(document).mousemove( function(e){
     var x = e.pageX;
     var y = e.pageY;
     $("#hometext").css("margin-left", x);
     $("#hometext").css("margin-top", y);
    });
});
$(window).load(function(){
    $(document).mousemove( function(e){
     var x = e.pageX;
     var y = e.pageY;
     $("#maketext").css("margin-left", x);
     $("#maketext").css("margin-top", y);
    });
});
$(window).load(function(){
    $(document).mousemove( function(e){
     var x = e.pageX;
     var y = e.pageY;
     $("#navtext").css("margin-left", x);
     $("#navtext").css("margin-top", y);
    });
});
$(window).load(function(){
    $(document).mousemove( function(e){
     var x = e.pageX;
     var y = e.pageY;
     $("#footertext").css("margin-left", x);
     $("#footertext").css("margin-top", y);
    });
});
