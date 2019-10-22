let f = require('./if-03.js');
if (f == require('./if-00.js')) {
	console.log(f(3,6,3));
} else if (f == require('./if-03.js')) {
	console.log(f(1,2,3,4));
}
