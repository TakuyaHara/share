# 概要
[課題 - react-scripts@2.xを用いたTypeScriptのカバレッジレポート](https://qiita.com/TakuyaHara/items/4e707c54554a8d9490e2)の環境再現用リポジトリ。

# 環境
以下の環境にて `create-react-app` を用いてReactプロジェクトを作成したのち、必要なファイルのみを抜粋して本リポジトリへpushしている。

* macOS 10.14.2
* Node v11.1.0
* React 16.7.0
* create-react-app 2.1.2

```
$ create-react-app typescript_v2 --typescript
```

# 再現
本リポジトリをclone後、以下のコマンドにてカバレッジレポートを生成する。

```
$ yarn coverage
$ open coverage/lcov-report/index.html
```

# カバレッジレポート
生成されるHTMLレポートを下記URLで閲覧できる。

https://takuyahara.github.io/share/20190104_IstanbulJS_Coverage_Issue/20_Fix/typescript_v2/coverage/lcov-report/index.html
