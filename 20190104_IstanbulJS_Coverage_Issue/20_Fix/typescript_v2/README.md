# About this repository
This repository is to reproduce environment mentioned in [IstanbulJS generates weirdly highlighted HTML report](https://medium.com/@TakuyaHARA/istanbuljs-generates-weirdly-highlighted-html-report-f233ff5cfead).

# Environment
Excerpt files on this repository have generated via `create-react-app` in the following environment.

* macOS 10.14.2
* Node v11.1.0
* React 16.7.0
* create-react-app 2.1.2

```
$ create-react-app typescript_v2 --typescript
```

# How to reproduce
Run the following commands to generate coverage report.

```
$ yarn coverage
$ open coverage/lcov-report/index.html
```

# See report
Generated report can be seen here.

https://takuyahara.github.io/share/20190104_IstanbulJS_Coverage_Issue/20_Fix/typescript_v2/coverage/lcov-report/index.html
