import {get} from '../network/index';

export const getChats = () => {
  return get('/chats/allChats');
};
