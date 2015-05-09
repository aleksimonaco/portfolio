$(document).ready(function() {

    // Navigation links scroll to appropiate site-section
    $(".nav-link").click(function() {
        var destination = "#", 
            nav = $(this).html();

    	nav.blur();

        switch(nav) {
            case "Aleksi Monaco":
                destination += "aboutme";
                break;
            case "Contact":
                destination += "contact";
                break;
            case "Lunch Menu":
                destination += "lunch-menu";
                break;
            case "CalculatorJS":
                destination += "calculator-js";
                break;
        }

    	$('html, body').animate({
        	scrollTop: $(destination).offset().top - 50
    	}, 750);
    });

    //Show loading spinner when processing form
    $("#contact-form").submit(function(){
        $(this).find("#send-button").prepend("<i class='fa fa-spinner fa-spin'></i> ");
    });

});
