export const renderHeader = (name, age, avatar) => {
  $(".avatar").attr("src", avatar);
  $(".hello").html("HELLO,");
  $(".description").html(
    `MY NAME IS ${name} ${age}YO AND THIS IS MY RESUME/CV`
  );
};
