import { useForm } from "react-hook-form";

//mui components
import { Grid, TextField, Box, Button, Typography } from "@material-ui/core";
import { Money } from "@material-ui/icons";

export default function PaymentForm({ setPaymentMethod, setSteps }) {
  const { register, handleSubmit } = useForm();

  //if pay in cash
  const handleOnClick = () => {
    setSteps(2);
    setPaymentMethod(false);
  };

  //if pay with credit card
  const onSubmit = (data) => {
    setPaymentMethod(data);
    setSteps(2);
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardName"
              label="Name on card"
              fullWidth
              autoComplete="cc-name"
              variant="standard"
              {...register("cardName")}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardNumber"
              label="Card number"
              fullWidth
              autoComplete="cc-number"
              variant="standard"
              {...register("cardNumber")}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="expDate"
              label="Expiry date"
              fullWidth
              autoComplete="cc-exp"
              variant="standard"
              {...register("expDate")}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cvv"
              label="CVV"
              helperText="Last three digits on signature strip"
              fullWidth
              autoComplete="cc-csc"
              variant="standard"
              {...register("cvv")}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Button startIcon={<Money />} onClick={handleOnClick}>
              Or pay in cash
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                onClick={() => setSteps(0)}
                variant="outlined"
                sx={{ mt: 3, ml: 1 }}
              >
                GO BACK
              </Button>

              <Button type="submit" variant="outlined" color="primary">
                DONE
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
