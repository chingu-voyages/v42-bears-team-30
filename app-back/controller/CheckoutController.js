const { isLoggedIn } = require('../middleware/auth');
require("dotenv").config({ path: "./config/config.env" });

// pragmi stripe
//const stripe = require('stripe')('sk_test_51MU9wQSA1jobDyLHXXs7nFPGJC78ar4n0lc5g0C3QeTzI9su5SFJKx2hs9IS5moKI1hrOj9x6m1HvYoYKlbPr8Tr00tV1prOn8');

// mendes stripe
const stripe = require('stripe')('sk_test_51MXLvVHAHDp5fErF3PsHShNe1ZrTKkeN01EF10OfDbRQLszd3iAbqNidFZAMEmlYEEA6TRVgFpZwQYknGNPHTN8400dcaAyiCV');





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
              name: req.body.roomNumber,
              description: req.body.description
              
              
            },
            // Product price
            unit_amount: req.body.rent * 100,
          },
          quantity: 1,
          
        }
      ],
      
      success_url: `${process.env.FRONT_DOMAIN}/success-pay`, 
      cancel_url: `${process.env.FRONT_DOMAIN}/cancel-pay`
    });
    res.send({ url: session.url});
  } catch(e) {
    console.log("error in payment");
    res.status(500).json({ error: e.message })
  }
}




module.exports = createCheckoutSession;
