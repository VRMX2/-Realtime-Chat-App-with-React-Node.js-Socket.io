import express from 'express';
import 'dotenv/config';
import authRoutes from './routes/auth.route.js';
import authMessages from './routes/message.route.js';

const app = express();

const port = process.env.PORT;

app.use("/api/auth", authRoutes);
app.use("/api/messages", authMessages);

app.listen(port, () => console.log(`server running on the port ${port}`));
