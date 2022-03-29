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
      <div style="max-width: 950px">
        <div class="q-pa-md">
          <div class="row">
            <div>
              <q-card-section>
                <div class="text-h5 text-bold q-py-md text-left">
                  List of Application to project
                </div>
                <q-separator />

                <div class="row">
                  <div class="col-3">
                    <div class="text-h7 row text-bold">Anna Doyle</div>
                    <div class="text-h7 row">
                      <q-img sizes="100px" src="~/assets/Avator16.png"></q-img>
                    </div>
                    <div class="text-h7 row">
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
                    <div class="text-h7 row">
                      <div class="text-h7">
                        <q-checkbox
                          v-model="checkbox19"
                          checked-icon="star"
                          size="25px"
                          color="black"
                          unchecked-icon="star_border"
                          indeterminate-icon="help"
                        />
                        <q-checkbox
                          v-model="checkbox20"
                          size="25px"
                          color="black"
                          checked-icon="star"
                          unchecked-icon="star_border"
                          indeterminate-icon="help"
                        />
                        <q-checkbox
                          v-model="checkbox21"
                          color="black"
                          size="25px"
                          checked-icon="star"
                          unchecked-icon="star_border"
                          indeterminate-icon="help"
                        />
                        <q-checkbox
                          v-model="checkbox22"
                          color="black"
                          size="25px"
                          checked-icon="star"
                          unchecked-icon="star_border"
                          indeterminate-icon="help"
                        />
                        <q-checkbox
                          v-model="checkbox23"
                          color="black"
                          size="25px"
                          checked-icon="star"
                          unchecked-icon="star_border"
                          indeterminate-icon="help"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-9">
                    <div class="text-h7 row text-bold">
                      Graphic Designer | UX | UI
                    </div>
                    <div class="my-font row">
                      {{ designer }}
                    </div>
                    <div class="row">
                      <div class="col">
                        <div class="text-h7 text-bold">Requested price</div>
                        <div class="text-h7">€500</div>
                      </div>
                      <div class="col">
                        <div class="text-h7 text-bold">Exexution time</div>
                        <div class="text-h7">2 weeks</div>
                      </div>
                      <div class="col">
                        <div class="text-h7 text-bold">Offer validity</div>
                        <div class="text-h7">3 days</div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <div class="text-h7 text-bold">Skills</div>
                        <div class="text-h7">
                          <q-btn
                            outline
                            size="6px"
                            rounded
                            color="black"
                            label="Graphic Design"
                          />
                          <q-btn
                            outline
                            size="6px"
                            rounded
                            color="black"
                            label="Logo Design"
                          />
                        </div>
                      </div>
                      <div class="col">
                        <div class="text-h7 text-bold">Type of contractor</div>
                        <div class="text-h7">Freelancer</div>
                      </div>
                      <div class="col">
                        <div class="text-h7 text-bold"></div>
                        <div class="text-h7"></div>
                      </div>
                    </div>
                    <div class="row text-h7 text-bold">
                      Answer to your questions
                    </div>
                    <div class="row text-h7 bg-grey-4">
                      <strong class="q-mr-sm">Q</strong>
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip?
                    </div>
                    <div class="row text-h7 text-white bg-black">
                      <strong class="q-mr-sm">A</strong>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip.
                    </div>
                    <div class="row text-h7 bg-grey-4">
                      <strong class="q-mr-sm">Q</strong>
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip?
                    </div>
                    <div class="row text-h7 text-white bg-black">
                      <strong class="q-mr-sm">A</strong>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip.
                    </div>
                  </div>
                </div>

                <div class="row flex-center items-start">
                  <div flat bordered class="my-card" style="max-width: 1000px">
                    <div class="q-pa-md">
                      <div class="col-9 text-h6 text-bold">
                        Relevent projects from you portfolio
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
                        <q-img src="~assets/Avator5.png" class="image1">
                        </q-img>
                        <div class="q-pa-mg text-center custom-text-me">
                          LOGO Design
                        </div>
                      </div>
                      <div class="col my-home bid2 my-font q-mr-sm">
                        <q-img src="~assets/Avator6.png" class="image1">
                        </q-img>
                        <div class="q-pa-mg text-center custom-text-me">
                          Website Design
                        </div>
                      </div>
                      <div class="col my-home bid2 image2 my-font q-mr-sm">
                        <q-img src="~assets/Avator7.png " class="image1">
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
                      label="Ask more info"
                      class="text-white text-h7"
                    ></q-btn>
                  </div>

                  <div class="col-4"></div>
                  <div class="col-4">
                    <q-btn
                      size="8px"
                      rounded
                      color="black"
                      label="Hire"
                      class="text-white text-h7"
                    ></q-btn>
                  </div>
                </div>
                <q-separator />
                <div class="row">
                  <div class="col-3">
                    <div class="text-h7 row text-bold">Avraam iancu</div>
                    <div class="text-h7 row">
                      <q-img sizes="100px" src="~/assets/Avator17.png"></q-img>
                    </div>
                    <div class="text-h7 row">
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
                    <div class="text-h7 row">
                      <div class="text-h7">
                        <q-checkbox
                          v-model="checkbox19"
                          checked-icon="star"
                          size="25px"
                          color="black"
                          unchecked-icon="star_border"
                          indeterminate-icon="help"
                        />
                        <q-checkbox
                          v-model="checkbox20"
                          size="25px"
                          color="black"
                          checked-icon="star"
                          unchecked-icon="star_border"
                          indeterminate-icon="help"
                        />
                        <q-checkbox
                          v-model="checkbox21"
                          color="black"
                          size="25px"
                          checked-icon="star"
                          unchecked-icon="star_border"
                          indeterminate-icon="help"
                        />
                        <q-checkbox
                          v-model="checkbox22"
                          color="black"
                          size="25px"
                          checked-icon="star"
                          unchecked-icon="star_border"
                          indeterminate-icon="help"
                        />
                        <q-checkbox
                          v-model="checkbox23"
                          color="black"
                          size="25px"
                          checked-icon="star"
                          unchecked-icon="star_border"
                          indeterminate-icon="help"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-9">
                    <div class="text-h7 row text-bold">
                      Type Designer | Logo Designer
                    </div>
                    <div class="my-font row">
                      {{ designer }}
                    </div>
                    <div class="row">
                      <div class="col">
                        <div class="text-h7 text-bold">Requested price</div>
                        <div class="text-h7">€500</div>
                      </div>
                      <div class="col">
                        <div class="text-h7 text-bold">Exexution time</div>
                        <div class="text-h7">2 weeks</div>
                      </div>
                      <div class="col">
                        <div class="text-h7 text-bold">Offer validity</div>
                        <div class="text-h7">3 days</div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <div class="text-h7 row text-bold">Skills</div>
                        <div class="text-h7 r">
                          <q-btn
                            outline
                            size="6px"
                            rounded
                            color="black"
                            label="Graphic Design"
                          />
                          <q-btn
                            outline
                            size="6px"
                            rounded
                            color="black"
                            label="Logo Design"
                          />
                          <q-btn
                            outline
                            size="6px"
                            rounded
                            color="black"
                            label="Branding & Logo Design"
                          />
                          <q-btn
                            outline
                            size="6px"
                            rounded
                            color="black"
                            label="Illustrator"
                          />
                          <q-btn
                            outline
                            size="6px"
                            rounded
                            color="black"
                            label="InDesign"
                          />
                          <q-btn
                            outline
                            size="6px"
                            rounded
                            color="black"
                            label="Photoshop"
                          />
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                <q-separator />
                <div class="row">
                  <div class="col-3">
                    <div class="text-h7 row text-bold">alexandru cumpanasu</div>
                    <div class="text-h7 row">
                      <q-img sizes="100px" src="~/assets/Avator18.png"></q-img>
                    </div>
                    <div class="text-h7 row">
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
                    <div class="text-h7 row">
                      <div class="text-h7">
                        <q-checkbox
                          v-model="checkbox19"
                          checked-icon="star"
                          size="25px"
                          color="black"
                          unchecked-icon="star_border"
                          indeterminate-icon="help"
                        />
                        <q-checkbox
                          v-model="checkbox20"
                          size="25px"
                          color="black"
                          checked-icon="star"
                          unchecked-icon="star_border"
                          indeterminate-icon="help"
                        />
                        <q-checkbox
                          v-model="checkbox21"
                          color="black"
                          size="25px"
                          checked-icon="star"
                          unchecked-icon="star_border"
                          indeterminate-icon="help"
                        />
                        <q-checkbox
                          v-model="checkbox22"
                          color="black"
                          size="25px"
                          checked-icon="star"
                          unchecked-icon="star_border"
                          indeterminate-icon="help"
                        />
                        <q-checkbox
                          v-model="checkbox23"
                          color="black"
                          size="25px"
                          checked-icon="star"
                          unchecked-icon="star_border"
                          indeterminate-icon="help"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-9">
                    <div class="text-h7 row text-bold">
                      Branding Designer
                    </div>
                    <div class="my-font row">
                      {{ designer }}
                    </div>
                    <div class="row">
                      <div class="col">
                        <div class="text-h7 text-bold">Requested price</div>
                        <div class="text-h7">€500</div>
                      </div>
                      <div class="col">
                        <div class="text-h7 text-bold">Exexution time</div>
                        <div class="text-h7">2 weeks</div>
                      </div>
                      <div class="col">
                        <div class="text-h7 text-bold">Offer validity</div>
                        <div class="text-h7">3 days</div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <div class="text-h7 row text-bold">Skills</div>
                        <div class="text-h7 r">
                          <q-btn
                            outline
                            size="6px"
                            rounded
                            color="black"
                            label="Graphic Design"
                          />
                          <q-btn
                            outline
                            size="6px"
                            rounded
                            color="black"
                            label="Logo Design"
                          />
                          <q-btn
                            outline
                            size="6px"
                            rounded
                            color="black"
                            label="Branding & Logo Design"
                          />
                          <q-btn
                            outline
                            size="6px"
                            rounded
                            color="black"
                            label="Illustrator"
                          />
                          <q-btn
                            outline
                            size="6px"
                            rounded
                            color="black"
                            label="InDesign"
                          />
                          <q-btn
                            outline
                            size="6px"
                            rounded
                            color="black"
                            label="Photoshop"
                          />
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                <q-separator />
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
import { ref } from "vue";
export default defineComponent({
  // name: "IndexPage",
  setup() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      text: " We have a logo that is about 13 years old and we are looking to update/change our branding, we need a logo that is more up to date and we want to keep the versatillity. We want to go bold/innovative with this change. Previous logo is attached for reference",
      checkbox19: ref(true),
      checkbox20: ref(false),
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
      designer:
        "Senior Graphic Design Specialist with 6+ years of experience in the management of the complete design process, from conceptualization to delivery. Skilled with Adobe Creative Suite (Illustrator, Photoshop, InDesign) and web design applications. Able to stretch the boundaries of web design and digital storytelling to help my client's brands stand out. ",
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
