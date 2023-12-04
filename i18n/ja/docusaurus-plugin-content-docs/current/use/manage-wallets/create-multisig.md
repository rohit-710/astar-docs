---
sidebar_position: 3
---

# マルチシグウォレットの作成

このチュートリアルはマルチシグの Substrate ウォレットを作成するためのガイドとして役立ちます。

## コンタクトの追加

1. [https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.astar.network#/accounts](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.astar.network#/accounts)を開く
2. Accounts -> Address Book を開きます。
3. `+ Add Contact` をクリックし、マルチシグウォレットに含めたいすべてのアドレスを追加する
4. 例：Bob、Charlie、Dave

![12](/../docs/use/manage-wallets/img/12.png)

## 新しいウォレットを作成

1. Accounts -> `+ Multisig`を開く
2. 使用可能な署名から、マルチシグに含める署名を選択する。
3. しきい値を追加する。 しきい値 2 の場合、トランザクションに署名するために最低 2 人の署名者が必要です。
4. マルチシグウォレットに名前を付ける。
5. 「Create」をクリックする。

![13](/../docs/use/manage-wallets/img/13.png)

## ウォレットのテスト

1. 上記の通りマルチシグウォレットの作成を完了させる。
2. マルチシグウォレットのテストには、まず Shibuya testnet を利用することを推奨します。 自身のウォレットを接続することで、 [https://portal.astar.network](https://portal.astar.network) から SBY を取得できます。
3. SBY を取得した後、SBY トークンをマルチシグウォレットに送信すると、使用を開始できます。
