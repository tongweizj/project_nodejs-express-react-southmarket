import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "/src/context/AuthContext";
import { signin } from "/src/services/api-auth";
import { resetPassword } from "/src/services/api-user";
import { isValidEmail } from "/src/utils/validators";

export function useSignin() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [values, setValues] = useState({ email: "", password: "" });
  const [snackbar, setSnackbar] = useState({ open: false, type: "", text: "" });

  const handleChange = (name) => (e) =>
    setValues({ ...values, [name]: e.target.value });

  const showSnackbar = (type, text) =>
    setSnackbar({ open: true, type, text });

  const closeSnackbar = () =>
    setSnackbar((prev) => ({ ...prev, open: false }));

  const submitSignin = async () => {

    console.log("values:", values)
    if (!isValidEmail(values.email)) {
      showSnackbar("error", "Please enter a valid email.");
      return;
    }

    const data = await signin(values);
    if (data.error) {
      showSnackbar("error", data.error);
    } else {
      login(data, () => {
        navigate("/");
        setTimeout(() => window.location.reload(), 500);
      });
    }
  };

  const submitResetPassword = async () => {
    if (!isValidEmail(values.email)) {
      showSnackbar("error", "Please enter a valid email.");
      return;
    }

    const data = await resetPassword(values.email);
    if (data?.error) {
      showSnackbar("error", data.error);
    } else {
      showSnackbar("success", "Password reset to 123456789.");
    }
  };

  return {
    values,
    snackbar,
    handleChange,
    submitSignin,
    submitResetPassword,
    closeSnackbar,
  };
}