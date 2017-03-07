import jump from 'jump.js'

var flkty = new Flickity( '.main-gallery', {
  // options
  cellAlign: 'left',
  contain: true
});


$.fn.extend({
	animateCss: function (animationName) {
		var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		this.addClass('animated ' + animationName).one(animationEnd, function() {
			$(this).removeClass('animated ' + animationName);
		});
	}
});

