(function () {
	'use strict';

	angular
		.module('geniemd')
		.factory("Dialog", function ($modal) {
			var Dialog = {}

			Dialog.open = function (config) {
				var modalInstance = $modal.open({
					templateUrl: 'app/components/core/dialog/dialog.html',
					controller: 'DialogController',
					size: 'sm',
					resolve: {
						config: function() {
							return config;
						}
					}
				});

				return modalInstance.result;
			}

			return Dialog;
		});

})();
