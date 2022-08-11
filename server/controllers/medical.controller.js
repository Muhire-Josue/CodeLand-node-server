import reader from 'xlsx';
import responseHandler from '../constants/responseHandler.util';
import customMessage from '../constants/customMessage';
import statusCode from '../constants/statusCodes';

const { errorResponse, successResponse } = responseHandler;
const { ok, badRequest } = statusCode;
const { invalidRole } = customMessage;

const medicalData = (role) => {
  const data = [];
  const dataByRole = [];
  const path = '/Users/macbookpro/Documents/projects/job_tests/codeland/CodeLand-node-server/server/data/MedicalData.xlsx';
  const file = reader.readFile(path);
  const sheets = file.SheetNames;
  for (let i = 0; i < sheets.length; i++) {
    const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
    temp.forEach((res) => {
      data.push(res);
    });
  }
  if (role === 'patient') {
    dataByRole.push(data[0]);
    dataByRole.push(data[1]);
    dataByRole.push(data[2]);
    dataByRole.push(data[3]);
  }
  if (role === 'physician') {
    dataByRole.push(data[4]);
    dataByRole.push(data[5]);
    dataByRole.push(data[6]);
    dataByRole.push(data[7]);
  }
  if (role === 'pharmacist') {
    dataByRole.push(data[8]);
    dataByRole.push(data[9]);
    dataByRole.push(data[10]);
    dataByRole.push(data[11]);
  }
  return role === 'admin' ? data : dataByRole;
};
/**
 * @description this is a welcome endpoint
 * @param {request} req
 * @param {response} res
 * @returns {object} success response message
 */
export default function (req, res) {
  if (!req.query.role || !['patient', 'physician', 'pharmacist', 'admin'].includes(req.query.role)) {
    return errorResponse(res, badRequest, invalidRole);
  }
  const data = medicalData(req.query.role);
  return successResponse(res, ok, 'Data found', data);
}
