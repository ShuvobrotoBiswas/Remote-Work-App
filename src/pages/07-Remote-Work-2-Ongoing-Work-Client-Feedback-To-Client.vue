<template>
  <div>
    
    <!-- Body Div  From Sub-Header Component-->
    <SubHeader />
    <!-- Card 1 Div -->

    <div class="row flex-center items-start">
      <div style="width: 1000px" class="q-pa-md">
        <div class="row" style="max-width: 950px">
          <q-card-section>
            <div class="text-h5 text-bold q-py-md text-left">
              Job name (programmer php)
            </div>
            <q-separator />
            <div class="row">
              <div class="col">
                <div class="row text-h7 text-bold">Anna Doyle</div>
                <div class="text-h7 row">
                  <q-img
                    style="height: 70px; width: 70px"
                    src="~/assets/Avator16.png"
                  ></q-img>
                </div>
              </div>
            </div>
            <div class="row">
              <q-tabs v-model="tab" class="text-teal">
                <q-tab class="text-black" label="Feedback" name="two" />
              </q-tabs>
              <q-separator />
              <div class="row">
                <div>
                  <p class="text-bold q-my-none text-h7">
                    Give feedback to the contractor
                  </p>
                </div>
                <div class="row">
                  <p class="text-h7">
                    {{ lorem }}
                  </p>
                </div>
                <div>
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
              </div>
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
      <div class="col-1"></div>
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

.my-font
  font-size: 10px
</style>
