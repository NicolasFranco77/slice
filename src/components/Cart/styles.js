import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    margin: "40px 0 9px 0"
  },
  emptyCart: {
   margin: "30px 0"
  },
  pay: {
    minWidth: "150px",
    marginBottom: "10px",
  },
  
  cardDetails: {
    display: "flex",
    justifyContent: "center",
  },

  content: {
    height: "100vh",
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  price: {
    paddingLeft: "6px",
  },
}));