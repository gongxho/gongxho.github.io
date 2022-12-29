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
        children: ["/vue2/","/react/","/vue3/"],
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
  {
    text: "前端基石",
    icon: "bedstone",
    prefix: "/bedstone/",
    children: [
      {
        text: "前端基石",
        icon: "software",
        link: "",
        activeMatch: "^/bedstone/$",
      },
      "computer-memory-detail/",
      "browser-working-principle/",
      "beauty-of-design-pattern/",
    ],
  },
]);