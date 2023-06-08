import User from "../../models/User.js";
import { getIpInformation } from "../../helpers/utils/locations.js";
import { getLocationInformation } from "../../helpers/utils/ipify.js";
import os from "os";

const getUser = async (req, res) => {
  try {
    const user = await User.find(req.user.id);

    if (user === null || user === undefined) {
      return res.status(404).json({ error: true, message: "User not found" });
    }

    res.send(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: true, message: error.message });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: true, message: error.message });
  }
};

const userAccountDeleted = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ error: true, message: "User not found" });
    }

    res.status(200).json({ error: false, message: "User deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: true, message: error.message });
  }
};

const getUserLocationInformation = async (req, res) => {
  try {
    const getIp = await getIpInformation();
    const getLocation = await getLocationInformation(getIp);

    res.status(200).json({ error: false, getLocation, getIp });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: true, message: error.message });
  }
};

const getUserOperatingSystemType = async (req, res) => {
  try {
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
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: true, message: error.message });
  }
};

export default {
  getUser,
  getUserLocationInformation,
  getUserOperatingSystemType,
  userAccountDeleted,
  getUserById,
};
