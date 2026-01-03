require("dotenv").config();

module.exports = {
  baseURL: process.env.BASE_URL || "https://www.demoblaze.com",
  username: process.env.USERNAME || "",
  password: process.env.PASSWORD || ""
};
