<template>
  <div>
    <!-- Body Div  From Sub-Header Component-->
    <SubHeader />
    <!-- Card 1 Div -->

    <div class="row flex-center items-start">
      <div style="width: 1000px" class="q-pa-md">
        <div class="row" style="max-width: 950px">
          <q-card-section>
            <div class="text-h5 row text-bold q-py-md text-left">
              Logo Design for Insurance Agency
            </div>
            <q-separator />
            <div class="row">
              <p class="text-h7 q-py-md text-bold">AGENCY NAME</p>
            </div>
            <q-img
              style="
                height: 60px;
                width: 60px;
                border-radius: 50%;
                border: 1px solid black;
              "
              src="~/assets/Avator20.png"
            ></q-img>
            <div>
              <p class="text-bold q-py-md">FEEDBACK</p>

              <div>
                <q-separator
                  class="bg-black"
                  style="width: 80px; height: 2px"
                />
              </div>
              <p class="text-bold q-my-none text-h7">
                Give feedback to the contractor
              </p>
              <p>
                {{ lorem }}
              </p>
              <q-radio
                v-model="shape"
                val="radio1"
                class="q-mr-sm"
                color="black"
                label="I want to work with this contractor again"
              />
              <q-radio
                v-model="shape"
                color="black"
                class="q-mr-sm"
                val="rectangle"
                label="I want to try a different contractor"
              />

            </div>
          </q-card-section>
        </div>
      </div>
    </div>
    <!-- Footer Div -->

    <div class="row q-pa-md flex flex-center">
      <q-btn
        rounded
        style="width: 90px"
        size="10px"
        label="back"
        unelevated
        color="black"
        class="text-white q-mr-lg"
      />
      <q-btn
        rounded
        style="width: 120px"
        size="10px"
        type="submit"
        label="Send feedback"
        unelevated
        v-model="submit"
        color="black"
        class="text-white"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import SubHeader from "components/Sub-Header.vue";
export default defineComponent({
  components: { SubHeader },
  // name: "IndexPage",
  setup() {
    return {
      lorem:
        "If you were to carry out a project similar to this one, would you want to work with this contractor again or do you want to try a different team?.",

      tab: ref("two"),
      shape: ref("radio1"),
      submit: null,
    };
  },
});
</script>
<style lang="sass" scoped>

.row > div
  padding: 10px 15px
  // background: rgba(86,61,124,.15)
  // border: 1px solid rgba(86,61,124,.2)
.row + .row
  margin-top: 1rem
</style>
