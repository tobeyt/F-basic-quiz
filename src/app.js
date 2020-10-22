import "./style/index.scss";
import { getEducationsByUserId, getUserById } from "./http";
import renderHeader from "./components/header";
import renderAboutMe from "./components/about";
import renderEducations from "./components/educations";

const { pathname } = window.location;
const [, preString, userId] = pathname.split("/");

const renderPage = async (id) => {
  try {
    const { name, age, avatar, description } = await getUserById(id);
    const userEducationsInfo = await getEducationsByUserId(id);
    renderHeader(name, age, avatar);
    renderAboutMe(description);
    renderEducations(userEducationsInfo);
  } catch (err) {
    console.error(err);
  }
};

if (preString === "users") {
  renderPage(userId);
}
