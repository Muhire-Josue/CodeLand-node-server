import reader from 'xlsx';
import responseHandler from '../constants/responseHandler.util';
import customMessage from '../constants/customMessage';
import statusCode from '../constants/statusCodes';

const { updatedResponse, successResponse } = responseHandler;
const { ok } = statusCode;
const { welcomeMessage } = customMessage;
/**
 * @description this is a welcome endpoint
 * @param {request} req
 * @param {response} res
 * @returns {object} success response message
 */
export default function (req, res) {
  const file = reader.readFile(
    '/Users/macbookpro/Documents/projects/job_tests/codeland/CodeLand-node-server/server/data/Medical Data.xlsx'
  );
  const data = [];
  const sheets = file.SheetNames;
  for (let i = 0; i < sheets.length; i++) {
    const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
    temp.forEach((res) => {
      data.push(res);
    });
  }

  // Printing data
  return successResponse(res, ok, 'Data found', data);
}
