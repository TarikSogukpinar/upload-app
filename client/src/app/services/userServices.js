import axios from "axios";

export const getUser = async () => {
  return await axios.get(`http://localhost:5000/api/user/getUser`, {
    credentials: "include",
    withCredentials: true,
  });
};

