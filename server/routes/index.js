import express from 'express';
import welcomeRoute from './welcome.routes';
import medicalRoute from './medical.routes';
import authRoute from './auth.routes';

const app = express.Router();

app.use(welcomeRoute);
app.use(medicalRoute);
app.use(authRoute);

export default app;
