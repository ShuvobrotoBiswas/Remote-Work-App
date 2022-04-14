<template>
  <div class="absolute-center">
    <!-- Card 1 Div -->

    <div class="q-pa-md row flex flex-center items-start q-gutter-md">
      <q-card
        class="my-card this-card flex flex-center text-black bg-white"
        style="max-width: 750px"
      >
        <div class="q-pa-md">
          <div class="row">
            <div class="col-6  flex flex-center text-bold my-font">
              I am looking for someone to work on my project.
            </div>
            <div class="col-6">
              <q-input label="Email"  type="email" v-model="email"> </q-input>
              <q-input label="Password" type="password" v-model="password">
              </q-input>
              <q-input
                label="Confirm Password"
                type="password"
                v-model="confirm_password"
              >
              </q-input>
              <div class="q-py-md">
                <q-btn
                  to="Create-Account-Step2"
                  size="10px"
                  rounded
                  color="black"
                  type="submit"
                  label="Register"
                  class="text-white text-h7"
                ></q-btn>
              </div>
            </div>
          </div>
        </div>
      </q-card>
    </div>

    <!-- Card 2 -->

    <div class="q-pa-md this-card row flex flex-center items-start q-gutter-md">
      <q-card
        class="my-card q-pa-md this-card row flex-center text-black bg-white"
        style="max-width: 750px"
      >
        <div class="q-pa-md ">
          <div class="row">
            <div class="col-6 text-bold flex flex-center my-font">
              I want to work on a project or get hired.
            </div>
            <div class="col-6">
              <div class="col-6">
                <q-input label="Email" type="email" v-model="email1"> </q-input>
                <q-input label="Password" type="password" v-model="password1">
                </q-input>
                <q-input
                  label="Confirm Password"
                  type="password"
                  v-model="confirm_password1"
                >
                </q-input>
                <div class="q-py-md">
                  <q-btn
                    to="Create-Account-Step2-1"
                    size="10px"
                    rounded
                    color="black"
                    type="submit"
                    label="Register"
                    class="text-white text-h7"
                  ></q-btn>
                </div>
              </div>
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
export default defineComponent({
  // name: "IndexPage",
  setup() {
    return {
      confirm_password: ref(null),
      email: ref(null),
      password: ref(null),
      confirm_password1: ref(null),
      email1: ref(null),
      password1: ref(null),
      submit: "",
    };
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
