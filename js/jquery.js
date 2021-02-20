$(document).ready(function(){
  var scrollButton = $("#scroll-top");
    $(window).scroll(function(){
        if($(this).scrollTop() >= 700){
            scrollButton.fadeIn(500);
        }else{
            scrollButton.fadeOut(500);
        }
    });

    scrollButton.click(function(){
        $("html,body").animate({scrollTop:0},1500);
    });

    $(".navbar-dark .navbar-nav > li > a").click(function(){
         
        
        $("html,body").animate({
            
          scrollTop:$('#'+$(this).data('scroll')).offset().top

        },1000);

    });
    
});
