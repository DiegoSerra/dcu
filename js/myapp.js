var app = angular.module("myApp", ["ngRoute"]);
app.config(["$routeProvider", function($routeProvider) {
    $routeProvider
    .when("/about_us", {
        templateUrl : "mod/about_us.php"
    })
    .when("/contact", {
        templateUrl : "mod/contact.php"
    })
    .when("/services", {
        templateUrl : "mod/services.php"
    })

}]);

app.controller('MyCtrl', function($scope, $http, $location) {
    $scope.loading = true;
    $http.get("inc/test.php").then((res) => {
        res = res.data;
        $scope.summoner_name = res.summoner_name;
        $scope.summoner_level = res.summoner_level;
        $scope.summoner_img_league = res.summoner_img_league;
        $scope.summoner_league = res.summoner_league;
        $scope.summoner_wins = res.summoner_wins;
        $scope.summoner_loses = res.summoner_loses;
        /* ... */
        
        $scope.loading = false;
    }, (err)=>{
        console.log(err);
    })
    $scope.isActive = function(route) {
        return route === $location.path();
    }
});