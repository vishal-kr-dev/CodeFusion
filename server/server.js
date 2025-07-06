import express from "express";
import cors from "cors";
import Connect from "./db/connection.js";
import { app, server } from "./socket/socket.js";

import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import authRouter from './routes/authRouter.js'
import recordRouter from "./routes/recordRouter.js";

app.use(
    cors({
        origin: process.env.FRONTEND_URL,
        credentials: true,
    })
);

app.use(express.json());
// app.use(express.static("public"));

// Routes
app.get("/",(req, res)=>{
    res.json("Sever is online");
})
app.use("/user", authRouter)
app.use("/record", recordRouter);

server.listen(5000, () => {
  Connect();
  console.log("Server is running");
});
