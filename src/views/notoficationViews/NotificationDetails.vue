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
          v-model="notification.title"
        />
      </div>
      <div class="col-md-3">
        <label class="form-label">Status:</label>

        <input
          type="text"
          class="form-control text-center"
          disabled
          style="background:#E3CBE4"
          placeholder="new"
          v-if="notification.status == 1"
        />
        <input
          type="text"
          class="form-control text-center"
          disabled
          style="background:#F4DCC0"
          placeholder="pedding"
          v-if="notification.status == 2"
        />
        <input
          type="text"
          class="form-control text-center"
          style="background:#CBE1BA"
          disabled
          placeholder="cloased"
          v-if="notification.status == 3"
        />
      </div>
      <div class="col-12">
        <label class="form-label">Description:</label>
        <textarea
          disabled
          class="form-control"
          v-model="notification.description"
        ></textarea>
      </div>

      <div class="col-12">
        <label class="form-label">Response:</label>
        <textarea
          disabled
          class="form-control"
          v-model="notification.response"
        ></textarea>
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
export default {
  props: {
    notification: {
      default: null
    }
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
