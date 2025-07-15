var app = angular.module('fortuneCookieApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'js/views/home.html',
            controller: 'HomeController'
        })
        .when('/fortune', {
            templateUrl: 'js/views/fortune.html',
            controller: 'FortuneController'
        })
        .otherwise({
            redirectTo: '/'
        });
});
app.config(function($httpProvider) {
    var csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    $httpProvider.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    $httpProvider.defaults.withCredentials = true;
});
