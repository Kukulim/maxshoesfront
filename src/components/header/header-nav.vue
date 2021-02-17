<template>
  <nav class="ml-auto">
    <ul v-if="!isLoggedIn" class="navbar-nav">
      <router-link to="/register" class="nav-link ">
        Register
      </router-link>
      <router-link to="/login" class="nav-link ">
        Login
      </router-link>
    </ul>
    <ul v-if="isLoggedIn" class="navbar-nav">
      <button to="/" class="btn btn-primary mt-3 mb-3" @click="logout()">
        Logout
      </button>
    </ul>
  </nav>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations("auth", ["removeTokens"]),
    logout() {
      this.removeTokens();
    }
  },
  computed: {
    ...mapGetters("auth", ["isLoggedIn"])
  }
};
</script>
<style scoped></style>
