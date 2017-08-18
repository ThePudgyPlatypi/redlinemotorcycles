app.controller("HomeController", ["$scope", "navLinks", function($scope, navLinks) {
    navLinks.then(function (data) {
        $scope.links = data;
    });
}]);    