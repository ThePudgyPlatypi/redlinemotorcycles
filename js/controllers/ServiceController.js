app.controller("ServiceController", ["$scope", "information", "$window", "$compile", function($scope, information, $window, $compile) {
    $scope.windowWidth = $window.innerWidth;
    $scope.selector;
    $scope.serviceCat;
    $scope.selectedCat;
    $scope.selectedServices;
                                     
    information.then(function(data) {
        $scope.logo = data.logo;
        $scope.serviceData = data.service;
        $scope.cards = $scope.serviceData.cards;
        $scope.serviceCat = $scope.serviceData.serviceCat;
    });
        
    //event listener looking for a message from the 
    window.addEventListener("message", function(e) {
        $scope.$apply(function() {
            $scope.selector = e.data;
            for (var i = 0; i < $scope.serviceCat.length; i++) {
                if ($scope.selector.name == $scope.serviceCat[i].name) {
                    $scope.selectedServices = $scope.serviceCat[i].services; 
                    $scope.selectedCat = $scope.serviceCat[i];
                    console.log($scope.selectedServices[0].name);
                }
            }
        });
    });
    
    $scope.$watch("selector", function(newVal, oldVal, scope) {});
    $scope.$watch("selectedServices", function(newVal, oldVal, scope) {
        if(newVal == oldVal) {
            console.log("same");
        } else {
            console.log("changed");
        }
    });
    $scope.$on("$viewContentLoaded", parallax($(".fullHeaderImgContainer"), 3));
}]);