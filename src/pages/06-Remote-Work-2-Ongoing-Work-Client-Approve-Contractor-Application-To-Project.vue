<template>
  <div>
    
    <!-- Body Div  From Sub-Header Component-->
    <SubHeader />
    <!-- Body Div -->
    <!-- Card 1 Div -->
    <div class="row flex-center items-start">
      <div style="max-width: 950px">
        <div class="q-pa-md row">
          <q-card-section>
            <div class="text-h5 text-bold q-py-md text-left">
              Application approval
            </div>
            <q-separator />

            <div class="row">
              <div class="col-3">
                <div class="text-h7 row flex-center text-bold">Anna Doyle</div>
                <div class="text-h7 row flex-center">
                  <q-img
                    sizes="100px"
                    style="max-width: 80px; max-height: 80px"
                    src="~/assets/Avator10.png"
                  ></q-img>
                </div>
                <div class="text-h7 flex-center row">
                  <span class="q-mr-sm">Unverified</span>
                </div>
                <div class="text-h7 flex-center row">
                  <q-btn
                    outline
                    round
                    size="8px"
                    color="grey"
                    icon="military_tech"
                  />
                </div>
                <div class="text-h7 row flex-center">
                  <div class="text-h7">
                    <q-rating
                      v-model="ratingModel"
                      size="20px"
                      :max="5"
                      color="black"
                    />
                  </div>
                </div>
              </div>
              <div class="col-9">
                <div class="text-h7 row text-bold">
                  Programmer PHP/Java/Python
                </div>
                <div class="my-font row">
                  {{ lorem }}
                </div>
                <div class="row">
                  <div class="col">
                    <div class="text-h7 text-bold">Requested price</div>
                    <div class="text-h7">€500</div>
                  </div>
                  <div class="col">
                    <div class="text-h7 text-bold">Availability date</div>
                    <div class="text-h7">02.15.2022</div>
                  </div>
                  <div class="col">
                    <div class="text-h7 text-bold">Skills</div>
                    <div class="text-h7">
                      <q-btn
                        outline
                        size="6px"
                        rounded
                        class="q-mr-sm"
                        color="black"
                        label="PHP"
                      />
                      <q-btn
                        outline
                        size="6px"
                        rounded
                        class="q-mr-sm"
                        color="black"
                        label="Java"
                      />
                      <q-btn
                        outline
                        size="6px"
                        rounded
                        color="black"
                        label="Python"
                      />
                    </div>
                  </div>
                </div>
                <div class="row text-h7 text-bold">
                  Answer to your questions
                </div>
                <div class="row text-h7 my-font bg-grey-4" style="max-width:400px">
                  <strong class="q-mr-sm">Q</strong>
                  {{ question }}
                </div>
                <div class="row text-h7 my-font text-white bg-grey-5">
                  <strong class="q-mr-sm">A</strong>
                  {{ answer }}
                </div>
                <div class="row text-h7 my-font bg-grey-4" style="max-width:400px">
                  <strong class="q-mr-sm">Q</strong>
                  {{ question }}
                </div>
                <div class="row text-h7 my-font text-white bg-grey-5">
                  <strong class="q-mr-sm">A</strong>
                  {{ answer }}
                </div>
                <div class="row">
                  <p class="text-h7 text-bold">Type of contractor</p>
                </div>
                <div>
                  <p class="text-h7">Freelancer</p>
                </div>
                <p class="col-9 text-bold">
                  Relevent projects from you portfolio
                </p>
                <div
                  class="my-card flex-center bid1 row"
                  style="max-width: 1000px"
                >
                  <div class="col my-home q-mr-sm">
                    <q-btn
                      round
                      color="grey"
                      class="flex-center"
                      icon="arrow_back_ios_new"
                    />
                  </div>
                  <div class="col my-home bid2 my-font q-mr-sm my-box">
                    <div class="row flex-center">
                      <q-img
                        src="~assets/Avator24.png"
                        class="image1"
                        style="width: 40px; height: 40px"
                      >
                      </q-img>
                    </div>
                    <div class="q-pa-mg text-center custom-text-me">
                      LOGO Design
                    </div>
                  </div>
                  <div class="col my-home bid2 my-font q-mr-sm my-box">
                    <div class="row flex-center">
                      <q-img
                        src="~assets/Avator25.png"
                        class="image1"
                        style="width: 40px; height: 40px"
                      >
                      </q-img>
                    </div>
                    <div class="q-pa-mg text-center custom-text-me">
                      Website Design
                    </div>
                  </div>
                  <div class="col my-home bid2 my-font q-mr-sm my-box">
                    <div class="row flex-center">
                      <q-img
                        src="~assets/Avator26.png"
                        class="image1"
                        style="width: 40px; height: 40px"
                      >
                      </q-img>
                    </div>
                    <div class="q-pa-mg text-center custom-text-me">
                      UX Design
                    </div>
                  </div>

                  <div class="col-1 my-home q-mr-sm">
                    <q-btn
                      round
                      color="grey"
                      class="flex-center"
                      icon="arrow_forward_ios"
                    />
                  </div>
                </div>
                <div class="row flex-center">
                  <div>
                    <q-btn
                      size="8px"
                      rounded
                      color="black"
                      label="Decline"
                      class="text-white text-h7"
                    ></q-btn>
                  </div>
                  <div class="col-1"></div>
                  <div>
                    <q-btn
                      size="8px"
                      rounded
                      color="black"
                      label="Approve"
                      class="text-white text-h7"
                    ></q-btn>
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import SubHeader from "components/Sub-Header.vue";
import { ref } from "vue";
export default defineComponent({
  components: { SubHeader },
  // name: "IndexPage",
  setup() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
      question:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip?",
      ratingModel: ref(1),
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
  // border: 1px solid rgba(86,61,124,.2)
  margin-top: 1rem
.bid2
  border: 1px solid rgba(86,61,124,.2)
  height: 100px

.image1
  height: 70px
  width: 80px

.my-font
  font-size: 10px

.my-box
  // background: grey
  border: 1px solid rgba(86,61,124,.2)
  height: 80px
  width: 80px
  border-radius: 7px
</style>
