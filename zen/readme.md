# ZEN

#### Free responsive tumblr template

ZENは、Tumblrで普通に日記を書く用途にこだわったテンプレートです。  
[@sanographix](http://www.sanographix.net)がデザインしています。

詳細はこちらの紹介ページをご覧ください。  
[http://sanographix.github.com/tumblr/zen](http://sanographix.github.com/tumblr/zen)

## Demo

デモページはこちらです

[http://zen-theme.tumblr.com/](http://zen-theme.tumblr.com/)


## 1. インストールする

* [テーマのhtmlをコピー](https://github.com/sanographix/tumblr/blob/master/zen/zen.html)する
* Tumblrのダッシュボードから、設定 -> テーマカスタマイズ画面を開く
* （元のhtmlはバックアップを取っておいたほうが良いです）
* もとのhtmlを削除してzen.htmlを貼り付けて保存する

## 2. カスタマイズする

テーマカスタマイズ画面でカスタマイズできます。

### はじめに行う設定

* 「▾ 詳細設定」の「モバイルレイアウトを使用する」の **チェックを外す**
	* このチェックが外れていないとレスポンシブ的なデザインにならないです。


### デザイン設定

| 設定項目 | 説明 |
|-------|-----|-----|
| Enable Facebook Button | 記事パーマリンクにFacebookボタンを表示します。 |
| Enable Hatena Star | 記事にはてなスターボタンを表示します。 |
| Enable Plus1 Button | 記事パーマリンクにGoogle +1ボタンを表示します。 |
| Enable Tweet Button | 記事パーマリンクにツイートボタンを表示します。 |
| Show Description | 「説明」欄に入力したテキストを、ブログタイトル下に表示します。 |
| Show Profile Image | ブログタイトルの隣にプロフィール画像を表示します。 |
| Title Logo | ブログタイトルのかわりに表示するタイトルロゴをアップロードできます。 |
| Google Analytics ID | Google Analytics を使う場合はここにトラッキングIDを入力します。 |
| Google Author | ここに自分のGoogle+プロフィールURLを入力することで、Google検索結果に著者情報を表示させることができます。詳しい情報は[Googleのヘルプ](http://support.google.com/webmasters/bin/answer.py?hl=ja&answer=1408986)を参照してください。 |
| Hatena Star Token | ここにはてなスターのトークンを入力します。詳しい設定方法は[はてなスターのヘルプ](http://d.hatena.ne.jp/hatenastar/20070707/1184453490)を参照してください。 |
| OGP Facebook Admin Number | Facebok Admin ID を入力します。 Admin IDの調べ方は検索するといろいろ出てきます。 |
| OGP Toppage URL | トップページのURLを`http://~~`から入力します（http://example.tumblr.com）。`og:url`でトップページのURLを認識させる必要があるため、なるべく入力してください。 |
| Enable Syntax Highlight | シンタックスハイライトを有効にします。 |
| Disqus Shortname | Disqus を有効にしたい場合は Disqus Shortname を入力します。 |


## 3. ページを追加する

- Aboutページなど、トップページとは別の固定ページを作成したいときは「ページ管理」の「ページを作成」をクリックして固定ページを作成します。
- 「ページへのリンクを表示する」チェックボックスを入れると、ヘッダにそのページへのリンクが追加されます。

## 4. Tips

### 画像に影をつけないオプション

画像を貼るときに class="noshadow" と指定すると影がつきません。

	<img src="~~~.jpg" class="noshadow">

### 投稿タイプ「テキスト」で大きい画像を貼る

投稿タイプが「テキスト」のときに画像をアップロードしても、tumblrの仕様で幅500px未満に強制的にリサイズされてしまいます。大きい画像を貼りたいときは外部サイトに画像をアップロードしておいて、画像のURLを貼りつける方法を推奨します。アップロードする外部サイトはGoogle+が容量制限がなくておすすめです。



## Changelog

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

1. [Copy this HTML file](https://github.com/sanographix/tumblr/blob/master/zen/zen.html).
2. Go to Tumblr dashboard, and open design settings.
3. Press "Edit HTML", delete current HTML and paste ZEN HTML.


## Options

### Recommended settings

* **Don't** use mobile layout


## Author

#### Showkaku Sano (sanographix)

Graphic designer from Kyoto.

* [http://www.sanographix.net/](http://www.sanographix.net/)
* [Twitter: @sanographix](https://twitter.com/sanographix)
* [GitHub: sanographix](https://github.com/sanographix)