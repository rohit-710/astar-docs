---
sidebar_position: 5
title: Astar zkEVM Gas Station
sidebar_label: zkEVM Gas Station
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Astar zkEVM Gas Station**の目的は **Astar zkEVM**上にトランザクションを発行する前に利用できるよう、dApp 開発者にガス料金の提案することです。

## 使用方法

<Tabs>
<TabItem value="testnet" label="zKatana testnet" default>

[zKatana Gas Station エンドポイント](https://zkatana.blockscout.com/api/v1/gas-price-oracle)に GET リクエストを送信し、このオラクルからガス料金の提案を受け取ります。

#### cURL

```bash
curl https://zkatana.blockscout.com/api/v1/gas-price-oracle
```

#### JavaScript

```javascript
fetch("https://zkatana.blockscout.com/api/v1/gas-price-oracle")
	.then((response) => response.json())
	.then((json) => console.log(json));
```

#### Python

```python
import requests
requests.get('https://zkatana.blockscout.com/api/v1/gas-price-oracle').json()
```

</TabItem>
<TabItem value="Mainnet" label="Astar zkEVM">
coming soon...
</TabItem>

</Tabs>

## レスポンスの解釈

JSON レスポンスの例は以下のようになっています。

```json
{
	"average": 0.02,
	"fast": 0.02,
	"slow": 0.02
}
```

- {`average`, `fast`, `slow`} は Gwei で表されたガス料金で、必要に応じてトランザクションを Astar zkEVM に送る前にこれらの料金を参照することができます。
