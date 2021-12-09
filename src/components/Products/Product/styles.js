import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "345px",
    borderRadius: "20px",
    height: "100%",
      display: "flex",
      flexDirection:"column",
      justifyContent: "space-between"
  
  
  },
  media: {
   paddingTop: "56.25%", // 16:9
    justifySelf: "start",
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-around",
  
  },

  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    
  },
  price: {
    paddingLeft: "6px",
  },
}));
