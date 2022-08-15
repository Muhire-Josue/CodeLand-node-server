import axios from 'axios';
import responseHandler from '../constants/responseHandler.util';
import customMessage from '../constants/customMessage';
import statusCode from '../constants/statusCodes';

const { errorResponse, successResponse } = responseHandler;
const {
  ok, conflict, badRequest, notFound
} = statusCode;
const {
  userAlreadyExist,
  userFound,
  userNotFound,
  userRegistered,
  authNotFound,
  invalidPassword,
  invalidGender,
} = customMessage;

const validateUser = (user) => {
  if (
    (
      user.firstName === undefined
      || user.lastName === undefined
      || user.email === undefined
      || user.password === undefined
      || user.role === undefined
      || user.gender === undefined
      || user.country === undefined
    )
  ) {
    return false;
  }
  if (!['admin', 'patient', 'physician', 'pharmacist'].includes(user.role)) {
    return false;
  }
  return true;
};
/**
 * @description this is a welcome endpoint
 * @param {request} req
 * @param {response} res
 * @returns {object} success response message
 */
export const signup = async (req, res) => {
  try {
    const formData = req.body;
    formData.requestType = 'signup';
    if (validateUser(formData) === false) {
      return errorResponse(res, badRequest, 'Invalid data');
    }

    const rs = await axios.post(
      'http://localhost:8080/api/webapi/users/auth',
      formData
    );
    if (rs.data.responseMsg && rs.data.responseMsg === invalidPassword) {
      return errorResponse(res, badRequest, invalidPassword);
    }
    if (rs.data.responseMsg && rs.data.responseMsg === userAlreadyExist) {
      return errorResponse(res, conflict, userAlreadyExist);
    }
    if (rs.data.responseMsg && rs.data.responseMsg === invalidGender) {
      return errorResponse(res, badRequest, invalidGender);
    }
    if (rs.data.responseMsg && rs.data.responseMsg === userFound) {
      return errorResponse(res, notFound, userFound);
    }
    if (rs.data.responseMsg && rs.data.responseMsg === authNotFound) {
      return errorResponse(res, notFound, authNotFound);
    }
    return successResponse(res, ok, userRegistered, rs.data);
  } catch (error) {
    console.error(error);
    return errorResponse(res, notFound, error.message);
  }
};
export const login = async (req, res) => {
  const formData = req.body;
  formData.requestType = 'login';
  // if (!(formData || formData.email === undefined || formData))
  const rs = await axios.post(
    'http://localhost:8080/api/webapi/users/auth',
    formData
  );
  if (rs.data.responseMsg && rs.data.responseMsg === userNotFound) {
    return errorResponse(res, notFound, userNotFound);
  }
  return successResponse(res, ok, userFound, rs.data);
};
