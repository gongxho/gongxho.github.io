import { arraySidebar } from "vuepress-theme-hope";

export const react = arraySidebar([
    "",
    {
        text: "理念篇",
        collapsable: true,
        children: [
            {
                text: "第一章 React理念",
                icon: "article",
                children: [
                    "preparation/idea",
                    "preparation/oldConstructure",
                    "preparation/newConstructure",
                    "process/fiber-mental",
                    "process/fiber",
                    "process/doubleBuffer",
                    "preparation/summary",
                ]
            },
            {
                text: "第二章 前置知识",
                icon: "article",
                children: [
                    "preparation/file",
                    "preparation/source",
                    "preparation/jsx",
                ]
            }
        ]
    },
    {
        text: "架构篇",
        collapsable: true,
        children: [
            {
                text: "第三章 render阶段",
                icon: "article",
                children: [
                    "process/reconciler",
                    "process/beginWork",
                    "process/completeWork",
                ]
            },
            {
                text: "第四章 commit阶段",
                icon: "article",
                children: [
                    "renderer/prepare",
                    "renderer/beforeMutation",
                    "renderer/mutation",
                    "renderer/layout",
                ]
            }
        ]
    },
    {
        text: "实现篇",
        collapsable: true,
        children: [
            {
                text: "第五章 Diff算法",
                icon: "article",
                children: [
                    "diff/prepare",
                    "diff/one",
                    "diff/multi",
                ]
            },
            {
                text: "第六章 状态更新",
                icon: "article",
                children: [
                    "state/prepare",
                    "state/mental",
                    "state/update",
                    "state/priority",
                    "state/reactdom",
                    "state/setstate",
                ]
            },
            {
                text: "第七章 Hooks",
                icon: "article",
                children: [
                    "hooks/prepare",
                    "hooks/create",
                    "hooks/structure",
                    "hooks/usestate",
                    "hooks/useeffect",
                    "hooks/useref",
                    "hooks/usememo",
                ],
            },
            {
                text: "第八章 Concurrent Mode",
                icon: "article",
                children: [
                    "concurrent/prepare",
                    "concurrent/scheduler",
                    "concurrent/lane",
                    "concurrent/disrupt",
                ]
            }
        ]
    },
]);
