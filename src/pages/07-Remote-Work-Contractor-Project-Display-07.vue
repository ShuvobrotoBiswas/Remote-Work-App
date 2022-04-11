<template>
  <div>
    <!-- Body Div  From Sub-Header Component-->
    <SubHeader />
    <!-- Card 1 Div -->
    <div class="row flex-center items-start">
      <div style="max-width: 750px">
        <div class="q-pa-md">
          <div class="row">
            <div>
              <q-card-section>
                <div class="text-h5 text-bold q-py-md text-left">
                  Logo design for Insurance Agency
                </div>
                <q-separator />
                <div class="my-font row text-left">Posted 1 hr ago</div>
                <div class="row text-7 q-py-md text-left">
                  {{ text }}
                </div>
                <q-separator />
                <div class="row q-py-md">
                  <div class="col">
                    <div class="text-h7 text-bold">Category job Project</div>
                    <div class="text-h7">Branding & logo Design</div>
                  </div>
                  <div class="col">
                    <div class="text-h7 text-bold">Project type</div>
                    <div class="text-h7">Well Defined Project</div>
                  </div>
                  <div class="col">
                    <div class="text-h7 text-bold">Payment</div>
                    <div class="text-h7">Fixed price - €500</div>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <div class="text-h7 text-bold">Duration</div>
                    <div class="text-h7">Max. 2 weeks</div>
                  </div>
                  <div class="col">
                    <div class="text-h7 text-bold">Availability in hours</div>
                    <div class="text-h7">20 h/week</div>
                  </div>
                  <div class="col">
                    <div class="text-h7 text-bold">Level of expertise</div>
                    <div class="text-h7">Middle</div>
                  </div>
                </div>
                <div class="row q-py-md">
                  <div class="col">
                    <div class="text-h7 text-bold">Required skills</div>
                    <div class="text-h7">Design</div>
                  </div>
                </div>
                <div class="q-pa-md">
                  <q-btn
                    size="7px"
                    rounded
                    outline
                    class="text-black q-mr-sm text-h7"
                    >Graphic Design</q-btn
                  >
                  <q-btn
                    size="7px"
                    rounded
                    outline
                    class="text-black q-mr-sm text-h7"
                    >Logo Design</q-btn
                  >
                  <q-btn
                    size="7px"
                    rounded
                    outline
                    class="text-black q-mr-sm text-h7"
                    >Branding & Logo Design</q-btn
                  >
                  <q-btn
                    size="7px"
                    rounded
                    outline
                    class="text-black q-mr-sm text-h7"
                    >Illustrator</q-btn
                  >
                  <q-btn
                    size="7px"
                    rounded
                    outline
                    class="text-black q-mr-sm text-h7"
                  >
                    Photoshop</q-btn
                  >
                </div>

                <q-separator />

                <div class="row q-py-md">
                  <div class="col">
                    <div class="text-h7 text-bold">Client rating</div>
                    <div class="text-h7">
                      <q-rating
                        v-model="ratingModel"
                        size="15px"
                        :max="5"
                        color="black"
                      />
                    </div>
                  </div>
                  <div class="col">
                    <div class="text-h7 text-bold">Client Location</div>
                    <div class="text-h7">Argentina</div>
                  </div>
                  <div class="col">
                    <div class="text-h7 text-bold"></div>
                    <div class="text-h7"></div>
                  </div>
                </div>
                <!-- Footer Div -->

                <div class="row flex-center">
                  <div class="col">
                    <q-btn
                      size="8px"
                      rounded
                      color="grey"
                      label="Back to Search"
                      class="text-white text-h7"
                    ></q-btn>
                  </div>

                  <div class="col-5">
                    <q-btn
                      size="8px"
                      rounded
                      color="black"
                      label="Request additional information"
                      class="text-white text-h7"
                    ></q-btn>
                  </div>
                  <div class="col-3">
                    <q-btn
                      size="8px"
                      rounded
                      color="black"
                      label="Apply to project"
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
import SubHeader from "components/Sub-Header.vue";
import { ref } from "vue";
export default defineComponent({
  components: { SubHeader },
  // name: "IndexPage",
  setup() {
    return {
      text: " We have a logo that is about 13 years old and we are looking to update/change our branding, we need a logo that is more up to date and we want to keep the versatillity. We want to go bold/innovative with this change. Previous logo is attached for reference",
      ratingModel: ref(2),
    };
  },
});
</script>
<style lang="sass" scoped>
.row > div
  padding: 10px 15px
  // background: rgba(86,61,124,.15)
  // border: 1px solid rgba(86,61,124,.2)
.row + .row
  margin-top: 1rem

.my-font
  font-size: 10px
</style>
