app.controller("FormController", ["$scope", "$http", "$window", function($scope, $http, $window) {
    $scope.contact = {};
    $scope.formMessage = {
        invalid: "Please fill out all the forms.",
        valid: "Looking good!",
        submitted: "Thank you for contacting us! We will do our best to get back to you shortly."
    }
    $scope.handleFormSubmit = function (x) {
        $http.post('scripts/action.php', x)
            .then(function (response) {
                if (response.success) {
                    // console.log($scope.contact);
                    $window.alert("Thank you! Your message has been sent.");
                    //  $scope.contact = {};
                    //  display success message
                    //  $scope.$parent.message = true;
                }			
            }), function (response) {
                $window.alert("Sorry, there was a problem!");
            }
    };
    
    
}])