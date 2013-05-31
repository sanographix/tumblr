# Illustfolio 2

#### Free responsive tumblr theme for illustrators

llustfolio 2 は、イラストのポートフォリオサイトに特化した無料 Tumblr テンプレートです。  
Tumblr に画像をアップロードするだけで簡単にポートフォリオサイトが作れます。  
[@sanographix](http://www.sanographix.net) がデザインしています。

## デモページを見る

デモページはこちらです。

[http://illustfolio2.tumblr.com/](http://illustfolio2.tumblr.com/)


## インストール手順

1. [テーマのhtmlをコピー](https://github.com/sanographix/tumblr/blob/master/illustfolio2/illustfolio2.html)します。
2. Tumblr の[テーマカスタマイズ画面](http://www.tumblr.com/customize)を開いて、「HTMLを編集」を押します。
3. (オプション) 元の html のバックアップをとっておきます。
4. もとの html を削除して `illustfolio2.html` を貼り付けて保存します。

#### Illustfolio 1 からアップグレード方への注意

* Illustfolio 1 にあるカスタマイズ項目「Your Profile」は、 Illustfolio 2 では廃止されました。上記手順"4"のHTMLを上書き保存すると項目ごと削除されます。必要であれば自己紹介文のバックアップをとってください。Illustfolio 2 で自己紹介ページを作りたい場合は固定ページを作ってください。

## カスタマイズ手順

### ステップ1: テーマカスタマイズ画面

Tumblr の[テーマカスタマイズ画面](http://www.tumblr.com/customize)を開いて、下記の設定をします。

* 「▾ 詳細設定」の「1ページあたりの投稿数」を「8」か「12」に
* 「▾ 詳細設定」の「モバイルレイアウトを使用する」の **チェックを外す**
	* このチェックが外れていないとレスポンシブ的なデザインにならないです。
	* ただし、スマートフォンから見たとき重いと思ったらチェックをつけても構いません。

### ステップ2: APIキーの取得

パーマリンクに他の記事のサムネイルを表示させるために、Tumblr API キーの登録が必要です。

1. [API キー登録ページ](http://www.tumblr.com/oauth/apps)へ行き、「アプリを登録する」を押します。
2. 下図のように「Application name」「Administrative contact email」「Default callback URL」のフォームを埋めて「Register」を押します。
3. OAuth Consumer Key: ○○ と書いてある文字列をメモします。
 
<img src="http://static.tumblr.com/xlsgtjb/kW8mnm6oj/b5f2fe5c93e5fe6d5ac43df5e9298209.png" width="300px">


### ステップ3: テーマカスタマイズ画面のデザイン設定

ふたたび Tumblr の[テーマカスタマイズ画面](http://www.tumblr.com/customize)を開いて、下記の設定をします。

| 設定項目 | 説明 |
|-------|-----|
|Blog Domain|タグ一覧や最新記事取得のためにブログドメインを入力してください。（例： foo.tumblr.com）|
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
|Background|背景画像をアップロードできます。|
|Show Exif|画像の Exif 情報を表示します。写真ブログに便利です。|

これで設定は終了です。お疲れ様でした。


## イラストを投稿する

* [ダッシュボード](tumblr.com/dashboard) を開いて、「画像」形式で投稿します。
    * そのほかの投稿形式にも対応していますが、イラストは画像形式で投稿するのをおすすめします。

### 画像にタイトルを設定する

Tumblrは画像投稿にタイトルを設定できません。そこで、キャプション欄に見出しタグを設けることでタイトルっぽくできます。タイトルの書き方は下記を参考にしてください。

	<h2>画像のタイトル</h2>
	<p>画像のキャプション画像のキャプション画像のキャプション…</p>


## 自己紹介ページを作る

- 自己紹介ページやリンク集など、投稿とは別の固定ページを作成したいときは[テーマカスタマイズ画面](http://www.tumblr.com/customize)の「ページを作成」をクリックしてページを作成します。
- 「ページへのリンクを表示する」チェックボックスを入れると、ヘッダのナビゲーションにそのページへのリンクが追加されます。


## Special Thanks

デモページは[火曜さん](http://twitter.com/kayou_bi)のイラストを使用させていただきました。ありがとうございます！  
[http://www.pixiv.net/member_illust.php?id=62835](http://www.pixiv.net/member_illust.php?id=62835)


## Changelog


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
		

## FAQ

* Q:ライセンスは何ですか？
	* A: MIT ライセンスです。
* Q:このテーマを Wordpress に移植していいですか？
	* A:歓迎します。


## Author

#### Showkaku Sano (sanographix)

Graphic designer from Kyoto.

* [http://www.sanographix.net/](http://www.sanographix.net/)
* [Twitter: @sanographix](https://twitter.com/sanographix)
* [GitHub: sanographix](https://github.com/sanographix)