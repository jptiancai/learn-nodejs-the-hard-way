# learn-nodejs-the-hard-way

## 学习资源汇总

###  📚深入浅出node.js : 朴灵


### Node.js开发指南

- 利于开发调试的方法,不同重其服务就可以实现

```bash
supervisor app.js

```

- exports 和 module.exports 的区别

- Node.js的包严格符合CommonJS规范的定义

- npm install -g 中-g代表全局模式

- node 默认的调试端口是5858, node debug,可以方便的远程调试

- process.nextTick(),提供了一个这样的 工具，可以把复杂的工作拆散，变成一个个较小的事件。

- events是Node.js最重要的模块,没有"之一"

- 安装express的时候, 

使用`npm install -g express-generator`

- microblog实例,原书讲解的生成工具和现在和版本对应不上, 会有一些偏差, 在这里记录下修改的记录,新增路由规则`/hello`的时候

```js
// 在microblog的目录下的app.js文件
// 新增
var hello = require('./routes/hello');
app.use('/hello', hello);

// 在routes文件夹下新创建hello.js
var express = require('express');
var router = express.Router();

/* GET hello listing. */
router.get('/', function(req, res, next) {
  res.send('The time is ' + new Date().toString());
});

module.exports = router;


```


### [针对 Node.js 初学者的入门资源汇总](http://www.iteye.com/news/24789/)
- 谢骋超,[深入浅出node.js游戏服务器开发1——基础架构与框架介绍
](http://www.infoq.com/cn/articles/game-server-development-1?utm_source=articles_about_master-nodejs&utm_medium=link&utm_campaign=master-nodejs)
  - [pomelo](https://github.com/NetEase/pomelo)
  - [其他人学习pomelo经验](https://github.com/NextZeus/pomeloframework)
- [一个前端工程师眼里的NodeJS](http://www.infoq.com/cn/articles/nodejs-in-front-end-engineer-view)
