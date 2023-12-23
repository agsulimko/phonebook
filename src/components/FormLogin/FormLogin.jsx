import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepPurple, purple } from "@mui/material/colors";
import css from "./FormLogin.module.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch } from "react-redux";

const theme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: purple,
  },
});
const FormLogin = ({ login }) => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    dispatch(
      login({
        email: email.value,
        password: password.value,
      })
    );
  };
  return (
    <div>
      <main className={css.loginMain}>
        <h1>SignIn</h1>
        <Link to="/" className={css.linkNav}>
          Back to home
        </Link>

        <form onSubmit={handleSubmit}>
          <div>
            {/* <label>Email address</label> */}
            <TextField
              type="email"
              name="email"
              id="outlined-basic-email"
              label="Email"
              variant="outlined"
              // helperText="Some important text"
              autoComplete="username"
              sx={{ m: 1, width: "350px" }}
            />
          </div>

          <div>
            {/* <label>Password</label> */}
            <TextField
              type="password"
              name="password"
              id="outlined-basic-password"
              label="Password"
              variant="outlined"
              // helperText="Some important text"
              autoComplete="current-password"
              sx={{ m: 1, width: "350px" }}
            />
          </div>

          <div>
            <FormControlLabel control={<Checkbox />} label="Remember me" />
            {/* <label>Remember me</label> */}
          </div>

          <ThemeProvider theme={theme}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                m: 1,
                width: "350px",
                backgroundColor: "rgb(103, 103, 238)",
              }}
            >
              LOGIN
            </Button>
          </ThemeProvider>
        </form>
        <Link to="/register" className={css.linkNav}>
          Forgot password? Don't have an account? Sign Up
        </Link>
      </main>
    </div>
  );
};

export default FormLogin;
