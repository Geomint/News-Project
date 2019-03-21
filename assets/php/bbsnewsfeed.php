<?php
// Set the feed URL to BBC RSS feed url
$feed_url = 'https://feeds.bbci.co.uk/news/rss.xml';

// Fetch the content.
// information about the file_get_contents() function.
$content = file_get_contents( $feed_url );

// Set the Content-Type header.
header( 'Content-Type: application/rss+xml' );

// Display the content and exit.
echo $content;
exit;
?>