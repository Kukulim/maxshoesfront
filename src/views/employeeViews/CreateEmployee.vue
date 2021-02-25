<template>
  <div class="container">
    <div
      v-if="showmessage"
      class="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <strong>Save success.</strong>
      <button type="button" class="close" @click="this.showmessage = false">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <form @submit="SaveChanges($event)">
      <h3 class="mt-4 mb-4">Account Informations:</h3>

      <div class="row">
        <div class="col">
          <div class="form-group input-wrapper">
            <label>User Name:</label>
            <input
              class="form-control"
              placeholder="name..."
              v-model.trim="$v.formUser.userName.$model"
              :class="{
                'is-invalid': $v.formUser.userName.$error,
                'is-valid': !$v.formUser.userName.$invalid,
              }"
            />
            <div class="valid-feedback">User name is ok.</div>
            <div class="invalid-feedback">
              <span v-if="!$v.formUser.userName.required"
                >User name is required.</span
              >
              <span v-if="!$v.formUser.userName.minLength"
                >User name must be atleast
                {{ $v.formUser.userName.$params.minLength.min }}
                characters.</span
              >
              <span />
            </div>
          </div>

          <div class="form-group input-wrapper">
            <label>Email:</label>
            <input
              class="form-control"
              placeholder="email..."
              v-model.trim="$v.formUser.email.$model"
              :class="{
                'is-invalid': $v.formUser.email.$error,
                'is-valid': !$v.formUser.email.$invalid,
              }"
            />
            <div class="valid-feedback">Email is ok.</div>
            <div class="invalid-feedback">
              <span v-if="!$v.formUser.email.required">Email is required.</span>
              <span v-if="!$v.formUser.email.minLength"
                >Email must be a valid email address.</span
              >
              <span />
            </div>
          </div>
          <div class="form-group input-wrapper">
            <label>Password</label>
            <input
              class="form-control"
              placeholder="password..."
              v-model.trim="$v.formUser.password.$model"
              :class="{
                'is-invalid': $v.formUser.password.$error,
                'is-valid': !$v.formUser.password.$invalid,
              }"
            />
            <div class="valid-feedback">Password is ok.</div>
            <div class="invalid-feedback">
              <span v-if="!$v.formUser.password.required"
                >Password is required.</span
              >
              <span v-if="!$v.formUser.password.minLength"
                >Password must be atleast
                {{ $v.formUser.password.$params.minLength.min }} charakters <br
              /></span>
              <span v-if="!$v.formUser.password.alpha"
                >Password must contain at least 1 numeric character <br
              /></span>
              <span v-if="!$v.formUser.password.beta"
                >Password must contain at least 1 uppercase character</span
              >
              <span />
            </div>
          </div>
        </div>
      </div>

      <h3 class="mt-4 mb-4">Personal Informations:</h3>
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label>First name (or company name):</label>
            <input
              type="text"
              class="form-control"
              v-model="formUser.contact.firstName"
              placeholder="fist name..."
            />
          </div>

          <div class="form-group">
            <label>Last name (or NIP):</label>
            <input
              type="text"
              class="form-control"
              v-model="formUser.contact.lastName"
              placeholder="last name..."
            />
          </div>

          <div class="form-group">
            <label>State:</label>
            <input
              type="text"
              class="form-control"
              v-model="formUser.contact.state"
              placeholder="state..."
            />
          </div>

          <div class="form-group">
            <label>Zip Code:</label>
            <input
              type="text"
              class="form-control"
              v-model="formUser.contact.zipCode"
              placeholder="zip code..."
            />
          </div>

          <div class="form-group">
            <label>City:</label>
            <input
              type="text"
              class="form-control"
              v-model="formUser.contact.city"
              placeholder="city..."
            />
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label>Street:</label>
            <input
              type="text"
              class="form-control"
              v-model="formUser.contact.street"
              placeholder="street..."
            />
          </div>
          <div class="form-group">
            <label>House Number:</label>
            <input
              type="number"
              class="form-control"
              v-model="formUser.contact.houseNumber"
              placeholder="house number..."
            />
          </div>
          <div class="form-group">
            <label>Apartment Number:</label>
            <input
              type="number"
              class="form-control"
              v-model="formUser.contact.apartmentNumber"
              placeholder="apartment number..."
            />
          </div>

          <div class="form-group">
            <label>Phone Number:</label>
            <input
              type="number"
              class="form-control"
              v-model="formUser.contact.phoneNumber"
              placeholder="phone number..."
            />
          </div>

          <div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import { uuid } from "vue-uuid";
import { required, minLength, email, helpers } from "vuelidate/lib/validators";

var numberRegex = new RegExp("(?=.*[0-9])");
var UpperRegex = new RegExp("(?=.*[A-Z])");

const alpha = helpers.regex("alpha", numberRegex);
const beta = helpers.regex("alpha", UpperRegex);

export default {
  data() {
    return {
      formUser: {
        userName: "",
        isEmailConfirmed: true,
        email: "",
        password: "",
        role: "Employee",
        contact: {
          Id: uuid.v1(),
          city: "",
          phoneNumber: "",
          zipCode: "",
          apartmentNumber: 0,
          state: "",
          firstName: "",
          lastName: "",
          houseNumber: 0,
          street: "",
        },
      },
      showmessage: false,
    };
  },
  computed: {
    ...mapState("auth", { contact: "contact" }),
    ...mapGetters("auth", { CurrentUserAccessToken: "getCurrentaccessToken" }),
  },
  methods: {
    ...mapActions("auth", ["saveContactAction"]),

    async SaveChanges(event) {
      event.preventDefault();
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      //this.formUser.contact.apartmentNumber = parseInt(this.contact.apartmentNumber);
      //this.formUser.contact.houseNumber = parseInt(this.contact.houseNumber);
      //await this.saveContactAction(UserToSave);
      console.log(this.formUser);
      this.showmessage = true;
    },
  },
  validations: {
    formUser: {
      password: {
        required,
        minLength: minLength(8),
        alpha,
        beta,
      },
      email: {
        required,
        email,
      },
      userName: {
        required,
        minLength: minLength(6),
      },
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  text-indent: 0px;
}
</style>
