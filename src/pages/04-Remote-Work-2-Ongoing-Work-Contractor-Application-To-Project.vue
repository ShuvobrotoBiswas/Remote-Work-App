<template>
  <div>
    <!-- Body Div  From Sub-Header Component-->
    <SubHeader />
    <!-- Body Div -->

    <!-- Card 1 Div -->
    <div class="row flex-center items-start">
      <div style="max-width: 750px">
        <div class="q-pa-md">
          <div class="row">
            <div>
              <q-card-section>
                <div class="text-h5 text-bold q-py-md text-left">
                  Application to project
                </div>
                <div class="row text-7 q-py-md text-left">
                  {{ lorem }}
                </div>
                <q-separator />
                <div class="row q-py-md">
                  <div class="col-6">
                    <div class="text-h7 text-bold">Experience level</div>
                    <div class="text-h7">Middle</div>
                  </div>

                  <div class="col-6">
                    <div class="text-h7 text-bold">Education level</div>
                    <div class="text-h7">College</div>
                  </div>
                </div>
                <q-separator />
                <div class="row q-py-md">
                  <div class="col-6">
                    <div class="text-h7 text-bold">
                      Type the requested Price
                    </div>
                    <div class="text-h7">
                      <q-input
                        v-model="price"
                        style="max-width: 250px"
                        outlined
                      ></q-input>
                    </div>
                  </div>

                  <div class="col-6">
                    <div class="text-h7 text-bold">Availability date</div>
                    <div class="text-h7">
                      <q-input
                        outlined
                        style="max-width: 120px"
                        v-model="date"
                        class="my-font"
                        mask="date"
                        :rules="['date']"
                      >
                        <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy
                              ref="qDateProxy"
                              cover
                              transition-show="scale"
                              transition-hide="scale"
                            >
                              <q-date v-model="date">
                                <div class="row items-center justify-end">
                                  <q-btn
                                    v-close-popup
                                    label="Close"
                                    color="primary"
                                    flat
                                  />
                                </div>
                              </q-date>
                            </q-popup-proxy>
                          </q-icon>
                        </template>
                      </q-input>
                    </div>
                  </div>
                </div>
                <q-separator />

                <p class="text-bold q-py-md text-h7">
                  Answer to the question set by client.*
                </p>
                <div class="row">
                  <div class="col">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                    <q-input v-model="input1" outlined></q-input>
                  </div>
                  <div class="col">
                    <div class="">
                      Ut enim ad minim veniam veniam, quis nostrud exercitation
                      et nisi ut aliquip?
                      <q-input v-model="input2" outlined></q-input>
                    </div>
                  </div>
                </div>

                <q-separator />
                <div class="q-py-md">
                  <div class="text-h7 text-bold">Type of contractor</div>
                  <div class="row" style="max-width: 300px">
                    <div class="col">
                      <q-radio
                        left-label
                        v-model="shape"
                        val="freelancer"
                        color="black"
                        label="Freelancer"
                      />
                    </div>
                    <div class="col">
                      <q-radio
                        left-label
                        v-model="shape"
                        val="agency"
                        color="black"
                        label="Agency"
                      />
                    </div>
                  </div>
                </div>
                <div class="my-card row items-start" style="max-width: 1000px">
                  <div class="text-bold">
                    Select relevent projects from you portfolio
                  </div>
                  <div class="row flex-center bid1 text-center">
                    <div class="col my-home q-mr-sm">
                      <q-btn
                        round
                        color="grey"
                        class="flex-center"
                        icon="arrow_back_ios_new"
                      />
                    </div>
                    <div
                      class="col my-home bid2 my-box3 bg-grey-3 my-font q-mr-sm my-box2"
                    >
                      <q-img
                        src="~assets/Avator22.png"
                        class="image1"
                        style="max-width: 40px; max-height: 40px"
                      >
                      </q-img>
                      <div class="q-pa-mg text-center custom-text-me">
                        LOGO Design
                      </div>
                    </div>
                    <div class="col my-home bid2 my-font q-mr-sm my-box2">
                      <q-img
                        src="~assets/Avator25.png"
                        class="image1"
                        style="max-width: 40px; max-height: 40px"
                      >
                      </q-img>
                      <div class="q-pa-mg text-center custom-text-me">
                        Website Design
                      </div>
                    </div>
                    <div
                      class="col my-home bid2 my-box3 bg-grey-3 my-font q-mr-sm my-box2"
                    >
                      <q-img
                        src="~assets/Avator23.png "
                        class="image1"
                        style="max-width: 50px; max-height: 40px"
                      >
                      </q-img>
                      <div class="q-pa-mg text-center custom-text-me">
                        UX Design
                      </div>
                    </div>
                    <div class="col my-home bid2 my-font my-box2 q-mr-sm">
                      <div class="col">
                        <q-btn
                          flat
                          size="5px"
                          color="black"
                          padding="5px"
                          icon="check_box_outline_blank"
                        />
                        <q-btn
                          flat
                          size="5px"
                          color="black"
                          padding="5px"
                          icon="check_box_outline_blank"
                        />
                      </div>
                      <q-btn
                        flat
                        size="5px"
                        color="black"
                        padding="5px"
                        icon="check_box_outline_blank"
                      />
                      <q-btn
                        flat
                        size="5px"
                        color="black"
                        padding="5px"
                        icon="add"
                      />
                      Others
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

                <!-- Footer Div -->

                <div class="row flex-center">
                  <div class="q-pa-md">
                    <q-btn
                      size="8px"
                      rounded
                      color="grey"
                      label="Back to Search"
                      class="text-white text-h7"
                    ></q-btn>
                  </div>
                  <div class="col-1"></div>
                  <div class="q-pa-md">
                    <q-btn
                      size="8px"
                      rounded
                      color="black"
                      label="Send"
                      class="text-white text-h7"
                    ></q-btn>
                  </div>
                </div>
              </q-card-section>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Card 3 div -->
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      text: " We have a logo that is about 13 years old and we are looking to update/change our branding, we need a logo that is more up to date and we want to keep the versatillity. We want to go bold/innovative with this change. Previous logo is attached for reference",
      price: ref("500 € |"),
      input1: ref("Your answer here."),
      input2: ref("Your answer here."),
      date: ref("2022/02/15"),
      shape: ref("freelancer"),
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

.my-box2
  border-radius: 7px


.my-box3
  background: grey
</style>
