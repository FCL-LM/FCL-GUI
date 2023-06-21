import receiverImg from '../images/receiver.png';
import senderImg from '../images/sender.png';

export function createConfig() {
  return {
    nickName: 'HAL9000',
    fullName: 'FCL-LM',
    receiverImgSrc: receiverImg,
    senderImgSrc: senderImg,
    promptPrefix: '' // e.g. 'Answer this as if you were Elon Musk: \n\n'
  };
}

export const config = createConfig();
