import { User } from 'src/interfaces';
import { UserAction } from './UserAction';

export const userReducer = (state: User, action: UserAction): User => {
  switch (action.type) {
    case 'ADD_USER': {
      return action.payload as User;
    }
    default:
      return state;
  }
};
