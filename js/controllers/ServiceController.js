app.controller("ServiceController", ["$scope", "information", "$window", function($scope, information, $window) {
    $scope.windowWidth = $window.innerWidth;
    information.then(function(data) {
        $scope.logo = data.logo;
        $scope.serviceData = data.service;
        $scope.cards = $scope.serviceData.cards;
    });
    $scope.$on("$viewContentLoaded", parallax($(".fullHeaderImgContainer"), 3));
}]);