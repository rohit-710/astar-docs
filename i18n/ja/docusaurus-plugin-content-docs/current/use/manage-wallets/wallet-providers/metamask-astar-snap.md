---
sidebar_position: 1
---

# MetaMask Astar Wallet Snap

import Figure from '/src/components/figure'

Astar Wallet Snap の運用を進めるには以下のステップに従ってください。([Portal](https://portal.astar.network/))
例として用いる dapp の[ソースコード](https://github.com/AstarNetwork/metamask-snap-astar/tree/master/packages/example)
はレポジトリの一部分としてご利用いただけます。このガイドは Metamask が
[インストール](https://metamask.io/download/)されていて、適切に設定されていることを想定しています。

## Portal への接続

Metamask のロゴで"Astar Snap"とラベル付けされている Web ページのボタンを押してください。

<Figure caption='Portalへの接続' src={require('/docs/use/manage-wallets/wallet-providers/img/01.png').default } width="100%" />

## サードパーティソフトウェアに関する注意の確認及び承認

矢印をクリックしてサードパーティソフトウェアに関する注意を全て表示し、それを承認する場合は、MetaMask の「Third-party software notice」ラベル上の「Accept」ボタンをクリックして MetaMask のサードパーティソフトウェアに関する注意を承認してください。

<!-- markdownlint-disable MD033 -->
<div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <div style={{ marginRight: '10px' }}>
    <Figure caption='サードパーティソフトウェアに関する注意を確認する' src={require('/docs/use/manage-wallets/wallet-providers/img/02.png').default } width="100%" />
  </div>
  <div>
    <Figure caption='サードパーティソフトウェアに関する注意を承認する' src={require('/docs/use/manage-wallets/wallet-providers/img/03.png').default } width="100%" />
  </div>
</div>

## 接続リクエストの確認及び承認

接続リクエストを確認し、受け入れる場合は、MetaMask の「Connection request」ラベル上の「Connect」ボタンをクリックして、Astar Wallet Snap の接続リクエストを受け入れてください。

<Figure caption='接続リクエスト' src={require('/docs/use/manage-wallets/wallet-providers/img/04.png').default } width="40%" />

## Snap への承認事項を確認してインストールを開始する

矢印をクリックして Astar Wallet Snap が必要とする権限のリストを全て表示し、それらを受け入れる場合は、「Install Snap」ラベル上の「Install」ボタンをクリックして、Astar Wallet Snap のインストールを開始してください。

<div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <div style={{ marginRight: '10px' }}>
    <Figure caption='承認事項の確認' src={require('/docs/use/manage-wallets/wallet-providers/img/05.png').default } width="100%" />
  </div>
  <div>
    <Figure caption='インストール開始' src={require('/docs/use/manage-wallets/wallet-providers/img/06.png').default } width="100%" />
  </div>
</div>

## 高度な許可事項を承認し、インストールを完了する

Astar Wallet Snap が Astar 及び Shiden Network （トークンが実際の資産価値を持ってるブロックチェーン）のアカウントを制御する権限を持っているため、より高度なアクセスレベルを確認及び承認する必要があります。このアクセスレベルを受け入れる場合は、チェックボックスをチェックし、 MetaMask の「Proceed with caution」ラベル上の「Confirm」ボタンをクリックして高度なアクセスレベルを承認し、Astar Wallet Snap をインストールしてください。次に、MetaMask の「Installation complete」ラベル上の 「OK」ボタンをクリックして、dApp の例に進んでください。

<div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <div style={{ marginRight: '10px' }}>
    <Figure caption='高度な許可事項を確認する' src={require('/docs/use/manage-wallets/wallet-providers/img/07.png').default } width="100%" />
  </div>
  <div style={{ marginRight: '10px' }}>
    <Figure caption='高度な許可事項を承認する' src={require('/docs/use/manage-wallets/wallet-providers/img/08.png').default } width="100%" />
  </div>
  <div>
    <Figure caption='インストール完了' src={require('/docs/use/manage-wallets/wallet-providers/img/09.png').default } width="100%" />
  </div>
</div>

## アカウントの詳細を確認する

Astar Wallet Snap は、Astar エコシステムの公式テストネットワークである [Shibuya Network](https://wiki.polkadot.network/docs/maintain-networks#westend-test-network) にデフォルトで設定されています。メタマスクのシードフレーズによるエントロピーを使用して導出されたアカウントのアドレスと公開鍵に注目してください。選択したネットワークに応じてアドレスが変わりますが、この例では Shibuya Network のみが使用されています。公開鍵はネットワークに*依存せず*、常に同じです。非対称暗号システム全般において、公開鍵はプライベートキーと補完関係にあり、次のステップでメッセージに署名するために使用されます。

<Figure caption='アカウントの詳細' src={require('/docs/use/manage-wallets/wallet-providers/img/10.png').default } width="100%" />

## Shibuya テストネット上のトークンを手にいれる

トークンのセクションに移動し、Shibuya Network の faucet ボタンをクリックしてください。ロボットでない場合は、「I'm not a robot」のチェックボックスをチェックしてください（Shibuya Network の faucet は現在、自動操作をサポートしていません 🤖）。"Confirm"とラベル付けされたボタンをクリックします。

オプションで、faucet トランザクションの詳細（extrinsic）を表示することができます。これらの詳細を表示したい場合は、通知トーストからトランザクションハッシュをコピーしてください。[https://shibuya.subscan.io](https://shibuya.subscan.io) に移動し、ハッシュを検索してください。

ポータルに戻り、アカウント残高を確認してください - 10 SBY 所持しているはずです。

<Figure caption='Fausetボタンをクリックしてください' src={require('/docs/use/manage-wallets/wallet-providers/img/11.png').default } width="100%" />
<Figure caption='Fausetの承認事項を確認してください' src={require('/docs/use/manage-wallets/wallet-providers/img/12.png').default } width="100%" />
<Figure caption='Fausetトランザクションをご確認いただけます' src={require('/docs/use/manage-wallets/wallet-providers/img/13.png').default } width="100%" />

## 他のアカウントへのトークンの送金

ポータルの「Transfer」タブおよび「To」とラベル付けされたフィールドに、Shibuya Network の有効なアドレスを入力してください。例えば、次のアドレスを使用できます：`aCiXU739xA4wGb8Sipp8T1XhDsfcLACmRFJTSYqCiLqWdJ2`。"Transfer"タブの"SBY"とラベルされた金額フィールドに、転送するトークンの数量を表す比較的小さな数値（例：10）を入力してください。「Transfer」タブ「Confirm」ボタンをクリックします。動作の説明が書かれた MetaMask の通知を確認し、承認する場合は MetaMask の「Approve」ボタンをクリックします。1 秒か 2 秒後、ページの上部にトランザクションの詳細が表示されるダイアログが表示されます。トランザクションの詳細通知トーストがポータルに表示され、それをクリックできます。

<Figure caption='アカウントアドレスの記入' src={require('/docs/use/manage-wallets/wallet-providers/img/18.png').default } width="100%" />
<Figure caption='Faucet の認証事項の確認' src={require('/docs/use/manage-wallets/wallet-providers/img/19.png').default } width="40%" />
<Figure caption='Fauset Transactionの確認' src={require('/docs/use/manage-wallets/wallet-providers/img/20.png').default } width="100%" />

## 最後に

Astar Wallet Snap のポータルを用いたデモは以上です。質問、またはエラーやバグの発見については GitHub 上で[Issue の作成](https://github.com/AstarNetwork/metamask-snap-astar/issues/new)をお願いいたします。
