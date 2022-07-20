<template>
  <div>
    <!-- Card 1 Div -->
    <q-form @submit.prevent="postSearch">
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
                v-model="contractor_feedback"
                val="I want to work with this contractor again"
                class="q-mr-sm"
                color="black"
                label="I want to work with this contractor again"
              />
              <q-radio
                v-model="contractor_feedback"
                color="black"
                class="q-mr-sm"
                val="I want to try a different contractor"
                label="I want to try a different contractor"
              />
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
    </q-form>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";
import { ref } from "vue";
export default defineComponent({
  name: "clientFeedback",
  setup() {
    return {
      lorem:
        "If you were to carry out a project similar to this one, would you want to work with this contractor again or do you want to try a different team?.",

      contractor_feedback: ref("I want to try a different contractor"),
      submit: null,
    };
  },
  methods: {
    postSearch() {
      const search = new FormData();
      search.append("contractor_feedback", this.contractor_feedback);

      const options = {
        method: "POST",
        url: "https://rwapi.zupria.com/api/contract/feedback/1",
        data: search,
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvcndhcGkuenVwcmlhLmNvbVwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY1MDY2NjAyMSwiZXhwIjoxNjgyMjAyMDIxLCJuYmYiOjE2NTA2NjYwMjEsImp0aSI6InVkbmUyZ3NsRHJ5VjY5Z3UiLCJzdWIiOjksInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.4_rBRo4Yo7rQ58dKVNdbUEtp6_EKjF79744-cfrUQWM",
        },
      };
      axios
        .request(options)
        .then((response) => {
          console.log(response.data);
          this.user = response.data;
          this.id = response.data.data.id;
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
