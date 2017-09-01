app.controller("FormController", ["$scope", "$http", "$window", function($scope, $http, $window) {
    $scope.contact = {};
    
    $scope.handleFormSubmit = function (x) {
        $http.post('scripts/action.php', x)
            .then(function (response) {
                if (response.success) {
                    console.log($scope.contact);
                    $window.alert("Thank you! Your message has been sent.");
//                    $scope.contact = {};

            //            display success message
    //                $scope.$parent.message = true;
                }			
            }), function (response) {
                $window.alert("Sorry, there was a problem!");
            }
    };
}])