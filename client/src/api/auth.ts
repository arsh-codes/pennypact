import axios from "../lib/axios";

export const signupUser = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  const response = await axios.post("/auth/signup", data);
  return response.data;
};

export const loginUser = async (data: { email: string; password: string }) => {
  const response = await axios.post("/auth/login", data);
  return response.data;
};
