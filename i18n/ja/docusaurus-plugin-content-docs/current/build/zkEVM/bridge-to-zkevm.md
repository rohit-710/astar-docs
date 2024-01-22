---
sidebar_position: 3
title: Astar zkEVMへのブリッジ
sidebar_label: zkEVMへのブリッジ
---

import bridge1 from '/docs/build/zkEVM/img/astar-bridge-zKatana-Shibuya1.jpg'
import bridge2 from '/docs/build/zkEVM/img/astar-bridge-zKatana-Shibuya2.jpg'
import bridge3 from '/docs/build/zkEVM/img/astar-bridge-zKatana-Shibuya3.jpg'
import bridge4 from '/docs/build/zkEVM/img/astar-bridge-zKatana-Shibuya4.jpg'
import network from '/docs/build/zkEVM/img/zKatana-network1.jpg'
import network1 from '/docs/build/zkEVM/img/add_zkEVM_network1.jpg'
import network2 from '/docs/build/zkEVM/img/add_zkEVM_network2.jpg'
import walletselect from '/docs/build/zkEVM/img/wallet-select.jpg'

## 概要

ここでは、Astar zkEVM へのアセットのブリッジ方法に関する情報をご提供します。ブリッジされた ETH は、Astar zkEVM 上での dApps のテストおよびデプロイに必要なネイティブトークンです。したがって、ネットワークを使用する前に、開発者は Layer 1 から Layer 2 へ ETH をブリッジする必要があります。現在、zkEVM へのアセットのブリッジングには 2 つのオプションがあります:

1. Astar Portal を介した Ethereum(Layer 1)から Astar zkEVM(Layer 2)への正規のブリッジがあります。これはネットワークの使用状況に応じて約 10〜30 分かかる場合があります
2. Astar Substrate EVM と Astar zkEVM の間で合成（ラップ）されたアセットのロックおよびミントを容易にするサードパーティのアセットブリッジまたはメッセージネットワークがあります。サードパーティのブリッジサービスおよび互換性のあるアセットの使用方法の詳細については、[integrations section](/docs/build/zkEVM/integrations/bridges-relays/) をご覧ください。

### Astar Portal を通じた ETH の送金

Astar Portal を通じて ETH を送金してください

[Astar Portal](https://portal.astar.network)を検索し、MetaMask を接続してください。

<div style={{textAlign: 'center'}}>
  <img src={walletselect} style={{width: 400}} />
  </div>

ネットワークセレクターを使用し、zKatana network に切り替えてください。もしくは MetaMask に zKatana network への切り替えを許可してください。

<div style={{textAlign: 'center'}}>
  <img src={network} style={{width: 400}} />
  </div>

左側のタブで「Bridge」をクリックしてください。Bridge のソースとして Sepolia が選択されていることを確認し、また送金先として zKatana が選択されていることを確認してください。転送する ETH の金額を入力したら、「Confirm」ボタンを押してください。

<div style={{textAlign: 'center'}}>
  <img src={bridge2} style={{width: 1000}} />
  </div>

MetaMask トランザクションに署名してください。

:::注意
一度 MetaMask のアクティビティタブ上でトランザクションが confirmed として表示されると、Astar Portal と MetaMask が zKatana ネットワーク上での残高を更新するまでおよそ 6-10 分ほどかかります。
:::

<div style={{textAlign: 'center'}}>
  <img src={bridge3} caption="Confirming" style={{width: 1000}} />
  </div>
<div style={{textAlign: 'center'}}>
  <img src={bridge4} caption="Confirmed" style={{width: 1000}} />
  </div>

Astar zkEVM 上で使用可能なブリッジされた ETH が MetaMask 上でご確認いただけるでしょう。
