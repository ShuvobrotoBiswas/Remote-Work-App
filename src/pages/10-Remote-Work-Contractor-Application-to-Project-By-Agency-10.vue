<template>
  <div>
    <!-- Body Div  From Sub-Header Component-->
    <SubHeader />
    <!-- Card 1 Div -->
    <div class="row q-pa-md flex-center items-start">
      <div style="max-width: 750px">
        <div class="q-pa-md">
          <div class="row">
            <div>
              <q-card-section>
                <div class="text-h5 text-bold q-py-md text-left">
                  Application to project
                </div>
                <q-separator />
                <div class="row text-7 q-py-md text-left">
                  {{ lorem }}
                </div>
                <div class="row q-py-md">
                  <div class="col-6">
                    <fieldset
                      style="
                        max-width: 200px;
                        max-height: 80px;
                        border-radius: 7px;
                      "
                      class="q-pa-md"
                    >
                      <legend class="text-bold">
                        Type the requested Price
                      </legend>
                      <q-input borderless v-model="price"></q-input>
                    </fieldset>
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
                            <q-list>
                              <q-item
                                clickable
                                class="row q-pa-none item-center"
                                >2 Weeks</q-item
                              >
                              <q-item
                                clickable
                                class="row q-pa-none item-center"
                                >1 Month</q-item
                              >
                              <q-item
                                clickable
                                class="row q-pa-none item-center"
                                >3 Month</q-item
                              >
                            </q-list>
                          </q-card-section>
                        </q-card>
                      </q-expansion-item>
                    </div>
                  </div>
                </div>
                <q-separator />

                <div class="row q-py-md">
                  <p class="text-bold text-h7">
                    Answer to the question set by client.*
                  </p>
                  <fieldset
                    style="max-height: 100px; border-radius: 7px ; max-width:600px"
                    class="q-pa-md"
                  >
                    <legend class="text-h7">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua?
                    </legend>
                    <q-input borderless v-model="input1"></q-input>
                  </fieldset>
                </div>
                <div class="row q-py-md">
                  <fieldset
                    style="max-height: 100px; border-radius: 7px; width: 600px"
                    class="q-pa-md"
                  >
                    <legend class="text-h7">
                      Ut enim ad minim veniam veniam, quis nostrud exercitation
                      et nisi ut aliquip?
                    </legend>
                    <q-input borderless v-model="input2"></q-input>
                  </fieldset>
                </div>

                <q-separator />
                <div>
                  <p class="row text-h7 text-bold q-py-md">
                    Contractor Availability
                  </p>
                  <div>
                    <q-option-group
                      v-model="group1"
                      :options="options1"
                      color="black"
                      left-label
                      inline
                    />
                  </div>
                </div>
                <div class="q-py-md"></div>
                <q-separator />
                <div class="row">
                  <div class="col-4">
                    <p class="text-h7 text-bold">Offer validity*</p>
                    <p>Pick a Date</p>
                    <div class="text-h7">
                      <div style="max-width: 300px">
                        <q-input
                          style="width: 250px"
                          outlined
                          v-model="date"
                          mask="date"
                          :rules="['date']"
                        >
                          {{ date }}
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
                <div class="col-9 text-bold">
                  Select relevent projects from you portfolio*
                </div>
                <div class="my-card row flex-center bid1 text-center" style="max-width: 750px">
                    <div class="col my-home q-mr-sm">
                      <q-btn
                        round
                        color="grey"
                        class="flex-center"
                        icon="arrow_back_ios_new"
                      />
                    </div>
                    <div class="col my-home bid2 my-font q-mr-sm my-box2">
                      <q-img
                        src="~assets/Avator24.png"
                        class="image1"
                        style="width: 40px; height: 40px"
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
                        style="width: 40px; height: 40px"
                      >
                      </q-img>
                      <div class="q-pa-mg text-center custom-text-me">
                        Website Design
                      </div>
                    </div>
                    <div class="col my-home bid2 my-font q-mr-sm my-box2">
                      <q-img
                        src="~assets/Avator26.png "
                        class="image1"
                        style="width: 50px; height: 40px"
                      >
                      </q-img>
                      <div class="q-pa-mg text-center custom-text-me">
                        UX Design
                      </div>
                    </div>
                    <div class="col my-home bid2 my-font my-box2 q-mr-sm">
                      <div class="row flex-center">
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
                      <div class="row flex-center">
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
                      </div>
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
                <div class="flex-break q-pa-md"></div>

                <q-separator />
                <div class="flex-break q-pa-md"></div>

                <div class="row">
                  <div class="row text-bold">
                    Select the freelancers who work for the agency and who will
                    be involved in the project.
                  </div>
                  <div class="row" style="width: 790px">
                    <div class="col">
                      <q-item tag="label" v-ripple>
                        <q-item-section>
                          <q-item-label class="text-bold"
                            >ANNA DOYEL</q-item-label
                          >
                          <q-item-label caption>Programmer PHP </q-item-label>
                        </q-item-section>
                        <q-item-section avatar>
                          <q-radio
                            v-model="myChoice1"
                            val="myChoice1"
                            right-label
                            color="black"
                          />
                        </q-item-section>
                      </q-item>
                    </div>
                    <div class="col">
                      <q-item tag="label" v-ripple>
                        <q-item-section>
                          <q-item-label class="text-bold"
                            >GIL DOBRICA</q-item-label
                          >
                          <q-item-label caption>Designer </q-item-label>
                        </q-item-section>
                        <q-item-section avatar>
                          <q-radio
                            v-model="myChoice2"
                            val="myChoice2"
                            right-label
                            color="black"
                          />
                        </q-item-section>
                      </q-item>
                    </div>
                    <div class="col">
                      <q-item tag="label" v-ripple>
                        <q-item-section>
                          <q-item-label class="text-bold"
                            >GABI COTABITA</q-item-label
                          >
                          <q-item-label caption>Programmer PHP </q-item-label>
                        </q-item-section>
                        <q-item-section avatar>
                          <q-radio
                            v-model="myChoice3"
                            val="myChoice3"
                            right-label
                            color="black"
                          />
                        </q-item-section>
                      </q-item>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col my-box1 my-home q-mr-sm">
                    <q-btn
                      round
                      color="grey"
                      class="flex-center"
                      icon="arrow_back_ios_new"
                    />
                  </div>
                  <div class="col my-box q-mr-sm">
                    <div class="row flex-center">CV</div>
                    <div class="row flex-center">
                      <q-img
                        src="~assets/Avator19.png"
                        style="height: 30px; width: 30px"
                      ></q-img>
                    </div>
                  </div>
                  <div class="col my-home bid2 my-font my-box q-mr-sm">
                    Portfolio
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
                  </div>
                  <div class="col my-box q-mr-sm">
                    <div class="row flex-center">CV</div>
                    <div class="row flex-center">
                      <q-img
                        src="~assets/Avator19.png"
                        style="height: 30px; width: 30px"
                      ></q-img>
                    </div>
                  </div>
                  <div class="col my-home bid2 my-font my-box q-mr-sm">
                    Portfolio
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
                  </div>
                  <div class="col my-box q-mr-sm">
                    <div class="row flex-center">CV</div>
                    <div class="row flex-center">
                      <q-img
                        src="~assets/Avator19.png"
                        style="height: 30px; width: 30px"
                      ></q-img>
                    </div>
                  </div>
                  <div class="col my-home bid2 my-font my-box q-mr-sm">
                    Portfolio
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
                  </div>
                  <div class="col my-box1 q-mr-sm my-home">
                    <q-btn
                      round
                      color="black"
                      class="flex-center"
                      icon="arrow_forward_ios"
                    />
                  </div>
                </div>
                <div class="flex-break q-pa-md"></div>

                <q-separator />

                <div class="row q-pa-md my-font">
                  <p>* Fields marked with "*" are mandatory.</p>
                </div>

                <!-- Footer Div -->

                <div class="row flex-center">
                  <q-btn
                    style="width: 100px"
                    size="8px"
                    rounded
                    color="grey"
                    label="Back to Search"
                    class="text-white text-h7"
                  ></q-btn>
                  <div class="col-2"></div>
                  <q-btn
                    size="8px"
                    rounded
                    color="black"
                    label="Send"
                    class="text-white text-h7"
                  ></q-btn>
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
      myChoice1: ref("myChoice1"),
      myChoice2: ref("myChoice2"),
      myChoice3: ref("myChoice3"),
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

.my-font
  font-size: 10px


.my-box
  // background: grey
  border: 1px solid rgba(86,61,124,.2)
  height: 80px
  width: 80px
  border-radius: 7px

.my-box1
  // background: grey
  // border: 1px solid rgba(86,61,124,.2)
  height: 80px
  width: 80px
  border-radius: 7px


.my-box2
  border-radius: 7px
</style>
