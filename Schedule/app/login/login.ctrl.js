(function () {
    'use strict';
    var app = angular.module('sch.login').controller('loginCtrl', loginCtrl);
    function loginCtrl($scope, $rootScope, schData, $location, $filter) {
        var vm = this;
        vm.login = function () {
            schData.getUser(vm.username, vm.password);
            if ($rootScope.user == null) {
                vm.error = "משתמש לא קיים";
            }
            else {               
                $location.path("/sign");
            }
        };
    }
})();
