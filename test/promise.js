var chdir = require('../');
var test = require('tap').test;

test('promise', async function (t) {
    t.plan(3);

    var cwd = process.cwd();
    await chdir('/tmp', function () {
        t.equal(process.cwd(), '/tmp');
        return new Promise(resolve => setTimeout(() => { t.equal(process.cwd(), '/tmp'); resolve() }, 200))
    });
    t.equal(process.cwd(), cwd);
    t.end();
});


test('promise with exception', async function (t) {
    t.plan(2);

    var cwd = process.cwd();
    try {
        await chdir('/tmp', function () {
            t.equal(process.cwd(), '/tmp');
            return Promise.resolve().then(() => { throw new Error() })
        });
    } catch {
        t.equal(process.cwd(), cwd);
    }
    t.end();
});
