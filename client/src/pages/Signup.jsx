import { Grid2, Typography, Button, TextField } from "@mui/material";
import { signup } from "../services/api";
import { useState } from "react";
import Error from "../components/Error";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    inviteCode: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords does not match");
      return;
    }

    try {
      setError("");
      await signup(formData);
      setSuccess("Signup successful! You can now log in.");
    } catch (err) {
      setError(err.errorMessage || "An error occurred during signup.");
    }
  };

  return (
    <div className="formDiv">
      <Typography variant="h3" component="h2" gutterBottom>
        Sign Up
      </Typography>
      <form onSubmit={submitHandler}>
        <Grid2 container direction='column' spacing={{ xs: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }} size="auto">
          {[
            "username",
            "email",
            "password",
            "confirmPassword",
            "inviteCode",
          ].map((field, idx) => (
            <Grid2 item xs={12} key={idx}>
              <TextField
                fullWidth
                label={field}
                type={field.includes("password") ? "password" : "text"}
                name={field}
                value={formData[field]}
                onChange={changeHandler}
                required
              />
            </Grid2>
          ))}
          <Grid2 item xs={12}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Sign Up
            </Button>
          </Grid2>
        </Grid2>
        {error && <Error message={error} />}
        {success && <Typography color="green">{success}</Typography>}
      </form>
    </div>
  );
};

export default Signup;
