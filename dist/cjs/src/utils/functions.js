"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = debounce;
exports.debouncePromise = debouncePromise;
exports.removeDuplicateExpands = removeDuplicateExpands;
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
function removeDuplicateExpands(expands) {
    // Sort for consistent prefix matching
    expands = [...new Set(expands)].sort();
    return expands.filter((expand) => !expands.some((other) => other !== expand && expand.startsWith(other + '.')));
}
