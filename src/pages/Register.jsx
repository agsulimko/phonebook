import FormRegister from "components/FormRegister/FormRegister";
// import { useEffect } from "react";
import toast from "react-hot-toast";

import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { selectUsers } from "redux/selectors";
import { registrationThunk } from "redux/auth/auchOperations";

// import css from "./Register.module.css";
const Register = () => {
  const dispatch = useDispatch();
  const register = async (body) => {
    try {
      await dispatch(registrationThunk(body)).unwrap();
      toast.success("Welcome", { duration: 3000, position: "top-right" });
    } catch (error) {
      toast.error(" Incorrect password", {
        duration: 3000,
        position: "top-right",
      });
    }
  };

  return <FormRegister register={register} />;
};

export default Register;
