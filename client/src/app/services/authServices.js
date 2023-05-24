import axios from "axios";

export const registerUser = async (
  userName,
  email,
  password,
  confirmPassword
) => {
  return await axios.post(
    `http://localhost:5000/api/auth/register`,
    {
      userName,
      email,
      password,
      confirmPassword,
    },
    { withCredentials: true }
  );
};

export const loginUser = async (email, password) => {
  return await axios.post(
    `${process.env.SERVER_HOST}/api/auth/login`,
    {
      email,
      password,
    },
    {
      credentials: "include",
      withCredentials: true,
    }
  );
};

export const logoutUser = async () => {
  return await axios.get(`${process.env.SERVER_HOST}/api/auth/logout`, {
    credentials: "include",
    withCredentials: true,
  });
};


export const updatePassword = async (_id, password, confirmPassword) => {
  return await axios.put(
    `http://localhost:5000/api/auth/updatePassword/${_id}`,
    {
      password,
      confirmPassword,
    },
    { withCredentials: true, credentials: "include" }
  );
};
