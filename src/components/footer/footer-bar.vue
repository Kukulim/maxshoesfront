<template>
  <footer class="footer navbar navbar-light bg-light">
    <div class="container">
      <FooterNav />
    </div>
  </footer>
</template>

<script>
import FooterNav from "@/components/footer/footer-nav.vue";
export default {
  name: "FooterBar",
  components: { FooterNav }
};
</script>

<style lang="scss" scoped>
.footer {
  max-height: 20px;
}
</style>
