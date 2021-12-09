import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: {
    height: "120px",
  },
  content: {
    height: "100vh",
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },

  noProducts: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));
