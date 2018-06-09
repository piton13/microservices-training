const { send } = require('micro');
const url = require('url');
global.visits = {};

module.exports = function(req, res) {
	const { pathname } = url.parse(req.url);
	if (!global.visits[pathname]) {
		global.visits[pathname] = 0;
	}
	global.visits[pathname] += 1;
	console.log(pathname);
	send(res, 200, `The page has ${global.visits[pathname]} visits!`);
}
