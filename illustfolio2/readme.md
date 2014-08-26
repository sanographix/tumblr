![](http://sanographix.github.io/tumblr/illustfolio2/images/screenshot-mini.png)

# Illustfolio 2

#### Free responsive tumblr theme for illustrators

llustfolio 2 は、イラストのポートフォリオサイトに特化した無料 Tumblr テンプレートです。  
Tumblr に画像をアップロードするだけで簡単にポートフォリオサイトが作れます。  
[@sanographix](https://twitter.com/sanographix) がデザインしています。

## デモページを見る

デモページはこちらです。

[http://illustfolio2.tumblr.com/](http://illustfolio2.tumblr.com/)


## インストール手順

事前に [tumblr のユーザー登録](https://www.tumblr.com/register)を行なってください。

1. [テーマのhtmlファイル](https://github.com/sanographix/tumblr/blob/master/illustfolio2/illustfolio2.html)をコピーします。[ここからコピー](https://raw.github.com/sanographix/tumblr/master/illustfolio2/illustfolio2.html)するとやりやすい
2. Tumblr の[テーマカスタマイズ画面](http://www.tumblr.com/customize)を開いて、「HTMLを編集」を押します。
3. (オプション) 元の html のバックアップをとっておきます。
4. もとの html を削除して `illustfolio2.html` を貼り付けて保存します。
5. 下記の「カスタマイズ手順」に従って設定を行います。

#### Illustfolio 1 からアップグレードする方への注意

* Illustfolio 1 にあるカスタマイズ項目「Your Profile」は、 Illustfolio 2 では廃止しました。上記手順"4"のHTMLを上書き保存すると項目ごと削除されます。必要であれば自己紹介文のバックアップをとってください。Illustfolio 2 で自己紹介ページを作りたい場合は固定ページを作ってください。

## カスタマイズ手順

テーマの機能を正しく使用できるようにするため、ステップ1から順に必ず設定を行なってください。

### ステップ1: テーマカスタマイズ画面

Tumblr の[テーマカスタマイズ画面](http://www.tumblr.com/customize)を開いて、下記の設定をします。

* 「▾ 詳細設定」の「1ページあたりの投稿数」を「8」か「12」に
* 「▾ 詳細設定」の「モバイルレイアウトを使用する」の **チェックを外す**
	* このチェックが外れていないとレスポンシブ的なデザインにならないです。
	* ただし、スマートフォンから見たとき重いと思ったらチェックをつけても構いません。

### ステップ2: APIキーの取得

パーマリンクに他の記事のサムネイルを表示させるために、Tumblr API キーの登録が必要です。このステップを省略すると他記事サムネイル表示機能は使えません。

1. [API キー登録ページ](http://www.tumblr.com/oauth/apps)へ行き、「アプリを登録する」を押します。
2. 下図のように「Application name」「Administrative contact email」「Default callback URL」のフォームを埋めて「Register」を押します。
3. OAuth Consumer Key: ○○ と書いてある文字列をメモします。
 
<img src="http://static.tumblr.com/xlsgtjb/BoXmo0i85/apikey-register.png" width="300px">


### ステップ3: テーマカスタマイズ画面のデザイン設定

ふたたび Tumblr の[テーマカスタマイズ画面](http://www.tumblr.com/customize)を開いて、下記の設定をします。

| 設定項目 | 説明 |
|-------|-----|
|Disqus Shortname|記事にコメント欄を設置したい場合は、ここに Disqus Shortname を入力します。|
|Google Analytics ID|Googleアナリティクスを使いたい場合は、ここにトラッキングIDを入力します。（例： UA-0000000-0）|
|Tumblr API Key|ステップ2で取得した API キーを入力します。|

| 設定項目 | 説明 |
|-------|-----|
|Your Name|あなたのハンドルネームを入力してください。|
|Your Facebook Username|あなたの Facebook アカウントを入力してください。|
|Your Twitter Username|あなたの Twitter アカウントを入力してください。|
|Your Google Plus ID|あなたの Google+ ID を入力してください。|
|Your Pixiv ID|あなたの Pixiv ID を入力してください。|


| 設定項目 | 説明 |
|-------|-----|
|Font|フォントを選べます。|
|Background|背景画像をアップロードできます。|
|Show Exif|画像の Exif 情報を表示します。写真ブログに便利です。|

これで設定は終了です。お疲れ様でした。


## イラストを投稿する

* [ダッシュボード](tumblr.com/dashboard) を開いて、「画像」形式で投稿します。
    * そのほかの投稿形式にも対応していますが、イラストは画像形式で投稿するのをおすすめします。

### 画像にタイトルを設定する

Tumblrは画像投稿にタイトルを設定できません。そこで、キャプション欄に見出しタグを設けることでタイトルっぽくできます。タイトルの書き方は下記を参考にしてください。

#### HTML編集モード

	<h2>画像のタイトル</h2>
	<p>画像のキャプション画像のキャプション画像のキャプション…</p>

#### Markdownモード

	## 画像のタイトル
	
	画像のキャプション画像のキャプション画像のキャプション…

Markdown については[こちらの解説記事](http://blog.2310.net/archives/6)が詳しいです。



## 自己紹介ページを作る

- 自己紹介ページやリンク集など、投稿とは別の固定ページを作成したいときは[テーマカスタマイズ画面](http://www.tumblr.com/customize)の「ページを作成」をクリックしてページを作成します。
- 「ページへのリンクを表示する」チェックボックスを入れると、ヘッダのナビゲーションにそのページへのリンクが追加されます。


## Special Thanks

デモページは[火曜さん](http://twitter.com/kayou_bi)のイラストを使用させていただきました。ありがとうございます！  
[http://www.pixiv.net/member_illust.php?id=62835](http://www.pixiv.net/member_illust.php?id=62835)



## よくある質問

##### Q: このテーマ使いたいけど HTML わかんないです
* HTML を編集する必要はありません。コピペだけで使えます。

##### Q: Video とか Link 投稿だと index ページでタイトルもサムネイルも出ないんだけど？
* ごめんなさい、Tumblr テーマの制限によって表示できない仕様です。

##### Q: 本当に無料ですか？
* はい、無料です。

##### Q: 商用利用してもいいですか？
* 問題ありません。どんどん利用してください。ただし Tumblr の利用規約に違反するコンテンツには使えません。


##### Q: HTML とか CSS を改変してもいいですか？
* はい。MIT ライセンスですのでライセンスの範囲内で自由にカスタマイズできます。
    * なお、テーマを改変した場合はサポート対象外とします。
    
##### Q: アダルトコンテンツに使っていいですか？
* 使ってもいいですが Tumblr の設定ページで「NSFW指定」してください。

#####  Q: このテーマを Wordpress に移植していいですか？
* はい、歓迎します。

##### Q: ページが何も表示されないんだけど壊れてる？
* Tumblr か GitHub Pages が落ちていると思われます。しばらく待ってから再度開いてみてください。

##### Q: パーマリンクに他の記事のサムネイルが出るって聞きましたけど出ません
* オプションの`Tumblr API Key`が未入力ではありませんか？ 上記手順の「ステップ2: APIキーの取得」を行ってください。 

##### Q: Disqusコメントフォームが真っ白なんですけど
* Disqus設定画面で、カラースキームが「for Light Background」になっているか確認してください。まれに「Dark」になっている場合があるようです。

##### Q: スライドショーの画像がなんか荒いです
* 画像の解像度が足りないと思われます。横 1180px 以上の画像を投稿されることをおすすめします。

##### Q: スライドショーの画像のトリミング位置って指定できないの？

* さまざまな構図のイラストを出来るだけ見栄え良く見せるため、
多くのイラストで顔が描かれているであろう「画面中央より少し上側」をスライドショーに表示しています。
この表示位置は変更できません。できるだけ設定項目を減らして簡単に使えることを優先しているためです。

##### Q: なんか見た目が崩れてます / 画像の端が切れて表示されます

* 最新バージョンのテーマ HTML を再度 Tumblr に適用してみてください。
    * この Tumblr テーマは継続的に修正・変更を行っています。そのため、古いバージョンの HTML を使い続けているとスタイル崩れが生じる場合があります
    * それでも直らない場合はお問い合わせください
    * テーマの更新情報は[ブログ](http://memo.sanographix.net/)でお知らせしています。   

##### Q: 作者に寄付したいです

* もしこのテーマを気に入っていただけたら、何か寄付していただけると大変嬉しいです（任意です）
    * <http://www.amazon.co.jp/registry/wishlist/2QLOE7F0CGUSX>
    

## Author

#### Showkaku Sano (sanographix)

Graphic designer from Kyoto.

* [http://www.sanographix.net/](http://www.sanographix.net/)
* [Twitter: @sanographix](https://twitter.com/sanographix)
* [GitHub: sanographix](https://github.com/sanographix)

本テーマの利用に関するいかなる被害・損害について、作者は一切の責任を負わないものとします。


## Changelog

### 2.3.1 (2014/08/27)
* `Blog Domain`オプションを廃止
    * ブログURLを取得するテンプレートタグがTumblr側で実装されたため
    
### 2.3.0 (2014/04/16)

* フォトセットをレスポンシブデザイン対応
    * （追記）不具合があったので元の状態に戻した

### 2.2.0 (2013/12/09)

* js の位置を下にしてページ読み込み速度を高速化

### 2.1.0 (2013/07/03)

* タグリストと最新記事を自動で表示するようにした

### 2.0.3 (2013/06/11)

* メタ情報が長いときテーブルからはみ出ないようにした

### 2.0.2 (2013/06/09)

* フォントを変更可能にした

### 2.0.1 (2013/06/01)

* 1投稿しかしてないときにページャが崩れる不具合を修正
* Exif 情報の絞りの欄をなぜかタグって書いてた（凡ミスですすみませんでした）

### 2.0.0 (2013/05/31)

* 公開
* 1.x からの変更点
	* 新しくなったデザイン
	* 最新記事のサムネイル表示
	* パーマリンクの大幅な改善
	* すべての投稿タイプに対応
	* Reblogの場合オリジナルの投稿元を表示
	* 画像の表示幅の拡大
	* Disqus 対応
	* タグ一覧表示
	* Exif 表示
	* 背景画像変更可
	* OGP 設定済
	* ソースコードの大幅な整理

## License

Copyright (c) SANOGRAPHIX.NET

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
