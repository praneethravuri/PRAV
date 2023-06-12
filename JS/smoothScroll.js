$(document).ready(function(){
    $(".nav-link").click(function(){
        let loc = $(this).attr("href");

        if(loc === "#header-space"){
            window.scrollTo(0, 0);
        }
        else{
            $('html,body').animate({
                scrollTop: $(`${loc}`).offset().top-100},
                'slow');
        }

    });
});