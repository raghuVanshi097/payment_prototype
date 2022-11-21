import PaymentProcessor from "./PaymentProcessor";

export default class Rayzorpay implements PaymentProcessor {
    payment(paymentReq: PaymentReq): PaymentRes {
        const res: PaymentRes = {
            paymentId: '1'
        }

        return res;
    }
}