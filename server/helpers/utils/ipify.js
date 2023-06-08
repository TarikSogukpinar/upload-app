import geoip from 'geoip-lite'

export const getLocationInformation = async (ip, res) => {
  try {
    const getLocationInformation = await geoip.lookup(ip)

    return getLocationInformation
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: true, message: error.message })
  }
}
