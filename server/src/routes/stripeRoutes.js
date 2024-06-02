
import express from "express";
import Stripe from "stripe";

const stripe = new Stripe('sk_test_51OmsncSAf7iUyE6ABeXS7ktQPOIF8i45vf5A80JrVyQfGODnFD6OOum3LbyoG5wTK9VqGKXgw8ESETsGuN1zDYvm00NmJF12Av')
const router = express.Router();
const YOUR_DOMAIN = 'http://localhost:3000';

router.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: 1000,
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}?success=true`,
        cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    });

    res.redirect(303, session.url);
});

export default router;
