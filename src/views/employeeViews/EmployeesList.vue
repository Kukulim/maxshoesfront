<template>
  <div class="container">
    <h1 class="mt-4 mb-4">Max Employees:</h1>
    <router-link class="btn btn-primary m-3" to="/createemployee">
      Add new Employee
    </router-link>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Name:</th>
          <th scope="col">Edit:</th>
          <th scope="col">Delete:</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in CurrentEmployees" :key="employee.id">
          <th class="notifi-title">{{ employee.userName }}</th>
          <td></td>
          <td>
            <button
            @click="setCurrentEmployee(employee)"
              class="btn btn-danger"
              v-confirm="{
                loader: true,
                ok: okCallback,
                animation: 'fade',
                okText: 'Delete',
                message: 'Are You sure You want delete employee ?',
              }"
            >
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      CurrentEmployee:null,
    };
  },
  computed: {
    ...mapState("emplo", { CurrentEmployees: "employees" }),
    ...mapState("auth", { user: "user" }),
  },
  methods: {
    ...mapActions("emplo", ["deleteEmployeeAction"]),
    async deleteEmployee() {
      this.CurrentEmployee.accessToken = this.user.accessToken;
      await this.deleteEmployeeAction(this.CurrentEmployee);
    },
    okCallback: function (dialog) {
      this.deleteEmployee()
      dialog.loading(false); 
      dialog.close(); 
    },
    setCurrentEmployee(employee){
      this.CurrentEmployee=employee
    }
  }
};
</script>

<style lang="scss" scoped>
.notifi-status {
  max-width: 100px;
}
.notifi-title {
  min-width: 400px;
}
</style>
