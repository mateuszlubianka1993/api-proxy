// Mock user
const USER = {
  email: "admin@example.com",
  password: "1234",
};

export const getLogin = (req, res) => {
    res.render("auth/login", {
		path: "/login",
		title: "Login Page",
		error: null
	});
};

export const postLogin = (req, res) => {
	const {email, password} = req.body;

	if (email === USER.email && password === USER.password) {
		console.log("1111");
		req.session.user = email;

		return res.redirect("/dashboard");
	}

	res.render("auth/login", { title: "Login Page", error: "Invalid credentials" });
};

export const logout = (req, res) => {
	req.session.destroy(() => {
		res.render("auth/login", { title: "Login Page" });
	});
};
