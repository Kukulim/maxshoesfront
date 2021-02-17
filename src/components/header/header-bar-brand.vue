<template>
  <b-navbar-brand>
    <router-link to="/" class="nav-link">
      <img
        src="@/assets/shoeslogo.png"
        class="img-fluid brand-img"
        alt="Responsive image"
      />
      <span class="navbar-brand"><span class="logo">MAX</span>Shoes</span>
    </router-link>
  </b-navbar-brand>
</template>
<style lang="scss" scoped>
.logo {
  color: rgb(233, 32, 32);
  font-size: 1.1em;
  margin: 5px;
}
.brand-img {
  max-height: 45px;
  max-width: 45px;
}
.nav-link {
  background-color: rgba(242, 243, 152, 0.068);
  border: 1px solid black;
  margin: 0;
}
.navbar-brand {
  display: inline;
  margin: 0;
  padding: 0;
}
</style>
