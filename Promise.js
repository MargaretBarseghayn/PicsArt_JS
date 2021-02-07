const state = {
    FULFILLED: 1,
    PENDING: 0,
    REJECTED: -1
}

function promise(executor) {
    let stateOfPromise = state.PENDING;
    let value = undefined;
    let resolveArr = [];
    let rejectArr = [];

    const resolve = val => {
        stateOfPromise = state.FULFILLED;
        value = val;

        for (const handler of resolveArr) handler(value);
    };
    const reject = err => {
        stateOfPromise = state.REJECTED;
        value = err;

        for (const handler of rejectArr) handler(value);
    };
    try {
        executor(resolve, reject);
    } catch (err) {
        reject(err);
    }
    return {
        then: function (resolveFn, rejectFn) {
            return promise((resolve, reject) => {
                if (typeof resolveFn !== 'function') {
                    resolveFn = result => result;
                }

                if (typeof rejectFn !== 'function') {
                    rejectFn = reason => {
                        throw reason;
                    };
                }

                resolveArr.push(result => {
                    try {
                        let r = resolveFn(result);

                        if (r === undefined) {
                            resolve(undefined);
                            return;
                        }

                        resolve(r);
                    } catch (err) {
                        reject(err);
                    }
                });

                rejectArr.push(err => {
                    try {
                        let r = rejectFn(err);
                        resolve(r);
                    } catch (err) {
                        reject(err);
                    }
                });
            });
        },
        catch: function (rejectFn) {
            return this.then(undefined, rejectFn);
        },

        finally: function (finallyFn) {
            return this.then(finallyFn, finallyFn);
        },
    }
}

let promise1 = promise((resolve) => {
    setTimeout(() => {
        resolve('string');
    }, 2000);
});

promise1
    .then(res => {
        return res.toUpperCase();
    })
    .then(upperRes => console.log(upperRes))
    .catch(rej => console.log(rej))
    .finally(() => console.log('finally'));



