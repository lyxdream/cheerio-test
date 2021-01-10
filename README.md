# 使用 axios + cheerio + node-xlsx 爬取并导出到excel表格

## 网页爬虫

### 启动
```bash
npm run start:dev
```
打开localhost:3000刷新，会发现生成一个xlsx文件

### 功能
爬取 [网易财经](http://quotes.money.163.com/f10/zycwzb_600519.html)网页中，茅台酒的净利润(扣除非经常性损益后)(万元)，并保存到 out.xlsx 表格中。


### 实现原理：
- axios 获取http://quotes.money.163.com/f10/zycwzb_600519.html 内容
- 返回内容是服务端渲染，数据和 dom 结构混合在一起，使用 cheerio 获取数据报告表格的 dom 片段
- 使用正则解析 dom 片段，过滤出有用数据
- 使用 node-xlsx 将数据写入 xlsx 文件
### 库
- nest 脚手架
- axios 发送 ajax 请求
- cheerio 类似 jquery，能够解析字符串形式的 dom
