import axios from "axios";

export const api = axios.create({
  baseURL: "https://my-json-server.typicode.com/emessonSilva/E-COMMERCE-WEB",
  timeout: 1500,
});
