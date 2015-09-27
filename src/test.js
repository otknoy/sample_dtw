var DTW = require('dtw');


var ts = [[1, 2, 3, 4, 5],
	  [1, 2, 3, 4, 4],
	  [1, 3, 5],
	  [5, 5, 5, 5, 5]];


var dtw = new DTW();

for (var i = 0; i < ts.length; i++) {
    var cost = dtw.compute(ts[0], ts[i]);
    var path = dtw.path();

    console.log("\n");
    console.log(ts[0]);
    console.log(ts[i]);
    console.log(cost);
    console.log(path);

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
