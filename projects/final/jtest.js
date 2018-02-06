<<<<<<< HEAD:projects/final/hilarydupont.js
=======
$(function() {  
    $('.box:nth-child(even)').hover(function(){
  $(this).css('background-color','rgba(2, 249, 159, 0.5)');
});
  });


//$(function() {  
 //   $('.marquee').click(function(){
 // $('body').css('background-color','rgb(100, 152, 154)');
//});
 // });

//Tells the circle to bounce off walls and change color:

(function ($, window, undefined) {
  $.fn.marqueeify = function (options) {
    var settings = $.extend({
      horizontal: true,
      vertical: true,
      speed: 100, // In pixels per second
      container: $(this).parent(),
      bumpEdge: function () {}
    }, options);
    
    return this.each(function () {
      var containerWidth, containerHeight, elWidth, elHeight, move, getSizes,
        $el = $(this);

      getSizes = function () {
        containerWidth = settings.container.outerWidth();
        containerHeight = settings.container.outerHeight();
        elWidth = $el.outerWidth();
        elHeight = $el.outerHeight();
      };

      move = {
        right: function () {
          $el.animate({left: (containerWidth - elWidth)}, {duration: ((containerWidth/settings.speed) * 1000), queue: false, easing: "linear", complete: function () {
            settings.bumpEdge();
            move.left();
          }});
        },
        left: function () {
          $el.animate({left: 0}, {duration: ((containerWidth/settings.speed) * 1000), queue: false, easing: "linear", complete: function () {
            settings.bumpEdge();
            move.right();
          }});
        },
        down: function () {
          $el.animate({top: (containerHeight - elHeight)}, {duration: ((containerHeight/settings.speed) * 1000), queue: false, easing: "linear", complete: function () {
            settings.bumpEdge();
            move.up();
          }});
        },
        up: function () {
          $el.animate({top: 0}, {duration: ((containerHeight/settings.speed) * 1000), queue: false, easing: "linear", complete: function () {
            settings.bumpEdge();
            move.down();
          }});
        }
      };

      getSizes();

      if (settings.horizontal) {
        move.right();
      }
      if (settings.vertical) {
        move.down();
      }

      // Make that shit responsive!
      $(window).resize( function() {
        getSizes();
      });
    });
  };
})(jQuery, window);

$(document).ready( function() {

  $('.marquee').marqueeify({
    speed: 100,
    bumpEdge: function () {
      var newColor = "hsl(" + Math.floor(Math.random()*360) + ", 200%, 50%)";
      $('.marquee .logo').css('fill', newColor);
    }
  });

  $('.box').click(function(){
  	$(this).toggleClass('marquee').marqueeify({
    speed: 50,
    bumpEdge: function () {
      var newColor = "hsl(" + Math.floor(Math.random()*360) + ", 200%, 50%)";
      $('.marquee .logo').css('fill', newColor);
    	}
	});
  });
});





>>>>>>> parent of 02055dd... push:projects/final/jtest.js
