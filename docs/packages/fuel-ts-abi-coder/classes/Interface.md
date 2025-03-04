---
layout: default
title: Interface
parent: "@fuel-ts/abi-coder"
nav_order: 1

---

# Class: Interface

[@fuel-ts/abi-coder](../index.md).Interface

## Constructors

### constructor

• **new Interface**(`jsonAbi`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonAbi` | [`JsonAbi`](../index.md#jsonabi) |

## Properties

### abi

• `Readonly` **abi**: ``null`` \| [`ABI`](ABI.md)

#### Defined in

[packages/abi-coder/src/interface.ts:41](https://github.com/FuelLabs/fuels-ts/blob/master/packages/abi-coder/src/interface.ts#L41)

___

### abiCoder

• `Readonly` **abiCoder**: [`AbiCoder`](AbiCoder.md)

#### Defined in

[packages/abi-coder/src/interface.ts:40](https://github.com/FuelLabs/fuels-ts/blob/master/packages/abi-coder/src/interface.ts#L40)

___

### fragments

• `Readonly` **fragments**: [`Fragment`](Fragment.md)[]

#### Defined in

[packages/abi-coder/src/interface.ts:38](https://github.com/FuelLabs/fuels-ts/blob/master/packages/abi-coder/src/interface.ts#L38)

___

### functions

• `Readonly` **functions**: `Object`

#### Index signature

▪ [name: `string`]: [`FunctionFragment`](FunctionFragment.md)

#### Defined in

[packages/abi-coder/src/interface.ts:39](https://github.com/FuelLabs/fuels-ts/blob/master/packages/abi-coder/src/interface.ts#L39)

___

### loggedTypes

• `Readonly` **loggedTypes**: readonly [`JsonAbiLogFragment`](../interfaces/JsonAbiLogFragment.md)[]

#### Defined in

[packages/abi-coder/src/interface.ts:43](https://github.com/FuelLabs/fuels-ts/blob/master/packages/abi-coder/src/interface.ts#L43)

___

### types

• `Readonly` **types**: readonly [`JsonFlatAbiFragmentType`](../interfaces/JsonFlatAbiFragmentType.md)[]

#### Defined in

[packages/abi-coder/src/interface.ts:42](https://github.com/FuelLabs/fuels-ts/blob/master/packages/abi-coder/src/interface.ts#L42)

## Methods

### decodeFunctionData

▸ **decodeFunctionData**(`functionFragment`, `data`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | `string` \| [`FunctionFragment`](FunctionFragment.md) |
| `data` | `BytesLike` |

#### Returns

`any`

___

### decodeFunctionResult

▸ **decodeFunctionResult**(`functionFragment`, `data`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | `string` \| [`FunctionFragment`](FunctionFragment.md) |
| `data` | `BytesLike` |

#### Returns

`any`

___

### decodeLog

▸ **decodeLog**(`data`, `logId`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `BytesLike` |
| `logId` | `number` |

#### Returns

`any`

___

### encodeFunctionData

▸ **encodeFunctionData**(`functionFragment`, `values`, `offset?`): `Uint8Array`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `functionFragment` | `string` \| [`FunctionFragment`](FunctionFragment.md) | `undefined` |
| `values` | [`InputValue`](../index.md#inputvalue)[] | `undefined` |
| `offset` | `number` | `0` |

#### Returns

`Uint8Array`

___

### encodeFunctionResult

▸ **encodeFunctionResult**(`functionFragment`, `values`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | `string` \| [`FunctionFragment`](FunctionFragment.md) |
| `values` | [`InputValue`](../index.md#inputvalue)[] |

#### Returns

`Uint8Array`

___

### getFunction

▸ **getFunction**(`nameOrSignatureOrSighash`): [`FunctionFragment`](FunctionFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrSighash` | `string` |

#### Returns

[`FunctionFragment`](FunctionFragment.md)

___

### getSighash

▸ `Static` **getSighash**(`fragment`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragment` | `string` \| [`FunctionFragment`](FunctionFragment.md) |

#### Returns

`Uint8Array`
