;(function(){

    angular.module('rosefox', ['ui.router'])
    
        //ROUTING CONFIG
        .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

            $urlRouterProvider.otherwise('/home');

            $stateProvider
                .state('home', {
                    url: '/home',
                    component: 'homeComponent'
                })
                .state('portfolio', {
                    url: '/portfolio',
                    component: 'portfolioComponent'
                })
                .state('services', {
                    url: '/services',
                    component: 'servicesComponent'
                })
                .state('about', {
                    url: '/about',
                    component: 'aboutComponent'
                })
                .state('blog', {
                    url: '/blog',
                    component: 'blogComponent'
                })
                .state('contact', {
                    url: '/contact',
                    component: 'contactComponent'
                })

                $locationProvider.html5Mode(true);
		})         

}());