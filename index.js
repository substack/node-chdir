module.exports = function (dir, cb) {
    var cwd = process.cwd();
    process.chdir(dir);
    cb();
    process.chdir(cwd);
};
