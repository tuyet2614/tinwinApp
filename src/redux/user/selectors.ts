import {createSelector} from 'reselect';

const userReducer = (state: any) => state.userReducer;

export const getUserState = createSelector(userReducer, state => state);
