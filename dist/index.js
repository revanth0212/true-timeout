'use strict';

if (window.Worker) {
    var trueTimeout = function trueTimeout(callbackFunction, timeout, failureHandler) {
        if (worker) {
            worker.onmessage = function (event) {
                var status = event && event.data;
                if (status === 'done') {
                    callbackFunction && callbackFunction();
                } else {
                    failureHandler && failureHandler();
                }
            };
            worker.postMessage(timeout);
        }
    };

    var worker = new Worker('worker.js');

    window.trueTimeout = trueTimeout;
}