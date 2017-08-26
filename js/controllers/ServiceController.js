app.controller("ServiceController", ["$scope", "information", "$window", "$compile", function($scope, information, $window, $compile) {
    $scope.windowWidth = $window.innerWidth;
    $scope.content = "";
    $scope.changeTable = function() {
            $scope.content = $("#serviceTable").append($compile("<thead><tr>'categoryHead'></th></tr></thead<tbody><tr ng-repeat='service in services'><td>{{ service.name }}</td></tr></tbody> "));
        console.log("click");
    };
                                     
    information.then(function(data) {
        $scope.logo = data.logo;
        $scope.serviceData = data.service;
        $scope.cards = $scope.serviceData.cards;
        $scope.selector = $scope.serviceData.selector;
        $scope.services = $scope.serviceData.serviceCat;
        console.log($scope.services);
    });
    $scope.$on("$viewContentLoaded", parallax($(".fullHeaderImgContainer"), 3));
}]);