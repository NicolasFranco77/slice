import { useFetch } from "../../hooks/useFetch";

//components
import Product from "./Product/Product";

//mui components
import {
  Grid,
  Typography,
  Container,
  CircularProgress,
  Button,
  
  
} from "@material-ui/core";

//styles
import useStyles from "./styles";

function Products({ search, setSearch }) {
  //styles
  const classes = useStyles();

  //get data from api
  const { data, isPending, error } = useFetch(
    "https://ait-tesapi.herokuapp.com/products"
  );

  //filter products according to search
  const filteredData = data?.products?.filter((prod) =>
    prod.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={classes.content}>
      <Container>
        <div className={classes.toolbar} />

        {/*if there are no products available*/}
        {filteredData?.length === 0 && (
          <div className={classes.noProducts}>
            <Typography
              align="center"
              variant="h4"
              gutterBottom
            >{`"${search}" is not available.`}</Typography>
            <div>
              <Button
                align="center"
                variant="outlined"
                color="primary"
                onClick={() => setSearch("")}
              >
                Go back
              </Button>
            </div>
          </div>
        )}

        <Grid container justifyContent="center"  spacing={3}>
          {error && <Typography>{error}</Typography>}
          {isPending && <CircularProgress color="secondary" />}
          {data &&
            filteredData.map((prod) => (
              <Grid item xs={12} sm={5} md={4} lg={3} key={prod._id}>
                <Product product={prod} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Products;
