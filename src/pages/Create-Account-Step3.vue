<template>
  <div class="absolute-center">
    <!-- Card 1 -->

    <!-- Card 2 Div -->

    <div class="items-start q-gutter-md">
      <div class="q-pa-md items-start text-bold text-h7 q-gutter-md">
        <div class="q-py-none text-bold my-font">Log into your account.</div>
      </div>
      <q-card
        class="my-card flex this-card flex-center text-black bg-white"
        style="max-width: 800px"
      >
        <div class="q-pa-md">
          <div class="row flex flex-center">
            <div class="col-5 text-bold text-h7" style="width: 300px">
              <q-form @submit.prevent="login">
                <q-input label="Email" type="email" v-model="email"> </q-input>
                <q-input label="Password" type="password" v-model="password">
                </q-input>
                <div class="q-py-md">
                  <q-btn
                    size="10px"
                    rounded
                    color="black"
                    type="submit"
                    style="width: 90px"
                    label="Login"
                    class="text-white text-h7"
                  ></q-btn>
                </div>
              </q-form>
            </div>
            <div class="col-5" style="width: 300px">
              <q-img src="~assets/Avator15.png" sizes="200px"> </q-img>
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
      confirm_password: ref(null),
      email: ref(null),
      password: ref(null),
      submit: "",
    };
  },

  methods: {
    login() {
      const login = new FormData();
      login.append("password", this.password);
      login.append("email", this.email);

      const options = {
        method: "POST",
        url: "https://rwapi.zupria.com/api/auth/login",
        // headers: { "No Auth": " "},
        data: login,
      };
      axios
        .request(options)
        .then((response) => {
          console.log(response.data);
          this.admin = response.data;
          this.id = response.data.data.id;
          this.token = response.data.token;
          // window.localStorage.setItem(key, value);
          // window.localStorage.getItem(key);
          localStorage.setItem = ('token', response.data.token);
          localStorage.getItem('token');
          this.$router.push("/Contractor-profile-display");
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
