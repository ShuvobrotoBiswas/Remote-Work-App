<template>
  <div>
    <!-- Card 1 Div -->

    <div class="row" style="max-width: 950px">
      <div class="col-11">
        <div class="row">
          <div class="row">
            <p class="text-bold q-my-none text-h7">
              Give feedback to the contractor
            </p>
          </div>
          <div class="row">
            <p class="text-h7">
              {{ lorem }}
            </p>
          </div>
          <div class="row q-gutter-sm">
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
    </div>
  </div>
  <!-- Footer Div -->

  <div class="row q-pa-md flex flex-center">
    <q-btn
      rounded
      style="width: 90px"
      size="10px"
      label="back"
      to="10-REMOTE-WORK-CLIENT-MILESTONES-LIST-FOR-FREELANCER"
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
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
export default defineComponent({
  name: "clientFeedback",
  setup() {
    return {
      lorem:
        "If you were to carry out a project similar to this one, would you want to work with this contractor again or do you want to try a different team?.",
      text: " We have a logo that is about 13 years old and we are looking to update/change our branding, we need a logo that is more up to date and we want to keep the versatillity. We want to go bold/innovative with this change. Previous logo is attached for reference",
      checkbox19: ref(true),
      checkbox20: ref(true),
      checkbox21: ref(false),
      checkbox22: ref(false),
      checkbox23: ref(false),
      price: ref("500 € |"),
      input1: ref("Your answer here."),
      input2: ref("Your answer here."),
      date: ref("2020/07/08 , 2020/07/17"),
      group: ref("op1"),

      options: [
        {
          label: "Freelancer",
          value: "op1",
        },
        {
          label: "Agency",
          value: "op2",
        },
      ],
      tab: ref("two"),
      shape: ref("radio1"),
      submit: null,
    };
  },
});
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 950px

.row > div
  padding: 10px 15px
  // background: rgba(86,61,124,.15)
  // border: 1px solid rgba(86,61,124,.2)
.row + .row
  margin-top: 1rem
.bid1
  // background: rgba(255,0,0,.1)
  // border: 1px solid rgba(86,61,124,.2)
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

.image2
  background: grey


.my-font
  font-size: 10px
</style>
