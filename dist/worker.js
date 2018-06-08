'use strict';

onmessage = function onmessage(e) {
    var timeout = e && e.data || 0;
    try {
        setTimeout(function () {
            postMessage('done');
        }, timeout);
    } catch (error) {
        console.error('Error in true-timeout: ', error);
        postMessage('error');
    }
};