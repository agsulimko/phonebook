import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepPurple, purple } from "@mui/material/colors";
import { Link } from "react-router-dom";
import css from "./FormRegister.module.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
const theme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: purple,
  },
});
// import { signUp } from "api/user";
const FormRegister = ({ register }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, password } = event.target.elements;
    // console.log("name, email, password", {
    //   name: name.value,
    //   email: email.value,
    //   password: password.value,
    // });
    register({
      name: name.value,
      email: email.value,
      password: password.value,
    });
  };
  return (
    <div>
      <main className={css.registrMain}>
        <h1>SignUp</h1>
        <Link to="/" className={css.linkNav}>
          Back to home
        </Link>
        <form onSubmit={handleSubmit}>
          <div>
            {/* <label htmlFor="exampleInputName">Name</label> */}
            <TextField
              type="text"
              name="name"
              id="exampleInputName"
              label="Name"
              variant="outlined"
              // helperText="Some important text"
              autoComplete="name"
              sx={{ m: 1, width: "350px" }}
            />
          </div>

          <div>
            {/* <label htmlFor="exampleInputEmail">Email address</label> */}
            <TextField
              type="email"
              name="email"
              id="exampleInputEmail"
              label="Email"
              variant="outlined"
              // helperText="Some important text"
              autoComplete="username"
              sx={{ m: 1, width: "350px" }}
            />
          </div>

          <div>
            {/* <label htmlFor="exampleInputPassword">Password</label> */}
            <TextField
              type="password"
              name="password"
              id="exampleInputPassword"
              label="Password"
              variant="outlined"
              // helperText="Some important text"
              autoComplete="current-password"
              sx={{
                m: 1,
                width: "350px",
              }}
            />
          </div>
          <div>
            <FormControlLabel
              control={<Checkbox />}
              label=" I want to receive inspiration, marketing promotions and updates
              via email."
            />
            <label></label>
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
              Registration
            </Button>
          </ThemeProvider>
        </form>
        <Link to="/login" className={css.linkNav}>
          Already have an account? Sign in
        </Link>
      </main>
    </div>
  );
};
export default FormRegister;
