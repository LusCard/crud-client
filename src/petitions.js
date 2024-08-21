const API_URL = "http://localhost:5000/";

export const getTasks = async () => {
  return fetch(API_URL).then((response) => response.json());
};

export const postTasks = async ({ title, description, isComplete }) => {
  return fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({ title, description, isComplete }),
    headers: { "Content-Type": "application/json" },
  }).then((response) => response.json());
};
