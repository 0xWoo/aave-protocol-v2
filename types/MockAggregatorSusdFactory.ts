/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { BigNumberish } from "ethers/utils";

import { TransactionOverrides } from ".";
import { MockAggregatorSusd } from "./MockAggregatorSusd";

export class MockAggregatorSusdFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _initialAnswer: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<MockAggregatorSusd> {
    return super.deploy(_initialAnswer, overrides) as Promise<
      MockAggregatorSusd
    >;
  }
  getDeployTransaction(
    _initialAnswer: BigNumberish,
    overrides?: TransactionOverrides
  ): UnsignedTransaction {
    return super.getDeployTransaction(_initialAnswer, overrides);
  }
  attach(address: string): MockAggregatorSusd {
    return super.attach(address) as MockAggregatorSusd;
  }
  connect(signer: Signer): MockAggregatorSusdFactory {
    return super.connect(signer) as MockAggregatorSusdFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockAggregatorSusd {
    return new Contract(address, _abi, signerOrProvider) as MockAggregatorSusd;
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
  "0x608060405234801561001057600080fd5b5060405161011e38038061011e8339818101604052602081101561003357600080fd5b810190808051906020019092919050505080806000819055506000817f0559884fd3a460db3073b7fc896cc77986f16e378210ded43186175bf646fc5f426040518082815260200191505060405180910390a350506088806100966000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806350d25bcd14602d575b600080fd5b60336049565b6040518082815260200191505060405180910390f35b6000805490509056fea2646970667358221220b46ebfecbec5d74b50767e663667dabbb10adee12ebabc889ae8d9b6b7fa053c64736f6c63430006080033";
