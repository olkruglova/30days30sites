$('.nav-item').on('click', function() {
    $('nav').addClass('i');
    $('#social').css('display', 'none');
})
$('header').on('click', function() {
    $('article').css('margin-left', '-80%');
    $('nav').removeClass('i');
    $('#social').css('display', 'block');
})
$('.about-us').on('click', function() {
    $('#about-us').css('margin-left', '0');
    $('#training, #our-team, #gallery-section, #contact').css('margin-left', '-80%');
})
$('.training').on('click', function() {
    $('#training').css('margin-left', '0');
    $('#about-us, #our-team, #gallery-section, #contact').css('margin-left', '-80%');
})
$('.team').on('click', function() {
    $('#our-team').css('margin-left', '0');
    $('#about-us, #training, #gallery-section, #contact').css('margin-left', '-80%');
})
$('.gallery').on('click', function() {
    $('#gallery-section').css('margin-left', '0');
    $('#about-us, #training, #our-team, #contact').css('margin-left', '-80%');
})
$('.contact').on('click', function() {
    $('#contact').css('margin-left', '0');
    $('#about-us, #training, #our-team, #gallery-section').css('margin-left', '-80%');
    $('#social').css('display', 'block').css('margin-top', '53%');
})

$(function() {
    var theImage = $('ul#gallery li img');
    var theWidth = theImage.width()*1.1;
    //wrap into mother div
    $('ul#gallery').wrap('<div id="mother" />');
    //assign height width and overflow hidden to mother
    $('#mother').css({
      width: function() {
        return theWidth;
      },
      height: function() {
        return theImage.height()*1.1;
      },
      position: 'relative',
      overflow: 'hidden',
      margin: '27% auto 0 auto',
      boxShadow: '0 0 30px 1px #fff'
    });
    //get total of image sizes and set as width for ul 
    var totalWidth = theImage.length * theWidth;
    $('ul#gallery').css({
      width: function() {
        return totalWidth;
      }
    });
  
    var gallery_timer = setInterval(function() {
      gallery_next();
    }, 3000);
  
    function gallery_next() {
      var a = $(".active");
      a.removeClass('active');
  
      if (a.hasClass('last')) {
        //last element -- loop
        a.parent('ul#gallery').animate({
          "margin-left": (0)
        }, 1000);
        a.siblings(":first").addClass('active');
      } else {
        a.parent('ul#gallery').animate({
          "margin-left": (-(a.index() + 1) * theWidth)
        }, 1000);
        a.next().addClass('active');
      }
    }
  
    // Cancel slideshow and move next manually on click
    $('ul#gallery li img').on('click', function() {
      clearInterval(gallery_timer);
      gallery_next();
    });
  
  });