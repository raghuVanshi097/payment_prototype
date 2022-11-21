export default interface PaymentProcessor {
    payment(paymentReq: PaymentReq): PaymentRes
}