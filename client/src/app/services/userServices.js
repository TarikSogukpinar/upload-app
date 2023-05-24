import axios from "axios";

export const getUser = async () => {
  return await axios.get(`${process.env.SERVER_HOST}/api/user/getUser`, {
    credentials: "include",
    withCredentials: true,
  });
};

export const getUserLocationInformation = async () => {
  return await axios.get(
    `${process.env.SERVER_HOST}/api/user/getUserLocationInformation`,
    {
      credentials: "include",
      withCredentials: true,
    }
  );
};

export const getUserOperatingSystemType = async () => {
  return await axios.get(
    `${process.env.SERVER_HOST}/api/user/getUserOperatingSystemType`,
    {
      credentials: "include",
      withCredentials: true,
    }
  );
};
