module.exports = chdir;

function chdir (dir, cb) {
    chdir.push();
    process.chdir(dir);
    const result = cb ? cb() : undefined;
    if (result instanceof Promise) {
        return result.finally(() => chdir.pop())
    } else {
        chdir.pop();
    }
};
chdir.stack = [];

chdir.push = function (dir) {
    chdir.stack.push(dir === undefined ? process.cwd() : dir);
};

chdir.pop = function () {
    var dir = chdir.stack.shift();
    if (dir !== undefined) process.chdir(dir);
};
