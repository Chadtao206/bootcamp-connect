import axios from "axios";

export const getUsers = () =>
  axios.get(`https://randomuser.me/api/?results=100`);

export const getUsers2 = () =>
  axios.get(`https://randomuser.me/api/?results=5000`);
