/*! jQuery randomizer v0.1.0 | (c) 2014 Aram Mkrtchyan | arammkrtchyan.info/randomizer
 *
 */
(function ($) {
	$.fn.randomizer = function (options) {

		var settings = $.extend({
			resize: false
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

		function random(container) {
			var existingCords = [];

			var blockWidth = $(container).width();
			var blockHeight = $(container).height();
			var imgArray = shuffle($('img', container));

			imgArray.each(function () {
				var h = $(this).height();
				var w = $(this).width();
				var thisTop;
				var thisLeft;

				while (true) {
					thisTop = getRandomInt(0, blockHeight - h);
					thisLeft = getRandomInt(0, blockWidth - w);
					var valid = true;
					for (var i in existingCords) {
						if (!existingCords.hasOwnProperty(i)) continue;
						var n = existingCords[i];
						valid = valid && ((thisTop + h < n.top || thisTop > n.thisHeight) || ( thisLeft + w < n.left || thisLeft > n.thisWidth ));
					}
					if (valid) {
						break;
					}
				}
				existingCords.push({top: thisTop, left: thisLeft, thisWidth: thisLeft + w, thisHeight: thisTop + h});
				$(this).css({
					top: thisTop,
					left: thisLeft
				});
			});
		}

		return this.each(function() {
			var $this = this;
			if (settings.resize) {
				$(window).resize(function() {
					random($this);
				});
			}
			random($this);
		});
	}
}(jQuery));