app.controller("MediaController", ["$scope", "navLinks", "information", "instagram", "$window", function($scope, navLinks, information, instagram, $window) {
    $scope.windowWidth = $window.innerWidth;
    $scope.colors = [
        "rgba(24, 24, 24, 0.6)",
        "rgba(174, 173, 174, 0.6)",
        "rgba(167, 30, 34, 0.6)",
        "rgba(70, 70, 71, 0.6)"];
    instagram.then(function(data) {
        $scope.images = data.data;
        $scope.randomColor = function () {
            var random = Math.floor(Math.random() * (3 - 0)) + 0;
//            console.log(random);
            var colorPicked = $scope.colors[random];
//            console.log(colorPicked);
            return colorPicked;
        };
    });
    information.then(function(data) {
        $scope.logo = data.logo;
        $scope.mediaData = data.media;
    });
    
    $scope.$on("$viewContentLoaded", mediaOnLoad);
}]);