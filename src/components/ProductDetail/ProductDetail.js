import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

//components
import ItemCount from "../ItemCount/ItemCount";

//mui components
import {
  Card,
  Grid,
  CardContent,
  CardActions,
  Typography,
  CardMedia,
  CircularProgress,
  Button,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { KeyboardBackspace } from "@material-ui/icons";

//styles
import useStyles from "./styles";

const ProductDetail = () => {
  const { id } = useParams();
  const classes = useStyles();

  //get data from api
  const { data, isPending, error } = useFetch(
    "https://ait-tesapi.herokuapp.com/products"
  );

  const filteredProduct = data?.products?.filter((prod) => prod._id === id);

  return (
    <div className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={3}>
        {error && <Typography>{error}</Typography>}
        {isPending && <CircularProgress color="secondary" />}

        {/* if the user type a wrong url */}
        {filteredProduct?.length === 0 && (
          <div className={classes.noProducts}>
            <Typography align="center" variant="h4" gutterBottom>
              This product doesn't exists.
            </Typography>
            <div>
              <Button
                align="center"
                variant="outlined"
                color="primary"
                component={Link}
                to="/"
              >
                Go back
              </Button>
            </div>
          </div>
        )}

        {filteredProduct &&
          filteredProduct.map((prod) => (
            <Grid item key={prod._id} xs={12} sm={6} md={4} lg={4}>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                <KeyboardBackspace />
              </Link>

              <Card>
                <CardMedia
                  className={classes.media}
                  image={prod.image}
                  title={prod.name}
                />

                <CardContent>
                  <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                      {prod.name}
                    </Typography>
                    <Typography variant="h5">{prod.price}</Typography>
                  </div>
                  <Typography variant="body2" color="textSecondary">
                    {prod.description}
                  </Typography>
                </CardContent>

                <CardActions disableSpacing className={classes.cardActions}>
                  {!prod.stock ? (
                    <Alert variant="outlined" severity="error">
                      Out of stock
                    </Alert>
                  ) : (
                    <ItemCount product={prod} />
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default ProductDetail;
