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

export const userAccountDeleted = async (id) => {
  return await axios.delete(
    `${process.env.SERVER_HOST}/api/user/userAccountDeleted/${id}`,
    {
      credentials: "include",
      withCredentials: true,
    }
  );
};

export const getUserById = async (id) => {
  return await axios.get(
    `${process.env.SERVER_HOST}/api/user/getUserById/${id}`,
    {
      credentials: "include",
      withCredentials: true,
    }
  );
};
