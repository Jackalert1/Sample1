(function() {
    'use strict';

    angular
        .module('geniemd')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            //   .state('home', {
            //     url: '/',
            //     templateUrl: 'app/main/main.html',
            //     controller: 'MainController',
            //     controllerAs: 'main'
            //   });
            .state('information', {
                url: '/',
                views: {
                    main: {
                        templateUrl: 'app/information/information.html',
                        controller: 'InformationController',
                        controllerAs: 'InforCntrl',
                        redirectTo : 'information.patients'
                    }
                    // "patients@information": {
                    //     templateUrl: 'app/information/patients/patients.html',
                    //     controller: 'PatientsController',
                    //     controllerAs: 'patientCtrl'
                    // },
                    // "physicians@information": {
                    //     templateUrl: 'app/information/physicians/physicians.html',
                    //     controller: 'PhysiciansController',
                    //     controllerAs: 'physicianCtrl'
                    // }
                },
                resolve: {
                    deps: function($ocLazyLoad) {
                        return $ocLazyLoad.load('agGrid')
                    }
                }
            })
            
            .state('information.patients',{
                url:'patients',
                views:{
                    main:{
                          templateUrl: 'app/information/patients/patients.html',
                        controller: 'PatientsController',
                        controllerAs: 'patientCtrl'
                    }
                },
                 resolve: {
                    deps: function($ocLazyLoad) {
                        return $ocLazyLoad.load('agGrid')
                    }
                }
            })
            
                .state('information.physicians',{
                url:'physicians',
                views:{
                    main:{
                          templateUrl: 'app/information/physicians/physicians.html',
                        controller: 'PhysiciansController',
                        controllerAs: 'physicianCtrl'
                    }
                },
                 resolve: {
                    deps: function($ocLazyLoad) {
                        return $ocLazyLoad.load('agGrid')
                    }
                }
            })

        // .state('physicians', {
        //     url: '/physicians',
        //     views: {
        //         main: {
        //             templateUrl: 'app/information/physicians/physicians.html',
        //             controller: 'PhysiciansController',
        //             controllerAs: 'physicianCtrl'
        //         }
        //     },
        //     resolve: {
        //         deps: function($ocLazyLoad) {
        //             return $ocLazyLoad.load('agGrid')
        //         }
        //     }

        // })


        $urlRouterProvider.otherwise('/');
    }

})();
