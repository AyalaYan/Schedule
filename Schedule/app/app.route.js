(function () {
    'use strict';
    angular.module('schApp')
    .config(['$routeProvider', function config($routeProvider) {
        $routeProvider
          .when('/login', {
                controller: 'loginCtrl',
                templateUrl: 'login/login.tpl.html',
                controllerAs: 'loginVm'
            })
               .when('/sign', {
                   controller: 'signCtrl',
                   controllerAs:'signVm',
                   templateUrl: 'sign/sign.tpl.html'
               })
            .when('/report', {
                controller: 'reportCtrl',
                templateUrl: 'report/report.tpl.html',
                controllerAs: 'reportVm'
            })
           
            .otherwise({
                redirectTo: '/login'
            });
    }]);
    
})();
