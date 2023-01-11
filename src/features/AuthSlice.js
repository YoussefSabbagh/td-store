import { createSlice } from '@reduxjs/toolkit';

/*
  user = {
        name: '',
        token: '',
        email: '',
        roles: [],
      }, 
      {
        name: 'pedro',
        token: '123',
        email: 'pedro@correo.com',
        roles: ['USER'],
      },

 */

const initialState = {
  currentUser: sessionStorage.getItem('user')
    ? JSON.parse(sessionStorage.getItem('user'))
    : null,
};

const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    setLogin: (state, action) => {
      state.currentUser = action.payload;
      sessionStorage.setItem('user', JSON.stringify(state.currentUser));
    },

    setLogout: (state, action) => {
      sessionStorage.removeItem('user');
      state.currentUser = null;
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;
export const selectUser = (state) => state.auth.currentUser;
export default authSlice.reducer;
