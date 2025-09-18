import express from 'express';
import 'dotenv/config';
import path from 'path';

import authRoutes from './routes/auth.route.js';
import authMessages from './routes/message.route.js';

const app = express();

const port = process.env.PORT;
const __dirname = path.resolve();

app.use("/api/auth", authRoutes);
app.use("/api/messages", authMessages);


if(process.env.NODE_ENV === "production"){
	app.use(express.static(path.join(__dirname, "../frontend/dist")));

	app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend","dist","index.html"));
    })
}

app.listen(port, () => console.log(`server running on the port ${port}`));
