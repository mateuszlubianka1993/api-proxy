# ⚡ API Proxy Backend  

A lightweight **Node.js + Express backend** designed to act as a **secure proxy** between frontend applications and third-party APIs.  
Its main goal is to hide sensitive API keys, handle request parameters, and expose only safe, whitelisted endpoints to the client.  

---

## 🚀 Features
- 🔒 Secure proxy for any external REST API  
- 🔑 Keeps API keys safe using environment variables (`.env`)  
- 🌍 CORS whitelist → only approved domains can access the API  
- 📂 Clean project structure (routes, controllers, services)  
- ☁️ Ready for free deployment (Render, Railway, Fly.io, Cyclic)  

---

## 🛠️ Tech Stack
- **Node.js**  
- **Express**  
- **CORS** (with whitelist)  
- **dotenv** (environment configuration)  

---

## 📂 Project Structure

```

/src
├── routes/         # API route definitions
├── controllers/    # Request handling logic
├── services/       # Communication with external APIs
├── app.js          # Express app configuration
└── server.js       # Entry point

````

---

## ⚙️ Installation & Usage

```bash
# clone repository
git clone https://github.com/your-username/your-backend-repo.git
cd your-backend-repo

# install dependencies
npm install

# create .env file with your secrets
echo "API_KEY=your_api_key_here" > .env

# start server (dev mode)
npm run dev
````

By default, the server runs on 👉 `http://localhost:3001`.

---

## 🔒 Environment Variables

Define your secrets in `.env`:

```
API_KEY=your_api_key_here
```

(You can adjust the variable names depending on the API you’re integrating.)

---

## 🌐 Deployment

This backend is designed to run smoothly on free hosting providers such as:

* [Render](https://render.com)
* [Railway](https://railway.app)
* [Fly.io](https://fly.io)
* [Cyclic](https://www.cyclic.sh)

---

## 📚 What I Learned / Goals

* 🏗️ Building a **professional Express backend structure** (routes, controllers, services).
* 🔒 How to securely proxy third-party APIs and protect private keys.
* 🌍 Restricting access with **CORS whitelist** for approved frontends.
* 📈 Preparing a project for **scalability** (can be reused for different APIs).

---

## 📌 Future Improvements

* 🗄️ Add request caching (to reduce external API calls).
* 🔑 Introduce API key authentication for frontend apps (e.g., `X-APP-KEY` header).
* 📊 Add logging & monitoring.

---

✨ *This backend is part of my portfolio and is designed to be easily reused for multiple frontend projects that consume third-party APIs.*
