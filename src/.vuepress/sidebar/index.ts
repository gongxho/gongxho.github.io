import { sidebar } from "vuepress-theme-hope";
import { basic } from "./basic";
import { code } from "./code";
import { design } from "./design";
import { github } from "./github";
import {
  dart,
  javascript,
  language,
  markdown,
  python,
  typescript,
} from "./language";
import { linux } from "./linux";
import { miniapp } from "./mini-app";
import { note } from "./note";
import { comsol, git, software, vscode } from "./software";
import { vue } from "./vue";
import { css, html, jquery, website } from "./website";

// 通过 路径前缀: 侧边栏配置 的格式为侧边栏配置一个对象
export const zhSidebarConig = sidebar({
  // 将原来的“侧边栏数组”替换为 "structure" 关键词。这会让主题自动读取本地文件，为你生成对应的侧边栏结构，以大大减少你的配置工作量
  // "/software/vscode/": vscode,
  "/software/vscode/": "structure",

  "/software/git/": git,

  "/software/comsol/": comsol,

  "/software/": software,

  "/note/": 'structure',

  "/linux/": linux,

  "/design/": design,

  "/code/windows/": [
    "",
    "shortcut-key",
    "hidden-file",
    "add-path",
    "cmd",
    "notepad",
  ],

  "/code/website/jquery/": jquery,

  "/code/website/html/": html,

  "/code/website/css/": css,

  "/code/website/": website,

  "/code/vue/": vue,

  "/code/node-js/": "structure",

  "/code/mini-app/": miniapp,

  "/code/language/typescript/": typescript,

  "/code/language/python/": python,

  "/code/language/markdown/": markdown,

  "/code/language/js/": javascript,

  "/code/language/dart/": dart,

  "/code/language/": language,

  "/code/github/": github,

  "/code/basic/": basic,

  "/code/Android/": ["", "intro", "base", "resource"],

  "/code/": code,

  "/about/": ["", "site"],

  // fallback
  "/": ["", "note/", "code/", "software/", "about/"],
});

