---
title: Protofire Hosted Subgraphs
---

import Figure from '/src/components/figure'

# Astar Subgraph Hosted Service by Protofire

Protofire provides an on-chain data analytics infrastructure for Astar EVM networks called the Astar Subgraph Hosted Service.

This project brings The Graph protocol services, the #1 open-source data indexing standard, to all four Astar EVM Networks: Astar, Shiden, Shibuya, and the zkEVM.

## Section Overview

 1. [Credentials](#credentials)
 2. [Endpoints](#endpoints)
 3. [Deployment](#deployment)
 4. [Monitoring](#monitoring)

## [Credentials](#subgraph)

To start to use **TheGraph-Astar** infrastructure you need to first obtain some credentials to be able to authenticate to the endpoints. These include:
 - Username
 - Password
 - Basic Authentication

## [Endpoints](#subgraph)

**DEV**

| Endpoint                                           | Description           |
| ---------------------------------------------------| --------------------- |
| https://grafana-dev.graph.astar.network            | Grafana               |
| https://ipfs-dev.graph.astar.network               | IPFS node             |
| https://index-shibuya.graph.astar.network  | Indexer node Shibuya  |
| https://query-shibuya.graph.astar.network          | Query node Shibuya    |

**PROD**

| Endpoint                                   | Description         |
| -------------------------------------------| --------------------|
| https://grafana-prod.graph.astar.network   | Grafana             |
| https://ipfs-prod.graph.astar.network      | IPFS node           |
| https://index-astar.graph.astar.network    | Indexer node Astar  |
| https://query-astar.graph.astar.network    | Query node Astar    |
| https://index-shiden.graph.astar.network   | Indexer node Shiden |
| https://query-shiden.graph.astar.network   | Query node Shiden   |

## [Deployment](#subgraph)

Once you receive credentials you can deploy subgraphs to *TheGraph-Astar** infrastructure in two ways:

 1. [Manually](#manually)
 2. [Automatically](#automatically)

### [Manually](#deployment)

Please follow the steps below:

 1. Depending on your subgraph code you may also need to run:
 ```
  yarn install
  yarn codegen
  yarn build
 ```

 2. Graph Create
 ```bash
 graph create <SUBGRAPH_NAME> --version-label <SUBGRAPH_NAME> --headers "{\"Authorization\": \"Basic <BASIC_AUTH>\"}" --ipfs https://ipfs-dev.graph.astar.network --node https://<USERNAME>:<PASSWORD>@index-shibuya.graph.astar.network
 
 Created subgraph: <SUBGRAPH_NAME>
 ```
 > Note: On graph-cli version 0.42.1 and above you only need to set the _--node_ flag
 ```bash
 graph create <SUBGRAPH_NAME> --node https://<USERNAME>:<PASSWORD>@index-shibuya.graph.astar.network
 ```



 3. Graph Deploy
    
 ```bash
 graph deploy <SUBGRAPH_NAME> --version-label <SUBGRAPH_NAME> --headers "{\"Authorization\": \"Basic <BASIC_AUTH>\"}" --ipfs https://ipfs-dev.graph.astar.network --node https://<USERNAME>:<PASSWORD>@index-shibuya.graph.astar.network
 ```


### [Automatically](#deployment)

You can use the ***[ASTAR] - Build and Deploy Subgraph*** workflow and provide some basic info to deploy your subgraph automatically.

You can find the workflow [here](https://github.com/protofire/astar-infra/blob/main/.github/workflows/subgraph-deploy.yaml)

The workflow pipeline will prompt you for the following:

 - Username
 - Password
 - Basic_Auth
 - Subgraph_Name
 - Repository
 - Branch
 - ipfs_endpoint
 - index_node_endpoint

> **_NOTE_**: You can customize the workflow in order to include additional steps based on your subgraph code. You can also modify it to be triggered based on specific events (such as push, tag, label).

## [Monitoring](#subgraph)

Once you have created and deployed your subgraph you can view the ***Indexing Status Overview*** dashboard in grafana.

Using the same credentials (Username & Password) you previously received you can access Grafana portal in the following URL:

**DEV**
https://grafana-dev.graph.astar.network

**PROD**
https://grafana-prod.graph.astar.network 

