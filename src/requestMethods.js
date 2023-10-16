import axios from "axios";

// const user = JSON.parse(
//   JSON.parse(localStorage.getItem("persist:root")).user
// ).currentUser;
// const BASE_URL = "http://localhost:8080/api/";
// const TOKEN = user !== null && user.accessToken;


const BASE_URL = "http://localhost:8080/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MjU3NjJkNzZiYzk4YzgxM2M3MThhYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5Njk1NDEyNiwiZXhwIjoxNjk3NTU4OTI2fQ.T3RhjPFqAq0x_66Fr7LLOzDSQu5nicu7nU6p8CBZ7Bw";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: "Bearer " + TOKEN },
});
