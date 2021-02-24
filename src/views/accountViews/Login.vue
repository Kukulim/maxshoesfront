<template>
  <div class="acount-box">
    <h1 class="mt-4 mb-4">Login page:</h1>
    <div class="row container">
      <div class="col">
        <form @submit="Login($event)">
         <div class="form-group input-wrapper">
            <label>Email:</label>
            <i class="fa fa-envelope input-icon"></i>
            <input
              class="form-control"
              placeholder="email..."
              v-model.trim="$v.currentUser.email.$model"
              :class="{
                'is-invalid': $v.currentUser.email.$error,
                'is-valid': !$v.currentUser.email.$invalid
              }"
            />
            <div class="valid-feedback">Email is ok.</div>
            <div class="invalid-feedback">
              <span v-if="!$v.currentUser.email.required"
                >Email is required.</span
              >
              <span v-if="!$v.currentUser.email.minLength"
                >Email must be a valid email address.</span
              >
              <span />
            </div>
          </div>
          <div class="form-group input-wrapper">
            <label>Password</label>
            <i class="fa fa-key input-icon"></i>
            <input
              class="form-control"
              type="password"
              placeholder="email..."
              v-model.trim="$v.currentUser.password.$model"
              :class="{
                'is-invalid': $v.currentUser.password.$error,
                'is-valid': !$v.currentUser.password.$invalid
              }"
            />
            <div class="valid-feedback">Password is ok.</div>
            <div class="invalid-feedback">
              <span v-if="!$v.currentUser.password.required"
                >Password is required.</span
              >
              <span v-if="!$v.currentUser.password.minLength"
                >Password must be atleast
                {{ $v.currentUser.password.$params.minLength.min }} charakters
                <br
              /></span>
              <span v-if="!$v.currentUser.password.alpha"
                >Password must contain at least 1 numeric character <br
              /></span>
              <span v-if="!$v.currentUser.password.beta"
                >Password must contain at least 1 uppercase character</span
              >
              <span />
            </div>
          </div>
          <div>
            <router-link to="/forgottenpassword">
              Forgotten Password
            </router-link>
          </div>

          <div
            v-if="showerrormesage"
            class="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <strong>Wrong username or password. Try again.</strong>
            <button
              type="button"
              class="close"
              @click="this.showerrormesage = false"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <button type="submit" class="btn btn-primary mt-3 mb-3">Login</button>
        </form>
      </div>
      <div class="col">
        <img src="@/assets/login.jpg" class="fluid-img accountImg" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import {
  required,
  minLength,
  email,
  helpers
} from "vuelidate/lib/validators";

var numberRegex = new RegExp("(?=.*[0-9])");
var UpperRegex = new RegExp("(?=.*[A-Z])");

const alpha = helpers.regex("alpha", numberRegex);
const beta = helpers.regex("alpha", UpperRegex);

export default {
  data() {
    return {
      currentUser: {
        email: "",
        password: ""
      },
      showerrormesage: false
    };
  },
  methods: {
    ...mapActions("auth", ["loginAction"]),
    ...mapActions("notify", ["getNotificationAction"]),
    async Login(event) {
      event.preventDefault();

      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      const response = await this.loginAction(this.currentUser);
      if (response == "error") {
        this.showerrormesage = true;
      }
      if (response.role == "Employee") {
        await this.getNotificationAction(response.accessToken);
        this.$router.push({ name: "NotificacionsAllCustomers" });
      } else this.$router.push({ name: "NotificationWelcome" });
    }
  },
  validations: {
    currentUser: {
      password: {
        required,
        minLength: minLength(8),
        alpha,
        beta
      },
      email: {
        required,
        email
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
