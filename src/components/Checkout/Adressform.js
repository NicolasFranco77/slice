import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

//mui components
import { Button, Grid, TextField, Box, Typography } from "@material-ui/core";

const AddressForm = ({ setSteps, setBuyer }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setBuyer(data);
    setSteps(1);
  };

  const emailPattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="First Name"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              {...register("name")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Last Name"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              {...register("lastname")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
              variant="standard"
              {...register("email", {
                pattern: emailPattern,
              })}
            />
            {errors.email && (
              <Typography color="secondary">
                Please enter a valid email address
              </Typography>
            )}
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Contact Number"
              fullWidth
              autoComplete="phone"
              variant="standard"
              {...register("phone")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Address"
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
              {...register("adress")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
              {...register("city")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="state"
              name="state"
              label="State"
              autoComplete="shipping address-level2"
              fullWidth
              variant="standard"
              {...register("state")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="shipping postal-code"
              variant="standard"
            />
          </Grid>
        </Grid>

        <br />

        <Grid item xs={12}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              component={Link}
              variant="outlined"
              to="/cart" //back to cart
              sx={{ mt: 3, ml: 1 }}
            >
              GO BACK
            </Button>

            <Button
              type="submit"
              variant="outlined"
              color="primary"
              sx={{ mt: 3, ml: 1 }}
            >
              NEXT
            </Button>
          </Box>
        </Grid>
      </form>
    </>
  );
};

export default AddressForm;
