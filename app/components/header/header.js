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
        }

        $ctrl.closeMenu= function() {
            angular.element(document.getElementById("hamburger").style.width = "0");
}

    }


} ());