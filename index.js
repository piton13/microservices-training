const { send } = require('micro');
const url = require('url');
const level = require('level');
const promisify = require('then-levelup');
const db = promisify(level('visits.db', {
	valueEncoding: 'json'
}));

module.exports = async function(req, res) {
	const { pathname } = url.parse(req.url);
	let currentVisits = 0;
	try {
		currentVisits = await db.get(pathname);
	} catch(e) {
		if (e.notFound) { console.log('the key was not found') }
	}
	currentVisits += 1;
	await db.put(pathname, currentVisits);
	console.log(pathname);
	send(res, 200, `The page has ${currentVisits} visits!`);
}
