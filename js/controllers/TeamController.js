app.controller("TeamController", ["$scope", "information", "$window", function($scope, information, $window) {
    $scope.windowWidth = $window.innerWidth;
    information.then(function(data) {
        $scope.logo = data.logo;
        $scope.teamData = data.team;
        $scope.owners = $scope.teamData.owners;
        $scope.cards = $scope.teamData.cards;
    });
    $scope.$on("$viewContentLoaded", parallax($(".fullHeaderImgContainer"), 3));
    $scope.$on("$viewContentLoaded", parallax($(".centerHeaderLogo"), 4));
}]);