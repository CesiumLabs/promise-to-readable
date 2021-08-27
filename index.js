const { PassThrough } = require("stream");

function promiseToStream(promise) {
    const stream = new PassThrough();

    setImmediate(() => {
        promise.then(data => {
            data.pipe(stream);
        }, () => {});
    });

    return stream;
}

module.exports = promiseToStream;
module.exports.default = promiseToStream;
module.exports.promiseToStream = promiseToStream;