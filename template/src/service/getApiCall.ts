import { apiCallProtected } from "../api/axios";

export const getAPICall = (url: string, options: any = {}) => {
  return new Promise((resolve, reject) => {
    apiCallProtected.get(url, options?.headers)
      .then((response) => {
        console.log(response);
        if (response?.status?.toLowercase() === 'success') {
          resolve(response?.data);
        }
        else {
          reject(response?.data?.message);
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
};