//smooth scrolling//

// Select all links with hashes
$('a[href*="#"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top -50
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        }
      });
    }
  }
});

//Scroll button
  $(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });

  $(window).scroll(function() {
    if($(this).scrollTop() > 650)  /*height in pixels when the navbar becomes non opaque*/
    {
        $('.opaque-navbar').addClass('opaque');
    } else {
        $('.opaque-navbar').removeClass('opaque');
    }
});


$(document).ready(function(){
    // Show hide popover
    $(".menu-toggle").click(function(){
      $('ul').toggleClass('opening');
      $(this).toggleClass('open');
    });
});
$( 'ul a' ).on("click", function(){
  $('ul').removeClass('opening');
  $('.menu-toggle').removeClass('open');

});


$(".icon-html5-alt").hover(function(){
  $(".caption-html").toggleClass("icon-captions-show");
});
$(".icon-css3-alt").hover(function(){
  $(".caption-css").toggleClass("icon-captions-show");
});
$(".icon-sass").hover(function(){
  $(".caption-sass").toggleClass("icon-captions-show");
});
$(".icon-javascript-alt").hover(function(){
  $(".caption-js").toggleClass("icon-captions-show");
});
$(".icon-jquery").hover(function(){
  $(".caption-jquery").toggleClass("icon-captions-show");
});
$(".icon-nodejs").hover(function(){
  $(".caption-node").toggleClass("icon-captions-show");
});
$(".icon-git").hover(function(){
  $(".caption-git").toggleClass("icon-captions-show");
});
$(".fa-github").hover(function(){
  $(".caption-github").toggleClass("icon-captions-show");
});




