<template>
  <div>
    <!-- Card 1 Div -->
    <q-form @submit.prevent="projectImage">
      <div class="row flex-center items-start">
        <div flat bordered class="my-card" style="max-width: 900px">
          <!-- Card 2 Div -->

          <div class="row items-start">
            <div flat bordered class="my-card" style="max-width: 600px">
              <div class="q-pa-md">
                <div class="col-9 text-h6 text-bold">
                  Add relevent projects from you portfolio
                </div>
              </div>
              <div class="row bid1 text-center">
                <div
                  class="col my-home bid2 q-mr-sm"
                  style="height: 100px; width: 10px"
                >
                  <q-img
                    src="~assets/Avator5.png"
                    style="width: 74px"
                    class="image1"
                  >
                  </q-img>
                  <div class="q-pa-mg text-center custom-text-me">
                    LOGO Design
                  </div>
                </div>
                <div
                  class="col my-home bid2 q-mr-sm"
                  style="height: 100px; width: 20px"
                >
                  <q-img
                    src="~assets/Avator6.png"
                    style="width: 74px"
                    class="image1"
                  >
                  </q-img>
                  <div class="q-pa-mg text-center custom-text-me">
                    LOGO Design
                  </div>
                </div>
                <div
                  class="col my-home bid2 q-mr-sm"
                  style="height: 100px; width: 20px"
                >
                  <q-img
                    src="~assets/Avator7.png"
                    style="width: 74px"
                    class="image1"
                  >
                  </q-img>
                  <div class="q-pa-mg text-center custom-text-me">
                    LOGO Design
                  </div>
                </div>
                <div
                  class="col my-home bid2 q-mr-sm"
                  style="height: 100px; width: 20px"
                >
                  <q-file borderless v-model="file">
                    <q-img
                      src="~assets/Avator8.png"
                      style="width: 50px"
                      class="image1"
                    >
                    </q-img>
                  </q-file>

                  <div class="q-pa-mg text-center custom-text-me">
                    LOGO Design
                  </div>
                </div>
              </div>

              <div class="row q-pa-md">
                <q-btn
                  size="10px"
                  rounded
                  type="submit"
                  color="black"
                  icon="add"
                  label="Add Companies"
                  class="text-white text-h7"
                ></q-btn>
              </div>
            </div>
          </div>

          <!-- Card 3 div -->

          <!-- Footer Div -->
        </div>
      </div>
    </q-form>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import axios from "axios";

export default defineComponent({
  name: "addProject",
  setup() {
    return {
      file: ref(""),
    };
  },

  methods: {
    projectImage() {
      const profile = new FormData();
      profile.append("file", this.file);

      const options = {
        method: "POST",
        url: "https://rwapi.zupria.com/api/user/contractorProfile/projectImage",
        data: profile,
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
.bid1
  // background: rgba(255,0,0,.1)
  // border: 1px solid rgba(86,61,124,.2)
  margin-top: 1rem
.bid2
  // border: 1px solid rgba(86,61,124,.2)
  // background: rgba(255,0,0,.1)
  height: 100px

.image1
  height: 70px
  width: 80px




.my-home
  border: 1px solid rgba(86,61,124,.2)
  background: white
  border-radius: 10px


.custom-text-me
  font-size: 8px

.underline-font
  text-decoration: underline
</style>
