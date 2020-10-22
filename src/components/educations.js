function getEducationLiElement(userEducationsInfo) {
  return userEducationsInfo.reduce(
    (pre, cur) =>
      `${pre}
        <li>
            <span>${cur.year}</span>
            <div class="education-li-content">
                <span class="education-li-title">${cur.title}</span>
                <p>${cur.description}</p>
            </div>
        </li>
      `,
    ""
  );
}

export default (userEducationsInfo) => {
  $(".education-title").html("EDUCATION");
  $(".education-content").append(getEducationLiElement(userEducationsInfo));
};
