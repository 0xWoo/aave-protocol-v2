/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { BigNumberish } from "ethers/utils";

import { TransactionOverrides } from ".";
import { MockAggregatorMana } from "./MockAggregatorMana";

export class MockAggregatorManaFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _initialAnswer: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<MockAggregatorMana> {
    return super.deploy(_initialAnswer, overrides) as Promise<
      MockAggregatorMana
    >;
  }
  getDeployTransaction(
    _initialAnswer: BigNumberish,
    overrides?: TransactionOverrides
  ): UnsignedTransaction {
    return super.getDeployTransaction(_initialAnswer, overrides);
  }
  attach(address: string): MockAggregatorMana {
    return super.attach(address) as MockAggregatorMana;
  }
  connect(signer: Signer): MockAggregatorManaFactory {
    return super.connect(signer) as MockAggregatorManaFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockAggregatorMana {
    return new Contract(address, _abi, signerOrProvider) as MockAggregatorMana;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "int256",
        name: "_initialAnswer",
        type: "int256"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "int256",
        name: "current",
        type: "int256"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "roundId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256"
      }
    ],
    name: "AnswerUpdated",
    type: "event"
  },
  {
    inputs: [],
    name: "latestAnswer",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161011e38038061011e8339818101604052602081101561003357600080fd5b810190808051906020019092919050505080806000819055506000817f0559884fd3a460db3073b7fc896cc77986f16e378210ded43186175bf646fc5f426040518082815260200191505060405180910390a350506088806100966000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806350d25bcd14602d575b600080fd5b60336049565b6040518082815260200191505060405180910390f35b6000805490509056fea2646970667358221220e0700283c2ad9c9bcaba29705e84da907804c3351faaac1d4a844e902dd98e9264736f6c63430006080033";
