import { GET_USERS } from "../reducer/reducer";

export const getUserAction = (payload) => {
  return { type: GET_USERS, payload };
};
