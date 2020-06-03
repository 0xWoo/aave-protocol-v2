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

interface MockAggregatorWbtcInterface extends Interface {
  functions: {
    latestAnswer: TypedFunctionDescription<{ encode([]: []): string }>;
  };

  events: {
    AnswerUpdated: TypedEventDescription<{
      encodeTopics([current, roundId, timestamp]: [
        BigNumberish | null,
        BigNumberish | null,
        null
      ]): string[];
    }>;
  };
}

export class MockAggregatorWbtc extends Contract {
  connect(signerOrProvider: Signer | Provider | string): MockAggregatorWbtc;
  attach(addressOrName: string): MockAggregatorWbtc;
  deployed(): Promise<MockAggregatorWbtc>;

  on(event: EventFilter | string, listener: Listener): MockAggregatorWbtc;
  once(event: EventFilter | string, listener: Listener): MockAggregatorWbtc;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): MockAggregatorWbtc;
  removeAllListeners(eventName: EventFilter | string): MockAggregatorWbtc;
  removeListener(eventName: any, listener: Listener): MockAggregatorWbtc;

  interface: MockAggregatorWbtcInterface;

  functions: {
    latestAnswer(): Promise<BigNumber>;
  };

  latestAnswer(): Promise<BigNumber>;

  filters: {
    AnswerUpdated(
      current: BigNumberish | null,
      roundId: BigNumberish | null,
      timestamp: null
    ): EventFilter;
  };

  estimate: {
    latestAnswer(): Promise<BigNumber>;
  };
}
