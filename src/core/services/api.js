//UTILITIES
import { api } from "./main";

export const POST_API = (url_api, data) => {
  return api
    .post(url_api, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const GET_API = (url_api, data) => {
  return api
    .get(`${url_api}?page=${data}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
