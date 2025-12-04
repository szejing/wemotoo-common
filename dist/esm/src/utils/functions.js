export function debounce(func, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args);
        }, delay);
    };
}
export function debouncePromise(func, delay) {
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
export function removeDuplicateExpands(expands) {
    // Sort for consistent prefix matching
    expands = [...new Set(expands)].sort();
    return expands.filter((expand) => !expands.some((other) => other !== expand && expand.startsWith(other + '.')));
}
export const formatCurrency = (value, currency = 'MYR', fractionDigits = 2) => {
    if (value === null || value === undefined) {
        throw new Error('value cannot be null or undefined');
    }
    const formatter = Intl.NumberFormat('en-MY', { style: 'currency', currency, maximumFractionDigits: fractionDigits });
    return formatter.format(value);
};
