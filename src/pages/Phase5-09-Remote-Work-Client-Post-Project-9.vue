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
                        style="max-width: 100px; max-width: 100px"
                        src="~/assets/Avator16.png"
                      ></q-img>
                    </div>
                    <div>
                      <p class="row flex-center">Unverified</p>
                      <div class="row flex-center">
                        <q-btn
                          outline
                          round
                          size="8px"
                          color="grey"
                          icon="military_tech"
                        />
                      </div>
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
                        <div class="text-h7">Max. 15 Days</div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-4">
                        <div class="text-h7 text-bold">Type of contractor</div>
                        <div class="text-h7">Freelancer</div>
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
                            class="q-mr-sm"
                            color="black"
                            label="Graphic Design"
                          />
                          <q-btn
                            outline
                            size="6px"
                            rounded
                            color="black"
                            class="q-mr-sm"
                            label="Logo Design"
                          />
                          <q-btn
                            outline
                            size="6px"
                            rounded
                            color="black"
                            class="q-mr-sm"
                            label="Branding & Logo Design"
                          />
                          <q-btn
                            outline
                            size="6px"
                            rounded
                            color="black"
                            class="q-mr-sm"
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
                    <div>
                      <div class="row text-bold text-h7">Uploaded files</div>
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
                        class="text-grey row text-h7"
                      ></q-btn>
                      <q-btn
                        size="13px"
                        flat
                        icon="content_copy"
                        label="File3.psd"
                        class="text-black row text-h7"
                      ></q-btn>
                    </div>
                    <div class="row">
                      <div class="col"></div>
                      <div class="col">
                        <q-btn
                        size="8px"
                        rounded
                        style="width: 100px"
                        color="grey"
                        label="Ask more info"
                        class="text-white text-h7 q-mr-sm"
                      ></q-btn>
                      </div>
                      <div class="col"></div>
                      <div class="col">
                        <q-btn
                        size="8px"
                        rounded
                        style="width: 100px"
                        color="black"
                        label="hire"
                        class="text-white text-h7"
                      ></q-btn>
                      </div>
                      <div class="col"></div>
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
                        style="max-width: 100px; max-width: 100px"
                        src="~/assets/Avator17.png"
                      ></q-img>
                    </div>
                    <div>
                      <p class="row flex-center">Verified</p>
                      <div class="row flex-center">
                        <q-btn
                          round
                          size="8px"
                          color="black"
                          icon="military_tech"
                        />
                      </div>
                    </div>
                    <div class="text-h7 row flex-center">
                      <div class="text-h7">
                        <q-rating
                          v-model="ratingModel1"
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
                        <div class="text-h7">Max. 15 Days</div>
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
                            class="q-mr-sm"
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
                    <div class="text-h7 flex-center row text-bold">
                      alexandru cumpanasu
                    </div>
                    <div class="text-h7 flex-center row">
                      <q-img
                        sizes="100px"
                        style="max-width: 100px; max-width: 100px"
                        src="~/assets/Avator18.png"
                      ></q-img>
                    </div>
                    <div>
                      <p class="row flex-center">Verified</p>
                      <div class="row flex-center">
                        <q-btn
                          round
                          size="8px"
                          color="black"
                          icon="military_tech"
                        />
                      </div>
                    </div>
                    <div class="text-h7 row flex-center">
                      <div class="text-h7">
                        <q-rating
                          v-model="ratingModel2"
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
                        <div class="text-h7">Max. 15 Days</div>
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
                            class="q-mr-sm"
                            color="black"
                            label="Graphic Design"
                          />
                          <q-btn
                            outline
                            size="6px"
                            class="q-mr-sm"
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
                            class="q-mr-sm"
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
          <div class="row q-pa-md flex-center">
            <q-btn
              size="8px"
              rounded
              color="black"
              label="Show more"
              class="text-white text-h7"
            ></q-btn>
          </div>
        </div>
      </div>
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
      ratingModel: ref(1),
      ratingModel1: ref(1),
      ratingModel2: ref(1),
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

.my-font
  font-size: 10px
</style>
