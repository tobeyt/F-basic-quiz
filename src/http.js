const baseURL = "http://localhost:8080/";

const getUserById = async (userId) => {
  try {
    const response = await fetch(`${baseURL}/users/${userId}`);
    return await response.json();
  } catch (e) {
    console.error(e);
  }
};

const getEducationsByUserId = async (userId) => {
  try {
    const response = await fetch(`${baseURL}/users/${userId}/educations`);
    return await response.json();
  } catch (e) {
    console.error(e);
  }
};

export { getUserById, getEducationsByUserId };
