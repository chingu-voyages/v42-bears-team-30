const { isLoggedIn } = require('../middleware/auth');
require("dotenv").config({ path: "./config/config.env" });
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

// Create new payment session
const createCheckoutSession = async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            // Product details
            product_data: {
              name: req.body.roomNumber || 'hello',
              description: req.body.description || 'world',
            },
            // Product price
            unit_amount: req.body.rent || 1000,
          },
          quantity: 1,
          adjustable_quantity: {
            enabled: true
          }
        }
      ],
      success_url: 'http://localhost:5000/', // Change this to the appropriate routes, for frontend team
      cancel_url: 'http://localhost:5000/error'
    });
    res.redirect(303, session.url);
  } catch(e) {
    console.log("error in payment");
    res.status(500).json({ error: e.message })
  }
}


module.exports = createCheckoutSession;
