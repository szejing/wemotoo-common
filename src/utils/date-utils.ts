import { formatDate, parse } from 'date-fns';

export const isPast = (date: Date): boolean => {
	const now = new Date();
	return date instanceof Date && now > date;
};

export const isFuture = (date: Date): boolean => {
	const now = new Date();
	return date instanceof Date && date > now;
};

export const isToday = (date: Date): boolean => {
	const now = new Date();
	return date instanceof Date && date.toDateString() === now.toDateString();
};

export const isSameDate = (date1: Date, date2: Date): boolean => {
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

export const transformDate = (value: string | number): Date => {
	return !isNaN(Date.parse(value.toString())) ? new Date(value) : new Date(Number(value) * 1000);
};

export const transformDateWithoutTimezone = (value: string | number): Date => {
	let newDate = parseDate(value.toString()) ?? new Date(Number(value) * 1000);

	newDate.setHours(0, 0, 0, 0);
	return newDate;
};

export const convertDurationToNumber = (duration: string): number => {
	if (!duration || typeof duration !== 'string') {
		return 0;
	}

	// Remove any whitespace and convert to lowercase
	const cleanDuration = duration.trim().toLowerCase();

	// Initialize total minutes
	let totalMinutes = 0;

	// Extract hours if present
	const hoursMatch = cleanDuration.match(/(\d+)h/);
	if (hoursMatch) {
		totalMinutes += parseInt(hoursMatch[1]) * 60;
	}

	// Extract minutes if present
	const minutesMatch = cleanDuration.match(/(\d+)m/);
	if (minutesMatch) {
		totalMinutes += parseInt(minutesMatch[1]);
	}

	return totalMinutes;
};
