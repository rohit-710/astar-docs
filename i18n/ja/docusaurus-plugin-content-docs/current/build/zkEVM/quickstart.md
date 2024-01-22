---
sidebar_position: 1
title: Astar zkEVM クイックスタートガイド
sidebar_label: クイックスタート
---

import metamask from '/docs/build/zkEVM/img/metamask-network.png'
import build from '/docs/build/img/build.png'

<div style={{textAlign: 'center'}}>
    <img src={build} style={{width: 1200}} />
</div>

Astar zkEVM は、Ethereum 上のゼロ知識証明を用いたソリューションであり、既存の EVM スマートコントラクト、デベロッパーツール、およびウォレットがシームレスに動作する **EVM 等価**の環境を提供します。Astar zkEVM は、ゼロ知識証明の力を利用してトランザクションコストを削減し、スループットを向上させると同時に、Ethereum のセキュリティを受け継いでいます。

Solidity のデベロッパーは Astar zkEVM にすぐに馴染むことができます。ただ zkEVM の RPC アドレスに切り替えるだけで、開発を開始することができます！

:::info Reminder
Astar zkEVM 上での開発および運用に特別なツールやウォレットは必要ありません。
:::

開発者は、他の EVM チェーンから既存のコントラクトを zkEVM にデプロイでき、ユーザーは Ethereum からアセットを zkEVM にデポジットすることでゼロ知識証明の新たな使用法を通じて確定されるトランザクションを Ethereum 上でバッチ化して行うことができます。ネイティブ実装されているアカウントアブストラクションにより、開発者は直感的で Web2 風の UI を作成し、複雑さを排除してオンボーディングプロセスを劇的に簡略化できます。

## zkEVM への接続

**Astar zkEVM**ネットワークをウォレットに手動で追加するには、以下の詳細情報を入力してください：

| Network         | RPC URL                              | ChainID   | Block Explorer URL                | Currency |
| --------------- | ------------------------------------ | --------- | --------------------------------- | -------- |
| zKatana Testnet | `https://rpc.zkatana.gelato.digital` | `1261120` | `https://zkatana.blockscout.com/` | **ETH**  |
| Mainnet         | `coming soon...`                     | `-`       | `-`                               | **ETH**  |

次のステップは Ethereum &rarr; Astar zkEVM の[bridge assets](/docs/build/zkEVM/bridge-to-zkevm)です。

:::重要
Astar の正規の[zkEVM Bridge](https://portal.astar.network)はサードパーティーブリッジサービスと対照的にいかなるカウンターパーティーリスクも持ちません。そして、プロトコルレベルでトラストレスです。
:::

## スマートコントラクトのデプロイ

zkEVM 上の開発体験は、EVM とシームレスであり、全く同じです。zkEVM 上で開発する開発者は、既存のコードとツールを使用して zkEVM にデプロイでき、dApp ユーザーはより高いトランザクション処理速度と低い手数料を享受できます。zkEVM 上でスマートコントラクトをデプロイする方法について詳しくは、[こちら](/docs/build/zkEVM/smart-contracts/)をご覧ください。

## zKatana Testnet のための Metamask のセットアップ

zKatana テストネットを MetaMask に追加するには、[block explorer](https://zkatana.blockscout.com/)の一番下にあるリンクを使用するか、以下の詳細を直接入力してください:

<div style={{textAlign: 'center'}}>
  <img src={metamask} style={{width: 400}} />
</div>

## 開発者向けの Astar zkEVM サポート

サポートが必要な開発者は、[Ethereum StackExchange](https://discord.gg/astarnetwork)でイシューを開き、それに`Astar`のタグを付ける(推奨)か、[Astar Discord server](https://discord.gg/astarnetwork) サーバに参加することができます。

<details>
<summary>Ethereum StackExchange</summary>

1. [こちら](https://ethereum.stackexchange.com/)から**Ethereum StackExchange**に参加します。
2. イシューを新規作成します。
3. イシューについて詳しく説明します。
4. 最後に、Astar チームに知らせるために`Astar`タグを追加します。

</details>
<details>
<summary>Astar Discord server</summary>

1. [こちら](https://discord.gg/astarnetwork)から **Astar Discord** サーバーに参加します。
2. invite を承認してください。
3. **#roles**で**Developer** を選択してください。
4. **Builder/#zkevm-support** チャンネルに移動してください。

</details>
