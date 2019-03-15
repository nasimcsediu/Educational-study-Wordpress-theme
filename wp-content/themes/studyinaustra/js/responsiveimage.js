
$(document).ready(function () {
    LoadImage();
});

var resize_timer;

$(window).resize(function () {
    window.clearTimeout(resize_timer);
    resize_timer = window.setTimeout(function () { LoadImage(); }, 200);
});

function LoadImage() {
    var newWidth = $(window).width();
    $(".responsive-image").each(function (index) {
        var oldsrc = $(this).attr("datasrc");

        for (var i in responsive_threshold) {
            if (newWidth > responsive_threshold[i]) { newsrc = oldsrc.replace("Source", i); }
        }
        $(this).attr("src", newsrc);

    });
}
