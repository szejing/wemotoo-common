/**
 * Warehouse-style fulfillment steps for CRM Phase 1.
 * Distinct from {@link FulfillmentStatus} (legacy line-level / provider states).
 */
export var FulfillmentLifecycleStatus;
(function (FulfillmentLifecycleStatus) {
    FulfillmentLifecycleStatus["PENDING"] = "pending";
    FulfillmentLifecycleStatus["PROCESSING"] = "processing";
    FulfillmentLifecycleStatus["PACKED"] = "packed";
    FulfillmentLifecycleStatus["FULFILLED"] = "fulfilled";
})(FulfillmentLifecycleStatus || (FulfillmentLifecycleStatus = {}));
