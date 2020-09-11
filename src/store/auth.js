import firebase from '@/firebase';
// import db from '@/db';

const state = {
  user: {},
  isLoggedIn: false,
};

const mutations = {
  setUser: (state, user) => {
    if(user){
      state.user = user;
      state.isLoggedIn  = true;
    }else{
      state.user = {};
      state.isLoggedIn  = false;
    }
  },
};

const actions = {
  async login({ commit }) {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.log(error);
    }
  },

  async logout(){
    
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
