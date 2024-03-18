export const registerValidation = (values) => {
  let error = {};
  // const name = /^[a-zA-Z]{3,15}/;
  const email = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

  const password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9].{6,12}$/;

  // validate name
  if (values.name === "") {
    error.name = "Name should not be empty";
  } else {
    error.name = "";
  }
  // validate email
  if (values.email === "") {
    error.email = "Email should not be empty";
  } else if (!email.test(values.email)) {
    error.email = "Email didn't match";
  } else {
    error.email = "";
  }
  //   validate password
  if (values.password === "") {
    error.password = "Password should not be empty";
  } else if (!password.test(values.password)) {
    error.password = "Password should be atlease 6 characters";
  } else {
    error.password = "";
  }
  return error;
};
