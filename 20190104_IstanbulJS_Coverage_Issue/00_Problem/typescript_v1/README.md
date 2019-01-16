# About this repository
This repository is to reproduce environment mentioned in [IstanbulJS generates weirdly highlighted HTML report](https://medium.com/@TakuyaHARA/istanbuljs-generates-weirdly-highlighted-html-report-f233ff5cfead).

# Environment
Excerpt files on this repository have generated via `create-react-app` in the following environment.

* macOS 10.14.2
* Node v11.1.0
* React 16.7.0
* create-react-app 2.1.2

```bash
$ create-react-app typescript_v1 --scripts-version=react-scripts-ts
```

# How to reproduce
Run the following commands to generate coverage report.

```bash
$ yarn coverage
$ open coverage/index.html
```

# See report
Generated report can be seen here.

https://takuyahara.github.io/share/20190104_IstanbulJS_Coverage_Issue/00_Problem/typescript_v1/coverage/index.html
