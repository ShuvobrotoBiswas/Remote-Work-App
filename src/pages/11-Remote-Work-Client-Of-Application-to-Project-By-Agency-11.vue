<template>
  <div>
    <!-- Body Div  From Sub-Header Component-->
    <SubHeader />
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
                      AGENCY NAME
                    </div>
                    <div class="text-h7 row flex-center">
                      <q-img
                        sizes="100px"
                        style="
                          max-width: 80px;
                          max-height: 80px;
                          border: 2px solid grey;
                          border-radius: 50%;
                        "
                        src="~/assets/Avator20.png"
                      ></q-img>
                    </div>
                    <div class="text-h7 flex-center row">
                      <span class="q-mr-sm">Unverified</span>
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
                    <div class="q-pa-md">
                      <div class="text-h7 text-bold row">
                        Type of contractor
                      </div>
                      <div class="text-h7 row">Agency</div>
                    </div>
                    <div class="row">
                      <div class="col">
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
                            class="q-mr-sm"
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
                            class="q-mr-sm"
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
                    <div class="my-card row" style="max-width: 1000px">
                      <p class="col-9 text-bold">
                        Relevent projects from you portfolio
                      </p>
                      <div class="row flex-center bid1 text-center">
                        <div class="col my-home q-mr-sm">
                          <q-btn
                            round
                            color="grey"
                            class="flex-center"
                            icon="arrow_back_ios_new"
                          />
                        </div>
                        <div class="col my-home bid2 my-font q-mr-sm my-box">
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
                        <div class="col my-home bid2 my-font q-mr-sm my-box">
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
                        <div class="col my-home bid2 my-font q-mr-sm my-box">
                          <q-img
                            src="~assets/Avator26.png "
                            class="image1"
                            style="width: 40px; height: 40px"
                          >
                          </q-img>
                          <div class="q-pa-mg text-center custom-text-me">
                            UX Design
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
                </div>

                <div class="flex-center items-start">
                  <div flat bordered class="my-card" style="max-width: 1000px">
                    <div>
                      <div class="row text-bold">
                        Freelancers who work for the agency and who will be
                        involved in the project.
                      </div>
                      <div class="row q-pa-md">
                        <div class="col-4">
                          <div class="row text-bold">ANNA DOYEL</div>
                          <div class="row">Programmer PHP</div>
                        </div>
                        <div class="col-4">
                          <div class="row text-bold">GIL DOBRICA</div>
                          <div class="row">Designer UI</div>
                        </div>
                        <div class="col-4">
                          <div class="row text-bold">GABI COTABITA</div>
                          <div class="row">Programmer PHP</div>
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
                        <div class="row flex-center flex-center">
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

                    <!-- Sub Footer Div -->

                    <div class="row flex-center q-pa-md">
                      <q-btn
                        style="width: 100px"
                        size="8px"
                        rounded
                        color="grey"
                        label="ask more info "
                        class="text-white text-h7"
                      ></q-btn>
                    </div>
                  </div>
                </div>

                <q-separator />
                <div class="row">
                  <div class="col-3">
                     <div class="text-h7 row flex-center text-bold">
                      Avraam Iancu
                    </div>
                    <div class="text-h7 row flex-center">
                      <q-img
                        sizes="100px"
                        style="
                          max-width: 80px;
                          max-height: 80px;
                        "
                        src="~/assets/Avator17.png"
                      ></q-img>
                    </div>
                    <div class="text-h7 flex-center row">
                      <span class="q-mr-sm">Verified</span>
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
                        style="
                          max-width: 80px;
                          max-height: 80px;
                        "
                        src="~/assets/Avator18.png"
                      ></q-img>
                    </div>
                    <div class="text-h7 flex-center row">
                      <span class="q-mr-sm">Verified</span>
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
      <q-btn size="8px" rounded color="black" label="show more info" />
    </div>
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
