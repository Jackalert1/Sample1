(function() {
    'use strict';

    angular
        .module('geniemd')
        .controller('DialogController', DialogController);

    /** @ngInject */
    function DialogController($scope, $modalInstance, config) {

        $scope.config = config;
         //var vm = this;

        $scope.confirm = function() {
            
          $modalInstance.close("OK");
        };//

        $scope.cancel = function() {
            $modalInstance.dismiss('cancel');
        };

    }
})();
