app.controller("TeamController", ["$scope", "information", function($scope, information) {
    information.then(function(data) {
        $scope.logo = data.logo;
        $scope.teamData = data.team;
    });
}]);