$(document).ready(function() {


/*** requests xml feed from the .php file ***/

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


/*** Appends content into divs ***/

function xmlGet(feed) {
    $(feed).find("item").each(function() {
        $("#container").append('<div class="title" id="title">' + $(this).find("title").text() + '<div class="description" id="description">' + $(this).find("description").text() +  '<a href="#" class="link" id="link">' + $(this).find("link").text() + '</div>' + '</div>')
    });
    
    
    
}
