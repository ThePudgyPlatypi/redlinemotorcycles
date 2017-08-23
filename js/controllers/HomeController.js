app.controller("HomeController", ["$scope", "navLinks", "information", "instagram", "$window", function($scope, navLinks, information, instagram, $window) {
    $scope.windowWidth = $window.innerWidth;
    $scope.colors = ["#181818","#aeadae","#a71e22","#464647"];
    $scope.randomColor = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return $scope.colors[Math.floor(Math.random() * (max - min)) + min];
    };
    navLinks.then(function (data) {
        $scope.links = data;
    });
    information.then(function(data) {
        $scope.logo = data.logo;
        $scope.homeData = data.home;
        $scope.serviceData = data.service;
        $scope.teamData = data.team;
        $scope.sliderBikes = $scope.homeData.bikes;
        $scope.sliderBrands = $scope.homeData.brands;
    });
    instagram.then(function(data) {
        $scope.images = {
            data: data.data,
            css: {
                "background-color" :  $scope.randomColor(0,4),
                "position" : "absolute",
                "opacity" : 0.5,
                "top" : 0,
                "right" : 0,
                "bottom" : 0,
                "left": 0
            }
        };
        console.log($scope.randomColor(0,4));
    });
    $scope.$on("$viewContentLoaded", homeOnLoad);
}]);    