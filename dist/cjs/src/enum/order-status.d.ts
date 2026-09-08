import { BadgeColor } from './../constants/component-color';
/**
 * Merchant/customer workflow timeline for orders.
 * Payment truth lives in {@link PaymentStatus}; warehouse steps in
 * {@link FulfillmentLifecycleStatus}; courier steps in {@link ShipmentStatus}.
 */
export declare enum OrderStatus {
    PENDING_PAYMENT = "pending_payment",
    CONFIRMED = "confirmed",
    PAID = "paid",
    PROCESSING = "processing",
    READY_FOR_PICKUP = "ready_for_pickup",
    SHIPPED = "shipped",
    DELIVERED = "delivered",
    COMPLETED = "completed",
    CANCELLED = "cancelled",
    REFUNDED = "refunded",
    REQUIRES_ACTION = "requires_action"
}
export declare const ORDER_STATUS_COLORS: Record<OrderStatus, BadgeColor>;
export declare function getOrderStatusColor(status: OrderStatus | string): BadgeColor | undefined;
//# sourceMappingURL=order-status.d.ts.map