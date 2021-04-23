import { createContext } from 'react';
import { User } from 'src/interfaces';

const UserContext = createContext<null | User>(null);

export default UserContext;
