<template>
  <div>
    <!-- Header Div -->

    <q-header>
      <q-toolbar class="bg-white">
        <q-toolbar-title>
          <div class="text-green">
            <q-img
              src="~assets/Avator3.png"
              style="height: 35px; max-width: 110px"
            ></q-img>
          </div>
        </q-toolbar-title>

        <div>
          <q-avatar>
            <q-img
              src="~assets/Avator4.png"
              style="height: 27px; max-width: 27px"
            >
            </q-img>
          </q-avatar>
        </div>
        <div class="text-black q-mr-sm">LOGOUT</div>
      </q-toolbar>
    </q-header>

    <!-- Body Div -->

    <div class="flex-break"></div>
    <div class="text-h7 text-center">Hi Florin, welcome to your dashboard!</div>
    <div class="flex-break q-py-md"></div>
    <q-separator />
    <div class="">
      <div class="row">
        <div class="col"></div>
        <div class="col">
          <div class="text-black text-h7 text-center">
            <q-btn dense flat color="black" icon="person"></q-btn>
            <div>Profile</div>
          </div>
        </div>
        <div class="col">
          <div class="text-black text-h7 text-center">
            <q-btn dense flat color="black" icon="addchart"></q-btn>
            <div>Post a Project</div>
          </div>
        </div>
        <div class="col">
          <div class="text-black text-h7 text-center">
            <q-btn
              dense
              flat
              color="black"
              icon="insert_chart_outlined"
            ></q-btn>
            <div>Projects</div>
          </div>
        </div>
        <div class="col">
          <div class="text-black text-h7 text-center">
            <q-btn dense flat color="black" icon="mark_email_unread"></q-btn>
            <div>Messages</div>
          </div>
        </div>
        <div class="col">
          <div class="text-black text-h7 text-center">
            <q-btn dense flat color="black" icon="local_atm"></q-btn>
            <div>Accounts</div>
          </div>
        </div>
        <div class="col">
          <div class="text-black text-h7 text-center">
            <q-btn dense flat color="black" icon="tune"></q-btn>
            <div>Settings</div>
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>
    <q-separator />

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

                <q-separator />
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
import { ref } from "vue";
export default defineComponent({
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
  border: 1px solid rgba(86,61,124,.2)
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


.my-font
  font-size: 10px
</style>
