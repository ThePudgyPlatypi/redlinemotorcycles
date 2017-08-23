app.controller("InstaController", ["$scope", "instagram", function($scope, instagram) {
    instagram.then(function(data) {
        $scope.images = {
            data: data.data,
            colors: [
                "#181818", 
                "#aeadae", 
                "#a71e22", 
                "#464647"
            ],
            randomColor: function(min, max) {
              min = Math.ceil(min);
              max = Math.floor(max);
              return $scope.images.colors[Math.floor(Math.random() * (max - min)) + min];
            },
            css: {
                "background-color" :  "red",
                "position" : "absolute",
                "opacity" : 0.5,
                "top" : 0,
                "right" : 0,
                "bottom" : 0,
                "left": 0
            }
        }
        console.log($scope.images);
    });
    console.log($scope.images);
}]);