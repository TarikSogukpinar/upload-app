import User from '../../models/User.js'
import { getIpInformation } from '../../helpers/utils/locations.js'
import { getLocationInformation } from '../../helpers/utils/ipify.js'
import os from 'os'
import { StatusCodes } from 'http-status-codes'

const getUser = async (req, res) => {
  const user = await User.find(req.user.id)

  if (user === null || user === undefined) {
    return res.status(StatusCodes.NOT_FOUND).json({ error: true, message: 'User not found' })
  }

  res.send(user)
}

const getUserById = async (req, res) => {
  const { id } = req.params

  const user = await User.findById(id)
  return res.json(user)
}

const userAccountDeleted = async (req, res) => {
  const { id } = req.params
  const user = await User.findByIdAndDelete(id)

  if (!user) {
    return res.status(StatusCodes.NOT_FOUND).json({ error: true, message: 'User not found' })
  }

  return res.status(StatusCodes.OK).json({ error: false, message: 'User deleted' })
}

const getUserLocationInformation = async (req, res) => {
  const getIp = await getIpInformation()
  const getLocation = await getLocationInformation(getIp)

  return res.status(StatusCodes.OK).json({ error: false, getLocation, getIp })
}

const getUserOperatingSystemType = async (req, res) => {
  let getUserOperatingSystemType = await os.type()

  if (
    getUserOperatingSystemType == null ||
    getUserOperatingSystemType == undefined
  ) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ error: true, message: 'User operating system type not found' })
  }

  if (getUserOperatingSystemType === 'Darwin') {
    // eslint-disable-next-line no-import-assign
    getLocationInformation = 'MacOS'
  }

  if (getUserOperatingSystemType === 'Windows_NT') {
    getUserOperatingSystemType = 'Windows'
  }

  if (getUserOperatingSystemType === 'Linux') {
    getUserOperatingSystemType = 'Linux'
  }

  return res
    .status(StatusCodes.OK)
    .json({ error: false, getUserOperatingSystemType })
}

export default {
  getUser,
  getUserLocationInformation,
  getUserOperatingSystemType,
  userAccountDeleted,
  getUserById,
}
