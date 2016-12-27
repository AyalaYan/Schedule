(function () {
    'use strict';
    angular.module('sch.login', []);
    angular.module('sch.sign', []);
    angular.module('sch.report', []);
    angular.module('sch.services', []);
    angular.module("sch.filter", []);
     angular.module("sch.directives", []);
    angular.module('schApp', [
        // Angular modules 
        'ngRoute',
        'sch.report',
        'sch.sign',
        'sch.login',
        // Custom modules 
        "ds.clock",
        'ui.bootstrap',
        // 3rd Party Modules
       "sch.services",
       "sch.filter",
       "sch.directives"

    ]).run(['$rootScope', '$filter', function ($rootScope, $filter) {
        $rootScope.title = "דוח שעות";
        $rootScope.user = null;
        $rootScope.currentDate = $filter('date')(new Date(), "dd/MM/yyyy");
    }]);
    
})();