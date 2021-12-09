import { useContext } from "react";
import { CartContext } from "../../../context/CartContex";
import { Link } from "react-router-dom";

//mui components
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
} from "@material-ui/core";
import { HighlightOff } from "@material-ui/icons";

//components
import ItemCount from "../../ItemCount/ItemCount";
//styles
import useStyles from "./styles.js";

function CartItem({ item }) {
  //styles
  const classes = useStyles();

  const { removeItem } = useContext(CartContext);

  //remove button
  const handleOnClick = () => {
    removeItem(item._id);
  };

  const itemTotalPrice = Number(item.price?.slice(1)) * Number(item.quantity)


  return (
    <Card className={classes.root}>
      <Link
        style={{ textDecoration: "none", color: "inherit" }}
        to={`/${item._id}`}
      >
        <CardMedia
          className={classes.media}
          image={item.image}
          title={item.name}
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="h5">{item.name}</Typography>

          <Typography variant="h5" className={classes.price}>
            ${itemTotalPrice.toFixed(2)}
          </Typography>
        </CardContent>
      </Link>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <ItemCount product={item} />
        </div>

        <IconButton color="secondary" onClick={handleOnClick}>
          <HighlightOff />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default CartItem;
