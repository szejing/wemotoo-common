"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentSessionStatus = void 0;
var PaymentSessionStatus;
(function (PaymentSessionStatus) {
    PaymentSessionStatus["AUTHORIZED"] = "authorized";
    PaymentSessionStatus["PENDING"] = "pending";
    PaymentSessionStatus["REQUIRES_MORE"] = "requires_more";
    PaymentSessionStatus["ERROR"] = "error";
    PaymentSessionStatus["CANCELED"] = "canceled";
})(PaymentSessionStatus || (exports.PaymentSessionStatus = PaymentSessionStatus = {}));
