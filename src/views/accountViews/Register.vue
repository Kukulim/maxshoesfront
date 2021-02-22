<template>
  <div class="acount-box">
    <h1 class="mt-4 mb-4">Register page:</h1>
    <div class="row">
      <div class="col">
        <form @submit="createUser($event)">
          <div class="form-group input-wrapper">
            <label>User Name:</label>
            <i class="fa fa-user input-icon"></i>
            <input
              class="form-control"
              placeholder="name..."
              v-model.trim="$v.currentUser.username.$model"
              :class="{
                'is-invalid': $v.currentUser.username.$error,
                'is-valid': !$v.currentUser.username.$invalid
              }"
            />
            <div class="valid-feedback">User name is ok.</div>
            <div class="invalid-feedback">
              <span v-if="!$v.currentUser.username.required"
                >User name is required.</span
              >
              <span v-if="!$v.currentUser.username.minLength"
                >User name must be atleast
                {{ $v.currentUser.username.$params.minLength.min }}
                characters.</span
              >
              <span />
            </div>
          </div>

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

          <div v-if="currentUser.password">
            <div class="form-group input-wrapper">
              <label>Repeat password:</label>
              <i class="fa fa-key input-icon"></i>
              <input
                class="form-control"
                placeholder="password..."
                type="password"
                v-model.trim="$v.currentUser.confirmpassword.$model"
                :class="{
                  'is-invalid': $v.currentUser.confirmpassword.$error,
                  'is-valid': !$v.currentUser.confirmpassword.$invalid
                }"
              />

              <div class="valid-feedback">Password is ok.</div>
              <div class="invalid-feedback">
                <span v-if="!$v.currentUser.confirmpassword.required"
                  >Email is required.</span
                >
                <span v-if="!$v.currentUser.confirmpassword.minLength"
                  >Email must be the same like password.</span
                >
                <span />
              </div>
            </div>
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
import {
  required,
  minLength,
  email,
  sameAs,
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
        username: "",
        password: "",
        confirmpassword: "",
        email: "",
        isEmailConfirmed: false
      },
      showerrormesage: false
    };
  },
  methods: {
    async createUser(event) {
      event.preventDefault();
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      const response = await data.register(this.currentUser);
      if (response == "error") {
        this.showerrormesage = true;
      } else this.$router.push({ name: "Login" });
    }
  },
  validations: {
    currentUser: {
      username: {
        required,
        minLength: minLength(6)
      },
      password: {
        required,
        minLength: minLength(8),
        alpha,
        beta
      },
      email: {
        required,
        email
      },
      confirmpassword: {
        sameAsPassword: sameAs("password")
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
