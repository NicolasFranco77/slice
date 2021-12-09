import { useState, useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContex";

//mui components
import { Button, Typography, IconButton, Badge } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

//styles
import useStyles from "./styles";

function ItemCount({ product, addButtonOnly }) {
  const [count, setCount] = useState(0);
  const { addItem, isInCart, getProduct } = useContext(CartContext);

  //styles
  const classes = useStyles();

  //get item Quantity
  useEffect(() => {
    if (isInCart(product._id)) {
      const oldQuantity = getProduct(product._id)?.quantity;
      setCount(oldQuantity);
    }
    return () => {
      setCount(0);
    }
  }, [product, getProduct, isInCart]);

  //count +1
  const add = () => {
    if (count < product.stock) {
      setCount(count + 1);
      addItem(product, count + 1);
    }
  };

  //count -1
  const subtract = () => {
    if (count > 0) {
      setCount(count - 1);
      addItem(product, count - 1);
    }
  };

  //return the add button only
  if (addButtonOnly) {
    return (
      <div className={classes.buttons} onClick={add}>
        <IconButton>
          <Badge badgeContent={count}>
            <AddShoppingCart />
          </Badge>
        </IconButton>
      </div>
    );
  }

  //return all buttons and count
  return (
    <div className={classes.buttons}>
      <Button type="button" size="large" onClick={subtract}>
        -
      </Button>

      <Typography>{count}</Typography>

      <Button type="button" size="large" onClick={add}>
        +
      </Button>
    </div>
  );
}

export default ItemCount;
