$(document).ready(function(){
$("body").niceScroll();    
$('.carousel').carousel({

	interval:1800
});
    $('.gear-check').click(function(){
    $('.color-option').fadeToggle();
    })

    var colorLi=$('.color-option ul li');

    colorLi
     .eq(0).css('backgroundColor','#E41b17').end()
     .eq(1).css('backgroundColor','#337ab7').end()
     .eq(2).css('backgroundColor','#00b1ba').end()
     .eq(3).css('backgroundColor','#fd5927');

     colorLi.click(function(){

         $("link[href*='theme']").attr('href',$(this).attr('data-value') );
     }); 

    var scrollButton=$('#scroll-top');
    $(window).scroll(function()
        {
          console.log($(this).scrollTop());
            $(this).scrollTop()>=700?scrollButton.show():scrollButton.hide();


            scrollButton.click(function()
            {
            $('html,body').animate({scrollTop:0},600);
            });

        });  
    

});
//loadinf screen
$(window).load(function() {
		// Animate loader off screen
       
        $(".loading-overlay .sk-cube-grid").fadeOut(1000,function()                   {
        $(this).parent().fadeOut(2000,function(){
            
            $('body').css('overflow','auto');
            $(this).remove();
            
        });    
            
    });
	});