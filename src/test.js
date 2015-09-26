var DTW = require('dtw');


var ts = [[1, 2, 3],
	  [1, 2, 2.9],
	  [1, 1.8, 2.6, 3],
	  [2, 3, 4]];

var dtw = new DTW();

for (var i = 1; i < ts.length; i++) {
    var cost = dtw.compute(ts[0], ts[i]);
    var path = dtw.path();

    var div = document.createElement('div');
    

    var ts0 = document.createTextNode(ts[0] + '\n');
    var tsi = document.createTextNode(ts[i] + '\n');
    var c = document.createTextNode('cost:' + cost + '\n');
    var p = document.createTextNode('path:' + path + '\n');

    document.body.appendChild(ts0);
    document.body.appendChild(tsi);
    document.body.appendChild(c);
    document.body.appendChild(p);
}


