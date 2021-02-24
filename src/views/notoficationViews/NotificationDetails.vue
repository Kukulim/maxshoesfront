<template>
  <div class="container">
    <h1 class="mt-4 mb-4">Details:</h1>
    <form class="row g-3">
      <div class="col-md-9">
        <label class="form-label">Title:</label>
        <input
          type="email"
          class="form-control"
          disabled
          v-model="mynotification.title"
        />
      </div>
      <div class="col-md-3">
        <label class="form-label">Status:</label>

        <input
          type="text"
          class="form-control text-center"
          disabled
          style="background: #e3cbe4"
          placeholder="new"
          v-if="mynotification.status == 1"
        />
        <input
          type="text"
          class="form-control text-center"
          disabled
          style="background: #f4dcc0"
          placeholder="pedding"
          v-if="mynotification.status == 2"
        />
        <input
          type="text"
          class="form-control text-center"
          style="background: #cbe1ba"
          disabled
          placeholder="cloased"
          v-if="mynotification.status == 3"
        />
      </div>
      <div class="col-12">
        <label class="form-label">Description:</label>
        <textarea
          disabled
          class="form-control"
          v-model="mynotification.description"
        ></textarea>
      </div>

      <div class="col-12">
        <label class="form-label">Response:</label>
        <textarea
          disabled
          class="form-control"
          v-model="mynotification.response"
        ></textarea>
      </div>

      <div v-if="mynotification.fileUrl" class="col-sm">
        <a :href="imagelink" class="btn btn-primary mt-2"
          >Download attachment</a
        >
      </div>

      <div class="col-12">
        <router-link to="/notificationlist" class="btn btn-warning mt-2">
          Back
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { API_DOWNLOAD_LOCATION } from "../../../config";

export default {
  data() {
    return {
      imagelink: `${API_DOWNLOAD_LOCATION}` + this.mynotification.fileUrl
    };
  },
  props: {
    mynotification: {
      default: null
    }
  },
  computed: {
    ...mapState("auth", { CurrentUser: "user" })
  }
};
</script>

<style lang="scss" scoped>
input {
  text-indent: 0px;
  max-width: 100%;
}
textarea {
  height: 200px;
}
</style>
