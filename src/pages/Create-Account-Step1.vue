<template>
  <div class="row fixed-center">
    <!-- Card 1 Div -->

    <!-- <q-card
      class="my-card this-card flex-center text-black bg-white"
      style="max-width: 750px"
    >
      <div class="q-pa-md">
        <div class="row">
          <div class="col-6 flex flex-center text-bold my-font">
            I am looking for someone to work on my project.
          </div>
          <q-form @submit.prevent="registration">
            <div class="col-6">
              <q-select
                v-model="account_type"
                :options="options"
                label="Account Type"
              />
              <q-input label="Email" type="email" v-model="email"> </q-input>
              <q-input label="Password" type="password" v-model="password">
              </q-input>
              <q-input
                label="Confirm Password"
                type="password"
                v-model="password_confirmation"
              >
              </q-input>

              <div class="row flex-center">
                <q-btn
                  size="10px"
                  rounded
                  color="black"
                  type="submit"
                  label="Register"
                  class="text-white q-mr-sm text-h7"
                ></q-btn>
                <q-btn
                  size="10px"
                  rounded
                  to="/Create-Account-Step3"
                  color="black"
                  style="width: 80px"
                  label="Login"
                  class="text-white text-h7"
                ></q-btn>
              </div>
            </div>
          </q-form>
        </div>
      </div>
    </q-card> -->

    <login-activity />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import axios from "axios";
import LoginActivity from "src/components/login-activity.vue";
export default defineComponent({
  // name: "IndexPage",
  components: {
    LoginActivity,
  },

  setup() {
    return {
      password_confirmation: ref(""),
      email: ref(""),
      password: ref(""),
      confirm_password1: ref(""),
      email1: ref(""),
      password1: ref(""),
      submit: ref(""),
      register: [],
      account_type: ref(null),
      options: ["contractor", "client"],
    };
  },

  methods: {
    registration() {
      const register = new FormData();
      register.append("account_type", this.account_type);
      register.append("password", this.password);
      register.append("password_confirmation", this.password_confirmation);
      register.append("email", this.email);

      const options = {
        method: "POST",
        url: "https://rwapi.zupria.com/api/auth/register",
        data: register,
      };
      axios
        .request(options)
        .then((response) => {
          console.log(response.data);
          this.admin = response.data;
          this.id = response.data.data.id;
          this.token = response.data.token;
          localStorage.setItem("token", response.data.token);
          this.$router.push("/Create-Account-Step3");
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  },
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px

.row > div
  padding: 10px 15px
  // background: rgba(86,61,124,.15)
  // border: 1px solid rgba(86,61,124,.2)
.row + .row
  margin-top: 1rem

.this-card
  // background: rgba(255,0,0,.1)
  border-radius: 30px

.my-font
  font-size: 15px
</style>
