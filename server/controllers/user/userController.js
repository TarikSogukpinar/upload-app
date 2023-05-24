import User from "../../models/User.js";
import jwt from "jsonwebtoken";

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


export default { getUser };
