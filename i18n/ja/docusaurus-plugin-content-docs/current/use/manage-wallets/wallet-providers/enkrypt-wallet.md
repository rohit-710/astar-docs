---
sidebar_position: 1
title: Enkrypt Wallet
---

# Enkrypt Wallet

![](https://i.imgur.com/imLQ4G4.png)

## Enkrypt の Astar への接続

---

Enkrypt は、MEW（MyEtherWallet）のチームによって開発された、マルチチェーン、ノンカストディアル、オープンソースの Web3 ブラウザウォレットです。Enkrypt を使用すると、ユーザーや開発者はアカウントの生成、トークンや NFT の管理、および Astar や EVM チェーン上の dApps とのやりとりが可能です。Astar に Enkrypt を接続するための手順は、このガイドに従ってください。

![](https://i.imgur.com/c3yv69l.jpg)

---

## Enkrypt のインストール

まず最初に、拡張機能をインストールする必要があります。お使いのブラウザに対応したダウンロードリンクは[Enkrypt.com](https://www.enkrypt.com/?mtm_campaign=Interacting%20with%20Astar%20using%20Enkrypt)からご確認いただけます。右上の download ボタンをクリックしてください。

![](https://i.imgur.com/clC5IOa.png)

以下のようなダウンロードページにリダイレクトされます。ブラウザごとにダウンロードページが少々異なることがあります。

![](https://i.imgur.com/cqCevR0.png)

お使いのブラウザに拡張機能を追加してください。Enkrypt のダウンロードとインストールが完了したら、準備完了です。

---

## Wallet の生成

拡張機能を初めて開いたときには、Enkrypt の簡単な説明が含まれたウィンドウが表示されます。新しいウォレットを作成するか、既存のウォレットを復元することができます。まずは新しいウォレットを作成してみましょう。

![](https://i.imgur.com/aSdrCXp.png)

「Create a new wallet」をクリックした後、パスワードを入力できます。テキストボックス内の「斜線の入った目のシンボル」をクリックすると、入力内容の表示、非表示を切り替えることができます。希望するパスワードを入力し、「Next」をクリックします。その後、確認のために再びパスワードを入力するように求められます。これが完了したら、秘密のリカバリーフレーズが見られるようになります。

![](https://i.imgur.com/rdAfVXa.png)

![](https://i.imgur.com/npuMOQk.png)

以下のウィンドウが表示されます。ただし、秘密のリカバリーフレーズはユーザーごとに異なるため、下に表示されている言葉と同じものは表示されません。あなただけのランダムな 12 個の単語が表示されるはずです。秘密のリカバリーフレーズを書き留め、安全な場所に保管してください。どんな理由があっても他の人にフレーズを教えないでください。このフレーズはあなたのウォレットへの鍵で、これがあればウォレット内の暗号資産にアクセスすることができるようになります。終了したら、「Next」をクリックしてください。

![](https://i.imgur.com/2U2MY1b.png)

秘密のリカバリーフレーズを正しく書き留めたかどうかを確認するために、ポップアップが表示されます。リカバリーフレーズを元に正しい単語を選択し、その後「Next」をクリックしてください。

![](https://i.imgur.com/wTsgdb7.png)

秘密のリカバリーフレーズを設定したら、ウォレットは準備完了です。

この時点で、Enkrypt がノンカストディアルであり、ウォレットの鍵を持っているのはあなただけであることを強調しておきます。鍵さえあれば、ウォレット内の資産はあなたのもの。Enkrypt は資産の保管権を持たず、個人のユーザーデータを収集も販売もしません。軽いトーンで言えば、Enkrypt の拡張機能をブラウザにピン留めするのを忘れないでください！

---

## Wallet の復元について

すでに MetaMask や Polkadot.js などのウォレットを持っている場合、それを Enkrypt にインポートすることができます。それを行うには、以下の手順に従ってください。

「Restore existing wallet」をクリックします。

![](https://i.imgur.com/PLhSJyE.png)

次に、「Use recovery phrase」をクリックしてください。

![](https://i.imgur.com/vhpvq53.png)

すでにお持ちのウォレットの 12 から 24 文字のリカバリーフレーズを入力し、「Next」をクリックしてください。

![](https://i.imgur.com/bNbxr31.png)

リカバリーフレーズを入力したら、ウォレットの準備ができました！いつでもアクセスできるようにするために、Enkrypt を拡張機能のバーにピン留めすることを忘れないでください！

![](https://i.imgur.com/9Sd1Xah.png)

![](https://i.imgur.com/tzvoInk.png)

ウォレットのセットアップが完了するとすぐに、以下に示されるポップアップが表示されます。進むにはパスワードを入力してください。もしもパスワードを忘れた場合は、画面下部にある「I forgot my password」（パスワードを忘れた）というリンクをクリックして、パスワードのリカバリープロセスを開始できます。Enkrypt はパスワードを回復できませんので、注意してください。パスワードをリセットするにはリカバリーフレーズが必要です。

![](https://i.imgur.com/MPznxPI.png)

---

## Enkrypt の Astar への接続

Enkrypt をインストールし、ウォレットを作成または復元したら、左下にある「Manage networks」ボタンをクリックして Astar に接続します。

![](https://i.imgur.com/PAm2GrB.png)

「Manage networks」をクリックすると、以下のウィンドウが表示されます。このウィンドウをスクロールすると、さらに利用可能なネットワークが表示されます。各対応するネットワークの右側にあるボタンをクリックして、それをアクティブまたは非アクティブにします。緑のボタンは、そのネットワークが現在ウォレットに表示されていることを示し、灰色のボタンは表示されていないことを示します。Astar を選択したら、ウィンドウ外をクリックするか、右上の「X」をクリックして戻ることができます。

![](https://i.imgur.com/c21up34.png)

ポップアップウィンドウを閉じたら、ネットワークリストに Astar が表示されるはずです。以下はその例です。チェーン上での操作を開始するには、該当のネットワークをクリックしてください。

![](https://i.imgur.com/VTNFL9j.png)

---

## Basics

以下に、Enkrypt を使用して暗号通貨を受け取り、送信し、購入する方法を示すスクリーンショットがあります。アプリの上部中央にあるドロップダウンメニューをクリックすると、異なるアカウントが表示されます。Enkrypt は同じリカバリーフレーズから複数の EVM および Substrate アドレスを生成します。これらのアドレスを使用して、暗号通貨を Enkrypt ウォレットに受信できます。右上のボタンを使用してアドレスをコピーしたり、QR コードを開いたり、ブロックエクスプローラを確認したりできます。

![](https://i.imgur.com/wjLysH4.png)

![](https://i.imgur.com/BnRPXNK.png)

「購入」をクリックすると、Simplex とのパートナーシップを通じて購入するよう促すウェブページが開きます（現在は ETH、BNB、および MATIC が利用可能）。一方で「送信」をクリックすると、Enkrypt 内で新しいページが開きます。必要な情報を入力してトランザクションを送信できます。

「buy」をクリックすると web ページが開き、私たちのパートナーである Simplex を通してトークンを購入することができます。（現在は ETH、BNB、および MATIC が利用可能）
一方、「send」をクリックすると、Enkrypt 内で新しいページが開きます。必要な情報を入力してトランザクションを送信できます。

Enkrypt を通じたトークンの購入、送信、スワップ、アカウントの追加およびインポート、ハードウェアウォレットの接続、および Dotsama と Ethereum の dApps とのやりとりに関する詳細なガイドについては、MEW ヘルプセンターを参照してください: https://help.myetherwallet.com/en/collections/3575691-enkrypt

![](https://i.imgur.com/QjXxk1M.png)

![](https://i.imgur.com/dsWU9Vb.png)

---

## DApps とのやりとり

Enkrypt に統合されている各チェーンには、以下のように表示される「注目の dApps」セクションがあります。注目の dApps は時折変わるので、Kusama エコシステム内の新しくてワクワクする dApps を味わうためにはこのセクションを定期的にチェックしてください。もし dApps を構築していて、あなたの dApps を注目の的にしたい場合は、[enkrypt.com](https://www.enkrypt.com/?mtm_campaign=Interacting%20with%20Astar%20using%20Enkrypt) で連絡を取ってください！

![astar-dapps](https://blog.enkrypt.com/content/images/2022/11/astar-dapps.png)

dApps のウェブページにアクセスした際には、接続方法を尋ねられたら、単純に Enkrypt を選択します。Enkrypt が表示されない場合は、Polkadot.js または MetaMask を選択してください。Enkrypt がインストールされている前提で、自動的に Enkrypt に接続しようとします。

dApp のページと接続している最中にも、Enkrypt 拡張機能でネットワークやアカウントを簡単に切り替えることができます。

![](https://i.imgur.com/UgsoPP7.png)

---

###### Join our [Discord](https://discord.com/invite/Gz8vBneyKe) community 🌐 | Follow us on [Twitter](https://twitter.com/enkrypt) 🐦 | Check out our [blog](https://blog.enkrypt.com) 📰

---
