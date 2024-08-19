const API_URL = "http://localhost:5000";

export const getTasks = async () => {
  return fetch(API_URL).then((response) => response.json());
};
