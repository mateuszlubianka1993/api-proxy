import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";
import expressLayouts from "express-ejs-layouts";
import dashboardRoutes from "./routes/dashboard.js";
import newsRoutes from "./routes/newsRoutes.js";
import authRoutes from "./routes/auth.js";
import { setUser } from "./middleware/setUser.js";
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

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: "superSecretKey",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 }
  })
);

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src/views"));

app.use(express.static(path.join(process.cwd(), "src/public")));

app.use(expressLayouts);
app.set("layout", "layout");

app.use(setUser);

app.use("/", authRoutes);
app.use("/dashboard", dashboardRoutes);
// app.use("/news", newsRoutes);

export default app;
