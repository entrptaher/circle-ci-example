const PQueue = require('p-queue');
const got = require('got');

const queue = new PQueue({concurrency: 1});

queue.add(() => got('sindresorhus.com')).then(() => {
	console.log('Done: sindresorhus.com');
});
