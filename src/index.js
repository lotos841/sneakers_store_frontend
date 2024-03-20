import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import UserStore from './store/UserStore';
import SneakersStore from './store/SneakersStore';

export const Context = createContext(null)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
      user: new UserStore(),
      sneakersStore: new SneakersStore(),
    }}>
      <App/>
    </Context.Provider>,
);

