export var FilterType;
(function (FilterType) {
    FilterType["EQUAL"] = "=";
    FilterType["NOT_EQUAL"] = "!=";
    FilterType["IN"] = "in";
    FilterType["NOT_IN"] = "not_in";
    FilterType["LIKE"] = "like";
    FilterType["NOT_LIKE"] = "not_like";
    FilterType["GREATER_THAN"] = ">";
    FilterType["LESS_THAN"] = "<";
    FilterType["GREATER_THAN_OR_EQUAL"] = ">=";
    FilterType["LESS_THAN_OR_EQUAL"] = "<=";
    FilterType["BETWEEN"] = "between";
})(FilterType || (FilterType = {}));
// =, !=, in, not_in, like, not_like, >, <, >=, <=, between
