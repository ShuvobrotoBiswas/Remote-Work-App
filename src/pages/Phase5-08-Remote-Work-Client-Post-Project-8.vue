<template>
  <div>
    <!-- Body Div  From Sub-Header Component-->
    <SubHeader />
    <!-- Card 1 Div -->
    <div class="row flex-center items-start">
      <div style="max-width: 750px">
          <div class="row">
            <div>
              <q-card-section>
                <div class="text-h5 text-bold q-py-md text-left">
                  Application to project
                </div>
                <q-separator />
                <div class="row text-7 q-py-md text-left">
                  {{ lorem }}
                </div>
                <div class="row q-py-md">
                  <div class="col-4">
                    <div class="text-h7 text-bold">
                      Type the requested Price*
                    </div>
                    <fieldset
                      style="
                        border-radius: 7px;
                        max-width: 200px;
                        max-height: 70px;
                      "
                    >
                      <legend>Requested Price</legend>
                      <q-input borderless v-model="price"/>
                    </fieldset>
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
                            <div class="row">Max. 7 Days</div>
                            <div class="row">Max. 15 Days</div>
                            <div class="row">Max. 30 Days</div>
                          </q-card-section>
                        </q-card>
                      </q-expansion-item>
                    </div>
                  </div>
                </div>
                <q-separator />
                <div class="row">
                   <div class="col-6">
                    <div class="text-h7 text-bold">Choose preferred type of contractor*</div>
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
                <q-separator />
                <!-- Footer Div -->
                <div class="row q-pa-md my-font">
                      <p>* Fields marked with "*" are mandatory.</p>
                    </div>

                <div class="row flex-center">
                  <div>
                    <q-btn
                      size="8px"
                      rounded
                      color="grey"
                      label="Back to Search"
                      class="text-white text-h7"
                    ></q-btn>
                  </div>

                  <div>
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
      group1: ref("my-val-1"),

      options1: [
        {
          label: "Less than 1 hour/Day",
          value: "my-val-2",
        },
        {
          label: "2 hours/Day",
          value: "my-val-1",
        },
        {
          label: "4 hour/Day",
          value: "my-val-3",
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

.my-font
  font-size: 10px
</style>
