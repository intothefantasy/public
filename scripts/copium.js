/*!
copium
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

$(function () {
    $("#search_card").autocomplete({
        minLength: 1,
        source: function (req, resp) {
            var collected;
            $.getJSON("https://api.scryfall.com/cards/autocomplete?q=" + req.term, function (json) {
                console.log(json);
                resp(json.data);
            })
        }
    });
});
