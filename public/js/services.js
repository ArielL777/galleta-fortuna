app.service('FortuneAPIService', function($http) {
    this.getFortune = function() {
        return $http.get('/api/fortuna');
    };
});