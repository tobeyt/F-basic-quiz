const baseURL = "http://localhost:8080/";

// TODO GTB-4: - try catch 放在使用api的地方，也会避免eslint 的error
const getUserById = async (userId) => {
  try {
    const response = await fetch(`${baseURL}/users/${userId}`);
    // TODO GTB-3: - 下面这个 await 可以省略
    return await response.json();
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const getEducationsByUserId = async (userId) => {
  try {
    const response = await fetch(`${baseURL}/users/${userId}/educations`);
    return await response.json();
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export { getUserById, getEducationsByUserId };
