import introduction from "/docs/build/img/evm.png"

# Astar zkEVM 上での開発

<div style={{textAlign: 'center'}}>
    <img src={introduction} style={{width: 1200}} />
</div>

このドキュメントを有効に活用するためには、プログラミングの基本的な理解が必要です。主に使用されるプログラミング言語は、主に Solidity と JavaScript です。これらの言語の事前知識は必須ではありませんが、あると非常に役立ちます。

## Astar zkEVM とは?

Astar zkEVM は、Polygon の Chain Development Kit を活用し、最先端のゼロ知識暗号技術を利用して、オフチェーンでのトランザクション実行を可能にする Ethereum Layer-2 スケーリングソリューションです。ファイナリティおよびセキュリティは、Ethereum によって保証されます。主要なパートナーとの連携を通じて、Astar zkEVM は Ethereum エコシステム内に存在する広範な開発者ベースと確立されたツールセットを有効活用することができ、主に以下のような特徴を誇ります：

- **Ethereum や Astar Substrate EVM よりも高い TPS(Transaction Per Second)** - zk rollup アーキテクチャを活用して、トランザクションは Layer 2 で並列化され、バッチ化されて Layer 1 のオンチェーンに送信されます。これにより、高性能を必要とする Web3 ゲームや DeFi アプリケーションのパフォーマンスが大幅に向上します。
- **Ethereum と比較して安いトランザクション手数料** - 上述の通り、トランザクションのバッチ処理を行うことで安いトランザクション手数料を実現しています。
- **完全な EVM 等価性** - EVM 互換性だけでなく、EVM 等価性を実現しています。Ethereum 上のスマートコントラクトは Astar zkEVM 上でも同様に動いています。詳細は[smart contract](/docs/build/zkEVM/smart-contracts/)をご確認ください。
- **ネイティブの Account Abstraction** - Astar zkEVM は、エンドユーザーの UX を刷新し、シームレスにするために設計されたネイティブ機能を提供しています。詳細については、[Account Abstraction](/docs/build/zkEVM/integrations/account-abstraction/)を参照して、UX を向上させる方法についてご覧ください。
- **著名なパートナー組織たち** - Astar zkEVM は、開発者の信頼を得ている組織やブランドにサポートされています。詳細については、[integrations](/docs/build/zkEVM/integrations/)を参照して、サードパーティのサービスプロバイダに関する情報をご覧ください。
- **相互運用性とマルチチェーン** - Astar zkEVM では、Ethereum と Polkadot のエコシステム間の相互運用性をサポートし、コミュニティを結びつけ、広く知られているマルチチェーンの理念を通じて Web3 のアクセシビリティを強化しています。
- **確立されたツールとライブラリ** - Remix、Hardhat、および Open Zeppelin などの、既に Web3 開発者が使い慣れているツールと互換性があります。

## セクションの全体像

以下のセクションでは、開発環境のセットアップの手順を詳しく説明し、Astar zkEVM 上で高いスケーラビリティを持つ dApps およびシームレスなユーザーオンボーディングを実現するための一般的なツールやパートナーサービスを紹介します。

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
