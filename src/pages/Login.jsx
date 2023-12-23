import { useDispatch } from "react-redux";

import { loginThunk } from "redux/auth/auchOperations";

import FormLogin from "../components/FormLogin/FormLogin";
import toast from "react-hot-toast";
const Login = () => {
  const dispatch = useDispatch();
  const login = async (body) => {
    try {
      await dispatch(loginThunk(body)).unwrap();
      toast.success("Welcome", { duration: 3000, position: "top-right" });
    } catch (error) {
      toast.error(" Incorrect password", {
        duration: 3000,
        position: "top-right",
      });
    }
  };

  return <FormLogin login={login} />;
};
export default Login;
