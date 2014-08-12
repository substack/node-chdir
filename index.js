module.exports = chdir;

function chdir (dir, cb) {
    chdir.push();
    process.chdir(dir);

    var cbReturnValue = undefined;
    if (cb) {
      cbReturnValue = cb();
    }

    chdir.pop();
    return cbReturnValue;
};
chdir.stack = [];

chdir.push = function (dir) {
    chdir.stack.push(dir === undefined ? process.cwd() : dir);
};

chdir.pop = function () {
    var dir = chdir.stack.shift();
    if (dir !== undefined) process.chdir(dir);
};
