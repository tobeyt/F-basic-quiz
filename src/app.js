import "./style/index.scss";
import { getEducationsByUserId, getUserById } from "./http";
import { renderHeader } from "./components/header";
import { renderAboutMe } from "./components/about";
import { renderEducations } from "./components/educations";

const { pathname } = window.location;
// TODO GTB-4: - 可以使用正则匹配形式取出id，降低userId对url层级对依赖，最后也少一层判断
const [, preString, userId] = pathname.split("/");

const renderPage = async (id) => {
  // TODO GTB-3: + 正确使用了解构赋值
  const { name, age, avatar, description } = await getUserById(id);
  const userEducationsInfo = await getEducationsByUserId(id);
  renderHeader(name, age, avatar);
  renderAboutMe(description);
  renderEducations(userEducationsInfo);
};

if (preString === "users") {
  renderPage(userId);
}
