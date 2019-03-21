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


function xmlLog(feed) {
    console.log(feed);
}

/*** Appends content into divs ***/

function xmlGet(feed) {
    $("#load").fadeOut();
    $("#load2").fadeOut();

    $(feed).find("item").each(function() {
        $("#container").append('<div class="title" id="title">' +
            $(this).find("title").text() + '<div class="description" id="description">' + $(this).find("description").text() 
            + '<br>' 
            + '<img src="' + $(this).find("media:thumbnail").attr("url") + '" width="200" height="200"'+'/>'
            + '<div class="date">' + $(this).find("pubDate").text() + '</div>'
            + '<a  class="link" href="' + $(this).find("link").text() + '"' 
            + 'target="_blank"' 
            + '>' 
            + '<span class="link-text">Read the full article</span>' + '</div>'
            + '</div>');
    });

}
