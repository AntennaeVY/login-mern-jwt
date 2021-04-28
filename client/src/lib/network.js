const axios = require("axios");

const instance = axios.create({ baseURL: process.env.REACT_APP_SERVER_URL });

export async function register(data) {
  if (!data.username || !data.password || !data.email) {
    return Promise.reject(new Error("Data is missing"));
  }
  console.log(process.env.REACT_APP_SERVER_URL);
  return await instance.post("/register", data);
}

export async function login(data) {
  if (!data.username || !data.password) {
    return Promise.reject(new Error("Data is missing"));
  }

  return await instance.post("/login", data);
}
