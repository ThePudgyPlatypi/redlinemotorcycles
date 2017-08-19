app.controller("ServiceController", ["$scope", "information", function($scope, information) {
    information.then(function(data) {
        $scope.logo = data.logo;
        $scope.serviceData = data.service;
    });
}]);