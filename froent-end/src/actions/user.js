import * as api from "../api/auth";

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData, navigate);
    dispatch({ type: "AUTH", data });
    navigate("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData, navigate);
    dispatch({ type: "AUTH", data });
    navigate("/dashboard");
  } catch (error) {
    console.log(error);
  }
};
