import {GET_USER} from './actions';

interface UserState {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
}

const initState: UserState = {
  id: '',
  name: '',
  email: '',
  phoneNumber: '',
};

const userReducer = (state = initState, action: any) => {
  switch (action?.type) {
    case GET_USER:
      return state;
    default:
      return state;
  }
};

export default userReducer;
