import toast from "react-hot-toast";

export const notifySuccess = (message) =>
  toast.success(message, {
    position: "bottom-center",
    icon: "👏",
    duration: 3000,
    style: { borderRadius: "5px", background: "#333", color: "#fff" },
  });

export const notifyError = (message) =>
  toast.error(message, {
    position: "bottom-center",
    duration: 3000,
    icon: "👎",
    style: { borderRadius: "5px", background: "#333", color: "#fff" },
  });
