import Keyv from 'keyv';

export function getMessageStore() {
  let store;
  const messageStore = new Keyv({ store, namespace: 'svelte-chatgpt' });

  return messageStore;
}
