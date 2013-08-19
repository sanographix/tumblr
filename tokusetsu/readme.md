# Tokusetsu

#### Free responsive tumblr template for doujin music artists

Tokusetsuは、同人音楽CDの特設サイトが簡単に作れる無料Tumblrテンプレートです。  
HTMLの知識を必要とせず、フォームに情報を入力していくだけで特設サイトが作れます。  
[@sanographix](http://www.sanographix.net)がデザインしています。

## Demo

デモページはこちらです

[http://tokusetsu.tumblr.com/](http://tokusetsu.tumblr.com/)



## 1. インストールする

### 特設サイト用に新しくTumblrブログを作成する場合（推奨）

* [テーマのhtmlをコピー](https://github.com/sanographix/tumblr/blob/master/tokusetsu/tokusetsu.html)する
* Tumblrでブログを新規作成する
    * Tumblrは1つのアカウントで複数ブログ作れます
* Tumblrの設定 -> テーマカスタマイズ画面を開く
* もとのhtmlを削除してtokusetsu.htmlを貼り付ける


### 既存のTumblrブログを使う場合

* [テーマのhtmlをコピー](https://github.com/sanographix/tumblr/blob/master/tokusetsu/tokusetsu.html)する
* Tumblrの設定 -> テーマカスタマイズ画面を開く
* （元のhtmlはバックアップを取っておいたほうが良いです）
* もとのhtmlを削除してtokusetsu.htmlを貼り付ける

## 2. カスタマイズする

テーマカスタマイズ画面でカスタマイズできます。

### はじめに行う設定

* 「▾ 詳細設定」の「モバイルレイアウトを使用する」の **チェックを外す**
	* このチェックが外れていないとスマートフォンでうまく表示されないので必ず外してください。
	
### デザイン設定

* 必要な項目だけ入力すれば良いです。すべての項目を埋める必要はありません。
* ※tumblrの設定画面だとアルファベット順に並んでいます。

| 設定項目 | 説明 | 設定例 |
|-------|-----|-----|
| タイトル | CDのタイトルを入力します。 | THE EXAMPLES THE BEST |
| 説明 | CDについて簡単な説明を入力します。 | オリジナルアルバムです!! |


| 設定項目 | 説明 | 設定例 |
|-------|-----|-----|
| font | フォントを選択できます。 | 初期設定は Open Sans |
| Dark Theme | 黒いテーマに切り替えられます。 | |
| Enable Facebook Button | Facebookのいいね！ボタンを表示します。 | |
| Enable Tweet Button | ツイートボタンを表示します。 | |
| Enable Bookmark Button | はてなブックマークボタンを表示します。 | |
| Enable Plus1 Button | Google+「+1」ボタンを表示します。| |


| 設定項目 | 説明 | 設定例 |
|-------|-----|-----|
|Main Image | ヘッダに表示するメイン画像をアップロードできます。幅1170pxの画像を推奨します（高さは何でもいいです）。 | |
|Jacket | CDジャケット画像をアップロードできます。幅300pxで表示されます。| |
| Banner1, Banner2 | バナーを2種類までアップロードできます。 | |
|Background | 背景画像をアップロードできます。 | |


| 設定項目 | 説明 | 設定例 |
|-------|-----|-----|
|Circle Name | サークル名を入力します。 | |
|Circle URL | サークルのURLを入力します。| |
|Event Space Number | イベントのスペース番号を入力します。| 東ポ - 99 自宅警備員詰所 |
| Introduction Heading | 見出しです。CDのかっこいいキャッチフレーズとかを入力します。デフォルトでは「Introduction」となります。 | |
| Introduction | CDの説明やアピールしたいことを入力します。テキストエリアが狭いですが気持ち長めに書いたほうが見栄えが良いです。 | |
| Price | CDの価格を入力します。 |  |
| Release Date | 頒布日を入力します。 | 2199年12月34日　コミックエクストリームマーケット99 |
| Spec | 仕様を入力します。 | オリジナルCD（プレスCD） |
| Store01〜04 Name | 委託販売する場合は委託先を入力します。4つまで入力できます。　| |
| Store01〜04 URL | 委託販売する場合はストアの商品ページのURLを入力します。| |

| 設定項目 | 説明 | 設定例 |
|-------|-----|-----|
| Track01〜10 Title | 曲名を入力します。10曲まで入力できます。 | あずにゃんの歌 | 
| Staff01〜10 Description | 曲に補足説明がある場合は入力します。二次創作の場合は原曲とか書くと良さそうです。 | ボーカル：中野梓 |

| 設定項目 | 説明 | 設定例 |
|-------|-----|-----|
| Staff01〜10 Name | スタッフの名前を入力します。10人まで入力できます。 | |
| Staff01〜10 Role | スタッフ01〜10までの、それぞれの役割を入力します。 | Arrange, Vocal, etc |
| Staff01〜10 URL | スタッフ01〜10までの、それぞれのURLを入力します。webサイトを持っていないスタッフは空欄で良いです。 | |


| 設定項目 | 説明 | 設定例 |
|-------|-----|-----|
| Soundcloud Embed Code | Soundcloudを貼り付けたい時は貼り付けタグを入力します。貼り付けタグは、Widget Code の中に書いてあるコードの、https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F<<ここの8桁の数字>> です。<br/>![](http://media.tumblr.com/437b0f7a3cdb6465c568f068379ca845/tumblr_inline_mhzuz9A6YZ1qz4rgp.png) | 78607110 |
| Youtube Embed Code | Youtubeを貼り付けたい時は貼り付けタグを入力します。貼り付けタグは、「共有」-> 「埋め込みコード」の中に書いてあるコードの、http://www.youtube.com/embed/<<ここの文字列>> です。 | hQPbpjdfbJM |
| Nicovideo Embed Code | ニコニコ動画を貼り付けたい時は貼り付けタグを入力します。貼り付けタグは動画のURLに記載されているsm12345678のような文字列です。 | sm12345678 |
|Google Analytics ID|Googleアナリティクスを使う場合は、ここにトラッキングIDを入力してください。| UA-12345678-1 |
|Footer Text |ページの最後に表示するテキストを入力します。二次創作の場合は注意書きとかあると良いかもです | 当作品は二次創作作品であり、上海アリス幻樂団様とは一切関係ありません。 |

以上で基本的な設定は完了です。お疲れ様でした。

## 3. ページを追加する

- 配布物置き場ページなど、トップページとは別の固定ページを作成したいときは「ページ管理」の「ページを作成」をクリックして固定ページを作成します。
- 「ページへのリンクを表示する」チェックボックスを入れると、ヘッダにそのページへのリンクが追加されます。


## Special Thanks

デモページは[火曜さん](http://twitter.com/kayou_bi)のイラストを使用させていただきました。ありがとうございます！  
[http://www.pixiv.net/member_illust.php?id=62835](http://www.pixiv.net/member_illust.php?id=62835)

	
	
## よくある質問

##### Q: 曲が10曲以上あるから入力欄を増やしたいんだけど
* HTMLを直接編集してください。分からなかったらHTMLの分かるお友達などに手伝ってもらってください。

##### Q: 記事書いて投稿しても何も起きないよ
* ごめんなさい、仕様です。このテンプレートをブログ的に使うことはできません。ブログとして使いたい場合は別のTumblrテンプレートを使ってください。

##### Q: 商用利用してもいいですか？
* 問題ありません。どんどん利用してください。ただし Tumblr の利用規約に違反するコンテンツには使えません。

##### Q: HTML とか CSS を改変してもいいですか？
* はい。MIT ライセンスですのでライセンスの範囲内で自由にカスタマイズできます。

##### Q: このテーマを Wordpress に移植していいですか？
* はい、歓迎します。



## Changelog

### 1.0.1 (2013/2/10)

* ストアを4つまで指定できるように
* Introduction の見出しを指定できるように
* CSS調整


### 1.0.0 (2013/2/10)

* 公開


## Author

#### Showkaku Sano (sanographix)

Graphic designer from Kyoto.

* [http://www.sanographix.net/](http://www.sanographix.net/)
* [Twitter: @sanographix](https://twitter.com/sanographix)
* [GitHub: sanographix](https://github.com/sanographix)

本テーマの利用に関するいかなる被害・損害について、作者は一切の責任を負わないものとします。


<hr />

# Tokusetsu

#### Tokusetsu is free responsive tumblr template for doujin music artists

## Features

* Easy to create doujin music website
* Customizable
* Responsive design
* Embeddable Soundcloud, Youtube, Niconico player


## Usage

1. [Copy this HTML file](https://github.com/sanographix/tumblr/blob/master/tokusetsu/tokusetsu.html).
2. Create a new tumblr blog, and open design settings.
3. Press "Edit HTML", delete current HTML and paste Tokusetsu HTML.
4. Fill "Design settings".


## Options

### Recommended settings

* **Don't** use mobile layout


## License

Copyright (c) SANOGRAPHIX.NET

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.