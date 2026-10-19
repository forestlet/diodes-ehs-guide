import { defineConfig } from '@rspress/core';
import path from 'node:path';
export default defineConfig({
  root: 'docs',
  outDir: 'dist',
  base: '/diodes-ehs-guide/',
  siteOrigin: 'https://forestlet.github.io',
  lang: 'zh',
  title: '达迩 EHS 使用指南',
  description: '按任务查找达迩EHS办理方法、岗位职责、管理设置、常见问题和打印样例。',
  logo: '/brand/diodes-logo.jpg',
  globalStyles: path.resolve('styles.css'),
  themeConfig: {
    darkMode: false,
    nav: [
      { text: '打开网页版', link: 'https://8.160.180.140:8443/' },
      { text: '下载安卓 APP', link: 'https://8.160.180.140:8443/downloads/daer-ehs-latest.apk' },
    ],
    sidebar: {
      '/': [{text: '指南首页', link: '/'}, {text: '业务办理', items: [
        {text: '开始使用与账号权限', link: '/guide/start'}, {text: 'JHA风险分析', link: '/guide/jha'},
        {text: '施工申请', link: '/guide/construction'}, {text: '作业许可', link: '/guide/permits'},
        {text: '现场检查与归档', link: '/guide/inspection'}, {text: '变更与验收', link: '/guide/changes'},
        {text: '记录与异常处理', link: '/guide/history'}]}, {text: '审批资格与检测维护', link: '/management'}, {text: '常见问题', link: '/faq'}, {text: '打印样例', link: '/print'}],
    },
  },
});
