const express = require("express");
const Stripe = require("stripe");
const path = require("path");

if (process.env.NODE_ENV !== "production") {
  /**
   * This allows us to use the .env.local pattern offered by React.
   * Meaning we don't need to source our .env.local file and it does not
   * need to contain `export`, it can look like that:
   *
   * REACT_APP_PUBLISHABLE_KEY="mykey"
   * REACT_APP_SECRET_KEY="myscecretkey"
   */
  require("dotenv").config({ path: path.resolve(process.cwd(), ".env.local") });
}

const app = express();

const keyPublishable = process.env.REACT_APP_PUBLISHABLE_KEY;
const keySecret = process.env.REACT_APP_SECRET_KEY;
const stripe = Stripe(keySecret);

console.log("publishable key :", keyPublishable);

app.use("/static", express.static("./build/static"));

app.use(require("body-parser").json());
app.use(require("body-parser").urlencoded({ extended: false }));

function calculateAmount(basketList) {
  return "1000";
}

app.post("/charge", (request, result) => {
  // here we need to calculate the price to pay depending on request infos
  const amount = request.body.amount;
  const basketList = request.body.basketList;
  console.log("coté serveur basketList", basketList);
  //const amountVerified = calculateAmount(basketList);
  const amountVerified = amount;
  console.log("request's body", request.body.stripeData);

  if (amount === amountVerified) {

    stripe.customers
      .create({
        email: request.body.stripeData.email,
        source: request.body.stripeData.id
      })
      .then(customer =>
        stripe.charges.create({
          amount,
          description: "Sample Charge",
          currency: "eur",
          customer: customer.id
        })
      )
      .then(charge => {
        //console.log("charge returned:", charge);
        result.json(charge)}
      );
  } else {
    console.warn("ca va pas le paiement");
  }
});

app.get("*", (request, result)=>{
  result.sendFile(path.resolve("./build/index.html"));
});

const port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log(`Server listening on port ${port}`);
});
