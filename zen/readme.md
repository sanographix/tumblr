# ZEN 2.0

#####  A ultra-simple and zen-style tumblr theme

ZENは、Tumblrで普通に日記を書く用途にこだわったテンプレートです。[@sanographix](https://twitter.com/sanographix)がデザインしています。詳細は[こちらの紹介ページ](http://sanographix.github.io/tumblr/zen)をご覧ください。  

## インストールする

ZENには2種類のバージョンがあり、それぞれインストール方法が異なります。

1. tumblrのテーマガーデンから自動でインストールする（推奨）
    - こちらからインストールしてください: <https://www.tumblr.com/theme/38954>
2. GitHubから手動でインストールする
    - インストール方法は後述します

## 機能の違いについて

テーマガーデン版, GitHub版の違いは下記の通りです。テーマガーデン版は海外ユーザー対応している関係で、国内向け機能を一部削減しています。

|/|テーマガーデン|GitHub|
|---|---|---|
|テーマの自動更新|○|×|
|はてなスター|×|○|
|はてなブックマークボタン|×|○|

<hr>

## GitHub版 Readme

ここから先は、GitHub版ZENのReadmeです。

## Demo

デモページはこちらです

[http://zen-theme.tumblr.com/](http://zen-theme.tumblr.com/)


## 1. インストールする

* [テーマのhtmlをコピー](https://github.com/sanographix/tumblr/blob/master/zen/zen.html)します。[ここからコピー](https://raw.github.com/sanographix/tumblr/master/zen/zen.html)するとやりやすい
* Tumblrのテーマカスタマイズ画面を開いて、「HTMLを編集」を押します。
* （元のhtmlはバックアップを取っておいたほうが良いです）
* もとのhtmlを削除してzen.htmlを貼り付けて保存します。
    * 保存すると以前のテーマの設定はすべて消えます。

## 2. カスタマイズする

テーマカスタマイズ画面でカスタマイズできます。

### はじめに行うおすすめ設定

* 「▾ 詳細設定」の「モバイルレイアウトを使用する」の **チェックを外す**
	* このチェックを外すとレスポンシブ的なデザインになります。Tumblr 純正モバイルレイアウトを使いたい場合はチェックを入れたままにしてください。


### デザイン設定

下記の設定がカスタマイズできます。

| 設定項目 | 説明 |
|-------|-----|-----|
| Enable Facebook Button | 記事パーマリンクにFacebookボタンを表示します。 |
| Enable Hatena Star | 記事にはてなスターボタンを表示します。 |
| Enable Plus1 Button | 記事パーマリンクにGoogle +1ボタンを表示します。 |
| Enable Tweet Button | 記事パーマリンクにツイートボタンを表示します。 |
| Enable Pocket Button | 記事パーマリンクにPocketボタンを表示します。 |
| Show Description | 「説明」欄に入力したテキストを、ブログタイトル下に表示します。 |
| Show Profile Image | ブログタイトルの隣にプロフィール画像を表示します。 |
| Title Logo | ブログタイトルのかわりに表示するタイトルロゴをアップロードできます。 |
| Google Analytics ID | Google Analytics を使う場合はここにトラッキングIDを入力します。（例： UA-0000000-0） |
| Google Author | ここに自分のGoogle+プロフィールURLを入力することで、Google検索結果に著者情報を表示させることができます。（例：`https://plus.google.com/109963703491503474788`）詳しい情報は[Googleのヘルプ](http://support.google.com/webmasters/bin/answer.py?hl=ja&answer=1408986)を参照してください。 |
| Hatena Star Token | ここにはてなスターのトークンを入力すると、スターが押されたときにはてなの「あなたへのお知らせ」に通知が届くようになります。詳しい設定方法は[はてなスターのヘルプ](http://d.hatena.ne.jp/hatenastar/20070707/1184453490)を参照してください。 |
| OGP Facebook Admin Number | Facebok Admin ID（**fb:admins**） を入力します。自分の Admin IDの調べ方は、「fb:admins」とかで検索すると分かると思います。 |
| OGP Facebook Page URL | Facebook ページ持ってる人はここに Facebook ページの URL を入力してください。ブログ記事が Fb にシェアされたときに「いいね！」ボタンを表示できるみたいです。[詳しくは Fb 開発ブログ参照。](https://developers.facebook.com/blog/post/2013/06/19/platform-updates--new-open-graph-tags-for-media-publishers-and-more/)これか後述の`OGP Facebook URL`の**どちらか**を入力してください。 |
| OGP Facebook URL | Facebook アカウント持ってる人はここに Facebook の URL を入力してください。ブログ記事が Fb にシェアされたときに「フィードを購読」ボタンを表示できるみたいです。[詳しくは Fb 開発ブログ参照。](https://developers.facebook.com/blog/post/2013/06/19/platform-updates--new-open-graph-tags-for-media-publishers-and-more/)これか先述の`OGP Facebook Page URL`の**どちらか**を入力してください。 |
| Enable Syntax Highlight | シンタックスハイライトを有効にします。 |
| Disqus Shortname | 記事にコメント欄を設置したい場合は、ここに Disqus Shortname を入力します。 |


## 3. ページを追加する

- Aboutページなど、トップページとは別の固定ページを作成したいときは「ページ管理」の「ページを作成」をクリックして固定ページを作成します。
- 「ページへのリンクを表示する」チェックボックスを入れると、ヘッダにそのページへのリンクが追加されます。

## 4. Tips

### 投稿タイプ「テキスト」で大きい画像を貼る

投稿タイプが「テキスト」のときに画像をアップロードしても、tumblrの仕様で幅500px未満に強制的にリサイズされてしまいます。大きい画像を貼りたいときは外部サイトに画像をアップロードしておいて、画像のURLを貼りつける方法を推奨します。アップロードする外部サイトはFlickrかGoogle+がおすすめです。

	
## よくある質問

##### Q: このテーマ使いたいけど HTML わかんないです
* HTML を編集する必要はありません。コピペだけで使えます。
 
##### Q: 商用利用してもいいですか？
* 問題ありません。どんどん利用してください。ただし Tumblr の利用規約に違反するコンテンツには使えません。

##### Q: 本当に無料ですか？
* はい、無料です。

##### Q: HTML とか CSS を改変してもいいですか？
* はい。MIT ライセンスですのでライセンスの範囲内で自由にカスタマイズできます。
    * なお、テーマを改変した場合はサポート対象外とします。
    
##### Q: このテーマを Wordpress に移植していいですか？
* はい、歓迎します。

##### Q: アダルトコンテンツに使っていいですか？
* 使ってもいいですが Tumblr の設定ページで「NSFW指定」してください。

##### Q: ページが何も表示されない
* Tumblr か GitHub Pages が落ちていると思われます。しばらく待ってから再度開いてみてください。

##### Q: Disqusコメントフォームが真っ白なんですけど
* こういう状態


![](https://31.media.tumblr.com/fe384cb30df6a0291753b25b2d4eb69f/tumblr_inline_my253rnbRm1qaxsyz.png)

* Disqus設定画面で、カラースキームが「for Light Background」になっているか確認してください。まれに「Dark」になっている場合があるようです。

##### Q: 「ページを作成」のリダイレクトがうまくいかないです
* tumblr 側でたまに起きる不具合のようです。以下のことを試してください。
    * 別のURLを指定する。
    * デフォルトテーマに戻してページが作成できるか確認する。

##### Q: なんか見た目が崩れてます / 画像の端が切れて表示されます

* 最新バージョンのテーマ HTML を再度 Tumblr に適用してみてください。
    * この Tumblr テーマは継続的に修正・変更を行っています。そのため、古いバージョンの HTML を使い続けているとスタイル崩れが生じる場合があります
    * それでも直らない場合はお問い合わせください
    * テーマの更新情報は[ブログ](http://memo.sanographix.net/)でお知らせしています。   

##### Q: 作者に寄付したいです

* もしこのテーマを気に入っていただけたら、何か寄付していただけると大変嬉しいです（任意です）
    * <http://www.amazon.co.jp/registry/wishlist/2QLOE7F0CGUSX>

##### Q: 上記以外の質問

* [メールフォーム](http://www.sanographix.net/contact/)よりお問い合わせください。なお、HTML/CSS/JSのカスタマイズについてのサポートは行っていません。    

## Author

#### Showkaku Sano (sanographix)

Graphic designer from Kyoto.

* [http://www.sanographix.net/](http://www.sanographix.net/)
* [Twitter: @sanographix](https://twitter.com/sanographix)
* [GitHub: sanographix](https://github.com/sanographix)

本テーマの利用に関するいかなる被害・損害について、作者は一切の責任を負わないものとします。


## Changelog

### 2.2.2 (2014/05/25)

* タブレット端末でPhotosetの端が切れる問題を修正

### 2.2.1 (2014/04/21)

* {text: Blog Domain}の入力を不要にした

### 2.2.0 (2014/04/16)

* フォトセットをレスポンシブデザイン対応
    * iPhoneで正常に動作しなかったのでやっぱり戻した

### 2.1.7 (2014/03/25)

* ブラウザ幅狭いときの table の見え方を修正

### 2.1.6 (2014/03/14)

* はてなスターを新しいデザインに（はてなブログと同一のもの）/ デフォルトで有効にする

### 2.1.5 (2014/03/07)

* 固定ページではReblogボタンを表示しないように

### 2.1.4 (2014/02/19)

* ソーシャルボタンの読み込み用スクリプトを純正のにする
	* like button の読み込み失敗が高確率で起きてた為

### 2.1.3 (2014/02/18)

* ナビゲーションの上マージンをちょっと拡げる
	* tumblrのフォローボタンとかが被る対策

### 2.1.2 (2014/01/07)

* Reblog 投稿ではてなスターが二重に表示される不具合を修正
* `Google Author`が設定されてないときは `link rel="author"`を出さないように
*  meta タグのコード、`Blog Domain`が設定されてないときを考慮してちょっと整理

### 2.1.1 (2013/12/12)

* `Blog Domain`が設定されてないときは canonical とかの meta タグを出さないように

### 2.1.0 (2013/12/10)

* ページャにページ番号を出した

### 2.0.3 (2013/12/10)

* ヘッダナビゲーションの RSS リンクを消せるようにした
	* RSS そんな使ってない人いなそう、固定ページたくさん作る人だと邪魔な気がした

### 2.0.2 (2013/12/8)

* Gist を貼り付けたときにシンタックスハイライトとスタイルが崩れるのを修正

### 2.0.1 (2013/11/8)

* ソーシャルボタンに Pocket を追加

### 2.0.0 (2013/10/29)

* これまでで最大のアップデートです
* 新機能
	* CSS, JS をチューニングしてページ読み込み速度を大幅に高速化
	* 新しい`.btn`デザイン
	* 新しい`blockquote`デザイン
	* 新しい`hr`デザイン
	* 新しい`pre`デザイン
	* ブラウザ幅に合わせて文字サイズが変化
* 仕様変更
	* 画像に影をつけるのをやめた
	* og-image をより大きい画像に
	* like, reblog ボタンを少し大きく
	* font-awesome を読み込まないようにした
	* canonical, og:description が正しく表示されないことがあったのを修正
	* tagページ、dayページは検索エンジンにインデックスしないように
	* htmlの主要な要素に`role`属性を付与
	* オプションの名称を`{text:OGP Toppage URL}`から`{text:Blog Domain}`に変更

### 1.2.8 (2013/10/22)

* `Hatena Star Token`が正しく動いてなかったのを修正（Typoしてたすみません）

### 1.2.7 (2013/09/23)

* flickr で max-width 指定したとき高さがおかしくなるの修正

### 1.2.6 (2013/08/24)

* IE10で`img.noshadow`が効かない不具合を修正
* オプションから「Enable Image Shadow」で画像の影の有無を指定できるようにした

### 1.2.5 (2013/07/25)

* Facebook の新しい OGP `article:publisher` とかに対応

### 1.2.4 (2013/06/27)

* iTunes Linker にスタイルをあてた

### 1.2.3 (2013/05/26)

* タイトルのない記事は本文の先頭を`title`属性として使うようにした

### 1.2.2 (2013/05/04)

* パーマリンクに Like & Reblog ボタンを表示

### 1.2.1 (2013/04/03)

* スマートフォンでヘッダナビゲーションのリンクが押しづらかったのを修正

### 1.2.0 (2013/3/24)

* 投稿タイプ Answer にスタイルあたってなかったのを修正
* HTML の整理
* PRE タグの途中改行はブラウザ幅が狭いときにだけするように
* video タグにも img タグと同様のスタイルをあてる

### 1.1.2 (2013/3/23)

* 「もっと読む」にスタイルをあてた
* `hBookmark-widget-counter` （○users の画像）には影をつけない
* はてなスターの設定が正しく行われていなかった不具合を修正

### 1.1.1 (2013/3/19)

* Twitter Cards の`twitter:image`にユーザーアイコンを出す

### 1.1.0 (2013/3/17)

* canonical URL を設定
* トップページで`og:url`が空欄になるのでオプションに入力項目を追加
	* Tumblrの変数でトップページを示すタグがないので手作業で入れる必要があり、このような仕様にしています
* 投稿タイプが引用のときのタグを`h3`じゃなくて`blockquote`にする
* 長い引用のときはフォントサイズを小さくする
* リブログ元のユーザのアイコンを表示するように / 最初に投稿した人も表示するようにした
* Disqus 対応
* リストを入れ子にしたときのマージン調整
 
### 1.0.9 (2013/3/16)

* twilog で「ソースを貼り付け」したときにスタイルをあてるようにした
* sticky と Amazlet の背景色を統一する

### 1.0.8 (2013/3/14)

* `<hr/>`要素にスタイルをあてた
* 文中の`<code>`要素にスタイルをあてた


### 1.0.7 (2013/3/8)

* img要素を class="noshadow" と指定すると画像に影がつかないようにした
* ブログタイトル画像がカラム幅を超えてはみ出る問題を修正
	* テーマHTMLの更新が必要です

### 1.0.6 (2013/3/2)

* Sticky と Amazlet 貼り付けたときにスタイルをあてた
* CSS調整


### 1.0.5 (2013/3/1)

* VideoとAudioの投稿でキャプションが表示されない不具合を修正
	* テーマHTMLの更新が必要です

### 1.0.4 (2013/2/27)

* pre タグの中をシンタックスハイライトするようにした（[google-code-prettify](https://code.google.com/p/google-code-prettify/)）
	* テーマHTMLの更新が必要です


### 1.0.3 (2013/2/25)

* はてなスターの表示位置をタイトルじゃなくて記事下にした
	* 投稿タイプが Photo とかだとタイトル無いので

### 1.0.2 (2013/2/24)

* Photoset をスマートフォンで見たときに画像が正しく表示されるようにした


### 1.0.1 (2013/2/24)

* [class="btn" で記事中にボタンを出せる](http://memo.sanographix.net/post/43857022608)
* [i class="icon-hoge" で記事中にアイコンを出せる](http://memo.sanographix.net/post/43857022608)
* Font-Awesome のIE7対応
* CSS調整


### 1.0.0 (2013/2/23)

* 公開



<hr />

# ZEN

#### ZEN is free responsive, minimal tumblr template.

## Features

* Ultra simple design
* Customizable
* Responsive design

## Usage

1. [Copy this HTML file](https://raw.github.com/sanographix/tumblr/master/zen/1.x/zen-en.html).
2. Go to Tumblr dashboard, and open [design settings](http://www.tumblr.com/customize).
3. Press "Edit HTML", delete current HTML and paste ZEN HTML.
4. Press "Save".
    - Notice: Previous theme settings will be deleted.


## Options

### Recommended settings

* Go to "▾ ADVANCED", and **Uncheck** "Use optimized mobile layout"


## License

Copyright (c) SANOGRAPHIX.NET

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
