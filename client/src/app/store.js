import { configureStore } from '@reduxjs/toolkit';
import auth from '../reducers/auth';
import alert from '../reducers/alert';
import profile from '../reducers/profile';
import contact from '../reducers/contact';
import application from '../reducers/application';
import post from '../reducers/post';
import company from '../reducers/company';
import load from '../reducers/load';

export const store = configureStore({
  reducer: {
    auth,
    alert,
    contact,
    profile,
    post,
    application,
    company,
    load,
  },
});
