import express from "express";
import medicalRoutes from "./routes/medicalRoutes";

const app = express();
app.use(express.json());

app.use("/medical-records", medicalRoutes);

export default app;
