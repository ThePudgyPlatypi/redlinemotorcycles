app.factory("information", ["$http", function($http) {
    return $http.get("resources/json/information.json")
    .then(function successCallback(response) {
        return response.data;
    }, function errorCallback(response) {
        return response.status || "Request Failed";
    });
}]);