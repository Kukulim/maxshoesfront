<template>
  <div class="acount-box">
    <h1 class="mt-4 mb-4">Create new notification:</h1>
    <div class="row container">
      <div class="col">
        <form @submit="CreateNotification($event)">
          <div class="form-group input-wrapper">
            <label>Title:</label>
            <input
              class="form-control"
              placeholder="title..."
              v-model.trim="$v.NewNoticifation.title.$model"
              :class="{
                'is-invalid': $v.NewNoticifation.title.$error,
                'is-valid': !$v.NewNoticifation.title.$invalid,
              }"
            />
            <div class="valid-feedback">Title is ok.</div>
            <div class="invalid-feedback">
              <span v-if="!$v.NewNoticifation.title.required"
                >Title is required.</span
              >
              <span />
            </div>
          </div>

          <div class="form-group input-wrapper">
            <label>Description:</label>
            <textarea
              class="form-control"
              placeholder="Description..."
              v-model.trim="$v.NewNoticifation.description.$model"
              :class="{
                'is-invalid': $v.NewNoticifation.description.$error,
                'is-valid': !$v.NewNoticifation.description.$invalid,
              }"
            />
            <div class="valid-feedback">Description is ok.</div>
            <div class="invalid-feedback">
              <span v-if="!$v.NewNoticifation.description.required"
                >Description is required.</span
              >
              <span />
            </div>
          </div>

          <div class="form-group input-wrapper">
            <label class="btn btn-danger">Add a file to notification
                          <input
              type="file"
              accept="image/jpeg,application/pdf"
              class="form-control"
              placeholder="file url..."
              id="file-input"
              @change="uploadImage($event)"
              hidden
            />
            </label>
            <small id="emailHelp" class="form-text text-muted">Optional</small>
          </div>

          <button type="submit" class="btn btn-primary mt-3 mb-3">Send</button>

          <router-link
            to="/notificationlist"
            class="btn btn-warning mt-3 mb-3 routerbuton"
          >
            Back
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { required } from "vuelidate/lib/validators";
import { uuid } from "vue-uuid";
import { notification } from "@/shared";

export default {
  data() {
    return {
      NewNoticifation: {
        id: uuid.v1(),
        userid: "",
        title: "",
        createdat: "",
        description: "",
        fileUrl: "",
      },
      showerrormesage: false,
    };
  },
  computed: {
    ...mapState("auth", { CurrentUser: "user" }),
  },
  methods: {
    ...mapActions("auth", ["loginAction"]),
    ...mapActions("auth", ["createNotificationAction"]),
    async CreateNotification(event) {
      event.preventDefault();
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      const NotifycationToSave = {
        fileUrl: this.NewNoticifation.fileUrl,
        id: this.NewNoticifation.id,
        userid: this.CurrentUser.userId,
        title: this.NewNoticifation.title,
        description: this.NewNoticifation.description,
        status: 1,
        createdAt: new Date(),
        token: this.CurrentUser.accessToken,
      };
      const resp = await this.createNotificationAction(NotifycationToSave);
      if (resp == "error") {
        this.showerrormesage = true;
      }
      this.$router.push({ name: "NotificationList" });
    },
    async uploadImage(event) {
      const data = new FormData();
      data.append("name", "my-picture");
      data.append("file", event.target.files[0]);
      const response = await notification.updateFile(
        data,
        this.CurrentUser.accessToken
      );
      this.NewNoticifation.fileUrl = response.fileNameToInsert;
    },
  },
  validations: {
    NewNoticifation: {
      title: {
        required,
      },
      description: {
        required,
      },
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  text-indent: 0px;
  max-width: 100%;
}
textarea {
  height: 400px;
}
.routerbuton {
  float: right;
}
</style>
