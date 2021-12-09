import {
  Typography,
  IconButton,
  LinearProgress,
  
} from "@material-ui/core";
import { ErrorOutline, CheckCircle } from "@material-ui/icons";

const ResultMessage = ({ result }) => {
  if (result === null) {
    return <LinearProgress color="secondary" />;
  }

  const Error = () => {
    return (
      <>
        <Typography align="center" variant="h6" color="initial">
          <IconButton>
            <ErrorOutline
              fontSize="large"
              style={{ color: "#f44336" }}
              size="large"
            />
          </IconButton>
          Sorry, an error has occurred.
        </Typography>
      </>
    );
  };

  const Success = () => {
    return (
      <>
        <Typography align="center" variant="h6" color="initial">
          <IconButton>
            <CheckCircle
              fontSize="large"
              style={{ color: "#4a934a" }}
              size="large"
            />
          </IconButton>
          Your purchase was successful.
        </Typography>
      </>
    );
  };

  return <>{result ? <Success /> : <Error />}</>;
};

export default ResultMessage;
