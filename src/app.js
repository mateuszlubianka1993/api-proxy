import express from "express";
import path from "path";
import cors from "cors";
import expressLayouts from "express-ejs-layouts";
import dashboardRoutes from "./routes/dashboard.js";
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

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src/views"));
app.use(express.urlencoded({ extended: true }));

app.use(expressLayouts);
app.set("layout", "layout");

app.use("/news", newsRoutes);
app.use('/dashboard', dashboardRoutes);

export default app;
