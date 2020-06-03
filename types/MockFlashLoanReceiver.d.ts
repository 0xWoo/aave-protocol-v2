/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface MockFlashLoanReceiverInterface extends Interface {
  functions: {
    addressesProvider: TypedFunctionDescription<{ encode([]: []): string }>;

    executeOperation: TypedFunctionDescription<{
      encode([_reserve, _amount, _fee, _params]: [
        string,
        BigNumberish,
        BigNumberish,
        Arrayish
      ]): string;
    }>;

    setFailExecutionTransfer: TypedFunctionDescription<{
      encode([_fail]: [boolean]): string;
    }>;
  };

  events: {
    ExecutedWithFail: TypedEventDescription<{
      encodeTopics([_reserve, _amount, _fee]: [null, null, null]): string[];
    }>;

    ExecutedWithSuccess: TypedEventDescription<{
      encodeTopics([_reserve, _amount, _fee]: [null, null, null]): string[];
    }>;
  };
}

export class MockFlashLoanReceiver extends Contract {
  connect(signerOrProvider: Signer | Provider | string): MockFlashLoanReceiver;
  attach(addressOrName: string): MockFlashLoanReceiver;
  deployed(): Promise<MockFlashLoanReceiver>;

  on(event: EventFilter | string, listener: Listener): MockFlashLoanReceiver;
  once(event: EventFilter | string, listener: Listener): MockFlashLoanReceiver;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): MockFlashLoanReceiver;
  removeAllListeners(eventName: EventFilter | string): MockFlashLoanReceiver;
  removeListener(eventName: any, listener: Listener): MockFlashLoanReceiver;

  interface: MockFlashLoanReceiverInterface;

  functions: {
    addressesProvider(): Promise<string>;

    executeOperation(
      _reserve: string,
      _amount: BigNumberish,
      _fee: BigNumberish,
      _params: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setFailExecutionTransfer(
      _fail: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  addressesProvider(): Promise<string>;

  executeOperation(
    _reserve: string,
    _amount: BigNumberish,
    _fee: BigNumberish,
    _params: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setFailExecutionTransfer(
    _fail: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {
    ExecutedWithFail(_reserve: null, _amount: null, _fee: null): EventFilter;

    ExecutedWithSuccess(_reserve: null, _amount: null, _fee: null): EventFilter;
  };

  estimate: {
    addressesProvider(): Promise<BigNumber>;

    executeOperation(
      _reserve: string,
      _amount: BigNumberish,
      _fee: BigNumberish,
      _params: Arrayish
    ): Promise<BigNumber>;

    setFailExecutionTransfer(_fail: boolean): Promise<BigNumber>;
  };
}
