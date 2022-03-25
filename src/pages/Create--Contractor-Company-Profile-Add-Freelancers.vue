<template>
  <div class="row q-pa-md flex-center">
    <q-card bordered style="width: 1000px; height: 600px">
      <!-- Card 1 Div -->

      <div class="row flex-center items-start">
        <div flat bordered class="my-card" style="max-width: 1000px">
          <q-card-section>
            <div class="text-h6 text-bold">Add freelancer accounts</div>
          </q-card-section>
          <q-separator />
          <div class="q-pa-md">
            <div class="row">
              <div class="col-7">
                <div class="text-bold q-py-md">Search by name</div>
                <q-input v-model="search" outlined type="search">
                  <template v-slot:append>
                    <q-icon name="search" />
                    <q-menu>
                      <q-list style="min-width: 250px">
                        <q-item clickable v-close-popup>
                          <q-item-section>Gill dobrica</q-item-section>
                        </q-item>
                        <q-item clickable v-close-popup>
                          <q-item-section>Gian Doodle</q-item-section> </q-item
                        ><q-item clickable v-close-popup>
                          <q-item-section
                            >Gironde Xavier</q-item-section
                          > </q-item
                        ><q-item clickable v-close-popup>
                          <q-item-section>Gogu Radulescu</q-item-section>
                        </q-item>
                      </q-list>
                    </q-menu>
                  </template>
                </q-input>
              </div>
              <div class="q-pa-md" style="max-width: 950px">
                <div class="row">
                  <div class="col-sm-15">
                    <p>
                      Search result: 3 contractors found
                      <q-checkbox v-model="checkbox2">Select all </q-checkbox>
                    </p>

                    <div class="row">
                      <div
                        class="col-5 text-h7 col-sm-3"
                        style="max-width: 60px; max-height: 80px"
                      >
                        <q-avator>
                          <q-img src="~assets/Avator13.png"></q-img>
                        </q-avator>
                      </div>
                      <div
                        class="col-5 text-h7 col-sm-7"
                        style="max-width: 140px; max-height: 80px"
                      >
                        <strong>Gil Dobrica</strong>
                        <div>Senior Backend Developer</div>
                        <q-checkbox v-model="checkbox2"></q-checkbox>
                      </div>
                      <div
                        class="col-5 text-h7 col-sm-7"
                        style="max-width: 60px; max-height: 80px"
                      >
                        <q-avator>
                          <q-img src="~assets/Avator13.png"></q-img>
                        </q-avator>
                      </div>
                      <div
                        class="col-5 text-h7 col-sm-7"
                        style="max-width: 140px; max-height: 80px"
                      >
                        <strong>Gil Dobrica</strong>
                        <div>Senior Backend Developer</div>
                        <q-checkbox v-model="checkbox2"></q-checkbox>
                      </div>
                      <div
                        class="col-5 text-h7 col-sm-7"
                        style="max-width: 60px; max-height: 80px"
                      >
                        <q-avator>
                          <q-img src="~assets/Avator13.png"></q-img>
                        </q-avator>
                      </div>
                      <div
                        class="col-5 text-h7 col-sm-7"
                        style="max-width: 140px; max-height: 80px"
                      >
                        <strong>Gil Dobrica</strong>
                        <div>Senior Backend Developer</div>
                        <q-checkbox v-model="checkbox2"></q-checkbox>
                      </div>

                      <div
                        class="col-5 text-h7 col-sm-7"
                        style="max-width: 90px; max-height: 80px"
                      ></div>
                      <div
                        class="col-5 text-h7 col-sm-7"
                        style="max-width: 90px; max-height: 80px"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row q-pa-md">
          <q-btn
            size="10px"
            rounded
            color="black"
            icon="close"
            label="Cancel"
            class="text-white text-h7"
          ></q-btn>
        </div>
        <div >
          <q-btn
            size="10px"
            rounded
            color="black"
            icon="done"
            label="Done"
            class="text-white text-h7"
          ></q-btn>
        </div>
      </div>
    </q-card>
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
      completeName: ref(""),
      search: ref(""),
      tel: ref(""),
      billingAddress: "",
      address: "",
      model: ref(null),
      group: ref([]),
      options: [
        { label: "Adobe Illustrator" },
        { label: "Adobe Photoshop" },
        { label: "Adobe XD" },
      ],
      group1: ref([]),
      options1: [{ label: "Branding & Logo Design" }, { label: "Web Design" }],
      description: ref(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      ),
      pricelist1: ref("15|"),
      pricelist2: ref("55|"),
      checkbox2: ref(true),
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
  border: 1px solid rgba(86,61,124,.2)
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

.description
</style>
