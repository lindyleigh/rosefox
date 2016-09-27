; (function () {

    angular.module('rosefox')
        .component('headerComponent', {
            templateUrl: 'app/components/header/header.html',
            controller: HeaderController
        })

    function HeaderController() {
        var $ctrl = this;

    }


} ());