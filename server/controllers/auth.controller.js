import axios from 'axios';
import responseHandler from '../constants/responseHandler.util';
import customMessage from '../constants/customMessage';
import statusCode from '../constants/statusCodes';

const { updatedResponse, errorResponse, successResponse } = responseHandler;
const {
  ok, conflict, badRequest, notFound
} = statusCode;
const {
  userAlreadyExist, userFound, userNotFound, userRegistered, authNotFound, invalidPassword
} = customMessage;

const validateUser = (user) => {
  if (!['admin', 'patient', 'physician', 'pharmacists'].includes(user.role)) {
    return false;
  }
  if (user.role === 'admin' && user.password.length !== 8) {
    return false;
  }
  if (user.role === 'patient' && user.password.length !== 7) {
    return false;
  }
  if (user.role === 'physician' && user.password.length !== 6) {
    return false;
  }
  return !(user.role === 'pharmacists' && user.password.length !== 5);
};
/**
 * @description this is a welcome endpoint
 * @param {request} req
 * @param {response} res
 * @returns {object} success response message
 */
export const signup = async (req, res) => {
  const formData = req.body;
  const rs = await axios.post(
    'http://localhost:8080/api/webapi/users/auth',
    formData
  );
  if (validateUser(rs.data) === false) {
    return errorResponse(res, badRequest, invalidPassword);
  }
  if (rs.data.responseMsg && rs.data.responseMsg === userAlreadyExist) {
    return errorResponse(res, conflict, userAlreadyExist);
  }
  if (rs.data.responseMsg && rs.data.responseMsg === userNotFound) {
    return errorResponse(res, notFound, userNotFound);
  }
  if (rs.data.responseMsg && rs.data.responseMsg === authNotFound) {
    return errorResponse(res, notFound, authNotFound);
  }
  console.log('=========>>>> DATA', rs.data);
  return successResponse(res, ok, 'user registered', rs.data);
};
export const login = (req, res) => updatedResponse(res, ok, 'login');
