const baseURL = "http://localhost:8080/";

// eslint-disable-next-line consistent-return
const getUserById = async (userId) => {
  try {
    const response = await fetch(`${baseURL}/users/${userId}`);
    return await response.json();
  } catch (e) {
    console.error(e);
  }
};

// eslint-disable-next-line consistent-return
const getEducationsByUserId = async (userId) => {
  try {
    const response = await fetch(`${baseURL}/users/${userId}/educations`);
    return await response.json();
  } catch (e) {
    console.error(e);
  }
};

export { getUserById, getEducationsByUserId };
