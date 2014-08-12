var chdir = require('../');
var test = require('tap').test;

test('chdir', function (t) {
    t.plan(3);

    var cwd = process.cwd();
    var returnValue = chdir('/tmp', function () {
        t.equal(process.cwd(), '/tmp');
        return "hello";
    });
    t.equal(process.cwd(), cwd);
    t.equal(returnValue, "hello");
    t.end();
});
