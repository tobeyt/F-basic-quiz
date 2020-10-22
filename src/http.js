const baseURL = "http://localhost:8080/";

const getUserById = (userId) => {
  return fetch(`${baseURL}/users/${userId}`).then((res) => res.json());
};

const getEducationsByUserId = (userId) => {
  return fetch(`${baseURL}/users/${userId}/educations`).then((res) =>
    res.json()
  );
};

export { getUserById, getEducationsByUserId };
