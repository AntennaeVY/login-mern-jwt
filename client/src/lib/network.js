const axios = require("axios");

const instance = axios.create({ baseURL: process.env.SERVER_URL });

export function register(data) {
  if (!data.username || !data.password) {
    return Promise.reject(new Error("Data is missing"));
  }

  return instance.post("/register", data);
}

export function login(data) {
  if (!data.username || !data.password) {
    return Promise.reject(new Error("Data is missing"));
  }

  return instance.post("/login", data);
}
