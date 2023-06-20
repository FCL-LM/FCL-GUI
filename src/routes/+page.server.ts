import { type Actions } from '@sveltejs/kit';
import { config } from '$lib/config';
import { getMessageStore } from '$lib/utils/getMessageStore';

// Defined outside of the actions so it's not re-created on every request
const messageStore = getMessageStore();

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const message = formData.get('message');

    const prompt = `${config.promptPrefix}${message}`;
  }
};
