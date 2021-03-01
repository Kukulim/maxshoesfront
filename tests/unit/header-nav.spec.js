import { shallowMount, createLocalVue } from "@vue/test-utils";
import HeaderNav from "../../src/components/header/header-nav.vue";

import Vuex from "vuex";
import VueRouter from "vue-router";

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VueRouter);

const router = new VueRouter();

describe("header-nav.vue", () => {
  let wrapper;
  let store;
  let actions;
  let getters;
  let state;

  beforeEach(() => {
    actions = {
      removeTokens: jest.fn()
    };

    state = {
      user: {
        isLoggedIn: false
      }
    };

    getters = {
      isLoggedIn: () => false,
      getCurrentUserRole: () => ""
    };

    store = new Vuex.Store({
      modules: {
        auth: {
          state,
          actions,
          getters,
          namespaced: true
        }
      }
    });

    wrapper = shallowMount(HeaderNav, {
      actions,
      getters,
      store,
      localVue,
      router
    });
  });

  it("renders-nav", () => {
    expect(wrapper.find("nav").exists()).toBe(true);
  });

  it("logout_button_not_exist", () => {
    expect(wrapper.find(".btn-primary").exists()).toBe(false);
  });

  it("nav_buttons_login_register_exist", () => {
    expect(wrapper.find(".nav-link").text()).toBe("Register");
    expect(wrapper.find(".nav-link:nth-child(2)").text()).toBe("Login");
  });
});
