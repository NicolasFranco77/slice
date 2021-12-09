import { useState } from "react";

//components
import AddressForm from "./Adressform";
import Review from "./Review";
import Payment from "./Payment";

//mui components
import { Paper, Typography } from "@material-ui/core";

//styles
import useStyles from "./styles";

const Checkout = () => {
  const [buyer, setBuyer] = useState();
  const [paymentMethod, setPaymentMethod] = useState();
  const [steps, setSteps] = useState();
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <div className={classes.toolbar} />
      <div className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography
            variant="h4"
            align="center"
            style={{ marginBottom: "10px" }}
          >
            Checkout
          </Typography>

          {!steps && <AddressForm setBuyer={setBuyer} setSteps={setSteps} />}

          {steps === 1 && (
            <Payment setPaymentMethod={setPaymentMethod} setSteps={setSteps} />
          )}

          {steps === 2 && (
            <Review
              buyer={buyer}
              setSteps={setSteps}
              paymentMethod={paymentMethod}
            />
          )}
        </Paper>
      </div>
    </div>
  );
};

export default Checkout;
