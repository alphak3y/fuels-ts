import { contractPaths } from '../../test/fixtures';
import { compileSwayToJson } from '../../test/utils/sway/compileSwayToJson';
import { Abi } from '../abi/Abi';

import { renderFactoryTemplate } from './factory';

const expectedRenderedTemplate = `/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type { Provider, BaseWalletLocked, AbstractAddress } from "fuels"
import type { MyContractAbi, MyContractAbiInterface } from "../MyContractAbi"
import { Interface, Contract } from "fuels"
const _abi = {
  "types": [
    {
      "typeId": 0,
      "type": "str[10]",
      "components": null,
      "typeParameters": null
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "name",
          "type": 0,
          "typeArguments": null
        }
      ],
      "name": "hello",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      }
    }
  ],
  "loggedTypes": []
}

export class MyContractAbi__factory {
  static readonly abi = _abi
  static createInterface(): MyContractAbiInterface {
    return new Interface(_abi) as unknown as MyContractAbiInterface
  }
  static connect(
    id: string | AbstractAddress,
    walletOrProvider: BaseWalletLocked | Provider
  ): MyContractAbi {
    return new Contract(id, _abi, walletOrProvider) as unknown as MyContractAbi
  }
}`;

describe('templates/factory', () => {
  test('should render factory template', () => {
    const contractPath = contractPaths.minimal;
    const { rawContents } = compileSwayToJson({ contractPath });

    const abi = new Abi({
      filepath: './my-contract-abi.json',
      outputDir: 'stdout',
      rawContents,
    });

    const rendered = renderFactoryTemplate({ abi });
    expect(rendered).toEqual(expectedRenderedTemplate);
  });
});
