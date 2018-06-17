# Croquis

Croquis は、Tumblrで気軽に落描きを投稿しやすいテンプレートです。  
[@sanographix](http://www.sanographix.net) がデザインしています。

#### Note:

このテーマを利用するには、[同人作家のためのTumblr入門](http://www.jadda.info/2013winter/)の冊子が必要です。


## 1. インストールする

* 冊子に記載されているURLから「GET CROQUIS THEME」をクリックし、`croquis.html`のコードを全選択してコピーします。
* Tumblrのテーマカスタマイズ画面を開いて、「HTMLを編集」を押します。
* もとのhtmlを削除して`cruquis.html`のコードを貼り付けて保存します。
    * 保存すると以前のテーマの設定はすべて消えます。必要であればバックアップをとってください。

## 2. カスタマイズする

テーマカスタマイズ画面でカスタマイズできます。

### 推奨設定

* 「▾ 詳細設定」の「モバイルレイアウトを使用する」に **チェックを入れる**
	* このチェックを入れるとスマートフォンなどで Tumblr 純正のモバイルレイアウトになります。このテーマも一応レスポンシブデザイン対応していますが、フォトセットなどがレスポンシブデザインでうまく再現しきれていないため、特にフォトセットをよく投稿する方はモバイルレイアウトを使用した方が無難です。

### デザイン設定

下記の設定がカスタマイズできます。

| 設定項目 | 説明 |
|-------|-----|
| Enable Facebook Button | 記事パーマリンクに Facebook の Like ボタンを表示します。 |
| Enable Plus1 Button | 記事パーマリンクに Google +1 ボタンを表示します。 |
| Enable Tweet Button | 記事パーマリンクにツイートボタンを表示します。 |
| Show Description | 「説明」欄に入力したテキストを、ブログタイトル下に表示します。 |
| Show Profile Image | ブログタイトルの隣にプロフィール画像を表示します。 |
| Google Analytics ID | Google Analytics を使う場合はここにトラッキングIDを入力します。（例： UA-0000000-0） |
| Google Author | ここに自分の Google+ プロフィールURLを入力することで、Google検索結果に著者情報を表示させることができます。（例：`https://plus.google.com/109963703491503474788`）詳しい情報は[Googleのヘルプ](http://support.google.com/webmasters/bin/answer.py?hl=ja&answer=1408986)を参照してください。 |
| OGP Facebook Admin Number | Facebok Admin ID（**fb:admins**） を入力します。自分の Admin IDの調べ方は、「fb:admins」とかで検索すると分かると思います。 |
| OGP Facebook Page URL | Facebook ページ持ってる人はここに Facebook ページの URL を入力してください。ブログ記事が Fb にシェアされたときに「いいね！」ボタンを表示できるみたいです。[詳しくは Fb 開発ブログ参照。](https://developers.facebook.com/blog/post/2013/06/19/platform-updates--new-open-graph-tags-for-media-publishers-and-more/)これか後述の`OGP Facebook URL`の**どちらか**を入力してください。 |
| OGP Facebook URL | Facebook アカウント持ってる人はここに Facebook の URL を入力してください。ブログ記事が Fb にシェアされたときに「フィードを購読」ボタンを表示できるみたいです。[詳しくは Fb 開発ブログ参照。](https://developers.facebook.com/blog/post/2013/06/19/platform-updates--new-open-graph-tags-for-media-publishers-and-more/)これか先述の`OGP Facebook Page URL`の**どちらか**を入力してください。 |
| Disqus Shortname | 記事にコメント欄を設置したい場合は、ここに Disqus Shortname を入力します。 |


## 3. ページを追加する

- Aboutページなど、トップページとは別の固定ページを作成したいときは「ページ管理」の「ページを作成」をクリックして固定ページを作成します。
- 「ページへのリンクを表示する」チェックボックスを入れると、ヘッダにそのページへのリンクが追加されます。

## 困ったときは

問い合わせる前にFAQを読みましょう。

### 一般的なよくある質問

よくある質問を下記にまとめたので参照してください。

* <https://github.com/sanographix/tumblr#faq>

## Changelog

### 1.0.2 (2014/05/25)

* `Blog Domain`の入力を不要にした
* タブレット端末でPhotosetの端が切れる問題を修正

### 1.0.1 (2014/01/02)

* `Blog Domain`を入力してない場合カノニカルと og:url を表示しないようにした

### 1.0.0 (2013/12/31)

* 公開


## Author

#### Showkaku Sano (sanographix)

Graphic designer from Kyoto.

* [http://www.sanographix.net/](http://www.sanographix.net/)
* [Twitter: @sanographix](https://twitter.com/sanographix)
* [GitHub: sanographix](https://github.com/sanographix)

本テーマの利用に関するいかなる被害・損害について、作者は一切の責任を負わないものとします。


## License

Copyright (c) SANOGRAPHIX.NET

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
