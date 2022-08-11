import express from 'express';
import welcomeRoute from './welcome.routes';
import medicalRoute from './medical.routes';

const app = express.Router();

app.use(welcomeRoute);
app.use(medicalRoute);

export default app;
