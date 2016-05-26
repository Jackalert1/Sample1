(function() {
    'use strict';

    angular
        .module('geniemd')
        .run(runBlock);

    /** @ngInject */
    function runBlock($log, $rootScope, $state) {

        $log.debug('runBlock end');
        $rootScope.$on('$stateChangeStart', function(evt, to, params) {
            if (to.views.main.redirectTo) {
                evt.preventDefault();
                $state.go(to.views.main.redirectTo, params)
            }
        });
     }

})();
