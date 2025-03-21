import axios from "axios";

// API SERVER URL
const API_BASE_URL = import.meta.env.PROD
  ? ""
  : import.meta.env.VITE_BASE_API_URL;
const transactionEndpoint = "/api/transactions";

const API_URL = API_BASE_URL + transactionEndpoint;

// Create transaction | POST
export const createTransaction = (userId, transactionObj) => {
  const response = axios
    .post(`${API_URL}`, transactionObj, {
      headers: {
        authorization: userId,
      },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));

  return response;
};

// INDEX transaction | GET
export const getTransaction = (userId) => {
  const response = axios
    .get(`${API_URL}`, {
      headers: {
        authorization: userId,
      },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));
  return response;
};

export const deleteTransactions = (userId, selectedIds) => {
  const response = axios
    .delete(`${API_URL}`, {
      data: selectedIds,
      headers: {
        authorization: userId,
      },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));
  return response;
};