import { shallowMount, createLocalVue } from "@vue/test-utils";
import HeaderNav from "../../src/components/header/header-nav.vue";

import Vuex from 'vuex'
import VueRouter from 'vue-router'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(VueRouter)

const router = new VueRouter()

describe("header-nav.vue", () => {

  let wrapper;
  let store;
  let actions;
  let getters;
  let state;

  beforeEach(() => {
    actions = {
      removeTokens: jest.fn()
    }

    state = {
      CurentUser: null
    }

    getters = {
      isLoggedIn: () => false,
      getCurrentUserRole: () => 'Employee'
    }

    store = new Vuex.Store({
      modules: {
        auth: {
          state,
          actions,
          getters,
          namespaced: true
        }
      }
    })

    wrapper = shallowMount(HeaderNav, {
      actions, getters, store, localVue, router
    });
  })

  it("renders", () => {
    expect(wrapper.find('does-not-exist').exists()).toBe(false)
  });
});
