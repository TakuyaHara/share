# 概要
[IstanbulJS - レポート改善案](https://qiita.com/TakuyaHara/items/52d6fb394185196e2db8)の環境再現用リポジトリ。

# 環境
以下の環境にて `create-react-app` を用いてReactプロジェクトを作成したのち、必要なファイルのみを抜粋して本リポジトリへpushしている。

* macOS 10.14.2
* Node v11.1.0
* React 16.7.0
* create-react-app 2.1.2

# 再現
本リポジトリをclone後、以下のコマンドにてカバレッジレポートを生成する。

```bash
$ yarn test --coverage
$ open coverage/lcov-report/index.html
```

# カバレッジレポート
生成されるHTMLレポートを下記URLで閲覧できる。

https://takuyahara.github.io/share/20190104_IstanbulJS_Coverage_Issue/coverage/lcov-report/

