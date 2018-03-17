# True Timeout

True Timeout is a Web Worker based utility that gives you the ability to have a timeout that is closest to a True Timeout unlike setTimeout (provided by the browser) that is based on the event loop.

An example can be seen here: https://revanth0212.github.io/true-timeout/

To start using it in your projects,

    npm install true-timeout

# Motivation

In languages like Java it is possible to have a timeout that is closer to a True Timeout, but when it comes to JavaScript that works on a single thread, true timeout is never achieved.

Current API that does timeout in JavaScript is **setTimeout** which is provided by the broswer. When you call setTimeout with a callback function and a timeout mentioned in milliseconds, the browser initiates a browser thread that will run the timeout logic and once done, puts the callback function in the JavaScript **event loop**. 

Since the JavaScript engine is single threaded it can only run functions from a **single stack**. To implement timeout kind of Async operations, JavaScript engine picks up operations form event loop when ever it had nothing to do meaning the stack is empty.

**So now setTimeout is dependent on event loop and hence it can only guarantee minimum timeout and not exact timeout.**

For instance:

If we run the following in browser, a browser thread will be spawned and it will wait till 3 seconds after which it will put the alert call into the event loop.

    setTimeout(function(){ alert("Hello"); }, 3000);

If the event loop already has some events pending, the alert call will stay there till the stack is empty and till all the pending events are addressed.

# Solution: trueTimeout

 Solution to this is a Worker based solution. True timeout works on a web worker which is also a thread by itself but it does not depend on the event loop.

# Usage

    window.trueTimeout(trueTimeoutCallBack, timeout, failureHandler)

**trueTimeout** is injected into **global scope** so you can start using it just like you would use setTimeout. 

**failureHandler is optional.**

# Params

 1. callback function which will be called once the timeout expires. **Required**. `() => void`
 2. timeout in milliseconds. **Required**. `number`
 3. errorHandler funciton which will be called if there is any error encountered in the whole process. **Optional**. `() => void`

# Sample

Check out [index.html](https://github.com/revanth0212/true-timeout/blob/master/index.html)

# # Wanna Contribute?

Please fork/branch the project in github and once done create a PR.

To run the project locally for development make sure you have [http-server](https://www.npmjs.com/package/http-server) package installed globally.

    npm run start
