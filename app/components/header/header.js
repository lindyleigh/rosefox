; (function () {

    angular.module('rosefox')
        .component('headerComponent', {
            templateUrl: 'app/components/header/header.html',
            controller: HeaderController
        })

    function HeaderController() {
        var $ctrl = this;

        $ctrl.openMenu= function() {
            angular.element(document.getElementById("hamburger").style.width = "250px");
            angular.element(document.body.style.backgroundColor = "rgba(0,0,0,0.4)");
        }

        $ctrl.closeMenu= function() {
            angular.element(document.getElementById("hamburger").style.width = "0");
            angular.element(document.body.style.backgroundColor = "white");
    }

    }


} ());