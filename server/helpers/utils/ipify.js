import geoip from 'geoip-lite'
import StatusCode from 'http-status-codes'

export const getLocationInformation = async (ip, res) => {
  try {
    const getLocationInformation = await geoip.lookup(ip)

    return getLocationInformation
  } catch (error) {
    console.log(error)
    res
      .status(StatusCode.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message })
  }
}
