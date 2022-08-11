import express from 'express';
import medicalController from '../controllers/medical.controller';

const route = express.Router();

route.get('/medical', medicalController);

export default route;
