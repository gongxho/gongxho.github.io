import { hopeTheme } from "vuepress-theme-hope";
// 导航栏配置
import {
  // enNavbarConfig, 
  zhNavbarConfig
} from "./navbar";
// 文章侧边栏配置
import {
  // enSidebarConfig,
  zhSidebarConig
} from "./sidebar";

export default hopeTheme({
  // 当前网站部署到的域名
  hostname: "https://mrhope.site",
  // 文章显示的默认作者
  author: {
    name: "Mr.Googxh",
    url: "https://mrhope.site",
  },
  // 字体图标资源链接
  iconAssets: "//at.alicdn.com/t/font_2410206_vuzkjonf4s9.css",
  iconPrefix: "iconfont icon-",
  // 导航栏图标，应为基于 .vuepress/public 文件夹的绝对路径
  logo: "/logo.svg",
  // 仓库配置，用于在导航栏中显示仓库链接
  repo: "https://github.com/Mister-Hope/Mister-Hope.github.io",
  // 是否在导航栏显示仓库链接
  repoDisplay: false,
  // 文档在仓库中的目录
  docsDir: "src",
  // 主题的多语言配置，你可以在这里分别为每个语言设置单独的选项
  locales: {
    "/": {
      // 导航栏配置
      navbar: zhNavbarConfig,
      // 侧边栏配置
      sidebar: zhSidebarConig,
      // 提供博客功能，且该功能默认禁用，要启用博客插件并使用默认选项，你可以在主题选项中设置 plugins.blog: true
      blog: {
        description: "前端开发者",
        intro: "/about/",
        medias: {
          QQ: "http://wpa.qq.com/msgrd?v=3&uin=1178522294&site=qq&menu=yes",
          Qzone: "https://1178522294.qzone.qq.com/",
          Gmail: "mailto:mister-hope@outlook.com",
          Zhihu: "https://www.zhihu.com/people/mister-hope",
          Steam: "https://steamcommunity.com/id/Mr-Hope/",
          Weibo: "https://weibo.com/misterhope",
          GitHub: "https://github.com/Mister-Hope",
          Gitee: "https://gitee.com/Mister-Hope",
        },
      },
    },

    // "/en/": {
    //   navbar: enNavbarConfig,
    //   sidebar: enSidebarConfig,

    //   blog: {
    //     description:
    //       "VuePress project member, front-end developer, studying for a master's degree in theoretical physics",
    //     intro: "/en/about/",
    //     medias: {
    //       Gmail: "mailto:mister-hope@outlook.com",
    //       Steam: "https://steamcommunity.com/id/Mr-Hope/",
    //       GitHub: "https://github.com/Mister-Hope",
    //     },
    //   },
    // },
  },
  // 是否默认显示页脚
  displayFooter: true,
  copyright: "Copyright © 2019-present Mr.Hope",
  // 插件配置
  plugins: {
    blog: true,
    // 主题使用 vuepress-plugin-comment2 提供评论支持
    comment: {
      provider: "Waline",
      serverURL: "https://mister-hope-blog-comment.vercel.app",
    },
    // Feed 插件配置
    feed: {
      atom: true,
      json: true,
      rss: true,
    },
    // 提供 Markdown 增强功能
    mdEnhance: {
      align: true,
      codetabs: true,
      demo: true,
      flowchart: true,
      footnote: true,
      imageMark: true,
      presentation: true,
      sub: true,
      sup: true,
      tex: true,
      vpre: true,
    },
    // 提供渐进式网络应用程序支持
    pwa: {
      favicon: "/favicon.ico",
      themeColor: "#5c92d1",
      cacheHTML: false,
      maxSize: 3072,
      apple: {
        icon: "/assets/icon/apple-touch-icon.png",
        statusBarColor: "white",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        name: "Mr.Hope 的个人博客",
        short_name: "Mr.Hope Blog",
        description: "Mr.Hope 的个人博客",
        theme_color: "#5c92d1",
        icons: [
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "分类",
            short_name: "分类",
            icons: [
              {
                src: "/assets/icon/category-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/category-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
            url: "/category/",
            description: "文章分类分组",
          },
          {
            name: "标签",
            short_name: "标签",
            icons: [
              {
                src: "/assets/icon/tag-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/tag-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
            url: "/tag/",
            description: "文章标签分组",
          },
          {
            name: "时间线",
            short_name: "时间线",
            icons: [
              {
                src: "/assets/icon/timeline-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/timeline-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
            url: "/timeline/",
            description: "时间线文章列表",
          },
          {
            name: "个人介绍",
            short_name: "个人介绍",
            icons: [
              {
                src: "/assets/icon/about-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/about-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
            url: "/about/",
            description: "个人介绍",
          },
        ],
      },
    },
  },
});
