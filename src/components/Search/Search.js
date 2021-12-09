import { useNavigate } from "react-router-dom";

//styles
import useStyles from "./styles";

function Search({ setSearch, search }) {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Search"
        type="text"
        className={classes.input}
        value={search}
        required
      />
    </form>
  );
}

export default Search;
