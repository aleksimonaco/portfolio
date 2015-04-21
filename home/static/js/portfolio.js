$(document).ready(function() {

    $(window).scroll( function() {
    
        $('.thumbnail').each( function(i) {
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ) {
                $(this).animate({'opacity': '1'},1500);       
            }
            
        }); 
    
    });

    $(".nav-link").click(function() {
        var destination = "#", nav = $(this);
    	nav.blur();

    	if (nav.html() === "Aleksi") {
    		destination += "aboutme"
    	} else if (nav.html() === "Contact") {
    		destination += "contact";
    	} else if (nav.html() === "Lunch Menu") {
    		destination += "lunch-menu";
    	} else if (nav.html() === "CalculatorJS") {
    		destination += "calculator-js";
    	}
    	$('html, body').animate({
        	scrollTop: $(destination).offset().top - 50
    	}, 750);
    });

    $("#linkedin, #github, #facebook, #stackoverflow").hover( function() {
        $(this).animate({ 'font-size': '5.5em' });
    }, function() {
            $(this).animate({ 'font-size': '5em' });
    });

});