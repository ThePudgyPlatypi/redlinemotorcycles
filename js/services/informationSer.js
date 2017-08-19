app.factory("information", ["$http", function($http) {
    return $http.get("resources/json/information.json")
    .then(function(response) {
        return response.data;
    });
}]);