import fs from "fs";
import path from "path";

const dataPath = path.join(process.cwd(), "src", "data", "apiConfigs.json");

export const showDashboard = (req, res) => {
  const data = fs.readFileSync(dataPath, "utf-8");
  const apiConfigs = JSON.parse(data);

  res.render("dashboard/dashboard", {
    title: "Dashboard",
    apiConfigs
   });
};

export const showAddApiForm = (req, res) => {
  res.render("dashboard/addForm", {
    title: "Add New Api",
    errors: [],
    formData: {}
  });
};

export const addApi = (req, res) => {
  const { name, url, status, whitelist } = req.body;
  const errors = [];

  if (!name || !url) {
    errors.push("Name and URL are required");
  }

  if (errors.length > 0) {
    return res.render("dashboard/addForm", {
      title: "Add New Api",
      errors,
      formData: req.body
    });
  }

  const data = fs.readFileSync(dataPath, "utf-8");
  const apiConfigs = JSON.parse(data);

  const newApi = {
    id: apiConfigs.length ? apiConfigs[apiConfigs.length - 1].id + 1 : 1,
    name,
    url,
    status: status || "inactive",
    whitelist: whitelist ? whitelist.split(",").map(w => w.trim()) : []
  };

  apiConfigs.push(newApi);
  fs.writeFileSync(dataPath, JSON.stringify(apiConfigs, null, 2));

  res.redirect("/dashboard");
};
