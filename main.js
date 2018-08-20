$(document).ready(function () {

    var counter = 0;
    var images = $('.slide');

    function reset() {
        for (var i = 0; i < images.length; i++) {
            $(images[i]).css({
                "display": "none"

            });
        }
    }

    function slideshow() {

        if (counter == 5) {
            reset();
            counter = 0;
        }

        $(images[counter]).css({
            "display": "block"

        });
        counter++;
        setTimeout(slideshow, 3000);
    }

    reset();
    slideshow();


    /* scroll detection */
    $(window).scroll(function(){
  
            console.log($(window).scrollTop());
            
          if($(window).scrollTop() > 750){
            $("nav ul").css("background", "black");
          }
          else {
            $("nav ul").css("background", "none");
          }

    });
    
});
