//issue #1 Doesnt cloase when you click on the menu so need to get that working
//Issue #2 does not update the alt text

app.directive("lightbox", function() {
    return {
        restrict: "A",
        link: function(scope,elem,attrs) {
            $(elem).click(function(e) {
                e.preventDefault();
                var image_src =  $(this).attr("href");
                var childOverlay = $(this).children(".mediaOverlay").css("background-color");
                if($("#lightbox").length > 0) {
                    $("#content").html('<img src="' + image_src + '"/>');
                    $("#lightbox").css("background-color", childOverlay);
                    $('#lightbox').show();
                } else {
                    $("#lightbox").css("background-color", childOverlay);
                    var lightbox = 
                        '<div id="lightbox">' +
                            '<p>Click anywhere to close</p>' +
                            '<div id="lightboxContainer">' +
                                '<div id="content">' + 
                                    '<img src="' + image_src +'" />' +
                                '</div>' +
                            '</div>' +
                        '</div>';
                    $("body").append(lightbox);
                }

                $("#lightbox").on('click', function() {
                   $('#lightbox').hide();
                });
                
            })
        }
    }
})