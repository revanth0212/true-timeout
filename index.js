if (window.Worker) {

    var worker = new Worker('worker.js')

    function trueTimeout (callbackFunction, timeout, failureHandler) {
        if(worker) {
            worker.onmessage = function(event) {
                var status = event && event.data
                if (status === 'done') {
                    callbackFunction && callbackFunction()
                } else {
                    failureHandler && failureHandler()
                }
            }
            worker.postMessage(timeout)
        }
    }

    window.trueTimeout = trueTimeout
}