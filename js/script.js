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
    var address = street + ", " + city;

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");


    // Set greetings
    ($greeting.text("Do you want to live at " + address + "?"));

    // load streetview
    var url = "https://maps.googleapis.com/maps/api/streetview?size=600x300";
    url = url + '&key=' + apiKeys.googlemaps;
    url = url + "&location=" + address;
    url = encodeURI(url);
    $body[0].style.setProperty('background-image', 'url(' + url + ')');


    //New york times
    // Built by LucyBot. www.lucybot.com
    var url = "http://api.nytimes.com/svc/search/v2/articlesearch.json";

    url += '?' + $.param({
        'api-key': apiKeys.newyorktimes,
        'q': city,
        'sort': 'newest'
    });

    $.ajax({
        dataType: "json",
        url: url,
        crossOrigin: true,
        method: 'GET'
    }).done(function (result) {
        console.log(result.response.docs);
        result.response.docs.forEach(function (doc) {
            $nytElem.append($('<li>').append($('<a>').text(doc.headline.main).attr('href', doc.web_url)));
        });
    }).fail(function (err) {
        console.log(err);
    });
    // YOUR CODE GOES HERE!

    return false;
}
;

$('#form-container').submit(loadData);

