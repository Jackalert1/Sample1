(function () {
    'use strict';

    angular
        .module('geniemd')
        .config(config);

    /** @ngInject */
    function config($logProvider, $httpProvider, $ocLazyLoadProvider) {    

     
        // set lazy loading modules
        $ocLazyLoadProvider.config({
            modules: [
                
                {
                    name: 'ui.grid',
                    files: ['https://cdnjs.cloudflare.com/ajax/libs/angular-ui-grid/3.0.5/ui-grid.min.css',
                        'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-grid/3.0.5/ui-grid.min.js']
                },
                {
                    name: 'ui-select',
                    files: ['https://cdnjs.cloudflare.com/ajax/libs/angular-ui-select/0.12.1/select.min.css',
                        'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-select/0.12.1/select.min.js',
                        'https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.8.5/css/selectize.default.css']
                },
                {
                    name: 'toastr',
                    files: ['https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.2/toastr.min.css',
                        'https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.2/toastr.min.js']
                },
                {
                    name: 'ngFileUpload',
                    files: [
                        'https://cdnjs.cloudflare.com/ajax/libs/danialfarid-angular-file-upload/9.0.8/ng-file-upload-all.min.js'
                    ]
                },
                {
                    name: 'agGrid',
                    files: [
                        'https://cdnjs.cloudflare.com/ajax/libs/ag-grid/3.1.2/ag-grid.min.css',
                        'https://cdnjs.cloudflare.com/ajax/libs/ag-grid/3.1.2/theme-blue.min.css',
                        'https://cdnjs.cloudflare.com/ajax/libs/ag-grid/3.1.2/ag-grid.min.js'
                    ]
                },
                {
                    name: 'ui.validate',
                    files: [
                        'https://cdn.rawgit.com/angular-ui/ui-validate/1.2.0/dist/validate.min.js'
                    ]
                },
                {
                    name: 'timepicker',
                    files: ['https://cdnjs.cloudflare.com/ajax/libs/jquery-timepicker/1.8.9/jquery.timepicker.min.css',
                        'https://cdnjs.cloudflare.com/ajax/libs/jquery-timepicker/1.8.9/jquery.timepicker.min.js']
                },
                {

                    name: 'ui-calendar',

                    files: ['https://cdnjs.cloudflare.com/ajax/libs/angular-ui-calendar/1.0.0/calendar.min.js']

                },
                {

                    name: 'calendar',

                    files: ['https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/2.6.1/fullcalendar.min.css',

                        'https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/2.6.1/fullcalendar.min.js']

                }, {

                    name: 'scheduler',

                    files: ['https://dwc780eud5mu4.cloudfront.net/lib/scheduler/scheduler.min.css',

                        'https://dwc780eud5mu4.cloudfront.net/lib/scheduler/scheduler.min.js']

                }
                , {

                    name: 'google-calendar',

                    files: ['https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/2.6.1/gcal.js']

                },
                {

                    name: 'googleMaps',

                    files: ['https://cdn.rawgit.com/nmccready/angular-simple-logger/0.1.5/dist/angular-simple-logger.light.min.js',
                        'https://cdnjs.cloudflare.com/ajax/libs/angular-google-maps/2.3.0/angular-google-maps.min.js']
                },
                {
                    name: 'payfort',
                    files: ['https://beautiful.start.payfort.com/checkout.js']
                }
            ]
        });



    }

})();
