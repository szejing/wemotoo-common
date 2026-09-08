import { BadgeColor } from './../constants/component-color';
export declare enum ShipmentStatus {
    PENDING = "pending",
    SHIPPED = "shipped",
    IN_TRANSIT = "in_transit",
    DELIVERED = "delivered",
    FAILED = "failed"
}
export declare const SHIPMENT_STATUS_COLORS: Record<ShipmentStatus, BadgeColor>;
export declare function getShipmentStatusColor(status: ShipmentStatus | string): BadgeColor | undefined;
//# sourceMappingURL=shipment-status.d.ts.map