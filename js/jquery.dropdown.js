(function($) {
	/**
	 * @param {object} options {}
	 * @returns {Object}
	 */
	$.fn.dropDown = function(options) {

		if (!options) {
			options = {};
		}

		this.each(
			function() {
				if ($(this).get(0).tagName === 'SELECT' && !$(this).data('init')) {
					$(this).data('init', true);

				//	alert($(this).css('width'));

					$(this).after('<div class="jq-dropdown"></div>');

					var $div = $(this).next();

					$(this).appendTo($div);


				}

			}
		);



	}

})(jQuery);