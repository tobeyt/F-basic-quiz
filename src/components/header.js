export const renderHeader = (name, age, avatar) => {
  $(".avatar").attr("src", avatar);
  // TODO GTB-4: - 固定内容可以写在html中，其他几个也一样（ABOUT ME等）
  $(".hello").html("HELLO,");
  $(".description").html(
    `MY NAME IS ${name} ${age}YO AND THIS IS MY RESUME/CV`
  );
};
