<template>
  <div class="absolute-center">
    <!-- Card 1 -->
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
    <q-form @submit.prevent="forgotPassword">
      <!-- Card 2 Div -->
      <div class="q-pa-md flex flex-center q-gutter-md">
        <q-card
          class="my-card flex this-card flex-center text-black bg-white"
          style="max-width: 800px"
        >
          <div class="row">
            <div class="col-5 text-bold flex flex-center my-font">
              <!-- I want to work on a project or get hired. -->
              I want to Forget Password.
            </div>
            <div class="col-7">
              <q-input label="Email" type="email" v-model="email"> </q-input>
              <!-- <q-input label="Password" type="password" v-model="password">
              </q-input>
              <q-input
                label="Confirm Password"
                type="password"
                v-model="password_confirmation"
              >
              </q-input> -->

              <div class="q-py-md">
                <q-btn
                  size="10px"
                  rounded
                  color="black"
                  type="submit"
                  label="Forgot"
                  class="text-white text-h7"
                ></q-btn>
              </div>
            </div>
          </div>
        </q-card>
      </div>
    </q-form>
    <!-- Footer Div -->
  </div>
</template>

<script>
import axios from "axios";
import { defineComponent } from "vue";
import { ref } from "vue";
export default defineComponent({
  // name: "IndexPage",
  setup() {
    return {
      // password_confirmation: ref(null),
      email: ref(null),
      // password: ref(null),
      submit:"",
    };
  },
  methods: {
    forgotPassword() {
      const forgotpassword = new FormData();
      forgotpassword.append("email", this.email);

      const options = {
        method: "POST",
        url: "https://rwapi.zupria.com/api/auth/forgot-password",
        // headers: { "No Auth": " "},
        data: forgotpassword,
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

.my-font
  font-size: 15px

.this-card
  // background: rgba(255,0,0,.1)
  border-radius: 30px
</style>
