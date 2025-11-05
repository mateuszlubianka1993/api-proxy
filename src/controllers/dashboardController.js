import fs from "fs";
import path from "path";

const dataPath = path.join(process.cwd(), "src", "data", "apiConfigs.json");

export const showDashboard = (req, res) => {
  const data = fs.readFileSync(dataPath, "utf-8");
  const apiConfigs = JSON.parse(data);

  res.render('dashboard', {
    title: 'Dashboard',
    apiConfigs
   });
};
