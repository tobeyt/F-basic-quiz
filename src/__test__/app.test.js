import { getEducationsByUserId, getUserById } from "../http";

const baseURL = "http://localhost:8080/";

describe("get user by user id", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ name: "qindi", description: "TWer" }),
      })
    );
  });

  test("should get user info", async () => {
    await expect(getUserById(111)).resolves.toEqual({
      name: "qindi",
      description: "TWer",
    });
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`${baseURL}/users/111`);
  });

  test("should get educations info", async () => {
    await expect(getEducationsByUserId(111)).resolves.toEqual({
      name: "qindi",
      description: "TWer",
    });
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`${baseURL}/users/111/educations`);
  });
});
