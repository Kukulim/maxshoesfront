<template>
  <nav class="ml-auto">
    <ul v-if="!isLoggedIn" class="navbar-nav">
      <router-link to="/register" class="nav-link"> Register </router-link>
      <router-link to="/login" class="nav-link"> Login </router-link>
    </ul>
    <ul v-if="isLoggedIn" class="navbar-nav">
      <router-link to="/notificationwelcome" class="nav-link">
        Home
      </router-link>
      <router-link to="/notificationlist" class="nav-link">
        My Notifications
      </router-link>
      <router-link to="/contact" class="nav-link">
        Personal information
      </router-link>
      <button class="btn btn-primary" @click="logout()">
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
      this.$router.push({ name: "WelcomePage" });
    }
  },
  computed: {
    ...mapGetters("auth", ["isLoggedIn"])
  }
};
</script>
<style scoped></style>
