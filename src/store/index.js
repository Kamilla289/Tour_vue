import { createStore } from 'vuex';

import itemStore from './ItemStore'

const store = createStore({
  modules: {
    itemStore
  }
});

export default store;