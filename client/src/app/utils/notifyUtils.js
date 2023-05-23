import toast from "react-hot-toast";

export const notifySuccess = (message) =>
  toast.success(message, {
    position: "bottom-center",
    icon: "👏",
    duration: 3000,
  });

export const notifyError = (message) =>
  toast.error(message, {
    position: "bottom-center",
    duration: 3000,
    icon: "👎",
  });
