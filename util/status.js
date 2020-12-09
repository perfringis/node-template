const SUCCESS_CODE = 200;
const ERROR_CODE = 406;
const NOT_AUTH_CODE = 401;

export const returnSuccess = (res, data) =>
  res.status(SUCCESS_CODE).json(data);
export const returnError = (res, error = null) =>
  res.status(ERROR_CODE).json({ error });
export const returnAuthError = (res, data) =>
  res.status(NOT_AUTH_CODE).json(data);
