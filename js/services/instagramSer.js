app.factory("instagram", ["$http", "$sce", function($http, $sce) {
    return $http.jsonp(instaUrl)
            .then(function (response) {
                return response.data;   
            });
}]);