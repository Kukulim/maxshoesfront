<template>
  <div class="container">
    <h1 class="mt-4 mb-4">Your Notifications:</h1>
    <router-link class="btn btn-primary m-3" to="/notificationcreate">
      Create new notification
    </router-link>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Title:</th>
          <th scope="col">Created at:</th>
          <th scope="col">Status:</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="notification in CurrentUser.notifications"
          :key="notification.id"
        >
          <th class="notifi-title">{{ notification.title }}</th>
          <td>{{ notification.createdAt | formatDate}}</td>
          <td v-if="notification.status == 1" class="notifi-status table-danger text-center">New</td>
          <td v-if="notification.status == 2" class="notifi-status table-warning text-center">Pending</td>
          <td v-if="notification.status == 3" class="notifi-status table-success text-center">Cloased</td>
          <td>
            <router-link
              :to="{
                name: 'NotificationDetails',
                params: { notification: notification }
              }"
              tag="button"
              class="btn btn-secondary float-right notifi-button"
            >
              <span>Details</span>
              <i class="fas fa-edit ml-3" />
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("auth", { CurrentUser: "user" })
  }
};
</script>

<style lang="scss" scoped>
.notifi-status{
  max-width: 100px;
}
.notifi-title{
  min-width: 400px;
}

  </style>
