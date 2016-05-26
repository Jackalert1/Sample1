(function () {
    'use strict';
    
    angular
    .module('geniemd')
    .factory('SurveyService', function($http, $q, $timeout){
        var survey = {};
        
        
        function createPromise() {
            var defered = $q.defer();
            
            $timeout(function(){
                
            },3000);
            return defered.promise;
        }
        
        survey.save = function(payload){
            console.log('payload', payload);
            var defered = $q.defer();
            var _data = payload;
            $timeout(function(){
                if(_data)
                defered.resolve(_data);
                else
                defered.reject(_data);
            },3000);
            
            return defered.promise;
            // $http.post().then(function(result){}).catch(function(err){});
        }
        
        survey.delete = function(payload){
             $http.post().then(function(res){}).catch(function(err){});
        }
        
        survey.startSurvey = function(payload){
             $http.post().then(function(res){}).catch(function(err){});
        }
        
        survey.stopSurvey = function(payload){
             $http.post().then(function(res){}).catch(function(err){});
        }
        
        return survey;
    })
})();