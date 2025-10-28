export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validateLoginData({ email, password }) {
  const errors = [];

  if (!email || !password) {
    errors.push("Please fill in all fields.");
    return errors;
  }

  if (!validateEmail(email)) {
    errors.push("Invalid email address.");
  }

  if (password.length < 3) {
    errors.push("Password must be at least 3 characters long.");
  }

  return errors;
}
