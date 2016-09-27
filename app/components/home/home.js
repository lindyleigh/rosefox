; (function () {

    angular.module('rosefox')
        .component('homeComponent', {
            templateUrl: 'app/components/home/home.html',
            controller: NavController
        })

    function NavController() {
        var $ctrl = this;

    }


} ());