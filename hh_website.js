$(function() {

  //scroll animation
  window.sr = ScrollReveal();
  $(window).scroll(function(){
    sr.reveal('#aboutMe');
    sr.reveal('.robocare');
    sr.reveal('.fellowguide');
    sr.reveal('.chronos');
    sr.reveal('#contact');
    sr.reveal('#arted');
    sr.reveal('#utlizeart');

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

  // humbergar menu action
    $('.humbarger').click(function(){
      $("nav").toggleClass('display');
    });

   var icons = {
      header: "ui-icon-circle-arrow-e",
      activeHeader: "ui-icon-circle-arrow-s"
    };

  $('#accordion').accordion({
      collapsible: true
    });



});
