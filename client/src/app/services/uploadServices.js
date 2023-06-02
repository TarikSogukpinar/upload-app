import axios from "axios";

export const uploadFile = async (formData) => {
  return await axios.post(
    `${process.env.SERVER_HOST}/api/upload/uploadFile`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      credentials: "include",
      withCredentials: true,
    }
  );
};
