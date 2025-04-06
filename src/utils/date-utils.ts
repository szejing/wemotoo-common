export const isPast = (date: Date) => {
	const now = new Date();
	return date instanceof Date && now > date;
};

export const isFuture = (date: Date) => {
	const now = new Date();
	return date instanceof Date && date > now;
};

export const isSameDate = (date1: Date, date2: Date) => {
	try {
		return date1 instanceof Date && date2 instanceof Date && extractDate(date1) === extractDate(date2);
	} catch (e) {
		throw e;
	}
};

export const getTimeStamp = () => {
	return Date.now();
};

export const extractDate = (date: Date): string => {
	return date.toISOString().split('T')[0];
};

export const calculateDaysBetweenDates = (start_date: Date, end_date: Date): number => {
	const start_date_obj = new Date(start_date);
	const end_date_obj = new Date(end_date);

	return Math.ceil((end_date_obj.getTime() - start_date_obj.getTime()) / (1000 * 60 * 60 * 24));
};

export const getDateRange = (start_date: Date, end_date: Date): string[] => {
	const date_range: Date[] = [];

	for (let i = 0; i <= calculateDaysBetweenDates(start_date, end_date); i++) {
		date_range.push(new Date(start_date.getTime() + i * 24 * 60 * 60 * 1000));
	}

	return date_range.map((date) => extractDate(date));
};
