import { makeStyles } from "@material-ui/core/styles";

// const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: "none",
    background: "linear-gradient(to right, #ed213a, #93291e)",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    height: "80px",
  },
}));
