$(document).ready(function(){
        
        var acercade = $('#acerca-de').offset().top,
        trabajos = $('#trabajos').offset().top,
        contacto = $('#contacto').offset().top;
    
        $('#btn-acerca-de').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: acercade - 100
            }, 500);
        });
    
        $('#btn-trabajos').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: trabajos - 100
            }, 500);
        });
    
        $('#btn-contacto').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: contacto - 100
            }, 500);
        });

    });