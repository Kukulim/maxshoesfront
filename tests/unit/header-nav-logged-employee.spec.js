import { shallowMount, createLocalVue } from "@vue/test-utils";
import HeaderNav from "../../src/components/header/header-nav.vue";
import flushPromises from "flush-promises";

import Vuex from "vuex";
import VueRouter from "vue-router";

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VueRouter);

let allRoutes = [
  {
    path: "/",
    name: "WelcomePage"
  },
  {
    path: "/about",
    name: "About"
  }
];

const routes = allRoutes;

const router = new VueRouter({
  routes
});

describe("header-nav.vue", () => {
  let wrapper;
  let store;
  let mutations;
  let getters;
  let state;

  beforeEach(() => {
    mutations = {
      removeTokens: () => (state.user.isLoggedIn = false)
    };

    state = {
      user: {
        isLoggedIn: true
      }
    };

    getters = {
      isLoggedIn: state => {
        return state.user.isLoggedIn;
      },
      getCurrentUserRole: () => "Employee"
    };

    store = new Vuex.Store({
      modules: {
        auth: {
          state,
          mutations,
          getters,
          namespaced: true
        }
      }
    });

    wrapper = shallowMount(HeaderNav, {
      mutations,
      getters,
      store,
      localVue,
      router
    });
  });

  it("renders-nav", () => {
    expect(wrapper.find("nav").exists()).toBe(true);
  });

  it("logout_button_exist_after_login", () => {
    expect(wrapper.find(".btn-primary").exists()).toBe(true);
  });

  it("nav_buttons_for_employee_exist", () => {
    expect(wrapper.find(".nav-link").text()).toBe("Customers Notifications");
  });

  it("logout_button_succes_loggout_and_display_right_nav_items", async () => {
    await wrapper.find(".btn-primary").trigger("click");
    await flushPromises();
    wrapper.vm.$nextTick();
    expect(wrapper.find(".btn-primary").exists()).toBe(false);
    expect(wrapper.vm.$route.name).toBe("WelcomePage");
  });
});
