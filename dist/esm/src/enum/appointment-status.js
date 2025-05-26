export var AppointmentStatus;
(function (AppointmentStatus) {
    AppointmentStatus["PENDING"] = "pending";
    AppointmentStatus["CONFIRMED"] = "confirmed";
    AppointmentStatus["CANCELLED"] = "cancelled";
    AppointmentStatus["COMPLETED"] = "completed";
    AppointmentStatus["RESCHEDULED"] = "rescheduled";
    AppointmentStatus["NO_SHOW"] = "no_show";
})(AppointmentStatus || (AppointmentStatus = {}));
