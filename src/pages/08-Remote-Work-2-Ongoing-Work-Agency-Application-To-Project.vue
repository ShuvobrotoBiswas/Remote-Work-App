<template>
  <div>
    <!-- Body Div  From Sub-Header Component-->
    <SubHeader />
    <!-- Card 1 Div -->
    <div class="row flex-center items-start">
      <div style="max-width: 1000px">
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
                <div class="row">
                  <div class="col-6">
                    <div class="row text-bold text-h7">Expertise level</div>
                    <div class="row">Middle</div>
                  </div>
                  <div class="col-6">
                    <div class="row text-bold text-h7">Education level</div>
                    <div class="row">College</div>
                  </div>
                </div>
                <q-separator />
                <div class="row q-py-md">
                  <div class="col-6">
                    <p class="text-bold text-h7">Type the requested Price</p>
                    <q-input
                      outlined
                      v-model="price"
                      style="max-width: 300px"
                    ></q-input>
                  </div>

                  <div class="col-6">
                    <div class="text-h7 text-bold">Availability date</div>
                    <div class="text-h7">
                      <q-input
                        v-model="date"
                        style="width: 150px"
                        outlined
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
                <p class="row text-bold q-py-md">
                  Answer to the questions set by client.
                </p>
                <div class="row">
                  <div class="col-6">
                    <div class="row text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                    </div>
                    <div class="row">
                      <q-input
                        v-model="input1"
                        style="max-width: 300px"
                        filled
                        type="textarea"
                      />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="row">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                    </div>
                    <div class="row">
                      <q-input
                        v-model="input2"
                        style="max-width: 300px"
                        filled
                        type="textarea"
                      />
                    </div>
                  </div>
                </div>

                <q-separator />

                <div class="row q-py-md">
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
                        <q-img src="~assets/Avator24.png" style="width:50px; height:50px" class="image1">
                        </q-img>
                        <div class="q-pa-mg text-center custom-text-me">
                          LOGO Design
                        </div>
                      </div>
                      <div class="col my-home bid2 my-font q-mr-sm">
                        <q-img src="~assets/Avator25.png" style="width:50px; height:50px" class="image1">
                        </q-img>
                        <div class="q-pa-mg text-center custom-text-me">
                          Website Design
                        </div>
                      </div>
                      <div class="col my-home bid2 image2 my-font q-mr-sm">
                        <q-img src="~assets/Avator26.png " style="width:60px; height:50px" class="image1">
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
                  <div class="row" style="max-width: 900px">
                    <div class="col">
                      <q-item tag="label" v-ripple>
                        <q-item-section>
                          <q-item-label class="text-bold profile"
                            >ANNA DOYEL</q-item-label
                          >
                          <q-item-label caption>Programmer PHP </q-item-label>
                        </q-item-section>
                        <q-item-section avatar>
                          <q-radio
                            style="max-width: 5px"
                            v-model="myChoice1"
                            val="myChoice1"
                            color="black"
                          />
                        </q-item-section>
                      </q-item>
                    </div>
                    <div class="col">
                      <q-item tag="label" v-ripple>
                        <q-item-section>
                          <q-item-label class="text-bold profile"
                            >GIL DOBRICA</q-item-label
                          >
                          <q-item-label caption>Designer </q-item-label>
                        </q-item-section>
                        <q-item-section avatar>
                          <q-radio
                            style="max-width: 5px"
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
                          <q-item-label class="text-bold profile"
                            >GABI COTABITA</q-item-label
                          >
                          <q-item-label caption>Programmer PHP </q-item-label>
                        </q-item-section>
                        <q-item-section avatar>
                          <q-radio
                            style="max-width: 5px"
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
                    <div class="row">
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
                    <div class="row flex">
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
                    <div class="row">
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

                <div class="row">
                  <div class="col"></div>
                  <div class="col">
                    <q-btn
                      style="width: 100px"
                      size="8px"
                      rounded
                      color="grey"
                      label="Back to Search"
                      class="text-white text-h7"
                    ></q-btn>
                  </div>
                  <div class="col"></div>
                  <div class="col">
                    <q-btn
                      size="8px"
                      rounded
                      color="black"
                      label="Send"
                      class="text-white text-h7"
                    ></q-btn>
                  </div>
                  <div class="col"></div>
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

.image2
  // background: grey


.my-font
  font-size: 10px

// .profile
//   font-size: 10px


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
</style>
