import fs from "fs";
import path from "path";

const dataPath = path.join(process.cwd(), "src", "data", "apiConfigs.json");

export function readApiConfigs() {
  const data = fs.readFileSync(dataPath, "utf-8");
  return JSON.parse(data);
}

export function writeApiConfigs(apiConfigs) {
  fs.writeFileSync(dataPath, JSON.stringify(apiConfigs, null, 2));
}
