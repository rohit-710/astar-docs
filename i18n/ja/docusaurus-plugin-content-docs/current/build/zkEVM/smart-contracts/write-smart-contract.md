---
sidebar_position: 1
title: OpenZeppelin Wizardを使用したスマートコントラクトの作成
sidebar_label: Contractの作成
---

import Figure from '/src/components/figure'

This document explains how to automatically write any smart contract using the OpenZeppelin Wizard. The resulting smart contract code can either be integrated with Remix by Clicking the **Open in Remix** button, or copied to clipboard and pasted in the user's intended IDE.

## Getting Started

ブラウザから[OpenZeppelin Wizard](https://wizard.openzeppelin.com)にアクセスしてください。最初に **Solidity Wizard** と **Cairo Wizard** のボタンがご覧いただけるでしょう。

次のいずれかのタブを選択して、Solidity（EVM チェーン用）または Cairolang（Starknet 用）での、スマートコントラクトのすぐに使用可能なコードを作成できます。

選択肢:

- ERC20: ERC-20 トークンのスマートコントラクト作成用
- ERC721: NFT のスマートコントラクト作成用
- ERC1155: ERC-1155 トークンのスマートコントラクト作成用
- Governor: DAO の作成用
- Custom: カスタムされたスマートコントラクト作成用

## NFT コントラクトの作成

説明のために、`Mintable`、`Burnable` な `ERC721` トークンを作成し、それに適切なライセンスを指定したいとします。

1. **ERC721** タブを選択します。

2. `Name` と `Symbol` のフィールドを埋め、NFT の名前とシンボルを設定してください。

3. トークンの機能を選択するために左のチェックボックスを使用してください。

- `Mintable` チェックボックスを選択します。
- `Auto Increment Ids` チェックボックスを選択します。これはミントされた NFT がそれぞれオリジナルの ID を持つことを保証してくれます。
- `Burnable` チェックボックスを選択します。
- **デフォルトの MIT ライセンス**をそのまま残すか、またはお好みのライセンスを入力してください。

機能が選択されるたびに、新しい行のコードが自動的に書き込まれることに注意してください。

## Voila! コントラクトの完成です

生成されたコード行により、Solidity で書かれた NFT トークンのコントラクトができました。前述のように、このソースコードはお好みの IDE に貼り付けするか、直接 Remix で開くことができます。

以下の写真は、自動生成された NFT スマートコントラクトのコードを示しています。

<Figure caption="The End-Product NFT Source Code" src={require('/docs/build/zkEVM/smart-contracts/img/end-product-nft-code.png').default} width="100%" />
