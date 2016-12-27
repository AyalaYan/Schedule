(function () {
    'use strict';
    angular
        .module('sch.services')
        .factory('schData', schData);

    function schData($rootScope,$filter) {
        if (!$rootScope.users)
        { $rootScope.users = getUsers().users; }
        var getUser = function (username, password) {
            for (var i = 0; i < $rootScope.users.length; i++) {
                if ($rootScope.users[i].userName == username && $rootScope.users[i].password == password) {
                    $rootScope.user = $rootScope.users[i];
                    return;
                }
            }
        };
        var setUserSchedule = function (user, isStart) {
        
            for (var i = 0; i < $rootScope.users.length; i++) {
                var localuser = $rootScope.users[i];
                if (localuser.userName == user.userName && localuser.password == user.password) {
                    if (!isStart) {
                        for (var j = 0; j < localuser.schedule.length; j++) {
                            if (localuser.schedule[j].date == $rootScope.currentDate) {
                                $rootScope.users[i].schedule[j].timeEnd = $filter('date')(new Date(), "HH:mm");
                            }
                        }
                    }
                    else {
                        localuser.schedule.push({
                            date: $rootScope.currentDate,
                            timeStart: $filter('date')(new Date(), "HH:mm"),
                            timeEnd: null
                        });
                    }
                    return;
                }
            }
        };
        return {
            getUser: getUser,
            setUserSchedule: setUserSchedule
        };
    }
    function getUsers() {
        return {
            users: [
            {
                userName: "Chana Cohen", password: "ch12",
                schedule: [
                    { date: "22/10/2016", timeStart: "10:00", timeEnd: "16:00" },
                { date: "21/11/2016", timeStart: "09:00", timeEnd: "16:00" },
                { date: "21/12/2016", timeStart: "08:00", timeEnd: "15:00" }
                ]
            },
            {
                userName: "Ayala Lev", password: "ay12",
                schedule: [
                   { date: "12/10/2016", timeStart: "08:00", timeEnd: "13:00" },
               { date: "11/11/2016", timeStart: "08:00", timeEnd: "14:30" },
               { date: "11/12/2016", timeStart: "08:00", timeEnd: "15:20" }
                ]
            },
            {
                userName: "Sara Catz", password: "sa12",
                schedule: [
                  { date: "19/10/2016", timeStart: "09:10", timeEnd: "13:00" },
              { date: "05/11/2016", timeStart: "09:30", timeEnd: "14:30" },
              { date: "06/12/2016", timeStart: "09:50", timeEnd: "15:20" }
                ]
            },
            ]
        };
    };

})();