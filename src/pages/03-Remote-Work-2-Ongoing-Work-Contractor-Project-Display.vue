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
                  Job name (programmer PHP)
                </div>
                <q-separator />
                <div class="my-font row text-left">Posted 1 hr ago</div>
                <div class="row text-7 q-py-md text-left">
                  {{ text }}
                </div>
                <q-separator />
                <div class="row q-py-md">
                  <div class="col">
                    <div class="text-h7 text-bold">Experience level</div>
                    <div class="text-h7">Middle</div>
                  </div>
                  <div class="col">
                    <div class="text-h7 text-bold">Project type</div>
                    <div class="text-h7">On Going Project</div>
                  </div>
                  <div class="col">
                    <div class="text-h7 text-bold">Payment weekly</div>
                    <div class="text-h7">€500</div>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <div class="text-h7 text-bold">Hiring</div>
                    <div class="text-h7">More than one person</div>
                  </div>
                  <div class="col">
                    <div class="text-h7 text-bold">Education level</div>
                    <div class="text-h7">College</div>
                  </div>
                  <div class="col">
                    <div class="text-h7 text-bold">
                      Language of communication
                    </div>
                    <div class="text-h7">French</div>
                  </div>
                </div>
                <div class="row q-py-md">
                  <div class="col">
                    <div class="text-h7 text-bold">Required skills</div>
                    <q-btn
                      size="7px"
                      rounded
                      outline
                      class="text-black q-mr-sm text-h7"
                      >PHP</q-btn
                    >
                    <q-btn
                      size="7px"
                      rounded
                      outline
                      class="text-black q-mr-sm text-h7"
                      >Java</q-btn
                    >
                  </div>
                  <div class="col"></div>
                  <div class="col"></div>
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
                    <q-btn
                      size="8px"
                      rounded
                      color="black"
                      style="width:100px"
                      label="Cancel"
                      class="text-white text-left text-h7 q-mr-sm"
                    ></q-btn>
                    <q-btn
                      size="8px"
                      rounded
                      color="black"
                      label="Apply to project"
                      class="text-white text-h7 q-mr-sm"
                    ></q-btn>


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
