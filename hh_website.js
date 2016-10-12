$(function() {

  //scroll animation
  window.sr = ScrollReveal();
  $(window).scroll(function(){
    sr.reveal('#aboutMe');
    sr.reveal('.robocare');
    sr.reveal('.fellowguide');
    sr.reveal('.upcoming');
    sr.reveal('#contact');
  })

  //smooth scroll
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
 
  //grid
  $('.honeycombs').honeycombs({
    combWidth: 250, margin: 10

  });


});

// linked in div click event