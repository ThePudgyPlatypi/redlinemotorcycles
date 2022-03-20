app.factory("navLinks", ["$http", function($http) {
    return $http.get("resources/json/navigation.json")
    .then(function(response) {
        return response.data;
    });
}]);