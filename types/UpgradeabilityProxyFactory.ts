/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { Arrayish } from "ethers/utils";

import { TransactionOverrides } from ".";
import { UpgradeabilityProxy } from "./UpgradeabilityProxy";

export class UpgradeabilityProxyFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _logic: string,
    _data: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<UpgradeabilityProxy> {
    return super.deploy(_logic, _data, overrides) as Promise<
      UpgradeabilityProxy
    >;
  }
  getDeployTransaction(
    _logic: string,
    _data: Arrayish,
    overrides?: TransactionOverrides
  ): UnsignedTransaction {
    return super.getDeployTransaction(_logic, _data, overrides);
  }
  attach(address: string): UpgradeabilityProxy {
    return super.attach(address) as UpgradeabilityProxy;
  }
  connect(signer: Signer): UpgradeabilityProxyFactory {
    return super.connect(signer) as UpgradeabilityProxyFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UpgradeabilityProxy {
    return new Contract(address, _abi, signerOrProvider) as UpgradeabilityProxy;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_logic",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    stateMutability: "payable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address"
      }
    ],
    name: "Upgraded",
    type: "event"
  },
  {
    stateMutability: "payable",
    type: "receive"
  }
];

const _bytecode =
  "0x60806040526040516104643803806104648339818101604052604081101561002657600080fd5b81019080805190602001909291908051604051939291908464010000000082111561005057600080fd5b8382019150602082018581111561006657600080fd5b825186600182028301116401000000008211171561008357600080fd5b8083526020830192505050908051906020019080838360005b838110156100b757808201518184015260208101905061009c565b50505050905090810190601f1680156100e45780820380516001836020036101000a031916815260200191505b50604052505050600160405180807f656970313936372e70726f78792e696d706c656d656e746174696f6e00000000815250601c019050604051809103902060001c0360001b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b1461015557fe5b6101648261023760201b60201c565b6000815111156102305760008273ffffffffffffffffffffffffffffffffffffffff16826040518082805190602001908083835b602083106101bb5780518252602082019150602081019050602083039250610198565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d806000811461021b576040519150601f19603f3d011682016040523d82523d6000602084013e610220565b606091505b505090508061022e57600080fd5b505b5050610319565b61024a816102ce60201b6100291760201c565b61029f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603b815260200180610429603b913960400191505060405180910390fd5b60007f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b90508181555050565b60008060007fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060001b9050833f915080821415801561031057506000801b8214155b92505050919050565b610101806103286000396000f3fe608060405236601057600e6015565b005b600080fd5b601b6073565b602760236075565b60a6565b565b60008060007fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060001b9050833f9150808214158015606a57506000801b8214155b92505050919050565b565b6000807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b9050805491505090565b3660008037600080366000845af43d6000803e806000811460c6573d6000f35b3d6000fdfea2646970667358221220bd3110bfb604b29e020b1dd8d013a7114a8c46739fb59f2e5fcb1084feec472d64736f6c6343000608003343616e6e6f742073657420612070726f787920696d706c656d656e746174696f6e20746f2061206e6f6e2d636f6e74726163742061646472657373";
