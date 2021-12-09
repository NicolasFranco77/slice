import { Link } from "react-router-dom";

//components
import ItemCount from "../../ItemCount/ItemCount";

//mui components
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

//styles
import useStyles from "./styles";

function Product({ product }) {
  //styles
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link
        to={`/${product._id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <CardMedia
          className={classes.media}
          image={product.image}
          title={product.name}
        />

        <CardContent>
          <div className={classes.cardContent}>
            <Typography className={classes.title} variant="h5" gutterBottom>
              {product.name}
            </Typography>
            
            <Typography className={classes.price} variant="h5">
              {product.price}
            </Typography>
          </div>
         
          <Typography variant="body2" color="textSecondary">
            {product.description.substring(0, 35)}...
          </Typography>
        </CardContent>
      </Link>
    
      <CardActions disableSpacing  className={classes.cardActions}>
        {product.stock ? (
          <ItemCount addButtonOnly={true} product={product} />
        ) : (
          <Alert variant="outlined" severity="error">
            Out of stock
          </Alert>
        )}
      </CardActions>
    
    </Card>
  );
}

export default Product;
