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
            <router-link to="/shophome" class="nav-link ">
        Store
      </router-link>
      <router-link to="/myauctions" class="nav-link ">
        My Auctions
      </router-link>
      <router-link to="/profile" class="nav-link ">
        Profile
      </router-link>
      <router-link to="/" class="nav-link ml-4" @click="logout()">
        Logout
      </router-link>

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
