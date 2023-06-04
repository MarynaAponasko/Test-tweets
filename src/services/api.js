import axios from "axios";

axios.defaults.baseURL = "https://64788649362560649a2df3a7.mockapi.io";

export const fetchAllUsers = async () => {
  const { data } = await axios("/users");
  return data;
};

export const unpdateUserFollowers = async (id, followers) => {
  const { data } = await axios.put(`/users/${id}`, followers);
  return data;
};
