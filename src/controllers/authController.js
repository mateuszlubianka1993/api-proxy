import { validateLoginData } from "../helpers/validators.js";

// Mock user
const USER = {
  email: "admin@example.com",
  password: "1234",
};

export const getLogin = (req, res) => {
    res.render("auth/login", {
		path: "/login",
		title: "Login Page",
		errors: []
	});
};

export const postLogin = (req, res) => {
	const {email, password} = req.body;

	const errors = validateLoginData({email, password});

	if (errors.length > 0) {
		return res.render("auth/login", { title: "Login Page", errors });
	}

	if (email === USER.email && password === USER.password) {
		req.session.user = email;

		return res.redirect("/dashboard");
	}

	res.render("auth/login", { title: "Login Page", errors: ["Invalid credentials"] });
};

export const logout = (req, res) => {
	req.session.destroy((err) => {

		if (err) {
			console.error("Session destroy error:", err);
			return res.redirect("/dashboard");
		}

		res.redirect("/login");
	});
};
