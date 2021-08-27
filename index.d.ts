declare module "promise-to-readable" {
    import type { Readable } from "stream";

    function promiseToStream(streamPromise: Promise<Readable>): Readable;

    export default promiseToStream;
    export { promiseToStream };
}