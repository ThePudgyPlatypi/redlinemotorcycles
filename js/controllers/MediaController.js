app.controller("MediaController", ["$scope", "navLinks", "information", "instagram", "$window", function($scope, navLinks, information, instagram, $window) {
    $scope.windowWidth = $window.innerWidth;
    instagram.then(function(data) {
        $scope.images = data.data;
        
    });
    information.then(function(data) {
        $scope.logo = data.logo;
        $scope.mediaData = data.media;
    });
    
    $scope.mediaOverlay = function() {
        var colors = [
                "rgba(24, 24, 24, 0.7)",
                "rgba(174, 173, 174, 0.4)",
                "rgba(167, 30, 34, 0.6)",
                "rgba(70, 70, 71, 0.8)"
            ];

            var mediaOverlay = document.getElementsByClassName("mediaOverlay");

            function randomColor() {
                var random = Math.floor(Math.random() * (3 - 0)) + 0;
        //            console.log(random);
                var colorPicked = colors[random];
        //            console.log(colorPicked);
                return colorPicked;
            };

            for(var i = 0; i < mediaOverlay.length; i++) {
                var item = mediaOverlay[i];
//                console.log("-----------------------------------------");
//                        console.log("before setting bg color: " + item.style.backgroundColor);
                var color = randomColor();

//                console.log("color to be set: " + color);
//                console.log(item);

                item.style.backgroundColor = color;

//                console.log("what the stupid shit actualy comes out to: " + item.style.backgroundColor);
            };
    }
    
    $scope.$on("$viewContentLoaded", mediaOnLoad);
}]);