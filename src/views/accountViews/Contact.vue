<template>
  <div class="container">
    <h1 class="mt-4 mb-4">Personal Informations:</h1>
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
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label>First name (or company name):</label>
            <input
              type="text"
              class="form-control"
              v-model="contact.firstName"
              placeholder="fist name..."
            />
          </div>

          <div class="form-group">
            <label>Last name (or NIP):</label>
            <input
              type="text"
              class="form-control"
              v-model="contact.lastName"
              placeholder="last name..."
            />
          </div>

          <div class="form-group">
            <label>State:</label>
            <input
              type="text"
              class="form-control"
              v-model="contact.state"
              placeholder="state..."
            />
          </div>

          <div class="form-group">
            <label>Zip Code:</label>
            <input
              type="text"
              class="form-control"
              v-model="contact.zipCode"
              placeholder="zip code..."
            />
          </div>

          <div class="form-group">
            <label>City:</label>
            <input
              type="text"
              class="form-control"
              v-model="contact.city"
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
              v-model="contact.street"
              placeholder="street..."
            />
          </div>
          <div class="form-group">
            <label>House Number:</label>
            <input
              type="number"
              class="form-control"
              v-model="contact.houseNumber"
              placeholder="house number..."
            />
          </div>
          <div class="form-group">
            <label>Apartment Number:</label>
            <input
              type="number"
              class="form-control"
              v-model="contact.apartmentNumber"
              placeholder="apartment number..."
            />
          </div>

          <div class="form-group">
            <label>Phone Number:</label>
            <input
              type="number"
              class="form-control"
              v-model="contact.phoneNumber"
              placeholder="phone number..."
            />
          </div>

          <div class="form-group">
            <label>Is email confirmed:</label>
            <div>
              <div
                v-if="CurrentUser.isEmailConfirmed == true"
                class="btn btn-success"
              >
                Is confirmed
              </div>
              <router-link
                v-if="CurrentUser.isEmailConfirmed == true"
                to="/changepassword"
                class="btn btn-warning ml-5"
              >
                Change Password
              </router-link>
            </div>
            <div>
              <router-link
                v-if="CurrentUser.isEmailConfirmed == false"
                to="/confirmemail"
                class="btn btn-warning"
              >
                No, please click to confirm.
              </router-link>
            </div>
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
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      showmessage: false
    };
  },
  computed: {
    ...mapState("auth", { contact: "contact" }),
    ...mapState("auth", { CurrentUser: "user" })
  },
  methods: {
    ...mapActions("auth", ["saveContactAction"]),

    async SaveChanges(event) {
      event.preventDefault();
      this.contact.apartmentNumber = parseInt(this.contact.apartmentNumber);
      this.contact.houseNumber = parseInt(this.contact.houseNumber);
      const UserToSave = {
        email: this.CurrentUser.email,
        accessToken: this.CurrentUser.accessToken,
        contact: this.contact
      };
      await this.saveContactAction(UserToSave);
      this.showmessage = true;
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  text-indent: 0px;
}
</style>
