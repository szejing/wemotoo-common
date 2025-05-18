"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDateRange = exports.calculateDaysBetweenDates = exports.parseDate = exports.getFormattedDate = exports.getTimeStamp = exports.isSameDate = exports.isFuture = exports.isPast = void 0;
const date_fns_1 = require("date-fns");
const isPast = (date) => {
    const now = new Date();
    return date instanceof Date && now > date;
};
exports.isPast = isPast;
const isFuture = (date) => {
    const now = new Date();
    return date instanceof Date && date > now;
};
exports.isFuture = isFuture;
const isSameDate = (date1, date2) => {
    try {
        return date1 instanceof Date && date2 instanceof Date && (0, exports.getFormattedDate)(date1) === (0, exports.getFormattedDate)(date2);
    }
    catch (e) {
        throw e;
    }
};
exports.isSameDate = isSameDate;
const getTimeStamp = () => {
    return Date.now();
};
exports.getTimeStamp = getTimeStamp;
const getFormattedDate = (date, format = 'dd/MM/yyyy') => {
    return (0, date_fns_1.formatDate)(date, format);
};
exports.getFormattedDate = getFormattedDate;
const parseDate = (date, format = 'dd/MM/yyyy') => {
    return (0, date_fns_1.parse)(date, format, new Date());
};
exports.parseDate = parseDate;
const calculateDaysBetweenDates = (start_date, end_date) => {
    // Create date objects with only the date part (no time)
    const start_date_obj = new Date(start_date.getFullYear(), start_date.getMonth(), start_date.getDate());
    const end_date_obj = new Date(end_date.getFullYear(), end_date.getMonth(), end_date.getDate());
    return Math.ceil((end_date_obj.getTime() - start_date_obj.getTime()) / (1000 * 60 * 60 * 24));
};
exports.calculateDaysBetweenDates = calculateDaysBetweenDates;
const getDateRange = (start_date, end_date) => {
    const date_range = [];
    // Create a new date object with the same local date components
    const localStartDate = new Date(start_date.getFullYear(), start_date.getMonth(), start_date.getDate());
    const daysBetween = (0, exports.calculateDaysBetweenDates)(start_date, end_date);
    for (let i = 0; i <= daysBetween; i++) {
        const currentDate = new Date(localStartDate);
        currentDate.setDate(localStartDate.getDate() + i);
        date_range.push(currentDate);
    }
    return date_range.map((date) => (0, exports.getFormattedDate)(date));
};
exports.getDateRange = getDateRange;
