<template>
  <div class="absolute-center">
    <!-- Card 1 Div -->

    <div class="q-pa-md flex flex-center items-start q-gutter-md">
      <q-card
        class="my-card this-card q-pa-md flex-center text-black bg-white"
        style="max-width: 800px; min-height: 300px"
      >
        <div class="q-pa-md">
          <div class="row">
            <div class="col-5 flex flex-center text-bold my-font">
              I am looking for someone to work on my project.
            </div>
            <q-form @submit.prevent="registration">
            <div class="col-7">
              <q-input label="Email" type="email" v-model="email"> </q-input>
              <q-input label="Password" type="password" v-model="password">
              </q-input>
              <q-input
                label="Confirm Password"
                type="password"
                v-model="password_confirmation"
              >
              </q-input>
              <div class="q-py-md">
                <q-btn
                  size="10px"
                  rounded
                  color="black"
                  type="submit"
                  label="Register"
                  class="text-white text-h7"
                ></q-btn>
              </div>
            </div>
            </q-form>
          </div>
        </div>
      </q-card>
    </div>

    <!-- Card 2 -->

    <div class="q-pa-md flex flex-center items-start q-gutter-md">
      <q-card
        class="my-card this-card q-pa-md flex-center text-black bg-white"
        style="max-width: 800px; min-height: 300px"
      >
        <div class="row" style="min-height: 280px">
          <div class="col-2 flex flex-center">
            <q-btn
              round
              size="10px"
              class="flex flex-center"
              outline
              color="black"
              icon="done"
            ></q-btn>
          </div>
          <div class="col-10 flex flex-center">
            <div class="text-bold my-font">
              An email has been send to your address. Please log into email and
              confirm your account.
            </div>
          </div>
        </div>
      </q-card>
    </div>

    <!-- Footer Div -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import axios from "axios";
export default defineComponent({
  // name: "IndexPage",
  setup() {
    return {
      password_confirmation: ref(""),
      email: ref(""),
      password: ref(""),
      submit: "",
    };
  },

  methods: {
    registration() {
      const register = new FormData();
      register.append("password", this.password);
      register.append("password_confirmation", this.password_confirmation);
      register.append("email", this.email);

      const options = {
        method: "POST",
        url: "api/auth/register",
        // headers: { "No Auth": " "},
        data: register,
      };
      axios
        .request(options)
        .then((response) => {
          console.log(response.data);
          this.admin = response.data;
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
