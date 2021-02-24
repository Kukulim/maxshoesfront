<template>
  <div class="container">
    <h1 class="mt-4 mb-4">Edit:</h1>
    <form class="row g-3">
      <div class="col-md-9">
        <label class="form-label">Title:</label>
        <input type="email" class="form-control" v-model="notification.title" />
      </div>
      <div class="col-md-3">
        <label class="form-label">Status:</label>
        <div>
          <select
            class="form-select form-control"
            v-bind:class="selectedclass"
            @change="selectclass()"
            v-model="notification.status"
          >
            <option
              :selected="notification.status === 1"
              style="background:#E3CBE4"
              value="1"
              >New</option
            >
            <option
              :selected="notification.status === 2"
              style="background:#F4DCC0"
              value="2"
              >Pedding</option
            >
            <option
              :selected="notification.status === 3"
              style="background:#CBE1BA"
              value="3"
              >Cloased</option
            >
          </select>
        </div>
      </div>
      <div class="col-12">
        <label class="form-label">Description:</label>
        <textarea
          class="form-control"
          v-model="notification.description"
        ></textarea>
      </div>

      <div class="col-12">
        <label class="form-label">Response:</label>
        <textarea
          class="form-control"
          v-model="notification.response"
        ></textarea>
      </div>

      <div class="col-12">
        <button type="submit" class="btn btn-primary mt-3 mb-3">Save</button>
        <router-link
          to="/notificacionsallcustomers"
          class="btn btn-warning mt-2 routerbuton"
        >
          Back
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedclass: ""
    };
  },
  props: {
    notification: {
      default: null
    }
  },
  methods: {
    selectclass: function() {
      if (this.notification.status == 1) {
        this.selectedclass = "form-select form-control newnotify";
      }
      if (this.notification.status == 2) {
        this.selectedclass = "form-select form-control pedding";
      }
      if (this.notification.status == 3) {
        this.selectedclass = "form-select form-control cloased";
      }
    }
  },
  created: function() {
    this.selectclass();
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
.newnotify {
  background: #e3cbe4;
}
.pedding {
  background: #f4dcc0;
}
.cloased {
  background: #cbe1ba;
}
.routerbuton {
  float: right;
}
</style>
