app.controller('HomeController', function($scope) {
    $scope.page = {};
    $scope.page.title = "GALLETA CHINA DE LA FORTUNA";
    $scope.page.subtitle = "¿Necesitas de un sabio consejo o de un levantón? ¡Obtén la sabiduría de la galleta china de la fortuna, eso sí, ¡sin las calorías!";
});
app.controller('FortuneController', function($scope, FortuneAPIService, $location) {

    $scope.fortune = {};

    FortuneAPIService.getFortune().then(function(response) {
        $scope.fortune = response.data;
    }).catch(function() {
        alert('Hubo un error al obtener tu fortuna. ¡Inténtalo de nuevo!');
        $location.path('/');
    });
});