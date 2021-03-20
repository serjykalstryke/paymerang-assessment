import axios from "axios";

export const getPayments = {
  getPayments: function () {
    return axios.get("/");
  },
};
export const getPayment = {
  getPayment: function (id) {
    return axios.get(`/${id}`);
  },
};
