"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FulfillmentStatus = void 0;
var FulfillmentStatus;
(function (FulfillmentStatus) {
    FulfillmentStatus["NOT_FULFILLED"] = "not_fulfilled";
    FulfillmentStatus["PARTIALLY_FULFILLED"] = "partially_fulfilled";
    FulfillmentStatus["FULFILLED"] = "fulfilled";
    FulfillmentStatus["PARTIALLY_SHIPPED"] = "partially_shipped";
    FulfillmentStatus["SHIPPED"] = "shipped";
    FulfillmentStatus["PARTIALLY_RETURNED"] = "partially_returned";
    FulfillmentStatus["RETURNED"] = "returned";
    FulfillmentStatus["CANCELED"] = "canceled";
    FulfillmentStatus["REQUIRES_ACTION"] = "requires_action";
})(FulfillmentStatus || (exports.FulfillmentStatus = FulfillmentStatus = {}));
