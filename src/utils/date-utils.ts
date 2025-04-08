import { formatDate, parse } from 'date-fns';

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
		return date1 instanceof Date && date2 instanceof Date && getFormattedDate(date1) === getFormattedDate(date2);
	} catch (e) {
		throw e;
	}
};

export const getTimeStamp = () => {
	return Date.now();
};

export const getFormattedDate = (date: Date, format: string = 'dd/MM/yyyy'): string => {
	return formatDate(date, format);
};

export const parseDate = (date: string, format: string = 'dd/MM/yyyy'): Date => {
	return parse(date, format, new Date());
};

export const calculateDaysBetweenDates = (start_date: Date, end_date: Date): number => {
	// Create date objects with only the date part (no time)
	const start_date_obj = new Date(start_date.getFullYear(), start_date.getMonth(), start_date.getDate());
	const end_date_obj = new Date(end_date.getFullYear(), end_date.getMonth(), end_date.getDate());

	return Math.ceil((end_date_obj.getTime() - start_date_obj.getTime()) / (1000 * 60 * 60 * 24));
};

export const getDateRange = (start_date: Date, end_date: Date): string[] => {
	const date_range: Date[] = [];

	// Create a new date object with the same local date components
	const localStartDate = new Date(start_date.getFullYear(), start_date.getMonth(), start_date.getDate());

	const daysBetween = calculateDaysBetweenDates(start_date, end_date);

	for (let i = 0; i <= daysBetween; i++) {
		const currentDate = new Date(localStartDate);
		currentDate.setDate(localStartDate.getDate() + i);
		date_range.push(currentDate);
	}

	return date_range.map((date) => getFormattedDate(date));
};
