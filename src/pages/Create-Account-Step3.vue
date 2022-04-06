<template>
  <div class="absolute-center">
    <!-- Card 1 -->

    <div
      class="q-pa-md flex flex-center items-start text-bold text-h7 q-gutter-md"
    >
      Log into your account.
    </div>

    <!-- Card 2 Div -->

    <div class="q-pa-md flex flex-center items-start q-gutter-md">
      <q-card
        class="my-card flex this-card flex-center text-black bg-white"
        style="max-width: 800px"
      >
        <div class="q-pa-md">
          <div class="row flex flex-center">
            <div class="col-5  text-bold text-h7" style="width: 300px">
              <q-input label="Email" type="email" v-model="email"> </q-input>
              <q-input label="Password" type="password" v-model="password">
              </q-input>
              <div class="q-py-md">
                <q-btn to="Contractor-profile-display"
                  size="10px"
                  rounded
                  color="black"
                  type="submit"
                  label="Login"
                  class="text-white text-h7"
                ></q-btn>
              </div>
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

.this-card
  // background: rgba(255,0,0,.1)
  border-radius: 30px
</style>
