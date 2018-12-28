$('.additional-text').css('display', 'none')
$('.text-info').on('click', function(){
    $('.additional-text').toggle( "slow", function() {
        // Animation complete.
      });
})