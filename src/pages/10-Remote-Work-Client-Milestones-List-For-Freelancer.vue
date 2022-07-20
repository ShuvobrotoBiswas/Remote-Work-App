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
        <div class="text-black q-mr-sm">
          <q-btn flat label="LOGOUT" dense to="/Create-Account-Step3"></q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <!-- Body Div -->

    <div class="flex-break"></div>
    <div class="text-h7 text-center">Hi Florin, welcome to your dashboard!</div>
    <div class="flex-break q-py-md"></div>
    <q-separator />
    <div class="row flex-center q-pa-md">
      <div class="text-black text-h7 text-center q-pr-md">
        <q-btn
          to="/Contractor-profile-display"
          dense
          flat
          color="black"
          icon="person"
        ></q-btn>
        <div>Profile</div>
      </div>
      <div class="text-black text-h7 text-center q-pr-md">
        <q-btn
          dense
          to="/01-remote-work-Client-Post-Proj"
          flat
          color="black"
          icon="addchart"
        ></q-btn>
        <div>Post a Project</div>
      </div>
      <div class="text-black text-h7 text-center q-pr-md">
        <q-btn
          dense
          flat
          to="/06-Remote-Work-Contractor-Search-Proj"
          color="black"
          icon="insert_chart_outlined"
        ></q-btn>
        <div>Projects</div>
      </div>
      <div class="text-black text-h7 text-center q-pr-md">
        <q-btn dense flat color="black" icon="mark_email_unread"></q-btn>
        <div>Messages</div>
      </div>
      <div class="text-black text-h7 text-center q-pr-md">
        <q-btn
          dense
          flat
          to="/Client-Company-Profile-Doc-Verification"
          color="black"
          icon="local_atm"
        ></q-btn>
        <div>Accounts</div>
      </div>
      <div class="text-black text-h7 text-center q-pr-md">
        <q-btn dense flat color="black" icon="tune"></q-btn>
        <div>Settings</div>
      </div>
    </div>
    <q-separator />

    <!-- Card 1 Div -->

    <div class="row flex-center items-start">
      <div style="width: 1000px">
        <div class="q-pa-md">
          <div class="row">
            <div class="row" style="max-width: 950px">
              <q-card-section>
                <div class="text-h5 text-bold q-py-md text-left">
                  {{project_title}}
                </div>
                <q-separator />
                <div class="row">
                  <div class="col">
                    <div class="row text-h7 text-bold">{{name}}</div>
                    <div class="text-h7 row">
                      <q-img
                        style="height: 70px; width: 70px"
                        src="profile.picture"
                      ></q-img>
                    </div>
                  </div>
                  <div class="col"></div>
                  <div class="col"></div>
                  <div class="col">
                    <q-btn
                      rounded
                      size="10px"
                      style="position: absolute"
                      unelevated
                      color="black"
                      class="text-white"
                      label="Add milestone"
                    />
                  </div>
                </div>
                <div class="row">
                  <q-tabs v-model="tab" class="text-teal">
                    <q-tab class="text-black" label="Milestones" name="one" />
                    <q-tab class="text-black" label="Feedback" name="two" />
                  </q-tabs>
                  <q-separator />

                  <q-tab-panels v-model="tab" animated style="max-width: 950px">
                    <q-tab-panel name="one">
                      <div class="row" style="max-width: 950px">
                        <div class="col-9">
                          <div class="row">
                            <div class="row">
                              <p class="text-bold q-my-none text-h7">
                                {{milestone_name}}
                              </p>
                            </div>
                            <div class="row">
                              <p class="my-font">
                                <span class="text-grey-6"
                                  >Due Feb.10 | Amount: €300 | Funded |</span
                                >
                                Change requested
                              </p>
                              <p class="text-h7">
                                {{ milestone_details }}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-3">
                          <div class="row flex-center">
                            <q-btn
                              rounded
                              size="10px"
                              style="position: absolute"
                              unelevated
                              color="black"
                              class="text-white"
                              label="Release Payment"
                            />
                          </div>
                          <div class="row q-pa-md">
                            <div class="col">
                              <q-btn
                                round
                                size="10px"
                                unelevated
                                color="black"
                                icon="edit"
                                class="text-white"
                              />
                            </div>
                            <div class="col"></div>
                            <div class="col">
                              <q-btn
                                round
                                size="10px"
                                icon="delete"
                                unelevated
                                color="black"
                                class="text-white"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row" style="max-width: 950px">
                        <div class="col-9">
                          <div class="row">
                            <div class="row">
                              <p class="text-bold q-my-none text-h7">
                                {{milestone_name}}
                              </p>
                            </div>
                            <div class="row">
                              <p class="my-font">
                                <span class="text-grey-6"
                                  >Due Feb. 05 | Amount: €100 |</span
                                >
                              </p>
                              <p class="text-h7">
                                {{milestone_details}}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-3">
                          <div class="row flex-center">
                            <q-btn
                              rounded
                              size="10px"
                              style="width: 115px"
                              unelevated
                              color="black"
                              class="text-white"
                              label="Fund"
                            />
                          </div>
                          <div class="row q-pa-md">
                            <div class="col">
                              <q-btn
                                round
                                size="10px"
                                unelevated
                                color="black"
                                icon="edit"
                                class="text-white"
                              />
                            </div>
                            <div class="col"></div>
                            <div class="col">
                              <q-btn
                                round
                                size="10px"
                                icon="delete"
                                unelevated
                                color="black"
                                class="text-white"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row" style="max-width: 950px">
                        <div class="col-9">
                          <div class="row">
                            <div class="row">
                              <p class="text-bold q-my-none text-h7">
                                {{milestone_name}}
                              </p>
                            </div>
                            <div class="row">
                              <p class="my-font">
                                <span class="text-grey-6"
                                  >Due Feb. 1 | Amount: €300</span
                                >
                              </p>
                              <p class="text-h7">
                                {{milestone_details}}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-3">
                          <div class="row flex-center">
                            <q-btn
                              rounded
                              size="10px"
                              unelevated
                              style="width: 115px"
                              color="black"
                              class="text-white"
                              label="Fund"
                            />
                          </div>
                          <div class="row q-pa-md">
                            <div class="col">
                              <q-btn
                                round
                                size="10px"
                                unelevated
                                color="black"
                                icon="edit"
                                class="text-white"
                              />
                            </div>
                            <div class="col"></div>
                            <div class="col">
                              <q-btn
                                round
                                size="10px"
                                icon="delete"
                                unelevated
                                color="black"
                                class="text-white"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </q-tab-panel>

                    <q-tab-panel name="two">
                      <clientFeedback />
                    </q-tab-panel>
                  </q-tab-panels>
                </div>

                <q-separator />
              </q-card-section>
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
        to="11-Remote-Work-Client-Milestones-Details-For-Freelancer"
        label="hire"
        unelevated
        color="black"
        class="text-white"
      />
    </div>
  </div>
