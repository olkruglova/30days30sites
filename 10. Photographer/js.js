$('article').css('opacity', '0');

$('document').ready( function () {

    /*********Navigation******** */

    $('.nav-item').on('mouseover', function(){
        $(this).css('background-color', "white").css('color', 'black');
    });
    $('.nav-item').on('mouseout', function(){
        $(this).css('background-color', 'black').css('color', 'white');
    });

    $('#header').on('click', function(){
        $('article').css('opacity', '0');
    })

    /********Open galleries****** */

    $('.nav-item.under-the-sea').on('click', function(){
        $('#under-the-sea').css('z-index', '100').css('opacity', '1');
        $('#pure, #beginnings, #down-in-the-garden').css('z-index', '50').css('opacity', '0');
    });
    });

    $('.nav-item.pure').on('click', function(){
        $('#pure').css('z-index', '100').css('opacity', '1');
            $('#under-the-sea, #beginnings, #down-in-the-garden').css('z-index', '50').css('opacity', '0');
          });

    $('.nav-item.beginnings').on('click', function(){
        $('#beginnings').css('z-index', '100').css('opacity', '1');
            $('#pure, #under-the-sea, #down-in-the-garden').css('z-index', '50').css('opacity', '0');
          });

    $('.nav-item.down-in-the-garden').on('click', function(){
        $('#down-in-the-garden').css('z-index', '100').css('opacity', '1');
            $('#pure, #beginnings, #under-the-sea').css('z-index', '50').css('opacity', '0');
          });