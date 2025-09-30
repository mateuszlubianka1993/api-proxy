import express from "express";
import cors from "cors";
import newsRoutes from "./routes/newsRoutes.js";
import whitelist from "./config/cors-whitelist.js";

const app = express();

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) {
      return callback(null, true);
    }

    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`CORS: Access denied for ${origin}`), false);
    }
  }
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/news", newsRoutes);

export default app;
