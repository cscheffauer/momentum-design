/* eslint-disable max-len */
import { Context, ContextConsumer } from '@lit-labs/context';
import { ReactiveElement } from 'lit';

const consume = <C extends Context<unknown, unknown>>(host: ReactiveElement, context: C) => new ContextConsumer<C, typeof host>(host, {
  context,
  subscribe: true,
});

const providerUtils = {
  consume,
};
export default providerUtils;
