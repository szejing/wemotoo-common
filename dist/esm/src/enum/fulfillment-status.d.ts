import { BadgeColor } from './../constants/component-color';
export declare enum FulfillmentStatus {
    NOT_FULFILLED = "not_fulfilled",
    PARTIALLY_FULFILLED = "partially_fulfilled",
    FULFILLED = "fulfilled",
    PARTIALLY_SHIPPED = "partially_shipped",
    SHIPPED = "shipped",
    PARTIALLY_RETURNED = "partially_returned",
    RETURNED = "returned",
    CANCELED = "canceled",
    REQUIRES_ACTION = "requires_action"
}
export declare const FULFILLMENT_STATUS_COLORS: Record<FulfillmentStatus, BadgeColor>;
export declare function getFulfillmentStatusColor(status: FulfillmentStatus | string): BadgeColor | undefined;
