import { useContext } from "react";
import { CartContext } from "../../context/CartContex";
import { Link } from "react-router-dom";

//mui components
import {
  Toolbar,
  IconButton,
  Badge,
  AppBar,
  Container,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

//components
import Search from "../Search/Search";

//styles
import useStyles from "./styles";

import logo from "../../assets/logo.png";

function Navbar({ setSearch, search }) {
  const { getQuantity } = useContext(CartContext);

  //styles
  const classes = useStyles();

  return (
    <>
      <AppBar color="inherit" className={classes.appBar}>
        <Container>
          <Toolbar disableGutters className={classes.toolbar}>
            
            <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
              <img
                src={logo}
                alt="slice"
                width="50px"
                style={{ marginLeft: "-9px" }}
              />
            </Link>

            <Search search={search} setSearch={setSearch} />

            <IconButton color="inherit" component={Link} to="/cart">
              <Badge badgeContent={getQuantity()} color="secondary">
                <ShoppingCart style={{ color: "#fff" }} />
              </Badge>
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Navbar;
