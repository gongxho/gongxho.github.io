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
        text: "前端源码",
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
    text: "前端基础",
    icon: "bedstone",
    prefix: "/bedstone/",
    children: [
      {
        text: "前端基础",
        icon: "software",
        link: "",
        activeMatch: "^/bedstone/$",
      },
      "computer-memory-detail/",
      "browser-working-principle/",
      "beauty-of-design-pattern/",
      "google-v8/",
      "perspective-http-protocol/",
    ],
  },
  {
    text: "前端面试",
    icon: "Interview",
    prefix: "/Interview/",
    children: [
      {
        text: "前端面试",
        icon: "software",
        link: "",
        activeMatch: "^/Interview/$",
      },
      "base/",
    ],
  },
]);