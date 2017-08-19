app.controller("HomeController", ["$scope", "navLinks", "information", function($scope, navLinks, information) {
    navLinks.then(function (data) {
        $scope.links = data;
    });
    information.then(function (data) {
        $scope.logo = data.logo;
        $scope.homeData = data.home;
    });
}]);    