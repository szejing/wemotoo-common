export declare function debounce<T extends (...args: any[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void;
export declare function debouncePromise<T extends (...args: any[]) => Promise<any>>(func: T, delay: number): (...args: Parameters<T>) => Promise<ReturnType<T>>;
export declare function removeDuplicateExpands(expands: string[]): string[];
