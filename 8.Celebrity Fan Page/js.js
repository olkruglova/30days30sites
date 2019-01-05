$('.col').on( "mouseover", function() {
    $(this).css( "background-color", "#fff0d9" );
  });
$('.col').on( "mouseout", function() {
    $(this).css( "background-color", "rgba(255, 235, 205,0)" );
});
$('.col11').on('click', function() {
    $('.col12').removeClass('invisible');
    $('.col22, .col32, .col42').addClass('invisible');
    $('.col12').css('height', '53vh').css('position', 'absolute').css('right', '0').css("background-color", "#fff0d9" );
});
$('.col21').on('click', function() {
    $('.col22').removeClass('invisible');
    $('.col12, .col32, .col42').addClass('invisible');
    $('.col22').css('height', '53vh').css('position', 'absolute').css('right', '0').css("background-color", "#fff0d9" );
});
$('.col31').on('click', function() {
    $('.col32').removeClass('invisible');
    $('.col12, .col22, .col42').addClass('invisible');
    $('.col32').css('height', '53vh').css('position', 'absolute').css('right', '0').css("background-color", "#fff0d9" );
});
$('.col41').on('click', function() {
    $('.col42').removeClass('invisible');
    $('.col12, .col22, .col32').addClass('invisible');
    $('.col42').css('height', '53vh').css('position', 'absolute').css('right', '0').css("background-color", "#fff0d9" );
})