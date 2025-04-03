import { MoreThan, LessThan, Equal, Between, MoreThanOrEqual, LessThanOrEqual, Not, In, Like } from 'typeorm';
import { FilterType } from './../enum/filter-type';

type DateFilterData = {
	start_date?: Date;
	end_date?: Date;
	dates?: Date[];
	filter_type: FilterType;
};

type StringFilterData = {
	pattern?: string;
	keyword?: string;
	filter_type: FilterType;
};

function isDateFilterData(data: DateFilterData | StringFilterData): data is DateFilterData {
	return 'start_date' in data || 'end_date' in data || 'dates' in data;
}

export function generateWhereCondition(field: string, data: DateFilterData | StringFilterData): any {
	let param1: any;
	let param2: any;
	let params: Date[] | undefined;

	if (isDateFilterData(data)) {
		param1 = data.start_date;
		param2 = data.end_date;
		params = data.dates;
	} else {
		param1 = data.pattern;
		param2 = data.keyword;
	}

	const { filter_type } = data;
	const formattedDates = isDateFilterData(data) ? data.dates?.map((date) => new Date(date.getFullYear(), date.getMonth(), date.getDate())) : undefined;

	switch (filter_type) {
		case FilterType.GREATER_THAN:
			return {
				[field]: MoreThan(isDateFilterData(data) ? data.start_date : undefined),
			};
		case FilterType.LESS_THAN:
			return {
				[field]: LessThan(isDateFilterData(data) ? data.start_date : undefined),
			};
		case FilterType.EQUAL:
			return {
				[field]: Equal(isDateFilterData(data) ? data.start_date : undefined),
			};
		case FilterType.NOT_EQUAL:
			return { [field]: Not(Equal(isDateFilterData(data) ? data.start_date : undefined)) };
		case FilterType.BETWEEN:
			return {
				[field]: Between(isDateFilterData(data) ? data.start_date : undefined, isDateFilterData(data) ? data.end_date : undefined),
			};
		case FilterType.GREATER_THAN_OR_EQUAL:
			return {
				[field]: MoreThanOrEqual(isDateFilterData(data) ? data.start_date : undefined),
			};
		case FilterType.LESS_THAN_OR_EQUAL:
			return {
				[field]: LessThanOrEqual(isDateFilterData(data) ? data.start_date : undefined),
			};
		case FilterType.IN:
			if (!formattedDates?.length) {
				throw new Error('Dates array is required for IN operation');
			}
			return {
				[field]: In(formattedDates),
			};
		case FilterType.NOT_IN:
			if (!formattedDates?.length) {
				throw new Error('Dates array is required for NOT_IN operation');
			}
			return {
				[field]: Not(In(formattedDates)),
			};
		case FilterType.LIKE:
			if (!isDateFilterData(data) && !data.pattern) {
				throw new Error('Pattern is required for LIKE operation');
			}
			return {
				[field]: Like(isDateFilterData(data) ? undefined : data.pattern),
			};
		case FilterType.NOT_LIKE:
			if (!isDateFilterData(data) && !data.pattern) {
				throw new Error('Pattern is required for NOT_LIKE operation');
			}
			return {
				[field]: Not(Like(isDateFilterData(data) ? undefined : data.pattern)),
			};
		default:
			throw new Error(`Unsupported filter type: ${filter_type}`);
	}
}
