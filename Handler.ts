import PaymentProcessor from "./PaymentProcessor";
import Rayzorpay from "./razorpay";
import Stripe from "./stripe";

const resolvePaymentProcessor = (paymentProcessor: string): PaymentProcessor => {
    switch (paymentProcessor) {
        case 'Stripe':
            return new Stripe();
        case 'Razorpay':
            return new Rayzorpay();
        default:
            return new Stripe();
    }
}

const processPayment = () : PaymentRes => {
    const paymentProcessor: PaymentProcessor = resolvePaymentProcessor('Stripe'); 
    const paymentRes = paymentProcessor.payment({
        requestId: 'stripe_1'
    });
    return paymentRes;
}

console.log(processPayment());

