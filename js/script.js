/* global apiKeys */

function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');
    var $form = $('#form-container');
    var city = $('#city').val();
    var street = $('#street').val();
    var address = street +", "+city;

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");


    // 
    ($greeting.text("Do you want to live at " +address+"?"));
    
    // load streetview
    var url = "https://maps.googleapis.com/maps/api/streetview?size=600x300";
    url = url + '&key=' + apiKeys.googlemaps;
    url = url + "&location=" + address;
    url = encodeURI(url);
    console.log(url);

    $body[0].style.setProperty('background-image', 'url(' + url + ')');

    // YOUR CODE GOES HERE!

    return false;
}
;

$('#form-container').submit(loadData);

