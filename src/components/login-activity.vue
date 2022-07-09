<template>
  <div class="row q-pa-md">
    <!-- Card 1 Div -->

    <q-card
      class="my-card this-card flex-center text-black bg-white"
      style="max-width: 750px"
    >
      <div class="row">
        <div class="col flex flex-center text-bold my-font">
          I am looking for someone to work on my project.
        </div>
        <q-form @submit.prevent="registration">
          <div class="col">
            <q-select
              v-model="account_type"
              :options="options"
              label="Account Type"
            />
            <q-input
              label="Email"
              type="email"
              v-model="email"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Enter the e-mail address',
              ]"
            >
            </q-input>
            <q-input
              label="Password"
              type="password"
              v-model="password"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Enter the password;',
              ]"
            >
            </q-input>
            <q-input
              label="Confirm Password"
              type="password"
              v-model="password_confirmation"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Enter the Confirm Password;',
              ]"
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
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import { useQuasar } from "quasar";
import axios from "axios";
export default defineComponent({
  // name: "IndexPage",
  setup() {
    const $q = useQuasar();
    const email = ref(null);
    const password = ref(null);
    const password_confirmation = ref(false);

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
      // validation

      if (accept.value !== true) {
        $q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message:
            "You cannot register in the application , You need to check first",
        });
      } else {
        $q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Registration is successful , An email has been send to your address. Please log into your email and confirm your account.",
        });
      }
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
