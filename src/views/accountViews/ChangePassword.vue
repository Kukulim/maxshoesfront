<template>
  <div class="acount-box">
    <h1 class="mt-4 mb-4">Change Password:</h1>
    <div class="row container">
      <div class="col">
        <form @submit="ChangePassword($event)">
          <div class="form-group input-wrapper">
            <label for="exampleInputEmail1">Email:</label>
            <i class="fa fa-envelope input-icon"></i>
            <input
              type="email"
              class="form-control"
              placeholder="email@email..."
              v-model="ChangePasswordRequest.email"
            />
          </div>

          <div class="form-group input-wrapper">
            <label for="exampleInputPassword1">Current Password:</label>
            <i class="fa fa-key input-icon"></i>
            <input
              type="password"
              class="form-control"
              placeholder="current password..."
              v-model="ChangePasswordRequest.oldpassword"
            />
          </div>

          <div class="form-group input-wrapper">
            <label for="exampleInputPassword1">New Password:</label>
            <i class="fa fa-key input-icon"></i>
            <input
              type="password"
              class="form-control"
              placeholder="new password..."
              v-model="ChangePasswordRequest.newpassword"
            />
          </div>

          <div
            v-if="showerrormesage"
            class="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <strong>Wrong email or password. Try again.</strong>
            <button
              type="button"
              class="close"
              @click="this.showerrormesage = false"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <button type="submit" class="btn btn-primary mt-3 mb-3">
            Change Password
          </button>
        </form>
      </div>
      <div class="col">
        <img src="@/assets/password.jpg" class="fluid-img accountImg" />
      </div>
    </div>
  </div>
</template>

<script>
import { data } from "@/shared";
import { mapState } from "vuex";

export default {
  data() {
    return {
      ChangePasswordRequest: {
        email: "",
        oldpassword: "",
        newpassword: "",
      },
      showerrormesage: false,
    };
  },
    computed: {
    ...mapState("auth", { accessToken: "accessToken" }),
  },
  methods: {
    async ChangePassword(event) {
      event.preventDefault();

      const response = await data.changePassword(this.ChangePasswordRequest, this.accessToken)
      console.log(this.ChangePasswordRequest);
      if (response == "error") {
        this.showerrormesage = true;
      } else this.$router.push({ name: "NotificationWelcome" });
    },
  },
};
</script>

<style lang="scss" scoped></style>
