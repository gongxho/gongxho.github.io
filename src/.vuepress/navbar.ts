import { navbar } from "vuepress-theme-hope";
// 首页顶部导航栏配置
export const zhNavbarConfig = navbar([
  "/",
  {
    text: "随笔",
    icon: "note",
    prefix: "/note/",
    children: [
      { text: "随笔", link: "", icon: "note", activeMatch: "^/note/$" },
      // {
      //   text: "心情文章",
      //   children: ["spring/", "summer/", "fall/", "winter/"],
      // },
      // {
      //   text: "生活日记",
      //   children: ["life/", "poem/"],
      // },
      // {
      //   text: "人生感悟",
      //   children: ["node-js/"],
      // },
      'moodEssay/',
      'moodArticle/',
      'lifeDiary/',
      'inOnLife/',
    ],
  },
  {
    text: "代码笔记",
    icon: "code",
    children: [
      {
        text: "代码笔记",
        icon: "code",
        link: "/code/",
        activeMatch: "^/code/$",
      },
      {
        text: "前端",
        children: ["/design/"],
      },
      {
        text: "产品设计",
        children: ["/design/"],
      },
      {
        text: "后端运维",
        children: ["/linux/"],
      },
    ],
  },
  {
    text: "软件教程",
    icon: "software",
    prefix: "/software/",
    children: [
      {
        text: "软件教程",
        icon: "software",
        link: "",
        activeMatch: "^/software/$",
      },
      "vscode/",
      "git/",
      "comsol/",
    ],
  },
]);

// export const enNavbarConfig = navbar([
//   "/en/",
//   "/en/note/",
//   "/en/code/",
//   "/en/software/",
// ]);
