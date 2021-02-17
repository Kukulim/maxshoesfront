<template>
  <div id="app">
    <HeaderBar />
    <div class="container mt-4">
      <router-view />
    </div>
    <FooterBar />
  </div>
</template>

<script>
import HeaderBar from "./components/header/header-bar.vue";
import FooterBar from "./components/footer/footer-bar.vue";

export default {
  name: "App",
  components: { HeaderBar, FooterBar }
};
</script>

<style lang="scss">
@import "@/design/index.scss";
</style>
