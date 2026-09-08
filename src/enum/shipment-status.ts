import { BadgeColor } from './../constants/component-color';

export enum ShipmentStatus {
	PENDING = 'pending',
	SHIPPED = 'shipped',
	IN_TRANSIT = 'in_transit',
	DELIVERED = 'delivered',
	FAILED = 'failed',
}

export const SHIPMENT_STATUS_COLORS: Record<ShipmentStatus, BadgeColor> = {
	[ShipmentStatus.PENDING]: 'warning',
	[ShipmentStatus.SHIPPED]: 'primary',
	[ShipmentStatus.IN_TRANSIT]: 'info',
	[ShipmentStatus.DELIVERED]: 'success',
	[ShipmentStatus.FAILED]: 'error',
};

export function getShipmentStatusColor(status: ShipmentStatus | string): BadgeColor | undefined {
	return SHIPMENT_STATUS_COLORS[status as ShipmentStatus];
}
