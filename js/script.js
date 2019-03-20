$(document).ready(function() {

    var feed = "/bbsnewsfeed.php";

    $.ajax(feed, {
        accepts: {
            xml: "application/rss+xml"
        },
        url: feed,
        dataType: "xml",
        type: "GET",
        success: xmlGet
    });

});

function xmlGet(feed) {
    $(feed).find("item").each(function() {
        $("#container").append('<div class="title" id="title">' + $(this).find("title").text() + '<div class="description" id="description">' + $(this).find("description").text() +  '<a href="#" class="link" id="link">' + $(this).find("link").text() + '</div>' + '</div>')
    });
    
    
    
}
