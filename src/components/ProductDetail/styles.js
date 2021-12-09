import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },

  content: {
    height: "100vh",
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  toolbar: {
    height: "120px",
  },
  cardActions: {
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },

  noProducts: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));
