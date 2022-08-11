import express from 'express';
import { signup, login } from '../controllers/auth.controller';

const route = express.Router();

route.post('/auth/signup', signup);
route.post('/auth/login', login);

export default route;
