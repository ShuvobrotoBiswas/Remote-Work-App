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
                    <div class="text-h7 row flex-center text-bold">
                      Anna Doyle
                    </div>
                    <div class="text-h7 row flex-center">
                      <q-img
                        sizes="100px"
                        style="max-width: 80px; max-height: 90px"
                        src="~/assets/Avator16.png"
                      ></q-img>
                    </div>
                    <div class="text-h7 flex-center row">
                      <span>Unverified</span>
                    </div>
                    <div class="text-h7 flex-center row">
                      <q-btn
                        outline
                        round
                        size="8px"
                        color="grey"
                        icon="military_tech"
                      />
                    </div>
                    <div class="text-h7 row flex-center">
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
                      Graphic Designer | UX | UI
                    </div>
                    <div class="my-font row">
                      {{ designer }}
                    </div>
                    <div class="row">
                      <div class="col-12 col-md">
                        <div class="text-h7 text-bold">Requested price</div>
                        <div class="text-h7">€500</div>
                      </div>
                      <div class="col-12 col-md">
                        <div class="text-h7 text-bold">Exexution time</div>
                        <div class="text-h7">2 weeks</div>
                      </div>
                      <div class="col-12 col-md">
                        <div class="text-h7 text-bold">Offer validity</div>
                        <div class="text-h7">3 days</div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 col-md">
                        <div class="text-h7 text-bold">Skills</div>
                        <div class="text-h7">
                          <q-btn
                            outline
                            size="6px"
                            rounded
                            class="q-mr-sm"
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
                      <div class="col-12 col-md">
                        <div class="text-h7 text-bold">Type of contractor</div>
                        <div class="text-h7">Freelancer</div>
                      </div>
                      <div class="col-12 col-md">
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
                    <div
                      class="my-card row items-start"
                      style="max-width: 1000px"
                    >
                      <p class="q-py-md text-h7 text-bold">
                        Select relevent projects from you portfolio*
                      </p>
                      <div
                        class="my-card flex-center row"
                        style="max-width: 1300px"
                      >
                        <div class="col-12 col-md my-home flex-center q-mr-sm">
                          <q-btn
                            round
                            color="grey"
                            class="flex-center"
                            icon="arrow_back_ios_new"
                          />
                        </div>
                        <div
                          class="col-12 col-md my-home bid2 my-font q-mr-sm my-box1 my-box-4"
                        >
                          <div class="row flex-center">
                            <q-img
                              src="~assets/Avator24.png"
                              class="image1 flex-center"
                              style="width: 40px; height: 40px"
                            >
                            </q-img>
                          </div>
                          <div class="q-pa-mg text-center custom-text-me">
                            LOGO Design
                          </div>
                        </div>
                        <div
                          class="col-12 col-md my-home bid2 my-font q-mr-sm my-box1 my-box-4"
                        >
                          <div class="row flex-center">
                            <q-img
                              src="~assets/Avator25.png"
                              class="image1 flex-center"
                              style="width: 40px; height: 40px"
                            >
                            </q-img>
                          </div>
                          <div class="q-pa-mg text-center custom-text-me">
                            Website Design
                          </div>
                        </div>
                        <div
                          class="col-12 col-md my-home bid2 my-font q-mr-sm my-box1 my-box-4"
                        >
                          <div class="row flex-center">
                            <q-img
                              src="~assets/Avator26.png"
                              class="image1 flex-center"
                              style="width: 40px; height: 40px"
                            >
                            </q-img>
                          </div>
                          <div class="q-pa-mg text-center custom-text-me">
                            UX Design
                          </div>
                        </div>
                        <div
                          class="col-12 col-md my-home bid2 my-font my-box1 my-box-4 q-mr-sm"
                        >
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
                          <p class="row flex-center">Others</p>
                        </div>

                        <div class="col-12 col-md-2 my-home q-mr-sm">
                          <div class="row flex-center">
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

                    <!-- Sub Footer Div -->

                    <div class="row">
                      <div class="col-12 col-md"></div>
                      <div class="col-12 col-md">
                        <q-btn
                          style="width: 100px"
                          size="8px"
                          rounded
                          color="black"
                          label="ask more info "
                          class="text-white text-h7"
                        ></q-btn>
                      </div>
                      <div class="col-12 col-md"></div>
                      <div class="col-12 col-md">
                        <q-btn
                          size="8px"
                          rounded
                          color="black"
                          label="hire"
                          class="text-white text-h7"
                        ></q-btn>
                      </div>
                      <div class="col-12 col-md"></div>
                    </div>
                  </div>
                </div>

                <q-separator />
                <div class="row">
                  <div class="col-3">
                    <div class="text-h7 row flex-center text-bold">
                      Avraam iancu
                    </div>
                    <div class="text-h7 row flex-center">
                      <q-img
                        sizes="100px"
                        style="max-width: 80px; max-height: 90px"
                        src="~/assets/Avator17.png"
                      ></q-img>
                    </div>
                    <div class="text-h7 flex-center row">
                      <span>Verified</span>
                    </div>
                    <div class="text-h7 flex-center row">
                      <q-btn
                        round
                        size="8px"
                        color="black"
                        icon="military_tech"
                      />
                    </div>
                    <div class="text-h7 row flex-center">
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
                      Type Designer | Logo Designer
                    </div>
                    <div class="my-font row">
                      {{ designer }}
                    </div>
                    <div class="row">
                      <div class="col-12 col-md">
                        <div class="text-h7 text-bold">Requested price</div>
                        <div class="text-h7">€500</div>
                      </div>
                      <div class="col-12 col-md">
                        <div class="text-h7 text-bold">Exexution time</div>
                        <div class="text-h7">2 weeks</div>
                      </div>
                      <div class="col-12 col-md">
                        <div class="text-h7 text-bold">Offer validity</div>
                        <div class="text-h7">3 days</div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 col-md">
                        <div class="text-h7 row text-bold">Skills</div>
                        <div class="text-h7 r">
                          <q-btn
                            outline
                            size="6px"
                            class="q-mr-sm"
                            rounded
                            color="black"
                            label="Graphic Design"
                          />
                          <q-btn
                            outline
                            class="q-mr-sm"
                            size="6px"
                            rounded
                            color="black"
                            label="Logo Design"
                          />
                          <q-btn
                            outline
                            size="6px"
                            rounded
                            class="q-mr-sm"
                            color="black"
                            label="Branding & Logo Design"
                          />
                          <q-btn
                            outline
                            size="6px"
                            class="q-mr-sm"
                            rounded
                            color="black"
                            label="Illustrator"
                          />
                          <q-btn
                            outline
                            size="6px"
                            class="q-mr-sm"
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
                    <div class="text-h7 row flex-center text-bold">
                      alexandru cumpanasu
                    </div>
                    <div class="text-h7 row flex-center">
                      <q-img
                        sizes="100px"
                        style="max-width: 80px; max-height: 90px"
                        src="~/assets/Avator18.png"
                      ></q-img>
                    </div>
                    <div class="text-h7 flex-center row">
                      <span>Verified</span>
                    </div>
                    <div class="text-h7 flex-center row">
                      <q-btn
                        round
                        size="8px"
                        color="black"
                        icon="military_tech"
                      />
                    </div>
                    <div class="text-h7 row flex-center">
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
                    <div class="text-h7 row text-bold">Branding Designer</div>
                    <div class="my-font row">
                      {{ designer }}
                    </div>
                    <div class="row">
                      <div class="col-12 col-md">
                        <div class="text-h7 text-bold">Requested price</div>
                        <div class="text-h7">€500</div>
                      </div>
                      <div class="col-12 col-md">
                        <div class="text-h7 text-bold">Exexution time</div>
                        <div class="text-h7">2 weeks</div>
                      </div>
                      <div class="col-12 col-md">
                        <div class="text-h7 text-bold">Offer validity</div>
                        <div class="text-h7">3 days</div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 col-md">
                        <div class="text-h7 row text-bold">Skills</div>
                        <div class="text-h7 r">
                          <q-btn
                            outline
                            size="6px"
                            class="q-mr-sm"
                            rounded
                            color="black"
                            label="Graphic Design"
                          />
                          <q-btn
                            outline
                            class="q-mr-sm"
                            size="6px"
                            rounded
                            color="black"
                            label="Logo Design"
                          />
                          <q-btn
                            outline
                            size="6px"
                            rounded
                            class="q-mr-sm"
                            color="black"
                            label="Branding & Logo Design"
                          />
                          <q-btn
                            outline
                            size="6px"
                            rounded
                            class="q-mr-sm"
                            color="black"
                            label="Illustrator"
                          />
                          <q-btn
                            outline
                            size="6px"
                            rounded
                            color="black"
                            class="q-mr-sm"
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

    <!-- Main Footer -->
    <div class="row flex-center q-pa-md">
      <q-btn
        size="8px"
        rounded
        color="black"
        to="15-REMOTE-WORK-CLIENT-MILESTONES-LIST-FOR-AGENCY"
        label="show more info"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";
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
      ratingModel: ref(1),
      ratingModel1: ref(1),
      ratingModel2: ref(1),
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
   // SHOW
    created() {
        const options = {
            method: "GET",
            url: "https://rwapi.zupria.com/api/proposal/received/1",
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

.my-box-4
  height: 100px
  width: 100px
</style>
