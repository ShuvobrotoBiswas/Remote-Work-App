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
                  Logo Design for Insurance Agency
                </div>
                <q-separator />
                <div class="row">
                  <div class="col">
                    <div class="row text-h7 text-bold">AGENCY NAME</div>
                    <div class="text-h7 row">
                      <q-img
                        style="
                          height: 70px;
                          width: 70px;
                          border-radius: 50%;
                          border: 1px solid black;
                        "
                        src="~/assets/Avator20.png"
                      ></q-img>
                    </div>
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
                                Milestone name 1
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
                                {{ lorem }}
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
                        <div class="col-3">
                          <div class="row">
                            <div class="row">
                              <p class="text-bold q-my-none text-h7">
                                Uploaded files
                              </p>
                            </div>
                            <div class="row q-my-none">
                              <q-btn
                                size="13px"
                                flat
                                icon="content_copy"
                                label="File1.pdf"
                                class="text-black row text-h7"
                              ></q-btn>
                              <q-btn
                                size="13px"
                                flat
                                color="black"
                                icon="content_copy"
                                label="File2.eps"
                                class="text-black row text-h7"
                              ></q-btn>
                              <q-btn
                                size="13px"
                                flat
                                icon="content_copy"
                                label="File3.psd"
                                class="text-black row text-h7"
                              ></q-btn>
                            </div>
                          </div>
                        </div>
                      </div>
                    </q-tab-panel>

                    <q-tab-panel name="two">
                      <div class="row" style="max-width: 950px">
                        <div class="col-11">
                          <div class="row">
                            <div class="row">
                              <p class="text-bold q-my-none text-h7">
                                Give feedback to the contractor
                              </p>
                            </div>
                            <div class="row">
                              <p class="text-h7">
                                {{ lorem }}
                              </p>
                            </div>
                            <div class="row q-gutter-sm">
                              <q-radio
                                v-model="shape"
                                val="radio1"
                                class="q-mr-sm"
                                color="black"
                                label="I want to work with this contractor again"
                              />
                              <q-radio
                                v-model="shape"
                                color="black"
                                class="q-mr-sm"
                                val="rectangle"
                                label="I want to try a different contractor"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
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
        label="back"
        to="15-Remote-Work-Client-Milestones-List-For-Agency"
        unelevated
        color="black"
        class="text-white q-mr-lg"
      />
      <q-btn
        rounded
        style="width: 120px"
        size="10px"
        type="submit"
        label="Send feedback"
        unelevated
        v-model="submit"
        color="black"
        class="text-white"
      />
    </div>
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
        "If you were to carry out a project similar to this one, would you want to work with this contractor again or do you want to try a different team?.",
      tab: ref("two"),
      shape: ref("radio1"),
      submit: null,
    };
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
