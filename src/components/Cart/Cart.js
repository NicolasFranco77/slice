import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContex";
import { Link } from "react-router-dom";

//components
import CartItem from "./CartItem/CartItem";

//mui components
import { Typography, Grid, Container, Button } from "@material-ui/core";

//styles
import useStyles from "./styles";

function Cart() {
  //styles
  const classes = useStyles();

  const { productsCart, totalPrice, getPrice } = useContext(CartContext);

  const filteredCartProducts = productsCart?.filter(
    (prod) => prod.quantity !== 0
  );

  useEffect(() => {
    getPrice();
  }, [getPrice]);

  return (
    <div className={classes.content}>
      <Container>
        <div className={classes.toolbar} />
        <Typography
          gutterBottom
          className={classes.title}
          variant="h4"
          align="center"
        >
          Shopping Cart
        </Typography>

        {/* if there is no products*/}
        {!filteredCartProducts.length && (
          <Typography align="center" className={classes.emptyCart}>
            You have no items in your shopping cart,{" "}
            <Link style={{ textDecoration: "none" }} to="/">
              {" "}
              start adding some!
            </Link>
          </Typography>
        )}

        <Grid container justifyContent="center" spacing={3}>
          {filteredCartProducts?.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item._id}>
              <CartItem item={item} />
            </Grid>
          ))}
        </Grid>

        <div className={classes.cardDetails}>
          <div>
            <Typography align="center" className={classes.title} variant="h6">
              Total: ${totalPrice.toFixed(2)}
            </Typography>

            {filteredCartProducts.length ? (
              <Button
                component={Link}
                to="/checkout"
                className={classes.pay}
                size="large"
                type="button"
                color="primary"
                variant="outlined"
              >
                PAY
              </Button>
            ) : (
              <Button
                to="/checkout"
                className={classes.pay}
                size="large"
                type="button"
                color="primary"
                variant="outlined"
                disabled
              >
                PAY
              </Button>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Cart;
