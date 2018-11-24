
# time-alias
[![NPM version][npm-badge]][npm-url]
[![Build Status][travis-badge]][travis-url]
[![NPM downloads][npm-downloads]][npm-url]
[![Coverage Status][coveralls-badge]][coveralls-url]
[![gzip](http://img.badgesize.io/https://unpkg.com/time-alias/lib/time-alias.min.js?compression=gzip)][unpkg-url]
把时间翻译成别名，例如：12:00到13:00=>中午


[npm-badge]: https://img.shields.io/npm/v/time-alias.svg
[npm-url]: https://www.npmjs.com/package/time-alias
[npm-downloads]: https://img.shields.io/npm/dm/time-alias.svg
[travis-badge]: https://www.travis-ci.org/ZiQiangWang/time-alias.svg?branch=master
[travis-url]: https://www.travis-ci.org/ZiQiangWang/time-alias
[unpkg-url]: https://unpkg.com/time-alias/lib/time-alias.min.js
[coveralls-badge]: https://coveralls.io/repos/ZiQiangWang/time-alias/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/ZiQiangWang/time-alias

# Install

```
npm i time-alias
```

# Usage

```Js
import alias from "time-alias";
alias(new Date()); // 当前时间名称
```

# i18n

默认语言为中文，`zh_CN`

```js
import { en } from 'time-alias/locale';
alias(new Date(), en);
```

目前只提供中文和英文两种语言，使用`zh_CN`、`en`，欢迎添加新的语言支持。

### # License

Copyright © 2018, [ZiQiangWang](https://github.com/ZiQiangWang).
Released under the [MIT License](LICENSE).

