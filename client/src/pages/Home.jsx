import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Link to="/signup" className="nav">
        <Button variant="contained" size="large">
          Sign Up
        </Button>
      </Link>
      <Link to="/login" className="nav">
        <Button variant="contained" size="large" >
          Login
        </Button>
      </Link>
    </div>
  );
};

export default Home;
