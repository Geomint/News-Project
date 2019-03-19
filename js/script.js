$(document).ready(function() {

    var feed = "/bbsnewsfeed.php";

    $.ajax(feed, {
        accepts: {
            xml: "application/rss+xml"
        },
        dataType: "xml",
    }).done(function(data) {
        console.log(data);
    });
});
