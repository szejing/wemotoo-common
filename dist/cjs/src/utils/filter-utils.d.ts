import { FilterType } from '../../../../cjs/src/enum/filter-type';
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
export declare function generateWhereCondition(field: string, data: DateFilterData | StringFilterData): any;
export {};
//# sourceMappingURL=filter-utils.d.ts.map
