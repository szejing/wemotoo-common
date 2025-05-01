"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateWhereCondition = generateWhereCondition;
const filter_type_1 = require("./../enum/filter-type");
function isDateFilterData(data) {
    return 'start_date' in data || 'end_date' in data || 'dates' in data;
}
// Custom filter operators that return plain objects compatible with TypeORM
const MoreThan = (value) => ({ $gt: value });
const LessThan = (value) => ({ $lt: value });
const Equal = (value) => ({ $eq: value });
const Not = (value) => ({ $not: value });
const Between = (value1, value2) => ({ $between: [value1, value2] });
const MoreThanOrEqual = (value) => ({ $gte: value });
const LessThanOrEqual = (value) => ({ $lte: value });
const In = (values) => ({ $in: values });
const Like = (pattern) => (pattern ? { $like: pattern } : undefined);
function generateWhereCondition(field, data) {
    let param1;
    let param2;
    let params;
    if (isDateFilterData(data)) {
        param1 = data.start_date;
        param2 = data.end_date;
        params = data.dates;
    }
    else {
        param1 = data.pattern;
        param2 = data.keyword;
    }
    const { filter_type } = data;
    const formattedDates = isDateFilterData(data) ? data.dates?.map((date) => new Date(date.getFullYear(), date.getMonth(), date.getDate())) : undefined;
    switch (filter_type) {
        case filter_type_1.FilterType.GREATER_THAN:
            return {
                [field]: MoreThan(isDateFilterData(data) ? data.start_date : undefined),
            };
        case filter_type_1.FilterType.LESS_THAN:
            return {
                [field]: LessThan(isDateFilterData(data) ? data.start_date : undefined),
            };
        case filter_type_1.FilterType.EQUAL:
            return {
                [field]: Equal(isDateFilterData(data) ? data.start_date : undefined),
            };
        case filter_type_1.FilterType.NOT_EQUAL:
            return { [field]: Not(Equal(isDateFilterData(data) ? data.start_date : undefined)) };
        case filter_type_1.FilterType.BETWEEN:
            return {
                [field]: Between(isDateFilterData(data) ? data.start_date : undefined, isDateFilterData(data) ? data.end_date : undefined),
            };
        case filter_type_1.FilterType.GREATER_THAN_OR_EQUAL:
            return {
                [field]: MoreThanOrEqual(isDateFilterData(data) ? data.start_date : undefined),
            };
        case filter_type_1.FilterType.LESS_THAN_OR_EQUAL:
            return {
                [field]: LessThanOrEqual(isDateFilterData(data) ? data.start_date : undefined),
            };
        case filter_type_1.FilterType.IN:
            if (!formattedDates?.length) {
                throw new Error('Dates array is required for IN operation');
            }
            return {
                [field]: In(formattedDates),
            };
        case filter_type_1.FilterType.NOT_IN:
            if (!formattedDates?.length) {
                throw new Error('Dates array is required for NOT_IN operation');
            }
            return {
                [field]: Not(In(formattedDates)),
            };
        case filter_type_1.FilterType.LIKE:
            if (!isDateFilterData(data) && !data.pattern) {
                throw new Error('Pattern is required for LIKE operation');
            }
            const likeCondition = Like(isDateFilterData(data) ? undefined : data.pattern);
            return likeCondition ? { [field]: likeCondition } : {};
        case filter_type_1.FilterType.NOT_LIKE:
            if (!isDateFilterData(data) && !data.pattern) {
                throw new Error('Pattern is required for NOT_LIKE operation');
            }
            const notLikeCondition = Like(isDateFilterData(data) ? undefined : data.pattern);
            return notLikeCondition ? { [field]: Not(notLikeCondition) } : {};
        default:
            throw new Error(`Unsupported filter type: ${filter_type}`);
    }
}
