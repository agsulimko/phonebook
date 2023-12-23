import css from "./Layout.module.css";
import styled from "styled-components";
// import React, { useEffect } from "react";
import { Suspense, useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { selectAuth, selectUser } from "../../redux/auth/auchSelectors";
import { useDispatch, useSelector } from "react-redux";
import { deleteToken } from "api/auth";

import { logoutThunk, refreshThunk } from "redux/auth/auchOperations";
// import { loginOut } from "redux/auth/auchSlice";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors";
import "@fontsource/roboto/500.css";
import Loader from "components/Loader/Loader";
const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: rgb(103, 103, 238);
  }
`;

const theme = createTheme({
  palette: {
    primary: deepPurple,
  },
});
const Layout = () => {
  const navigate = useNavigate();
  const isAuth = useSelector(selectAuth);
  console.log(isAuth);
  const user = useSelector(selectUser);
  console.log(user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  const handleClick = () => {
    if (isAuth) {
      dispatch(logoutThunk());

      deleteToken();
    } else navigate("/login");
  };

  return (
    <>
      <header>
        {/* <h1 className={css.h1}>Phonebook</h1> */}
        <ul className={css.listLayout}>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>{isAuth && <StyledLink to="/contacts">Contacts</StyledLink>}</li>

          <li className={css.itemRegister}>
            {/* <StyledLink to="/register">Registration</StyledLink> */}
            {!isAuth && <StyledLink to="/register">Registration</StyledLink>}
          </li>

          <li className={css.itemWelKome}>
            {isAuth && user && (
              <b className={css.spanWelcome}>Welcome - {user.name}!</b>
            )}
            {isAuth && user && <p className={css.textLayout}> {user.email}</p>}
          </li>

          <li>
            <div className={css.divLogout}>
              {isAuth && <div className={css.circle}> </div>}

              {!isAuth ? (
                <StyledLink
                  to="/login"
                  onClick={handleClick}
                  className={css.logout}
                >
                  {isAuth ? "Login Out" : "Login"}
                </StyledLink>
              ) : (
                <ThemeProvider theme={theme}>
                  <Button
                    to="/login"
                    onClick={handleClick}
                    className={css.logoutButton}
                    variant="contained"
                    sx={{
                      m: 1,
                      width: "120px",
                      backgroundColor: "rgb(211, 223, 226)",
                      color: "black",
                    }}
                  >
                    {isAuth ? "Login Out" : "Login"}
                  </Button>
                </ThemeProvider>
              )}
            </div>
          </li>
        </ul>
      </header>

      <main>
        <Suspense fallback={<div>{Loader()}</div>}>
          {/* <Suspense fallback={<div>Laoding...</div>}> */}
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default Layout;

// <StyledLink
//                   to="/login"
//                   onClick={handleClick}
//                   className={css.logout}
//                 >
//                   {isAuth ? "Login Out" : "Login"}
//                 </StyledLink>
