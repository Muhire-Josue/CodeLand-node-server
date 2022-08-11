import express from 'express';
import medicalController from '../controllers/medical.controller';

const route = express.Router();

route.post('/medical', medicalController);

export default route;
