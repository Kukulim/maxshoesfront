<template>
  <nav class="ml-auto">



    <ul v-if="!isLoggedIn" class="navbar-nav">
      <router-link to="/register" class="nav-link"> Register </router-link>
      <router-link to="/login" class="nav-link"> Login </router-link>
    </ul>


    <ul class="navbar-nav">
      <router-link to="/notificationwelcome" class="nav-link" v-if="isLoggedIn && getCurrentUserRole=='Customer'">
        Home
      </router-link>
      <router-link to="/notificationlist" class="nav-link" v-if="isLoggedIn && getCurrentUserRole=='Customer'">
        My Notifications
      </router-link>
      <router-link to="/contact" class="nav-link" v-if="isLoggedIn && getCurrentUserRole=='Customer'">
        Personal information
      </router-link>

      <router-link to="/notificacionsallcustomers" class="nav-link" v-if="isLoggedIn && getCurrentUserRole=='Employee'">
        Customers Notifications
      </router-link>


      <button class="btn btn-primary" @click="logout()" v-if="isLoggedIn">
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
    ...mapGetters("auth", ["isLoggedIn"]),
    ...mapGetters("auth", ["getCurrentUserRole"])
  }
};
</script>
<style scoped></style>
