<template>
  <div class="row q-pa-md flex-center">
    <q-card bordered class="this-card" style="max-width: 1100px">
      <!-- Card 1 Div -->

      <div class="row flex-center items-start">
        <div flat bordered class="my-card" style="max-width: 1100px">
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
              <div class="col-12">
                Search result: 3 contractors found
                <q-checkbox v-model="checkbox2" color="black"
                  >Select all
                </q-checkbox>
              </div>
              <div class="q-pa-md" style="max-width: 1100px">
                <div class="row">
                  <div class="row" style="width: 300px">
                    <div style="max-width: 80px; max-height: 80px">
                      <q-img
                        class="justify-around"
                        style="width: 60px; height: 60px"
                        src="~assets/Avator18.png"
                      ></q-img>
                    </div>
                    <div
                      class="col-5 text-7 col-sm-7"
                      style="max-width: 140px; max-height: 80px"
                    >
                      <strong> Gill Dobrica</strong> <br />
                      Senior Backend Developer
                    </div>
                    <div class="col">
                      <q-checkbox
                        v-model="checkbox2"
                        color="black"
                      ></q-checkbox>
                    </div>
                  </div>
                  <div class="row" style="width: 300px">
                    <div class="" style="max-width: 80px; max-height: 80px">
                      <q-img
                        class="justify-around"
                        style="width: 60px; height: 60px"
                        src="~assets/Avator10.png"
                      ></q-img>
                    </div>
                    <div
                      class="col-5 text-7 col-sm-7"
                      style="max-width: 140px; max-height: 80px"
                    >
                      <strong> Viorica Dancila</strong> <br />
                      Middle Backend Developer
                    </div>
                    <div class="col">
                      <q-checkbox
                        v-model="checkbox2"
                        color="black"
                      ></q-checkbox>
                    </div>
                  </div>
                  <div class="row" style="width: 300px">
                    <div class="" style="max-width: 80px; max-height: 80px">
                      <q-img
                        class="justify-around"
                        style="width: 60px; height: 60px"
                        src="~assets/Avator18.png"
                      ></q-img>
                    </div>
                    <div
                      class="col-5 text-7 col-sm-7"
                      style="max-width: 140px; max-height: 80px"
                    >
                      <strong> Gabriel Cotabita</strong> <br />
                      Java Developer
                    </div>
                    <div class="col">
                      <q-checkbox
                        v-model="checkbox2"
                        color="black"
                      ></q-checkbox>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row flex-center">
          <div class="q-pa-md">
            <q-btn
              size="15px"
              style="width: 180px"
              rounded
              color="black"
              to="/Create-Contractor-Profile"
              icon="cancel"
              label="Cancel"
              class="text-white text-h7"
            ></q-btn>
          </div>
          <div>
            <q-btn
              size="15px"
              rounded
              to="/Create-Contractor-Profile"
              style="width: 180px"
              color="black"
              icon="check_circle"
              label="Done"
              class="text-white text-h7"
            ></q-btn>
          </div>
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
      search: ref(""),
      model: ref(null),
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
  // margin-top: 1rem

.this-card
  // background: rgba(255,0,0,.1)
  border-radius: 30px
</style>
