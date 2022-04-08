<template>
  <div>
    <!-- Body Div  From Sub-Header Component-->
    <SubHeader />
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
                <div class="row q-py-md">
                  <div class="col-4">
                    <div class="text-h7 text-bold">
                      Type the requested Price
                    </div>
                    <div class="text-h7">
                      <q-input v-model="price" outlined></q-input>
                    </div>
                  </div>
                  <div class="col-3">
                    <div class="text-h7 text-bold"></div>
                    <div class="text-h7"></div>
                  </div>
                  <div class="col-5">
                    <div class="text-h7 text-bold">
                      Type total execution time*
                    </div>
                    <div class="text-h7">
                      <q-expansion-item
                        dense
                        dense-toggle
                        expand-separator
                        label="Execution Time"
                      >
                        <q-card class="bg-grey-2">
                          <q-card-section>
                            <div class="row">2 Weeks</div>
                            <div class="row">1 Month</div>
                            <div class="row">3 Month</div>
                          </q-card-section>
                        </q-card>
                      </q-expansion-item>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <p class="text-bold text-h7">
                    Answer to the question set by client.*
                  </p>
                  <div class="row q-pa-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua?
                    <q-input
                      v-model="input1"
                      outlined
                      style="width: 550px"
                    ></q-input>
                  </div>
                </div>
                <div class="row">
                  <div class="row q-pa-md">
                    Ut enim ad minim veniam veniam, quis nostrud exercitation et
                    nisi ut aliquip?
                    <q-input
                      v-model="input2"
                      outlined
                      style="width: 550px"
                    ></q-input>
                  </div>
                </div>
                <div>
                  <p class=" row text-h7 text-bold">Contractor Availability*</p>
                    <div class="text-h7">
                      <div >
                        <q-option-group
                          v-model="group1"
                          :options="options1"
                          color="black"
                          left-label
                          inline
                        />
                      </div>
                    </div>
                </div>
                <q-separator />

                <div class="row q-py-md">
                  <div class="col-4">
                    <div class="text-h7 text-bold">Offer validity*</div>
                    <div class="text-h7">
                      Pick a Date
                      <div class="q-pa-md" style="max-width: 300px">
                        <q-input
                          style="width: 250px"
                          filled
                          v-model="date"
                          mask="date"
                          :rules="['date']"
                        >
                          <!-- {{ date }} -->
                          <template v-slot:append>
                            <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy
                                ref="qDateProxy"
                                cover
                                transition-show="scale"
                                transition-hide="scale"
                              >
                                <q-date v-model="date" range>
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
                  <div class="col-2">
                    <div class="text-h7 text-bold"></div>
                    <div class="text-h7"></div>
                  </div>
                  <div class="col-6">
                    <div class="text-h7 text-bold">Type of contractor*</div>
                    <div class="text-h7">
                      <div class="">
                        <q-option-group
                          v-model="group"
                          :options="options"
                          color="black"
                          left-label
                          inline
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row flex-center items-start">
                  <div flat bordered class="my-card" style="max-width: 1000px">
                    <div class="q-pa-md">
                      <div class="col-9 text-h6 text-bold">
                        Select relevent projects from you portfolio*
                      </div>
                    </div>
                    <div class="row bid1 text-center">
                      <div class="col-1 my-home q-mr-sm">
                        <q-btn
                          round
                          color="grey"
                          class="flex-center"
                          icon="arrow_back_ios_new"
                        />
                      </div>
                      <div class="col my-home bid2 image2 my-font q-mr-sm">
                        <q-img src="~assets/Avator22.png" class="image1">
                        </q-img>
                        <div class="q-pa-mg text-center custom-text-me">
                          LOGO Design
                        </div>
                      </div>
                      <div class="col my-home bid2 my-font q-mr-sm" >
                        <q-img src="~assets/Avator25.png" class="image1" style="width:70px; height:70px">
                        </q-img>
                        <div class="q-pa-mg text-center custom-text-me">
                          Website Design
                        </div>
                      </div>
                      <div class="col my-home bid2 image2 my-font q-mr-sm">
                        <q-img src="~assets/Avator23.png " class="image1">
                        </q-img>
                        <div class="q-pa-mg text-center custom-text-me">
                          UX Design
                        </div>
                      </div>
                      <div class="col my-home bid2 my-font">
                        <div class="row">
                          <div class="col">
                            <q-btn
                              flat
                              size="5px"
                              color="black"
                              padding="5px"
                              icon="check_box_outline_blank"
                            />
                          </div>
                          <div class="col">
                            <q-btn
                              flat
                              size="5px"
                              color="black"
                              padding="5px"
                              icon="check_box_outline_blank"
                            />
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <q-btn
                              flat
                              size="5px"
                              color="black"
                              padding="5px"
                              icon="check_box_outline_blank"
                            />
                          </div>
                          <div class="col">
                            <q-btn
                              flat
                              size="5px"
                              color="black"
                              padding="5px"
                              icon="add"
                            />
                          </div>
                        </div>
                        <div class="q-pa-mg text-center custom-text-me">
                          Others
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

                    <div class="row q-pa-md my-font">
                      <p>* Fields marked with "*" are mandatory.</p>
                    </div>
                  </div>
                </div>

                <!-- Footer Div -->

                <div class="row flex-center">
                  <div class="col-4">
                    <q-btn
                      size="8px"
                      rounded
                      color="grey"
                      label="Back to Search"
                      class="text-white text-h7"
                    ></q-btn>
                  </div>

                  <div class="col-4"></div>
                  <div class="col-4">
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
import SubHeader from "components/Sub-Header.vue";
import { ref } from "vue";
export default defineComponent({
  components: { SubHeader },
  // name: "IndexPage",
  setup() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
      group1: ref("my-val-1"),

      options1: [
        {
          label: "Less than 1 hour/Day",
          value: "my-val-2",
        },
        {
          label: "2 hours/Day",
          value: "my-val-1",
        },
        {
          label: "4 hour/Day",
          value: "my-val-3",
        },
      ],
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

.description

.image2
  background:  #efeff5

.my-font
  font-size: 10px
</style>
