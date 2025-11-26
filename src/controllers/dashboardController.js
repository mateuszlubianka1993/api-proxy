import { readApiConfigs, writeApiConfigs } from "../helpers/dataService.js";

export const showDashboard = (req, res) => {
  let apiConfigs = readApiConfigs();

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
  const { name, baseUrl, status, whitelist } = req.body;
  const errors = [];

  if (!name || !baseUrl) {
    errors.push("Name and URL are required");
  }

  if (errors.length > 0) {
    return res.render("dashboard/addForm", {
      title: "Add New Api",
      errors,
      formData: req.body
    });
  }

  let apiConfigs = readApiConfigs();

  const newApi = {
    id: apiConfigs.length ? apiConfigs[apiConfigs.length - 1].id + 1 : 1,
    name,
    baseUrl,
    status: status || "inactive",
    whitelist: whitelist ? whitelist.split(",").map(w => w.trim()) : []
  };

  apiConfigs.push(newApi);
  writeApiConfigs(apiConfigs);

  res.redirect("/dashboard");
};

export const deleteApi = (req, res) => {
  const { id } = req.params;

  let apiConfigs = readApiConfigs();

  apiConfigs = apiConfigs.filter(api => api.id !== Number(id));

  writeApiConfigs(apiConfigs);

  res.redirect("/dashboard?deleted=true");
};

export const showEditApiForm = (req, res) => {
  const { id } = req.params;

  let apiConfigs = readApiConfigs();

  const api = apiConfigs.find(el => el.id === Number(id));

  if (!api) {
    return res.redirect("/dashboard");
  }

  res.render("dashboard/editForm", {
    title: "Edit API",
    errors: [],
    formData: api
  });
};

export const updateApi = (req, res) => {
  const { id } = req.params;
  const { name, baseUrl, status, whitelist } = req.body;

  const errors = [];

  if (!name || !baseUrl) {
    errors.push("Name and URL are required");
  }

  if (errors.length > 0) {
    return res.render("dashboard/editForm", {
      title: "Edit Api",
      errors,
      formData: req.body
    });
  }

  let apiConfigs = readApiConfigs();

  const index = apiConfigs.findIndex(a => a.id === Number(id));

  if (index === -1) {
    return res.redirect("/dashboard");
  }

  apiConfigs[index] = {
    ...apiConfigs[index],
    name,
    baseUrl,
    status,
    whitelist: whitelist ? whitelist.split(",").map(w => w.trim()) : []
  };

  writeApiConfigs(apiConfigs);

  res.redirect("/dashboard");
};
