function trueTimeout (timeout, callbackFunction, failureHandler) {
    const worker = new Worker('packages/worker.js')
    worker.onmessage(function(event) {
        const status = event && event.data
        if (status === 'done') {
            callbackFunction && callbackFunction()
        } else {
            failureHandler && failureHandler()
        }
    })
    worker.postMessage(timeout)
}