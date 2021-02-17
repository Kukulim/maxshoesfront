<template>
  <div class="row acount-box">
    <div class="col" v-if="!sended">
      <h3>Confirm your email address</h3>
      <p>
        We have sent an email with a confirmation link to your email address. In
        order to complete the sign-up process, please click the confirmation
        link.
      </p>

      <p>
        If you do not see a confirmation email, please check your spam folder.
        Also, please verify that you entered a valid email address in our
        sign-up form.
      </p>

      <p>
        If you do not receive a confirmation email, please click button below to
        resend confirmation link to your email address.
      </p>
      <button class="btn btn-primary" @click="sendEmail()">Click me !</button>
    </div>
    <div class="col" v-if="sended">
      <p class="alert alert-warning alert-dismissible fade show" role="alert">
        An email has been sent. Please check your email inbox.
      </p>

      <p class="alert alert-warning alert-dismissible fade show" role="alert">
        <b>Warning</b>: You willl be redirected back to the Login Page <br />
        in <b>{{ countDown }} Seconds</b>
      </p>
    </div>
    <div class="col">
      <img src="@/assets/confirmEmail.jpg" class="fluid-img accountImg" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { data } from "@/shared";
export default {
  data() {
    return {
      loading: true,
      sended: false,
      countDown: 10,
    };
  },
  computed: {
    ...mapState("auth", { user: "user" }),
    ...mapState("auth", { accessToken: "accessToken" }),
    ...mapMutations("auth", ["removeTokens"]),
  },
  methods: {
    async sendEmail() {
      const Currentuser = {
        username: this.user.userName,
        useremail: this.user.email,
      };
      try {
        await data.sendConfirmEmail(Currentuser, this.accessToken);
      } catch (err) {
        console.log(err);
      }
      this.sended = true;
      this.countDownTimer();
      this.removeTokens();
    },

    countDownTimer() {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1;
          this.countDownTimer();
        }, 1000);
        setTimeout(() => {
          this.$router.push({ name: "Login" });
        }, 10000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>