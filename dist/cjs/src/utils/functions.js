"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = debounce;
exports.debouncePromise = debouncePromise;
function debounce(func, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args);
        }, delay);
    };
}
function debouncePromise(func, delay) {
    let timer;
    let resolver = null;
    return (...args) => {
        if (timer) {
            clearTimeout(timer);
        }
        return new Promise((resolve) => {
            resolver = resolve;
            timer = setTimeout(async () => {
                if (resolver) {
                    const result = await func(...args);
                    resolver(result);
                }
            }, delay);
        });
    };
}
