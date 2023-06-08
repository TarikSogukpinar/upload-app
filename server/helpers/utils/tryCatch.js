export const tryCatch = (controller) => async (req, res) => {
  try {
    return await controller(req, res);
  } catch (error) {
    return next(error);
  }
};
