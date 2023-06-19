import { oraPromise } from 'ora';
import { ChatGPTAPI, ChatGPTError, ChatGPTUnofficialProxyAPI } from 'chatgpt';
import { error, type Actions } from '@sveltejs/kit';
import { config } from '$lib/config';
import { getMessageStore } from '$lib/utils/getMessageStore';

// Defined outside of the actions so it's not re-created on every request
const messageStore = getMessageStore();

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const message = formData.get('message');
    const parentMessageId = formData.get('parentMessageId');
    const conversationId = formData.get('conversationId')

    const proxy = new ChatGPTUnofficialProxyAPI({
      accessToken: 'http://localhost:5000',
      apiReverseProxyUrl: 'http://localhost:5000'
    });

    const prompt = `${config.promptPrefix}${message}`;

    // try {
    //   const chatMessage = await oraPromise(
    //     proxy.sendMessage(prompt, {
    //       parentMessageId: `${parentMessageId}`
    //     })
    //   );

    //   return chatMessage;
    // } catch (err) {
    //   if (err instanceof ChatGPTError) {
    //     throw error(err.statusCode || 400, err.message);
    //   }
    // }
  }
};
