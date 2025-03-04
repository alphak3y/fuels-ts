---
layout: default
title: BN
parent: "@fuel-ts/math"
nav_order: 1

---

# Class: BN

[@fuel-ts/math](../index.md).BN

## Hierarchy

- `BN`

  ↳ **`BN`**

## Implements

- [`BNInputOverrides`](../interfaces/internal-BNInputOverrides.md)
- [`BNHiddenTypes`](../interfaces/internal-BNHiddenTypes.md)
- [`BNHelper`](../interfaces/internal-BNHelper.md)
- [`BNOverrides`](../interfaces/internal-BNOverrides.md)

## Constructors

### constructor

• **new BN**(`value?`, `base?`, `endian?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | ``null`` \| [`BNInput`](../index.md#bninput) |
| `base?` | `number` \| ``"hex"`` |
| `endian?` | `Endianness` |

#### Overrides

BnJs.constructor

## Methods

### abs

▸ **abs**(): [`BN`](BN.md)

#### Returns

[`BN`](BN.md)

#### Implementation of

[BNOverrides](../interfaces/internal-BNOverrides.md).[abs](../interfaces/internal-BNOverrides.md#abs)

#### Overrides

BnJs.abs

___

### add

▸ **add**(`v`): [`BN`](BN.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`BNInput`](../index.md#bninput) |

#### Returns

[`BN`](BN.md)

#### Implementation of

[BNInputOverrides](../interfaces/internal-BNInputOverrides.md).[add](../interfaces/internal-BNInputOverrides.md#add)

#### Overrides

BnJs.add

___

### caller

▸ **caller**(`v`, `methodName`): `boolean` \| [`BN`](BN.md) \| [`CompareResult`](../namespaces/internal.md#compareresult)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`BNInput`](../index.md#bninput) |
| `methodName` | keyof [`BNInputOverrides`](../interfaces/internal-BNInputOverrides.md) |

#### Returns

`boolean` \| [`BN`](BN.md) \| [`CompareResult`](../namespaces/internal.md#compareresult)

#### Implementation of

[BNHelper](../interfaces/internal-BNHelper.md).[caller](../interfaces/internal-BNHelper.md#caller)

___

### clone

▸ **clone**(): [`BN`](BN.md)

#### Returns

[`BN`](BN.md)

#### Overrides

BnJs.clone

___

### cmp

▸ **cmp**(`v`): [`CompareResult`](../namespaces/internal.md#compareresult)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`BNInput`](../index.md#bninput) |

#### Returns

[`CompareResult`](../namespaces/internal.md#compareresult)

#### Implementation of

[BNInputOverrides](../interfaces/internal-BNInputOverrides.md).[cmp](../interfaces/internal-BNInputOverrides.md#cmp)

#### Overrides

BnJs.cmp

___

### div

▸ **div**(`v`): [`BN`](BN.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`BNInput`](../index.md#bninput) |

#### Returns

[`BN`](BN.md)

#### Implementation of

[BNInputOverrides](../interfaces/internal-BNInputOverrides.md).[div](../interfaces/internal-BNInputOverrides.md#div)

#### Overrides

BnJs.div

___

### divRound

▸ **divRound**(`v`): [`BN`](BN.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`BNInput`](../index.md#bninput) |

#### Returns

[`BN`](BN.md)

#### Implementation of

[BNInputOverrides](../interfaces/internal-BNInputOverrides.md).[divRound](../interfaces/internal-BNInputOverrides.md#divround)

#### Overrides

BnJs.divRound

___

### divmod

▸ **divmod**(`num`, `mode?`, `positive?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | [`BNInput`](../index.md#bninput) |
| `mode?` | `string` |
| `positive?` | `boolean` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `div` | [`BN`](BN.md) |
| `mod` | [`BN`](BN.md) |

#### Implementation of

[BNHiddenTypes](../interfaces/internal-BNHiddenTypes.md).[divmod](../interfaces/internal-BNHiddenTypes.md#divmod)

#### Overrides

BnJs.divmod

___

### egcd

▸ **egcd**(`p`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `BN` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `a` | [`BN`](BN.md) |
| `b` | [`BN`](BN.md) |
| `gcd` | [`BN`](BN.md) |

#### Overrides

BnJs.egcd

___

### eq

▸ **eq**(`v`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`BNInput`](../index.md#bninput) |

#### Returns

`boolean`

#### Implementation of

[BNInputOverrides](../interfaces/internal-BNInputOverrides.md).[eq](../interfaces/internal-BNInputOverrides.md#eq)

#### Overrides

BnJs.eq

___

### format

▸ **format**(`options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`FormatConfig`](../index.md#formatconfig) |

#### Returns

`string`

___

### formatUnits

▸ **formatUnits**(`units?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `units` | `number` | `DECIMAL_UNITS` |

#### Returns

`string`

___

### fromTwos

▸ **fromTwos**(`width`): [`BN`](BN.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |

#### Returns

[`BN`](BN.md)

#### Implementation of

[BNOverrides](../interfaces/internal-BNOverrides.md).[fromTwos](../interfaces/internal-BNOverrides.md#fromtwos)

#### Overrides

BnJs.fromTwos

___

### gt

▸ **gt**(`v`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`BNInput`](../index.md#bninput) |

#### Returns

`boolean`

#### Implementation of

[BNInputOverrides](../interfaces/internal-BNInputOverrides.md).[gt](../interfaces/internal-BNInputOverrides.md#gt)

#### Overrides

BnJs.gt

___

### gte

▸ **gte**(`v`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`BNInput`](../index.md#bninput) |

#### Returns

`boolean`

#### Implementation of

[BNInputOverrides](../interfaces/internal-BNInputOverrides.md).[gte](../interfaces/internal-BNInputOverrides.md#gte)

#### Overrides

BnJs.gte

___

### lt

▸ **lt**(`v`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`BNInput`](../index.md#bninput) |

#### Returns

`boolean`

#### Implementation of

[BNInputOverrides](../interfaces/internal-BNInputOverrides.md).[lt](../interfaces/internal-BNInputOverrides.md#lt)

#### Overrides

BnJs.lt

___

### lte

▸ **lte**(`v`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`BNInput`](../index.md#bninput) |

#### Returns

`boolean`

#### Implementation of

[BNInputOverrides](../interfaces/internal-BNInputOverrides.md).[lte](../interfaces/internal-BNInputOverrides.md#lte)

#### Overrides

BnJs.lte

___

### mod

▸ **mod**(`v`): [`BN`](BN.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`BNInput`](../index.md#bninput) |

#### Returns

[`BN`](BN.md)

#### Implementation of

[BNInputOverrides](../interfaces/internal-BNInputOverrides.md).[mod](../interfaces/internal-BNInputOverrides.md#mod)

#### Overrides

BnJs.mod

___

### mul

▸ **mul**(`v`): [`BN`](BN.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`BNInput`](../index.md#bninput) |

#### Returns

[`BN`](BN.md)

#### Implementation of

[BNInputOverrides](../interfaces/internal-BNInputOverrides.md).[mul](../interfaces/internal-BNInputOverrides.md#mul)

#### Overrides

BnJs.mul

___

### mulTo

▸ **mulTo**(`num`, `out`): [`BN`](BN.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | [`BN`](BN.md) |
| `out` | [`BN`](BN.md) |

#### Returns

[`BN`](BN.md)

#### Implementation of

[BNHiddenTypes](../interfaces/internal-BNHiddenTypes.md).[mulTo](../interfaces/internal-BNHiddenTypes.md#multo)

___

### neg

▸ **neg**(): [`BN`](BN.md)

#### Returns

[`BN`](BN.md)

#### Implementation of

[BNOverrides](../interfaces/internal-BNOverrides.md).[neg](../interfaces/internal-BNOverrides.md#neg)

#### Overrides

BnJs.neg

___

### pow

▸ **pow**(`v`): [`BN`](BN.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`BNInput`](../index.md#bninput) |

#### Returns

[`BN`](BN.md)

#### Implementation of

[BNInputOverrides](../interfaces/internal-BNInputOverrides.md).[pow](../interfaces/internal-BNInputOverrides.md#pow)

#### Overrides

BnJs.pow

___

### sqr

▸ **sqr**(): [`BN`](BN.md)

#### Returns

[`BN`](BN.md)

#### Implementation of

[BNOverrides](../interfaces/internal-BNOverrides.md).[sqr](../interfaces/internal-BNOverrides.md#sqr)

#### Overrides

BnJs.sqr

___

### sub

▸ **sub**(`v`): [`BN`](BN.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`BNInput`](../index.md#bninput) |

#### Returns

[`BN`](BN.md)

#### Implementation of

[BNInputOverrides](../interfaces/internal-BNInputOverrides.md).[sub](../interfaces/internal-BNInputOverrides.md#sub)

#### Overrides

BnJs.sub

___

### toBytes

▸ **toBytes**(`bytesPadding?`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytesPadding?` | `number` |

#### Returns

`Uint8Array`

#### Implementation of

[BNHelper](../interfaces/internal-BNHelper.md).[toBytes](../interfaces/internal-BNHelper.md#tobytes)

___

### toHex

▸ **toHex**(`bytesPadding?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytesPadding?` | `number` |

#### Returns

`string`

#### Implementation of

[BNHelper](../interfaces/internal-BNHelper.md).[toHex](../interfaces/internal-BNHelper.md#tohex)

___

### toJSON

▸ **toJSON**(): `string`

#### Returns

`string`

#### Implementation of

[BNHelper](../interfaces/internal-BNHelper.md).[toJSON](../interfaces/internal-BNHelper.md#tojson)

#### Overrides

BnJs.toJSON

___

### toString

▸ **toString**(`base?`, `length?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `base?` | `number` \| ``"hex"`` |
| `length?` | `number` |

#### Returns

`string`

#### Overrides

BnJs.toString

___

### toTwos

▸ **toTwos**(`width`): [`BN`](BN.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |

#### Returns

[`BN`](BN.md)

#### Implementation of

[BNOverrides](../interfaces/internal-BNOverrides.md).[toTwos](../interfaces/internal-BNOverrides.md#totwos)

#### Overrides

BnJs.toTwos

___

### valueOf

▸ **valueOf**(): `string`

#### Returns

`string`
