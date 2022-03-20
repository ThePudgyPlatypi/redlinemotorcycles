app.controller("HomeController", ["$scope", "navLinks", "information", "instagram", "$window", function($scope, navLinks, information, instagram, $window, $location, $anchorScroll, $routeParams) {
    $scope.windowWidth = $window.innerWidth;
    $scope.mobileLinks;
    navLinks.then(function (data) {
        $scope.desktopLinks = {
            links: data.desktopLinks,
            logo: data.logo
        };
        $scope.mobileLinks = {
            links: data.mobileLinks,
            logo: data.logo
        };
    });
    information.then(function(data) {
        $scope.logo = data.logo;
        $scope.homeData = data.home;
        $scope.serviceData = data.service;
        $scope.teamData = data.team;
        $scope.address = data.address;
        $scope.hoursLong = data.hoursLong;
        $scope.hoursShort = data.hoursShort;
        $scope.footerData = data.footer;
        $scope.sliderBikes = $scope.homeData.bikes;
        $scope.sliderBrands = $scope.homeData.brands;
    });
    
    $scope.$on("$viewContentLoaded", homeOnLoad());
    
    
    $scope.showIframe = function() {
        $("#lyft_frame").animate({
            height: "550px"
        }, 700);
    }
    
}]);    