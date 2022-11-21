import PaymentProcessor from "./PaymentProcessor";

export default class Stripe implements PaymentProcessor {
    payment(paymentReq: PaymentReq): PaymentRes {
        const res: PaymentRes = {
            paymentId: '1'
        }

        return res;
    }
}