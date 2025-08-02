import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRouter from "./routes/contact";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRouter);

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
