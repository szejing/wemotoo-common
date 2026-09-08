import { BadgeColor } from './../constants/component-color';
/**
 * Warehouse-style fulfillment steps for CRM Phase 1.
 * Distinct from {@link FulfillmentStatus} (legacy line-level / provider states).
 */
export declare enum FulfillmentLifecycleStatus {
    PENDING = "pending",
    PROCESSING = "processing",
    PACKED = "packed",
    FULFILLED = "fulfilled"
}
export declare const FULFILLMENT_LIFECYCLE_STATUS_COLORS: Record<FulfillmentLifecycleStatus, BadgeColor>;
export declare function getFulfillmentLifecycleStatusColor(status: FulfillmentLifecycleStatus | string): BadgeColor | undefined;
//# sourceMappingURL=fulfillment-lifecycle-status.d.ts.map