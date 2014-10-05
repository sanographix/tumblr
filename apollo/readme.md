#Apollo

#### Free responsive tumblr template

Apollo は、穏やかに日記を書きたい人のための無料Tumblrテンプレートです。  
[@sanographix](https://twitter.com/sanographix)がデザインしています。

詳細はこちらの紹介ページをご覧ください。  
<http://sanographix.github.io/tumblr/apollo>

## Demo

デモページはこちらです

<http://apollo-theme.tumblr.com/>


## 1. インストールする

* [テーマのhtmlをコピー](https://github.com/sanographix/tumblr/blob/master/apollo/apollo.html)します。[ここからコピー](https://raw.github.com/sanographix/tumblr/master/apollo/apollo.html)するとやりやすい
* Tumblrのテーマカスタマイズ画面を開いて、「HTMLを編集」を押します。
* （元のhtmlはバックアップを取っておいたほうが良いです）
* もとのhtmlを削除してapollo.htmlを貼り付けて保存します。
    * 保存すると以前のテーマの設定はすべて消えます。
    
#### [注意] ZEN 2.0 からアップグレードする方へ

- このテーマは、ZEN 2.0との互換性は **ありません** 。Apolloテーマを適用すると、ZENで設定したオプション設定は消えます。

## 2. カスタマイズする

テーマカスタマイズ画面でカスタマイズできます。

### はじめに行うおすすめ設定

* 「▾ 詳細設定」の「モバイルレイアウトを使用する」の **チェックを外す**
	* このチェックを外すとレスポンシブ的なデザインになります。Tumblr 純正モバイルレイアウトを使いたい場合はチェックを入れたままにしてください。


### デザイン設定

下記の設定がカスタマイズできます。

| 設定項目 | 説明 |
|-------|-----|-----|
| Google Author | ここに自分のGoogle+プロフィールURLを入力することで、Google検索結果に著者情報を表示させることができます。（例：`https://plus.google.com/109963703491503474788`）詳しい情報は[Googleのヘルプ](http://support.google.com/webmasters/bin/answer.py?hl=ja&answer=1408986)を参照してください。 |
| Hatena Star Token | ここにはてなスターのトークンを入力すると、スターが押されたときにはてなの「あなたへのお知らせ」に通知が届くようになります。詳しい設定方法は[はてなスターのヘルプ](http://d.hatena.ne.jp/hatenastar/20070707/1184453490)を参照してください。 |
| Author | 自分の名前を入力します。著者名として記事に表示されます。 |
| Enable Recent Post Module | 記事パーマリンクに最新記事一覧を表示します。ただし、`Blog Domain`の設定項目が入力されていない場合は表示されません。 |
| Enable Like Button | 記事パーマリンクにFacebook Likeボタンを表示します。 |
| Enable Hatena Star | 記事にはてなスターボタンを表示します。 |
| Enable Plus1 Button | 記事パーマリンクにGoogle +1ボタンを表示します。 |
| Enable Tweet Button | 記事パーマリンクにツイートボタンを表示します。 |
| Enable Pocket Button | 記事パーマリンクにPocketボタンを表示します。 |
| Enable Syntax Highlight | シンタックスハイライトを有効にします。 |


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
* 使ってもいいですが Tumblr の設定ページで **必ず** 「NSFW指定」してください。

##### Q: ページが何も表示されない
* Tumblr か GitHub Pages が落ちていると思われます。しばらく待ってから再度開いてみてください。

##### Q: パーマリンクの下に最新記事モジュールが出ないんだけど
* 最新記事モジュールで表示するのは「記事タイトルが存在するテキスト投稿」のみです。他の投稿タイプには対応していません。

##### Q: なんでGoogle Analyticsに対応してないの？
* 現在、Google Analyticsにはトラッキングコードが2種類あり、テーマにトラッキングコードをあらかじめ埋め込むことが難しいからです。利用したい方は、Google Analyticsの手順に従ってトラッキングコードを直接埋め込んでください。

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

### 1.0.10 (2014/05/25)

* タブレット端末でPhotosetの端が切れる問題を修正

### 1.0.9 (2014/04/24)

* スマホから見たときのナビゲーションの挙動変更

### 1.0.8 (2014/04/21)

* {text: Blog Domain} の入力を不要にした

### 1.0.7 (2014/04/18)

* スマートフォンから見たときナビゲーションの色味変更

### 1.0.6 (2014/04/16)

* フォトセットをレスポンシブデザイン対応
    * iPhoneで正常に動作しなかったのでやっぱり戻した

### 1.0.5 (2014/03/28)

* ブラウザ幅狭いとき iframe がはみ出る問題を修正

### 1.0.4 (2014/03/25)

* ブラウザ幅狭いときの table の見え方を修正

### 1.0.3 (2014/03/20)

* 引用投稿で引用部分以外のフォントサイズが大きくなっていた問題を修正

### 1.0.2 (2014/03/10)

* 新着記事モジュール見出しのマージン調整

### 1.0.1 (2014/03/07)

* 固定ページではReblogボタンを表示しないように
 
### 1.0.0 (2014/03/05)

* とりあえず公開


## License

Copyright (c) SANOGRAPHIX.NET

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
