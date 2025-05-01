"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentCollectionStatus = void 0;
var PaymentCollectionStatus;
(function (PaymentCollectionStatus) {
    PaymentCollectionStatus["NOTPAID"] = "notPaid";
    PaymentCollectionStatus["AWAITING"] = "awaiting";
    PaymentCollectionStatus["AUTHORIZED"] = "authorized";
    PaymentCollectionStatus["PARTIALLYAUTHORIZED"] = "partiallyAuthorized";
    PaymentCollectionStatus["CANCELED"] = "canceled";
})(PaymentCollectionStatus || (exports.PaymentCollectionStatus = PaymentCollectionStatus = {}));
