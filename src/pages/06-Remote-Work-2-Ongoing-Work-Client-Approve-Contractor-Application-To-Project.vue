<template>
  <div>
    <!-- Body Div  From Sub-Header Component-->
    <SubHeader />
    <!-- Body Div -->

    <!-- Card 1 Div -->
    <div class="row flex-center items-start">
      <div style="max-width: 950px">
        <div class="q-pa-md">
          <div class="row">
            <div>
              <q-card-section>
                <div class="text-h5 text-bold q-py-md text-left">
                  Application approval
                </div>
                <q-separator />

                <div class="row">
                  <div class="col-3">
                    <div class="text-h7 flex-center row text-bold">
                      Anna Doyle
                    </div>
                    <div class="text-h7 flex-center row">
                      <q-img
                        style="height: 80px; width: 80px"
                        src="~/assets/Avator10.png"
                      ></q-img>
                    </div>
                    <div class="text-h7 flex-center row">
                      <div class="col">Unverified</div>
                      <div class="col">
                        <q-btn
                          outline
                          round
                          size="8px"
                          color="grey"
                          icon="military_tech"
                        />
                      </div>
                    </div>
                    <div class="text-h7 flex-center row">
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
                    <div class="row text-h7 my-font bg-grey-4">
                      <strong class="q-mr-sm">Q</strong>
                      {{ question }}
                    </div>
                    <div class="row text-h7 my-font text-white bg-grey-5">
                      <strong class="q-mr-sm">A</strong>
                      {{ answer }}
                    </div>
                    <div class="row text-h7 my-font bg-grey-4">
                      <strong class="q-mr-sm">Q</strong>
                      {{ question }}
                    </div>
                    <div class="row text-h7 my-font text-white bg-grey-5">
                      <strong class="q-mr-sm">A</strong>
                      {{ answer }}
                    </div>
                    <div class="row">
                      <div class="col">
                        <div class="text-h7 text-bold">Type of contractor</div>
                        <div class="text-h7">Freelancer</div>
                      </div>
                    </div>
                    <div
                      flat
                      bordered
                      class="my-card row"
                      style="max-width: 1000px"
                    >
                      <p class="text-h7 text-bold">
                        Relevent projects from you portfolio
                      </p>
                      <div class="row bid1 text-center">
                        <div class="col-2 my-home q-mr-sm">
                          <q-btn
                            round
                            color="grey"
                            class="flex-center"
                            icon="arrow_back_ios_new"
                          />
                        </div>
                        <div class="col my-home bid2 my-font q-mr-sm">
                          <q-img
                            style="width: 50px; height: 50px"
                            src="~assets/Avator24.png"
                            class="image1"
                          >
                          </q-img>
                          <div class="q-pa-mg text-center custom-text-me">
                            LOGO Design
                          </div>
                        </div>
                        <div class="col my-home bid2 my-font q-mr-sm">
                          <q-img
                            style="width: 50px; height: 50px"
                            src="~assets/Avator25.png"
                            class="image1"
                          >
                          </q-img>
                          <div class="q-pa-mg text-center custom-text-me">
                            Website Design
                          </div>
                        </div>
                        <div class="col my-home bid2 my-font q-mr-sm">
                          <q-img
                            style="width: 50px; height: 43px"
                            src="~assets/Avator26.png "
                            class="image1"
                          >
                          </q-img>
                          <div class="q-pa-mg text-center custom-text-me">
                            UX Design
                          </div>
                        </div>
                        <div class="col-1 my-home q-mr-sm">
                          <q-btn
                            round
                            color="black"
                            class="flex-center"
                            icon="arrow_forward_ios"
                          />
                        </div>
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

.company
  background: white
  height: 75px
  width: 85px
  rounded


.image2
  background: grey


.my-font
  font-size: 10px
</style>
