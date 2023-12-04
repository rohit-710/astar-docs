---
sidebar_position: 2
---

# Astar Wallet の作成

## Astar アカウント

### アドレスフォーマット

Astar のような Substrate ベースチェーンで使用されるアドレス形式は SS58 です。 SS58 は、Bitcoin の Base-58-check に若干の修正を加えたものです。 注目すべきは、アドレスが特定のネットワークに属することを識別するための、アドレスタイププレフィックスを含むフォーマットを含むことです。 Astar エコシステムは、WASM スマートコントラクトとして EVM をサポートする唯一の Parachain であるため、Polkadot エコシステムの中でも特別な Parachain となっています。 2 種類の仮想マシンを使用することで、2 種類のアドレスが使われます。

- Astar ネイティブアドレス、もしくは SS58 アドレス
- 0x で始まる Astar EVM アドレス、もしくは H160 アドレス

<img width="800" alt="1" src="https://user-images.githubusercontent.com/77480847/186840773-5874ba05-a067-4204-b72f-3f1017de85b7.png" />
<img width="800" alt="2" src="https://user-images.githubusercontent.com/77480847/186840936-692dc1f3-c5a8-450f-813c-6067c60f8cc2.png" />

WASM dApps、または dApps Staking ページを使用するときに、Astar ネイティブアドレスを使用します。 このアドレスを使用するには、MetaMask 以外の拡張機能が必要です。 エコシステムに慣れていない場合は、Polkadot JS extension を使用することをお勧めします。

## Astar Portal

[Astar Portal][] は、私たちのエコシステムにおいて様々なこと行うための場所です。 Astar の開発者は、エコシステムで交流したいすべての人のための拠点を作りました。

Portal を通じて、Astar エコシステムのさまざまなネットワークに接続できます。

- **Astar Network**: Polkadot の Parachain
- **Shiden Network**: Kusama の Parachain
- **Shibuya**: テストネット Parachain

<img width="500" alt="2" src="https://user-images.githubusercontent.com/77480847/186842212-fa88eef0-b768-448e-995f-cc5834eb7c88.png" />

## 推奨: Polkadot\{.js\} ブラウザプラグイン

Polkadot\{.js\}プラグインは、セキュリティとユーザビリティの合理的なバランスを提供します。 これは、あなたのアドレスを生成し、Astar ポータルと対話するための独立したローカルメカニズムを提供します。 エコシステムが初めてで、Astar ネイティブアドレスを作成したいユーザーはこのウォレットを使用することを推奨します。 Polkadot JS 拡張機能がない場合、ウォレットを接続しようとすると、Astar Portal でポップアップが表示されます。

### ブラウザプラグインをインストール

ブラウザプラグインは、 [Google Chrome](https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd?hl=en) (および Brave などの Chromium ベースのブラウザ) と [Firefox](https://addons.mozilla.org/en-US/firefox/addon/polkadot-js-extension) の両方で利用できます。 プラグインをインストールした後、ブラウザのメニューバーに、オレンジ色と白色の Polkadot\{.js\} ロゴが表示されます。

![4](/../docs/use/manage-wallets/img/4.png)

### アカウント作成

ブラウザのトップバーにあるロゴをクリックして、Polkadot\{.js\}ブラウザ拡張機能を開いてください。 ブラウザポップアップ表示されます。

![6](/../docs/use/manage-wallets/img/6.png)

「Create new account」という大きなプラスボタンをクリックします。 Polkadot\{.js\}プラグインは、システムのランダム性を利用して、あなたのために新しい Seed を作り、12 個の単語の形で表示します。

![7](/../docs/use/manage-wallets/img/7.png)

これらの言葉をバックアップするべきです。 安全な場所に Seed を保管してください。 何らかの理由で Polkadot\{.js\}からアカウントにアクセスできない場合は、「Add account menu」から「Import account from pre-existing seed」を選択することで、Seed を再入力することが可能です。

![8](/../docs/use/manage-wallets/img/8.png)

Polkadot エコシステム内のどのチェーンでも許可されるアカウントを作成するのがベストです。 このアカウントは Polkadot と Kusama で使用できます。 チェーンに接続すると、アカウントのフォーマットが自動的に変更されます。

**descriptive name** は任意であり、自分用に設定できます。 ブロックチェーンに保存されていないため、ブロックエクスプローラであなたのアドレスを見る他のユーザーには表示されません。 複数のアカウントを使用している場合は、必要に応じて詳細な説明としてこれを作成すると役立ちます。

**password** は、アカウントの情報を暗号化するために使用されます。 このアカウントを使って何らかの発信をするときや、メッセージを暗号化して署名するときには、再入力する必要があります。

:::danger
このパスワードは Seed フレーズを保護しません \*\*\*\*。 もし誰かが mnemonic seed の 12 個の単語を知っていれば、パスワードを知らなくても、あなたのアカウントをコントロールすることができるのです。
:::

「Add the account with the generated seed」をクリックすると、アカウントが作成されます。 その際、アカウントを json ファイルとして安全な場所に保存することをお勧めします。

## Astar Portal にウォレットを接続

[Astar Portal][] に戻り、ページを更新します。 Polkadot JS を Portal で使用するために認証が必要であるというポップアップが表示されます。 拡張機能に許可を与えてください！

![9](/../docs/use/manage-wallets/img/9.png)

拡張機能にアクセス許可を与えられたら、ウォレットを接続しましょう。 使用可能なすべての拡張機能のポップアップが表示されます。 Polkadot JS で新しいアカウントを作成しただけなので、この拡張機能を選択しましょう。

<img width="500" alt="10" src="https://user-images.githubusercontent.com/77480847/186843723-2363e66d-1a16-4653-afdd-61c5d5e29ca7.png" />

「Polkadot JS」をクリックすると、新しく作成したアカウントを選択できます。 アカウントを選択し、「confirm」を押します。

<img width="530" alt="11" src="https://user-images.githubusercontent.com/77480847/186843769-9c9ee368-3b74-46ee-8794-a88451b13438.png" />

Astar ウォレットを私たちのポータルに正常に接続しました。 なお、このウォレットは、Dotsama のエコシステムに含まれるすべての Parachain で使用することができます。

## サポート

なにかお困りのことはありますか？ 私たちのコミュニティに参加すると、アンバサダーがあなたをサポートします。 私たちが最初に DM を送ることは決してありません！覚えておいてください。 チームの一員と偽って声をかけられても、信用しないようにしましょう。

[Astar Portal]: https://portal.astar.network/
