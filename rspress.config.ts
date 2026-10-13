import { defineConfig } from '@rspress/core';
import path from 'node:path';
export default defineConfig({
  root: 'docs',
  outDir: 'dist',
  base: '/diodes-ehs-guide/',
  siteOrigin: 'https://forestlet.github.io',
  lang: 'zh',
  title: '达迩 EHS 操作教学',
  description: '按岗位和业务阅读达迩EHS操作步骤，查看表单打印样例。',
  logo: '/brand/diodes-logo.jpg',
  globalStyles: path.resolve('styles.css'),
  themeConfig: {
    darkMode: false,
    nav: [{text: '操作教学', link: '/guide/start'}, {text: '管理设置', link: '/management'}, {text: '打印样例', link: '/print'}],
    sidebar: {
      '/': [{text: '开始使用', link: '/'}, {text: '岗位操作', items: [
        {text: '账号与管理', link: '/guide/start'}, {text: 'JHA风险分析', link: '/guide/jha'},
        {text: '施工申请', link: '/guide/construction'}, {text: '作业许可', link: '/guide/permits'},
        {text: '现场检查与归档', link: '/guide/inspection'}, {text: '变更与验收', link: '/guide/changes'},
        {text: '异常与历史记录', link: '/guide/history'}]}, {text: '审批资格与检测维护', link: '/management'}, {text: '打印样例', link: '/print'}],
    },
  },
});
