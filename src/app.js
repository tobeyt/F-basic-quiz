/* eslint-env jquery */
import "./style/index.scss";
import { getUserById, getEducationsByUserId } from "./http";

const { pathname } = window.location;
const [, preString, userId] = pathname.split("/");

const renderHeader = (name, age, avatar) => {
  $(".avatar").attr("src", avatar);
  $(".hello").html("HELLO,");
  $(".description").html(
    `MY NAME IS ${name} ${age}YO AND THIS IS MY RESUME/CV`
  );
};

const renderAboutMe = (description) => {
  $(".about-title").html("ABOUT ME");
  $(".about-content").html(description);
};

const renderEducation = (userEducationsInfo) => {
  let educationLiEle = "";
  userEducationsInfo.forEach(
    // eslint-disable-next-line no-return-assign
    (cur) =>
      (educationLiEle += `
    <li>
        <span>${cur.year}</span>
        <div>
            <span>${cur.title}</span>
            <p>${cur.description}</p>
        </div>
    </li>
  `)
  );
  $(".education-content").append(educationLiEle);
};

const renderPage = async (id) => {
  const { name, age, avatar, description } = await getUserById(id);
  const userEducationsInfo = await getEducationsByUserId(id);
  renderHeader(name, age, avatar);
  renderAboutMe(description);
  renderEducation(userEducationsInfo);
};

if (preString === "users") {
  renderPage(userId);
}
