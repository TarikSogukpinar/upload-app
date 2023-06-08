import ipify from "ipify";

export const getIpInformation = async (req, res) => {
  try {
    const getIpInformation = await ipify({ useIPv6: false });

    if (getIpInformation === undefined || getIpInformation === null) {
      return res
        .status(400)
        .json({ error: true, message: "Ip address is not found" });
    }

    return getIpInformation;
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: error.message });
  }
};
