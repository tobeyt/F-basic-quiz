/* eslint-env jquery */
import "./style/index.scss";
import { getUserById } from "./http";

const { pathname } = window.location;
const [, preString, userId] = pathname.split("/");

const renderHeader = (name, age, avatar) => {
  $(".avatar").attr("src", avatar);
  $(".hello").html("HELLO,");
  $(".description").html(
    `MY NAME IS ${name} ${age}YO AND THIS IS MY RESUME/CV`
  );
};

const renderPage = async (id) => {
  const { name, age, avatar } = await getUserById(id);
  renderHeader(name, age, avatar);
};

if (preString === "users") {
  renderPage(userId);
}
