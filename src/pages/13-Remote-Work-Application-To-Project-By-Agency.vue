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
      <q-form @submit.prevent="projectProposal">
        <q-card flat class="my-card item-center q-px-md">
          <q-card-section>
            <div class="text-h5 text-bold q-py-md text-left">
              Application to project
            </div>
            <div class="row text-7 q-py-md text-left">
              {{ lorem }}
            </div>
            <div class="row q-py-md">
              <div class="col-12 col-md">
                <fieldset
                  style="max-width: 200px; max-height: 80px; border-radius: 7px"
                  class="q-pa-md"
                >
                  <legend class="text-bold">Type the requested Price</legend>
                  <q-input borderless v-model="price"></q-input>
                </fieldset>
              </div>

              <div class="col-12 col-md">
                <div class="text-h7 text-bold">Type total execution time*</div>
                <div class="text-h7">
                  <q-expansion-item
                    dense
                    dense-toggle
                    v-model="project_execution_weeks"
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
                <fieldset
                  style="max-height: 100px; border-radius: 7px"
                  class="q-pa-md"
                >
                  <legend class="text-h7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua?
                  </legend>
                  <q-input borderless v-model="interview_answers"></q-input>
                </fieldset>
              </div>
            </div>
            <div class="row">
              <div class="row q-pa-md">
                <fieldset
                  style="
                    max-height: 100px;
                    border-radius: 7px;
                    max-width: 600px;
                  "
                  class="q-pa-md"
                >
                  <legend class="text-h7">
                    Ut enim ad minim veniam veniam, quis nostrud exercitation et
                    nisi ut aliquip?
                  </legend>
                  <q-input borderless v-model="input2"></q-input>
                </fieldset>
              </div>
            </div>

            <q-separator />

            <div class="row q-py-md">
              <div class="col-12 col-md">
                <div class="text-h7 text-bold">Offer validity*</div>
                <div class="text-h7">
                  Pick a Date
                  <div class="q-pa-md" style="max-width: 300px">
                    <q-input
                      style="max-width: 250px"
                      filled
                      v-model="validity"
                      mask="date"
                      :rules="['date']"
                    >
                      {{ validity }}
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy
                            ref="qDateProxy"
                            cover
                            transition-show="scale"
                            transition-hide="scale"
                          >
                            <q-date v-model="validity" range>
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
              <div class="col-12 col-md">
                <div class="text-h7 text-bold"></div>
                <div class="text-h7"></div>
              </div>
              <div class="col-12 col-md">
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
            <add-project />
            <div class="flex-break q-pa-md"></div>

            <q-separator />
            <div class="flex-break q-pa-md"></div>

            <div class="row">
              <div class="row text-bold">
                Select the freelancers who work for the agency and who will be
                involved in the project.
              </div>
              <div class="row" style="max-width: 700px">
                <div class="col-12 col-md">
                  <q-item tag="label" v-ripple>
                    <q-item-section avatar>
                      <q-radio
                        v-model="myChoice1"
                        val="myChoice1"
                        right-label
                        color="black"
                      />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-bold">ANNA DOYEL</q-item-label>
                      <q-item-label caption>Programmer PHP </q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
                <div class="col-12 col-md">
                  <q-item tag="label" v-ripple>
                    <q-item-section avatar>
                      <q-radio
                        v-model="myChoice2"
                        val="myChoice2"
                        right-label
                        color="black"
                      />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-bold">GIL DOBRICA</q-item-label>
                      <q-item-label caption>Designer </q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
                <div class="col-12 col-md">
                  <q-item tag="label" v-ripple>
                    <q-item-section avatar>
                      <q-radio
                        v-model="myChoice3"
                        val="myChoice3"
                        right-label
                        color="black"
                      />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-bold"
                        >GABI COTABITA</q-item-label
                      >
                      <q-item-label caption>Programmer PHP </q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12 col-md my-box1 my-home q-mr-sm">
                <q-btn
                  round
                  color="grey"
                  class="flex-center"
                  icon="arrow_back_ios_new"
                />
              </div>
              <div class="col-12 col-md my-box q-mr-sm">
                <div class="row flex-center">CV</div>
                <div class="row flex-center">
                  <q-img
                    src="~assets/Avator19.png"
                    style="height: 30px; width: 30px"
                  ></q-img>
                </div>
              </div>
              <div class="col-12 col-md my-home bid2 my-font my-box q-mr-sm">
                Portfolio
                <div class="col-12 col-md">
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
                <q-btn flat size="5px" color="black" padding="5px" icon="add" />
              </div>
              <div class="col-12 col-md my-box q-mr-sm">
                <div class="row flex-center">CV</div>
                <div class="row flex-center">
                  <q-img
                    src="~assets/Avator19.png"
                    style="height: 30px; width: 30px"
                  ></q-img>
                </div>
              </div>
              <div class="col-12 col-md my-home bid2 my-font my-box q-mr-sm">
                Portfolio
                <div class="col-12 col-md">
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
                <q-btn flat size="5px" color="black" padding="5px" icon="add" />
              </div>
              <div class="col-12 col-md my-box q-mr-sm">
                <div class="row flex-center">CV</div>
                <div class="row flex-center">
                  <q-img
                    src="~assets/Avator19.png"
                    style="height: 30px; width: 30px"
                  ></q-img>
                </div>
              </div>
              <div class="col-12 col-md my-home bid2 my-font my-box q-mr-sm">
                Portfolio
                <div class="col-12 col-md">
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
                <q-btn flat size="5px" color="black" padding="5px" icon="add" />
              </div>
              <div class="col-12 col-md my-box1 q-mr-sm my-home">
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
                  to="07-REMOTE-WORK-FREELANCER-PROJECT-DISPLAY"
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
                  type="submit"
                  color="black"
                  label="Send"
                  class="text-white text-h7"
                ></q-btn>
              </div>
              <div class="col"></div>
            </div>
          </q-card-section>
        </q-card>
      </q-form>
    </div>
    <!-- Card 3 div -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";
import { ref } from "vue";
import AddProject from "src/components/add-project.vue";
export default defineComponent({
  // name: "IndexPage",
  components: { AddProject },

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
      myChoice1: ref("myChoice1"),
      myChoice2: ref("myChoice2"),
      myChoice3: ref("myChoice3"),
      project_execution_weeks:ref(""),
      interview_answers:ref(""),
      validity:ref(""),
    };
  },
  methods: {
    projectProposal() {
      const proposal = new FormData();
      proposal.append("project_execution_weeks", this.project_execution_weeks);
      proposal.append("price", this.price);
      proposal.append("interview_answers", this.interview_answers);
      proposal.append("validity", this.validity);
      const options = {
        method: "POST",
        url: "https://rwapi.zupria.com/api/proposal/project/1",
        data: proposal,
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
          this.$router.push(
            "/14-Remote-Work-Client-Lest-Application-To-Project-By-Agency"
          );
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
  max-width: 700px

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
  background: grey


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

.my-box3
  border-radius: 7px
</style>
