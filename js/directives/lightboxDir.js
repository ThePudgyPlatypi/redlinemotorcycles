app.directive("lightbox", function() {
    return {
        restrict: "A",
        link: function(scope,elem,attrs) {
            $(elem).click(function(e) {
                e.preventDefault();
                var image_src =  $(this).attr("href");
                var alt_src =  $(this).find(".grid-img").attr("alt");
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
                            '<p>' + alt_src + '</p>' +
                        '</div>';
                    $("body").append(lightbox);
                }

                $('#lightbox').on('click', function() {
                   $('#lightbox').hide();
                });
            })
        }
    }
})