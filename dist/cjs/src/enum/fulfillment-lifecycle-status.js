"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FulfillmentLifecycleStatus = void 0;
/**
 * Warehouse-style fulfillment steps for CRM Phase 1.
 * Distinct from {@link FulfillmentStatus} (legacy line-level / provider states).
 */
var FulfillmentLifecycleStatus;
(function (FulfillmentLifecycleStatus) {
    FulfillmentLifecycleStatus["PENDING"] = "pending";
    FulfillmentLifecycleStatus["PROCESSING"] = "processing";
    FulfillmentLifecycleStatus["PACKED"] = "packed";
    FulfillmentLifecycleStatus["FULFILLED"] = "fulfilled";
})(FulfillmentLifecycleStatus || (exports.FulfillmentLifecycleStatus = FulfillmentLifecycleStatus = {}));
