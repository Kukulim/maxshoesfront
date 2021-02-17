<template>
  <div class="acount-box">
    <h1 class="mt-4 mb-4">
      Register page:
    </h1>
    <div class="row">
      <div class="col">
        <form @submit="createUser($event)">
          <div class="form-group input-wrapper">
            <label for="exampleInputEmail1">User Name</label>
            <i class="fa fa-user input-icon"></i>
            <input
              type="text"
              class="form-control"
              placeholder="name..."
              v-model="currentUser.username"
            />
          </div>

          <div class="form-group input-wrapper">
            <label for="exampleInputEmail1">Email:</label>
            <i class="fa fa-envelope input-icon"></i>
            <input
              type="email"
              class="form-control"
              placeholder="email@email..."
              v-model="currentUser.email"
            />
            <small id="emailHelp" class="form-text text-muted"
              >We'll never share your email with anyone else.</small
            >
          </div>

          <div class="form-group input-wrapper">
            <label for="exampleInputPassword1">Password</label>
            <i class="fa fa-key input-icon"></i>
            <input
              type="password"
              class="form-control"
              placeholder="password..."
              v-model="currentUser.password"
            />
          </div>

          <div
            v-if="showerrormesage"
            class="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <strong>Username or password already exists.</strong>
            <div>
              <router-link to="/forgottenpassword">
                Forgotten Password
              </router-link>
            </div>
            <button
              type="button"
              class="close"
              @click="this.showerrormesage = false"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <button type="submit" class="btn btn-primary mt-3 mb-3">
            Register
          </button>
        </form>
      </div>
      <div class="col">
        <img src="@/assets/register.jpg" class="fluid-img accountImg" />
      </div>
    </div>
  </div>
</template>

<script>
import { data } from "@/shared";

export default {
  data() {
    return {
      currentUser: {
        username: "",
        password: "",
        email: "",
        isEmailConfirmed: false
      },
      showerrormesage: false
    };
  },
  methods: {
    async createUser(event) {
      event.preventDefault();
      const response = await data.register(this.currentUser);
      if (response == "error") {
        this.showerrormesage = true;
      } else this.$router.push({ name: "Login" });
    }
  }
};
</script>

<style lang="scss" scoped></style>
