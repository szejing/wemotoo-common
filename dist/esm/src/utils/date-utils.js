import { formatDate, parse } from 'date-fns';
export const isPast = (date) => {
    const now = new Date();
    return date instanceof Date && now > date;
};
export const isFuture = (date) => {
    const now = new Date();
    return date instanceof Date && date > now;
};
export const isSameDate = (date1, date2) => {
    try {
        return date1 instanceof Date && date2 instanceof Date && getFormattedDate(date1) === getFormattedDate(date2);
    }
    catch (e) {
        throw e;
    }
};
export const getTimeStamp = () => {
    return Date.now();
};
export const getFormattedDate = (date, format = 'dd/MM/yyyy') => {
    return formatDate(date, format);
};
export const parseDate = (date, format = 'dd/MM/yyyy') => {
    return parse(date, format, new Date());
};
export const calculateDaysBetweenDates = (start_date, end_date) => {
    // Create date objects with only the date part (no time)
    const start_date_obj = new Date(start_date.getFullYear(), start_date.getMonth(), start_date.getDate());
    const end_date_obj = new Date(end_date.getFullYear(), end_date.getMonth(), end_date.getDate());
    return Math.ceil((end_date_obj.getTime() - start_date_obj.getTime()) / (1000 * 60 * 60 * 24));
};
export const getDateRange = (start_date, end_date) => {
    const date_range = [];
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
