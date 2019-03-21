$(document).ready(function() {


    /*** requests xml feed from the .php file ***/

    var feed = "/assets/php/bbsnewsfeed.php";

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
        $("#container").append('<div class="col-lg-8 col-md-10 col-sm-10 col-12 title" id="title">' +
            $(this).find("title").text() + '<div class="description" id="description">' + $(this).find("description").text() 
            + '<br>' 
            + '<img src="' + $(this).find("media:thumbnail").text() + '" width="200" height="200"'+'/>'
            + '<div class="date">' + $(this).find("pubDate").text() + '</div>'
            + '<a  class="link" href="' + $(this).find("link").text() + '"' 
            + 'target="_blank"' 
            + '>' 
            + '<span class="link-text">Read the full article</span>' + '</div>'
            + '</div>');
    });

}




/*** back to top function ***/

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 1000) {
    document.getElementById("toTop").style.display = "block";
  } else {
    document.getElementById("toTop").style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}