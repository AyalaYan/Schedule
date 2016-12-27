(function () {
    'use strict';
    angular
        .module('sch.report')
        .controller('reportCtrl', reportCtrl);
    function reportCtrl($scope, $filter) {
        var vm = this;
        vm.totalHours = function (start, end) {
            return diff(start, end);
        };
        vm.dateOptions = {
            'year-format': "'yy'",
            'starting-day': 1,
            'datepicker-mode': "'month'",
            'min-mode': "month"
        };
        vm.today = function () {        
            vm.dt = new Date();
        };
        vm.today();
        vm.showWeeks = false;
        vm.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            vm.opened = true;
        }; 
        function diff(start, end) {
        if (start && end) {
            start = start.split(":");
            end = end.split(":");
            var startDate = new Date(0, 0, 0, start[0], start[1], 0);
            var endDate = new Date(0, 0, 0, end[0], end[1], 0);
            var diff = endDate.getTime() - startDate.getTime();
            var hours = Math.floor(diff / 1000 / 60 / 60);
            diff -= hours * 1000 * 60 * 60;
            var minutes = Math.floor(diff / 1000 / 60);
            if (hours < 0)
                hours = hours + 24;
            return (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes;
        }
        return null;
    }
    }
})();
