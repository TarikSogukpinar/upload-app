import User from "../../models/User.js";
import { getIpInformation } from "../../helpers/utils/locations.js";
import { getLocationInformation } from "../../helpers/utils/ipify.js";
import os from "os";

const getUser = async (req, res) => {
  const user = await User.find(req.user.id);

  if (user === null || user === undefined) {
    return res.status(404).json({ error: true, message: "User not found" });
  }

  res.send(user);
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id);
  return res.json(user);
};

const userAccountDeleted = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);

  if (!user) {
    return res.status(404).json({ error: true, message: "User not found" });
  }

  return res.status(200).json({ error: false, message: "User deleted" });
};

const getUserLocationInformation = async (req, res) => {
  const getIp = await getIpInformation();
  const getLocation = await getLocationInformation(getIp);

  return res.status(200).json({ error: false, getLocation, getIp });
};

const getUserOperatingSystemType = async (req, res) => {
  let getUserOperatingSystemType = await os.type();

  if (
    getUserOperatingSystemType == null ||
    getUserOperatingSystemType == undefined
  ) {
    return res
      .status(404)
      .json({ error: true, message: "User operating system type not found" });
  }

  if (getUserOperatingSystemType === "Darwin") {
    getLocationInformation = "MacOS";
  }

  if (getUserOperatingSystemType === "Windows_NT") {
    getUserOperatingSystemType = "Windows";
  }

  if (getUserOperatingSystemType === "Linux") {
    getUserOperatingSystemType = "Linux";
  }

  return res.status(200).json({ error: false, getUserOperatingSystemType });
};

export default {
  getUser,
  getUserLocationInformation,
  getUserOperatingSystemType,
  userAccountDeleted,
  getUserById,
};
