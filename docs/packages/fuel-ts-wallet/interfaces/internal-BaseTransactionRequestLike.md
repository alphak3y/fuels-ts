---
layout: default
title: BaseTransactionRequestLike
parent: "@fuel-ts/wallet"
nav_order: 2

---

# Interface: BaseTransactionRequestLike

[@fuel-ts/wallet](../index.md).[internal](../namespaces/internal.md).BaseTransactionRequestLike

## Hierarchy

- **`BaseTransactionRequestLike`**

  ↳ [`ScriptTransactionRequestLike`](internal-ScriptTransactionRequestLike.md)

  ↳ [`CreateTransactionRequestLike`](internal-CreateTransactionRequestLike.md)

## Implemented by

- [`BaseTransactionRequest`](../classes/internal-BaseTransactionRequest.md)

## Properties

### gasLimit

• `Optional` **gasLimit**: [`BigNumberish`](../namespaces/internal.md#bignumberish)

#### Defined in

[packages/providers/src/transaction-request/transaction-request.ts:66](https://github.com/FuelLabs/fuels-ts/blob/master/packages/providers/src/transaction-request/transaction-request.ts#L66)

___

### gasPrice

• `Optional` **gasPrice**: [`BigNumberish`](../namespaces/internal.md#bignumberish)

#### Defined in

[packages/providers/src/transaction-request/transaction-request.ts:64](https://github.com/FuelLabs/fuels-ts/blob/master/packages/providers/src/transaction-request/transaction-request.ts#L64)

___

### inputs

• `Optional` **inputs**: [`TransactionRequestInput`](../namespaces/internal.md#transactionrequestinput)[]

#### Defined in

[packages/providers/src/transaction-request/transaction-request.ts:70](https://github.com/FuelLabs/fuels-ts/blob/master/packages/providers/src/transaction-request/transaction-request.ts#L70)

___

### maturity

• `Optional` **maturity**: `number`

#### Defined in

[packages/providers/src/transaction-request/transaction-request.ts:68](https://github.com/FuelLabs/fuels-ts/blob/master/packages/providers/src/transaction-request/transaction-request.ts#L68)

___

### outputs

• `Optional` **outputs**: [`TransactionRequestOutput`](../namespaces/internal.md#transactionrequestoutput)[]

#### Defined in

[packages/providers/src/transaction-request/transaction-request.ts:72](https://github.com/FuelLabs/fuels-ts/blob/master/packages/providers/src/transaction-request/transaction-request.ts#L72)

___

### witnesses

• `Optional` **witnesses**: `BytesLike`[]

#### Defined in

[packages/providers/src/transaction-request/transaction-request.ts:74](https://github.com/FuelLabs/fuels-ts/blob/master/packages/providers/src/transaction-request/transaction-request.ts#L74)
