import express from 'express';
import healthRouter from './routes/health';
import usersRouter from './routes/users';

const app = express();

// CHANGED: allow Express to read JSON bodies
app.use(express.json());

// CHANGED: added test/demo routes
app.use('/api/health', healthRouter);
app.use('/api/users', usersRouter);

export default app;