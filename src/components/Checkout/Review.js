import { useContext, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { CartContext } from "../../context/CartContex";

//components
import ResultMessage from "./ResultMessage";

//mui components
import {
  Button,
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";

const Review = ({ buyer, setSteps, paymentMethod }) => {
  const { productsCart, totalPrice, clear, getPrice } = useContext(CartContext);

  useEffect(() => {
    getPrice();
  }, [getPrice]);

  //post data hook
  const { data, postData, error, isPending } = useFetch(
    "https://ait-tesapi.herokuapp.com/sales/",
    "POST"
  );

  const confirmOrder = () => {
    const newOrder = {
      total: totalPrice?.toFixed(2),
      buyer,
      paymentMethod,
      products: productsCart,
    };

    postData(newOrder);
    clear(); //cart back to 0
  };

  return (
    <>
      {error && <ResultMessage setSteps={setSteps} result={false} />}
      {data && <ResultMessage result={true} />}
      {isPending && <ResultMessage result={null} />}

      
      {!error && !data && (
        <>
          <Typography variant="h6" gutterBottom>
            Order summary
          </Typography>
          <List disablePadding >
            {productsCart.map((prod) => (
              <ListItem key={prod._id} sx={{ py: 1, px: 0 }}>
                <ListItemText primary={prod.name} />

                <Typography variant="body2">
                  ${prod.price.slice(1) * Number(prod.quantity)}
                </Typography>
              </ListItem>
            ))}

            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="Total" />
              <Typography variant="subtitle1" style={{ fontWeight: "800" }}>
                ${totalPrice?.toFixed(2)}
              </Typography>
            </ListItem>
          </List>
          <Divider />
          <Grid container spacing={2} style={{ marginTop: "5px" }}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Shipping
              </Typography>
              <Typography
                gutterBottom
              >{`${buyer?.name} ${buyer?.lastname}`}</Typography>
              <Typography>{buyer?.phone}</Typography>
              <Typography gutterBottom>{buyer?.adress}</Typography>
              <Typography
                gutterBottom
              >{`${buyer?.city},  ${buyer?.state}`}</Typography>
            </Grid>
            <Grid item container direction="column" xs={12} sm={6}>
              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Payment details
              </Typography>
              <Grid container>
                <Grid item xs={12}>
                  <Typography gutterBottom>
                    {paymentMethod
                      ? "Online payment with credit card."
                      : "Pay in cash."}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  variant="outlined"
                  onClick={() => setSteps(1)} //back to AdressForm
                  sx={{ mt: 3, ml: 1 }}
                >
                  GO BACK
                </Button>

                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => confirmOrder()}
                >
                  DONE
                </Button>
              </Box>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default Review;
