<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <div class="container">
        <HeaderBarBrand />

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <HeaderNav />
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import HeaderBarBrand from "@/components/header/header-bar-brand";
import HeaderNav from "@/components/header/header-nav";

export default {
  name: "HeaderBar",
  components: { HeaderBarBrand, HeaderNav }
};
</script>
<style lang="scss" scoped></style>