</template>

<script>
import clientFeedback from "components/Client-Feedback-freelancer.vue";
import { defineComponent } from "vue";
import axios from "axios";
import { ref } from "vue";
export default defineComponent({
  components: { clientFeedback },
  // name: "IndexPage",
  setup() {
    return {
      lorem:
        "Short description: Lore ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
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
      tab: ref("one"),
      project_title: "",
      milestone_details:"",
      milestone_name:"",
      name:"",
      contracts:[],
    };
  },
   // SHOW
    created() {
        const options = {
            method: "GET",
            url: "https://rwapi.zupria.com/api/contract/stages/1",
            headers: {
                Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvcndhcGkuenVwcmlhLmNvbVwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY1MDY2NTQ3NCwiZXhwIjoxNjgyMjAxNDc0LCJuYmYiOjE2NTA2NjU0NzQsImp0aSI6ImRaUGlZem9YTXZZS25ITU4iLCJzdWIiOjgsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.m127K5q8Fy_6CxXEWJZyXqb_HJL4U-EUcHmdwmHTytI",
            },
        };
        axios
            .request(options)
            .then((response) => {
            console.log(response.data);
            this.contracts = response.data;
        })
            .catch(function (error) {
            console.error(error);
        });
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

.my-font
  font-size: 10px
</style>
