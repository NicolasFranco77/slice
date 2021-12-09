import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "300px",
    borderRadius: "20px",
    marginTop: "10px",
    height: "100%",
    display: "flex",
    flexDirection:"column",
    justifyContent: "space-between"
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cartActions: {
    justifyContent: "space-between",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
  },
  price: {
    paddingLeft: "6px",
  },
}));
