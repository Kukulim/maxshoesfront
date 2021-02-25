<template>
  <div class="container">
    <form @submit="SaveChanges($event)">
      <h3 class="mt-4 mb-4">Account Informations:</h3>

      <div class="row">
        <div class="col">
          <div class="form-group input-wrapper">
            <label>User Name:</label>
            <input
              class="form-control"
              placeholder="name..."
              v-model.trim="$v.employee.userName.$model"
              :class="{
                'is-invalid': $v.employee.userName.$error,
                'is-valid': !$v.employee.userName.$invalid,
              }"
            />
            <div class="valid-feedback">User name is ok.</div>
            <div class="invalid-feedback">
              <span v-if="!$v.employee.userName.required"
                >User name is required.</span
              >
              <span v-if="!$v.employee.userName.minLength"
                >User name must be atleast
                {{ $v.employee.userName.$params.minLength.min }}
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
              v-model.trim="$v.employee.email.$model"
              :class="{
                'is-invalid': $v.employee.email.$error,
                'is-valid': !$v.employee.email.$invalid,
              }"
            />
            <div class="valid-feedback">Email is ok.</div>
            <div class="invalid-feedback">
              <span v-if="!$v.employee.email.required">Email is required.</span>
              <span v-if="!$v.employee.email.minLength"
                >Email must be a valid email address.</span
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
              v-model="employee.contact.firstName"
              placeholder="fist name..."
            />
          </div>

          <div class="form-group">
            <label>Last name (or NIP):</label>
            <input
              type="text"
              class="form-control"
              v-model="employee.contact.lastName"
              placeholder="last name..."
            />
          </div>

          <div class="form-group">
            <label>State:</label>
            <input
              type="text"
              class="form-control"
              v-model="employee.contact.state"
              placeholder="state..."
            />
          </div>

          <div class="form-group">
            <label>Zip Code:</label>
            <input
              type="text"
              class="form-control"
              v-model="employee.contact.zipCode"
              placeholder="zip code..."
            />
          </div>

          <div class="form-group">
            <label>City:</label>
            <input
              type="text"
              class="form-control"
              v-model="employee.contact.city"
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
              v-model="employee.contact.street"
              placeholder="street..."
            />
          </div>
          <div class="form-group">
            <label>House Number:</label>
            <input
              type="number"
              class="form-control"
              v-model="employee.contact.houseNumber"
              placeholder="house number..."
            />
          </div>
          <div class="form-group">
            <label>Apartment Number:</label>
            <input
              type="number"
              class="form-control"
              v-model="employee.contact.apartmentNumber"
              placeholder="apartment number..."
            />
          </div>

          <div class="form-group">
            <label>Phone Number:</label>
            <input
              type="number"
              class="form-control"
              v-model="employee.contact.phoneNumber"
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
import { mapGetters, mapActions } from "vuex";
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  data() {
    return {};
  },
  props: {
    employee: {
      default: null,
    },
  },
  computed: {
    ...mapGetters("auth", { CurrentUserAccessToken: "getCurrentaccessToken" }),
  },
  methods: {
    ...mapActions("emplo", ["editEmployeeAction"]),
    async SaveChanges(event) {
      event.preventDefault();
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      this.employee.contact.apartmentNumber = parseInt(
        this.employee.contact.apartmentNumber
      );
      this.employee.contact.houseNumber = parseInt(
        this.employee.contact.houseNumber
      );
      this.employee.accessToken = this.CurrentUserAccessToken;
      await this.editEmployeeAction(this.employee);
      this.$router.push({ name: "EmployeesList" });
    },
  },
  validations: {
    employee: {
      email: {
        required,
        email,
      },
      userName: {
        required,
        minLength: minLength(6),
      },
    },
  }
};
</script>

<style lang="scss" scoped>
input {
  text-indent: 0px;
}
</style>