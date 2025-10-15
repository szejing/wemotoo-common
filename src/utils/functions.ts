export function debounce<T extends (...args: any[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void {
	let timer: ReturnType<typeof setTimeout>;

	return (...args: Parameters<T>) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			func(...args);
		}, delay);
	};
}

export function debouncePromise<T extends (...args: any[]) => Promise<any>>(func: T, delay: number) {
	let timer: ReturnType<typeof setTimeout>;
	let resolver: ((value: ReturnType<T>) => void) | null = null;

	return (...args: Parameters<T>): Promise<ReturnType<T>> => {
		if (timer) {
			clearTimeout(timer);
		}

		return new Promise((resolve) => {
			resolver = resolve;
			timer = setTimeout(async () => {
				if (resolver) {
					const result = await func(...args);
					resolver(result as ReturnType<T>);
				}
			}, delay);
		});
	};
}

function removeDuplicateExpands(expands: string[]): string[] {
	// Sort for consistent prefix matching
	expands = [...new Set(expands)].sort();

	return expands.filter((expand) => !expands.some((other) => other !== expand && expand.startsWith(other + '.')));
}
