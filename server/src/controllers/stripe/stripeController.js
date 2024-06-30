import Stripe from 'stripe';

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const YOUR_DOMAIN = 'http://localhost:3000';

export const createCheckoutSession = async (req, res, next) => {
    const { userId, cartItems } = req.body;

    try {
        const customer = await stripe.customers.create({
            metadata: {
                userId,
                cart: cartItems,
            },
        });

        console.log({ customer, cartItems, userId })
        const line_items = req.body.cartItems.map((item) => {
            return {
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: item.title,
                        images: [item.thumbnail],
                        description: item.description,
                        metadata: {
                            id: item._id,
                        },
                    },
                    unit_amount: item.discounted_price * 100,
                },
                quantity: item.cartQuantity,
            };
        });

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            shipping_address_collection: {
                allowed_countries: ["US", "CA", "KE"],
            },
            shipping_options: [
                {
                    shipping_rate_data: {
                        type: "fixed_amount",
                        fixed_amount: {
                            amount: 0,
                            currency: "usd",
                        },
                        display_name: "Free shipping",
                        // Delivers between 5-7 business days
                        delivery_estimate: {
                            minimum: {
                                unit: "business_day",
                                value: 5,
                            },
                            maximum: {
                                unit: "business_day",
                                value: 7,
                            },
                        },
                    },
                },
                {
                    shipping_rate_data: {
                        type: "fixed_amount",
                        fixed_amount: {
                            amount: 1500,
                            currency: "usd",
                        },
                        display_name: "Next day air",
                        // Delivers in exactly 1 business day
                        delivery_estimate: {
                            minimum: {
                                unit: "business_day",
                                value: 1,
                            },
                            maximum: {
                                unit: "business_day",
                                value: 1,
                            },
                        },
                    },
                },
            ],
            phone_number_collection: {
                enabled: true,
            },
            line_items,
            mode: "payment",
            customer: customer.id,
            success_url: `${YOUR_DOMAIN}/checkout-success`,
            cancel_url: `${YOUR_DOMAIN}/cart`,
        });

        console.log({ session })
        res.send({ url: session.url });
    } catch (error) {
        res.status(500).json({ error: error?.message })
    }
};