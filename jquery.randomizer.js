/*! jQuery randomizer v0.3.0 | (c) 2014 Aram Mkrtchyan | arammkrtchyan.info/randomizer
 *
 */
(function ($) {
	$.fn.randomizer = function (options) {

		var settings = $.extend({
			resize: false,
			fade: false,
			fadeSpeed:"400",
			animation: false,
			animationSpeed: 500,
			repeat: true,
			repeatInterval: 5000
		}, options );
		
		function getRandomInt(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		function shuffle(array) {
			var currentIndex = array.length, temporaryValue, randomIndex;
			while (0 !== currentIndex) {
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex -= 1;
				temporaryValue = array[currentIndex];
				array[currentIndex] = array[randomIndex];
				array[randomIndex] = temporaryValue;
			}
			return array;
		}

		function random(container, just) {
			just = just || false;
			var existingCords = [];

			var blockWidth = $(container).width();
			var blockHeight = $(container).height();
			var imgArray = shuffle($('img', container));

			imgArray.each(function() {
				var h = $(this).height();
				var w = $(this).width();
				var thisTop;
				var thisLeft;
				var attempts = 0;
				while (true) {
					thisTop = getRandomInt(0, blockHeight - h);
					thisLeft = getRandomInt(0, blockWidth - w);
					var valid = true;
					if (!just) {
						for (var i in existingCords) {
							if (!existingCords.hasOwnProperty(i)) continue;
							var n = existingCords[i];
							valid = valid && ((thisTop + h < n.top || thisTop > n.thisHeight) || ( thisLeft + w < n.left || thisLeft > n.thisWidth ));
						}
					}
					if (valid) {
						break;
					}
					++attempts;
					if (attempts == 10) {
						break;
					}
				}
				if (attempts == 10) {
					random(container, true);
					return false;
				}
				existingCords.push({top: thisTop, left: thisLeft, thisWidth: thisLeft + w, thisHeight: thisTop + h});
				if (settings.fade) {	
					$(this).fadeOut(settings.fadeSpeed, function() {
						$(this).css({
							top: thisTop,
							left: thisLeft
						});				
						$(this).fadeIn(settings.fadeSpeed);
					});
				} else if(settings.animation){
					$(this).show();
					$(this).stop(true,true).animate({
						top: thisTop,
						left: thisLeft
					}, settings.animationSpeed, function() {
					
					});
				}else {
					$(this).css({
						top: thisTop,
						left: thisLeft
					});
						
					$(this).show();
				}
				
			});
		}

		return this.each(function() {
			var $this = this;
			if (settings.resize) {
				$(window).resize(function() {
					random($this);
				});
			}
			if(settings.repeat){
			    setInterval(function() {
					random($this);					  
				}, settings.repeatInterval);
			}
			random($this);
		});
	}
}(jQuery));
