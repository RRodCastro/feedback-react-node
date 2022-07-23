const passport = require("passport");
const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecret);

module.exports = (app) => {
  app.post("/api/stripe", async (req, res) => {
    // Check if request contains the user
    if (!req.user) {
        return res.status(401).send({error: 'You must log in!'});
    }

    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      source: req.body.id,
      description: "$5 for 5 credits",
    });

    req.user.credits += 5;
    // Save user in user model
    const user = await req.user.save();

    res.send(user);
  });
};
