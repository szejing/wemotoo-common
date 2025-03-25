export type MaintenanceMetadata = {
	requires_booking: boolean;
	duration: string;
	start_time: string | null;
	end_time: string | null;
	off_day: string | null;
};
