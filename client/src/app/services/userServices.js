import axios from "axios";

export const getUser = async () => {
  return await axios.get(`http://localhost:5000/api/user/getUser`, {
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
