(function () {
    'use strict';
    angular
        .module('sch.sign')
        .controller('signCtrl', signCtrl);
    function signCtrl($scope, $rootScope, schData) {

        var vm = this;
        vm.SetToday = function () {
            if ($rootScope.user.schedule[$rootScope.user.schedule.length - 1].date == $rootScope.currentDate) {
                vm.today = $rootScope.user.schedule[$rootScope.user.schedule.length - 1];
            }
            if (vm.today && vm.today.timeStart && vm.today.timeEnd)
            {
                vm.currentDayMessage = "החתמת היום בוצעה בהצלחה";
            }
        };
        vm.enter = function () {
            schData.setUserSchedule($rootScope.user, true);
            vm.SetToday();
        };
        vm.exit = function () {
            schData.setUserSchedule($rootScope.user, false);
            vm.SetToday();
            
        };
        vm.isEnterDisabled = function () {
            if (!vm.today || (vm.today && !vm.today.timeStart))
            { return false; }
            return true;
        }
        vm.isExitDisabled = function () {
            if ((vm.today && !vm.today.timeEnd))
            { return false; }
            return true;
        }
        vm.SetToday();
    }
})();
