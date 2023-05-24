import axios from "axios";

export const getUser = async () => {
  return await axios.get(`${process.env.SERVER_HOST}/api/user/getUser`, {
    credentials: "include",
    withCredentials: true,
  });
};
