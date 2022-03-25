<template>
  <div class="absolute-center">


    <!-- Card 1 -->

    <div class="q-pa-md flex flex-center items-start q-gutter-md">
      <q-card
        class="my-card q-pa-md  flex-center text-black bg-white"
        style="max-width: 800px"
      >
        <div class="row">
          <div class="col-2">
            <q-btn round color="black" icon="done"></q-btn>
          </div>
          <div class="col-10">
            <div class="text-bold text-h7">
              An email has been send to your address. Please log into email and
              confirm your account.
            </div>
          </div>
        </div>
      </q-card>
    </div>

    <!-- Card 2 Div -->

    <div class="q-pa-md flex flex-center items-start q-gutter-md">
      <q-card
        class="my-card flex flex-center text-black bg-white"
        style="max-width: 800px"
      >
        <div class="q-pa-md">
          <div class="row">
            <div class="col-5 text-bold text-h7">
              I want to work on a project or get hired.
            </div>
            <div class="col-7">
              <q-input label="Email" type="email" v-model="email"> </q-input>
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
.bid1
  // background: rgba(255,0,0,.1)
  border: 1px solid rgba(86,61,124,.2)
  margin-top: 1rem
.bid2
  border: 1px solid rgba(86,61,124,.2)
  height: 100px

.image1
  height: 70px
  width: 80px

.company
  background: white
  height: 75px
  width: 85px
  rounded

.description
</style>
