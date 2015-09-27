var $ = require('jquery');
var DTW = require('dtw');
// var Leap = require('leapjs');

var ts = [[1, 2, 3, 4, 5],
	  [1, 2, 3, 4, 4],
	  [1, 3, 5],
	  [5, 5, 5, 5, 5]];


var dtw = new DTW();

for (var i = 0; i < ts.length; i++) {
    var cost = dtw.compute(ts[0], ts[i]);
    var path = dtw.path();

    var $result = $('<div>');
    var $t0 = $('<p>').text(ts[0]);
    var $t1 = $('<p>').text(ts[i]);
    var $cost = $('<p>').text(cost);
    $result.append($t0);
    $result.append($t1);
    $result.append($cost);

    $('#content').append($result);
}
