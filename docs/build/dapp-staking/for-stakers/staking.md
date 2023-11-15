---
sidebar_position: 1
---

import Figure from '/src/components/figure'

# Staking on dApps

## How to stake

### Connect to network

Visit the [Astar Portal](https://portal.astar.network):  and click on 'Staking'.

:::tip
Make sure you are connected to the correct network.
- **Shibuya Network**: testnet
- **Shiden Network**: mainnet on Kusama
- **Astar Network**: mainnet for Polkadot
:::

<Figure src={require('/docs/build/dapp-staking/for-stakers/img/1.png').default} width="35%"/>

### Stake


1. Look for your favorite project. The staked TVL is available on the top of the page. Click on the project cards for more information, access to their communities or to view the team accounts. You can also find useful resources on our [forum](https://forum.astar.network/) or check [DefilLama](https://defillama.com/) or [DappRadar](https://dappradar.com/).


<Figure src={require('/docs/build/dapp-staking/for-stakers/img/18_projects.png').default} width="100%"/>

2. To add your staking amount, click the `Stake` button and go to Staking page.

<Figure src={require('/docs/build/dapp-staking/for-stakers/img/19_Staking.png').default} width="100%"/>

3. You can either use your funds from the `Transferable Balance` or other projects you have staked with through [nomination transfer](nomination-transfer)
4. Place the amount you wish to stake and confirm. The minimum amount to stake per dApp is 50 SDN/500 ASTR.
5. Leave 1-2 SDN/2-5 ASTR as transferrable balance in your wallet since it is needed for gas to manage the claiming and re-staking transactions. 

---
---

### Manage dApp Staking

Once you have staked, new options to manage your dApp staking will appear on `My Staking Panel`.

**My Staking Panel**

<Figure src={require('/docs/build/dapp-staking/for-stakers/img/14_Myrewards.png').default} width="100%"/>

**The Rewards Panel**: 
- **Total Staked**: Total amount of $ASTR tokens you have staked.
- **Available to claim**: The unclaimed ERAs - It is recommended to claim frequently.
- **Re-Stake after claiming**: When turn this feature on, your rewards will automatically re-staked after you claim the unclaimed ERAs (more info about the [Re-Stake](compound-rewards) feature).
- **Total Earned (all-time)**: This is total rewards you have received from staking.  

**Unbonding Panel:**

The unbonding panel is where you can see the progress of unbonding and withdraw. Once it’s unbonding we cannot know which dApp you have unbonded from but remain as `Chunks`. There is a unbonding period of 10 ERAs for Astar and 5 ERAs on Shiden. After you have unstaked and when those ERAs pass, you will be able to withdraw. More information about [Unbonding](unbonding).

----

**My dApps Panel**

<Figure src={require('/docs/build/dapp-staking/for-stakers/img/16_MydApps.png').default} width="100%"/>

My dApps Panel is where you can see all dApps you have staked with and manage the assets.
- **Add**: you can add more $ASTR in dApp staking.
- **Unbond**: here you can select how many tokens you want to unbond from your staked amount.

