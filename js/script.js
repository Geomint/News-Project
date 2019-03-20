$(document).ready(function() {

    var feed = "/bbsnewsfeed.php";

    $.ajax(feed, {
        accepts: {
            xml: "application/rss+xml"
        },
        url: feed,
        dataType: "xml",
        type: "GET",
        success: xmlParser
    });
    
});

    function xmlParser(feed) {
        $(feed).find("item").each(function(){
           $("#item").append('<div class="item">' +$(this).text() + '</div>') 
        });
    }
