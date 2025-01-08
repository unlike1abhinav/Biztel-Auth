import { Typography, Grid2, TextField, Button} from "@mui/material";
import { login } from "../services/api";
import { useState } from "react";

const Login = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState({ type: "", text: "" });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      setMessage({ type: "", text: "" });
      const response = await login(formData);
      setMessage({ type: "success", text: `Welcome, ${response.username}!` });
    } catch (error) {
      setMessage({ type: "error", text: error.errorMessage || "Invalid login credentials." });
    }
  };

  return (
    <div className="formDiv">
      <Typography variant="h3" component='h2' gutterBottom>
        Login
      </Typography>
      <form onSubmit={submitHandler}>
        <Grid2 container direction='column' spacing={{ xs: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }} size="auto">
          <Grid2 item xs={12}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={changeHandler}
              required
            />
          </Grid2>
          <Grid2 item xs={12} >
            <TextField
              fullWidth
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={changeHandler}
              required
            />
          </Grid2>
          <Grid2 item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </Grid2>
        </Grid2>
      </form>
      {message.text && (
        <Typography
          mt={2}
          color={message.type === "error" ? "error" : "primary"}
        >
          {message.text}
        </Typography>
      )}
    </div>
  );
};

export default Login;
