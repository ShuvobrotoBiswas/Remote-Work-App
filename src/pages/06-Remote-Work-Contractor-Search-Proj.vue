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
              src="~assets/Avator12.png"
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
      <div style="max-width: 1000px">
        <div class="q-pa-md">
          <div class="row">
            <div class="col-5">
              <q-card class="bg-grey-1">
                <p class="text-h6 q-pa-md">Filter by</p>
                <div class="q-pa-md bg-grey-1" style="max-width: 350px">
                  <q-list bordered class="rounded-borders">
                    <q-expansion-item
                      class="text"
                      dense
                      dense-toggle
                      expand-separator
                      label="Search/Select a Category"
                    >
                      <q-card class="bg-grey-2">
                        <q-card-section>
                          <q-input v-model="search" outlined type="search">
                            <template v-slot:append>
                              <q-icon name="search" />
                              <q-menu>
                                <q-list style="min-width: 250px">
                                  <q-item clickable v-close-popup>
                                    <q-item-section
                                      >Gill dobrica</q-item-section
                                    >
                                  </q-item>
                                  <q-item clickable v-close-popup>
                                    <q-item-section
                                      >Gian Doodle</q-item-section
                                    > </q-item
                                  ><q-item clickable v-close-popup>
                                    <q-item-section
                                      >Gironde Xavier</q-item-section
                                    > </q-item
                                  ><q-item clickable v-close-popup>
                                    <q-item-section
                                      >Gogu Radulescu</q-item-section
                                    >
                                  </q-item>
                                </q-list>
                              </q-menu>
                            </template>
                          </q-input>
                        </q-card-section>
                      </q-card>
                    </q-expansion-item>

                    <q-expansion-item
                      dense
                      dense-toggle
                      expand-separator
                      label="Payment"
                    >
                      <q-card class="bg-grey-2">
                        <q-card-section>
                          <div class="q-pa-md">
                            <div class="text-bold">
                              <q-checkbox
                                color="cyan"
                                v-model="checkbox1"
                                label=" Hourly"
                              ></q-checkbox>
                            </div>
                            <q-checkbox
                              color="cyan"
                              v-model="checkbox2"
                            ></q-checkbox>
                            <input
                              style="max-width: 80px; min-height: 50px"
                              class="q-mr-sm"
                              type="text"
                              maxlength="10"
                              v-model="pricelist1"
                            />
                            <input
                              style="max-width: 80px; min-height: 50px"
                              type="text"
                              maxlength="10"
                              v-model="pricelist2"
                            />
                          </div>
                          <div class="q-pa-md">
                            <q-checkbox
                              class="text-bold"
                              color="cyan"
                              v-model="checkbox3"
                              label="Fixed price"
                            ></q-checkbox>
                            <div class="row">
                              <q-checkbox
                                color="cyan"
                                v-model="checkbox4"
                                label="Less than €50"
                              ></q-checkbox>
                            </div>
                            <div class="row">
                              <q-checkbox
                                color="cyan"
                                v-model="checkbox5"
                                label="€50 - €500"
                              >
                              </q-checkbox>
                            </div>
                            <div class="row">
                              <q-checkbox
                                color="cyan"
                                v-model="checkbox6"
                                label="€50 - €500"
                              ></q-checkbox>
                            </div>
                            <div>
                              <q-checkbox
                                color="cyan"
                                v-model="checkbox7"
                              ></q-checkbox>
                              <input
                                style="max-width: 80px; min-height: 50px"
                                class="q-mr-sm"
                                type="text"
                                maxlength="10"
                                v-model="pricelist3"
                              />
                              <input
                                style="max-width: 80px; min-height: 50px"
                                type="text"
                                maxlength="10"
                                v-model="pricelist4"
                              />
                            </div>
                          </div>
                        </q-card-section>
                      </q-card>
                    </q-expansion-item>

                    <q-expansion-item
                      dense
                      dense-toggle
                      expand-separator
                      label="Project duration"
                    >
                      <q-card class="bg-grey-2">
                        <q-card-section>
                          <div class="row">
                            <q-checkbox
                              color="cyan"
                              v-model="checkbox8"
                              label="Max. 2 weeks"
                            ></q-checkbox>
                          </div>
                          <div class="row">
                            <q-checkbox
                              color="cyan"
                              v-model="checkbox9"
                              label="Max. 1 month"
                            ></q-checkbox>
                          </div>
                          <div class="row">
                            <q-checkbox
                              color="cyan"
                              v-model="checkbox10"
                              label="Max. 3 month"
                            ></q-checkbox>
                          </div>
                          <div class="row">
                            <q-checkbox
                              color="cyan"
                              v-model="checkbox11"
                              label="More than 3 month"
                            ></q-checkbox>
                          </div>
                        </q-card-section>
                      </q-card>
                    </q-expansion-item>
                    <q-expansion-item
                      dense
                      dense-toggle
                      expand-separator
                      label="Project  type"
                    >
                      <q-card class="bg-grey-2">
                        <q-card-section>
                          <div class="row">
                            <q-checkbox
                              color="cyan"
                              v-model="checkbox14"
                              label="Well Defined Project"
                            ></q-checkbox>
                          </div>
                          <div class="row">
                            <q-checkbox
                              color="cyan"
                              v-model="checkbox15"
                              label="On Going Work"
                            ></q-checkbox>
                          </div>
                          <div class="row">
                            <q-checkbox
                              color="cyan"
                              v-model="checkbox16"
                              label="Guranteed Prize Contest"
                            ></q-checkbox>
                          </div>
                          <div class="row">
                            <q-checkbox
                              color="cyan"
                              v-model="checkbox17"
                              label="Get an Information Quote"
                            ></q-checkbox>
                          </div>
                        </q-card-section>
                      </q-card>
                    </q-expansion-item>
                    <q-expansion-item
                      dense
                      dense-toggle
                      expand-separator
                      label="Availability in hours/week"
                    >
                      <q-card class="bg-grey-2">
                        <q-card-section>
                          <div class="row">
                            <q-checkbox
                              color="cyan"
                              v-model="checkbox19"
                              label="20 h/w"
                            ></q-checkbox>
                          </div>
                          <div class="row">
                            <q-checkbox
                              color="cyan"
                              v-model="checkbox20"
                              label="20 0 30 h/w"
                            ></q-checkbox>
                          </div>
                          <div class="row">
                            <q-checkbox
                              color="cyan"
                              v-model="checkbox21"
                              label="More than 30 h/w"
                            ></q-checkbox>
                          </div>
                        </q-card-section>
                      </q-card>
                    </q-expansion-item>

                    <q-expansion-item
                      dense
                      dense-toggle
                      expand-separator
                      label="Client location"
                    >
                      <q-card class="bg-grey-2">
                        <q-card-section>
                          <q-input v-model="search" outlined type="search">
                            <template v-slot:append>
                              <q-icon name="search" />
                              <q-menu>
                                <q-list style="min-width: 250px">
                                  <q-item clickable v-close-popup>
                                    <q-item-section
                                      >Gill dobrica</q-item-section
                                    >
                                  </q-item>
                                  <q-item clickable v-close-popup>
                                    <q-item-section
                                      >Gian Doodle</q-item-section
                                    > </q-item
                                  ><q-item clickable v-close-popup>
                                    <q-item-section
                                      >Gironde Xavier</q-item-section
                                    > </q-item
                                  ><q-item clickable v-close-popup>
                                    <q-item-section
                                      >Gogu Radulescu</q-item-section
                                    >
                                  </q-item>
                                </q-list>
                              </q-menu>
                            </template>
                          </q-input>
                        </q-card-section>
                      </q-card>
                    </q-expansion-item>
                    <q-expansion-item
                      dense
                      dense-toggle
                      expand-separator
                      label="Client rating"
                    >
                      <q-card class="bg-grey-2">
                        <q-card-section>
                          <q-checkbox
                            v-model="checkbox19"
                            checked-icon="star"
                            unchecked-icon="star_border"
                            indeterminate-icon="help"
                          />
                          <q-checkbox
                            v-model="checkbox20"
                            checked-icon="star"
                            unchecked-icon="star_border"
                            indeterminate-icon="help"
                          />
                          <q-checkbox
                            v-model="checkbox21"
                            checked-icon="star"
                            unchecked-icon="star_border"
                            indeterminate-icon="help"
                          />
                          <q-checkbox
                            v-model="checkbox22"
                            checked-icon="star"
                            unchecked-icon="star_border"
                            indeterminate-icon="help"
                          />
                          <q-checkbox
                            v-model="checkbox23"
                            checked-icon="star"
                            unchecked-icon="star_border"
                            indeterminate-icon="help"
                          />
                        </q-card-section>
                      </q-card>
                    </q-expansion-item>
                    <q-expansion-item
                      dense
                      dense-toggle
                      expand-separator
                      label="Free search in the job title"
                    >
                      <q-card class="bg-grey-2">
                        <q-card-section>
                          <q-input v-model="search" outlined type="search">
                            <template v-slot:append>
                              <q-icon name="search" />
                              <q-menu>
                                <q-list style="min-width: 250px">
                                  <q-item clickable v-close-popup>
                                    <q-item-section
                                      >Gill dobrica</q-item-section
                                    >
                                  </q-item>
                                  <q-item clickable v-close-popup>
                                    <q-item-section
                                      >Gian Doodle</q-item-section
                                    > </q-item
                                  ><q-item clickable v-close-popup>
                                    <q-item-section
                                      >Gironde Xavier</q-item-section
                                    > </q-item
                                  ><q-item clickable v-close-popup>
                                    <q-item-section
                                      >Gogu Radulescu</q-item-section
                                    >
                                  </q-item>
                                </q-list>
                              </q-menu>
                            </template>
                          </q-input>
                        </q-card-section>
                      </q-card>
                    </q-expansion-item>
                    <q-expansion-item
                      dense
                      dense-toggle
                      expand-separator
                      label="Search/Select skills"
                    >
                      <q-card class="bg-grey-2">
                        <q-card-section>
                          <q-input v-model="search" outlined type="search">
                            <template v-slot:append>
                              <q-icon name="search" />
                              <q-menu>
                                <q-list style="min-width: 250px">
                                  <q-item clickable v-close-popup>
                                    <q-item-section
                                      >Gill dobrica</q-item-section
                                    >
                                  </q-item>
                                  <q-item clickable v-close-popup>
                                    <q-item-section
                                      >Gian Doodle</q-item-section
                                    > </q-item
                                  ><q-item clickable v-close-popup>
                                    <q-item-section
                                      >Gironde Xavier</q-item-section
                                    > </q-item
                                  ><q-item clickable v-close-popup>
                                    <q-item-section
                                      >Gogu Radulescu</q-item-section
                                    >
                                  </q-item>
                                </q-list>
                              </q-menu>
                            </template>
                          </q-input>
                          <div>
                            <div class="q-py-md">
                              <q-btn
                                size="7px"
                                rounded
                                color="white"
                                class="text-black q-mr-sm text-h7"
                                >Illustrator ✠</q-btn
                              >
                              <q-btn
                                size="7px"
                                rounded
                                color="white"
                                class="text-black q-mr-sm text-h7"
                              >
                                Adobe XD ✠</q-btn
                              >
                              <q-btn
                                size="7px"
                                rounded
                                color="white"
                                class="text-black q-mr-sm text-h7"
                              >
                                Photoshop ✠</q-btn
                              >
                            </div>
                          </div>
                        </q-card-section>
                      </q-card>
                    </q-expansion-item>
                  </q-list>
                </div>
              </q-card>
            </div>

            <div class="col-7">
              <q-card-section>
                <div class="text-h6 text-left">Search</div>
                <div class="text-h6 q-py-md text-center">
                  <q-input
                    v-model="search"
                    outlined
                    style="width: 400px"
                    type="search"
                  >
                    <template v-slot:append>
                      <q-icon name="search" />
                      <q-menu>
                        <q-list style="min-width: 250px">
                          <q-item clickable v-close-popup>
                            <q-item-section>{{}} </q-item-section>
                          </q-item>
                          <q-option-group
                            :options="options"
                            type="checkbox"
                            v-model="group"
                          />
                        </q-list>
                      </q-menu>
                    </template>
                  </q-input>
                  <div class="q-py-md" style="width: 400px">
                    <q-btn
                      size="7px"
                      rounded
                      color="light-blue-3"
                      class="text-white q-mr-sm text-h7"
                      >Branding & Logo Design ✠</q-btn
                    >
                    <q-btn
                      size="7px"
                      rounded
                      color="light-blue-3"
                      class="text-white q-mr-sm text-h7"
                    >
                      Fixed price-Hourly €15-55 ✠</q-btn
                    >
                    <q-btn
                      size="7px"
                      rounded
                      color="light-blue-3"
                      class="text-white q-mr-sm text-h7"
                    >
                      Fixed price €50 ✠</q-btn
                    >
                    <q-btn
                      size="7px"
                      rounded
                      color="light-blue-3"
                      class="text-white q-mr-sm text-h7"
                    >
                      Fixed price Min. €15-Max. €2000 ✠</q-btn
                    >
                    <q-btn
                      size="7px"
                      rounded
                      color="light-blue-3"
                      class="text-white q-mr-sm text-h7"
                    >
                      Max. 2 weeks ✠</q-btn
                    >
                    <q-btn
                      size="7px"
                      rounded
                      color="light-blue-3"
                      class="text-white q-mr-sm text-h7"
                    >
                      Fixed price ✠</q-btn
                    >
                    <q-btn
                      size="7px"
                      rounded
                      color="light-blue-3"
                      class="text-white q-mr-sm text-h7"
                    >
                      20 h/w ✠</q-btn
                    >
                    <q-btn
                      size="7px"
                      rounded
                      color="light-blue-3"
                      class="text-white q-mr-sm text-h7"
                    >
                      Algeria ✠</q-btn
                    >
                    <q-btn
                      size="7px"
                      rounded
                      color="light-blue-3"
                      class="text-white q-mr-sm text-h7"
                    >
                      Illustrator ✠</q-btn
                    >
                    <q-btn
                      size="7px"
                      rounded
                      color="light-blue-3"
                      class="text-white q-mr-sm text-h7"
                    >
                      Adobe XD ✠</q-btn
                    >
                    <q-btn
                      size="7px"
                      rounded
                      color="light-blue-3"
                      style="text-bg-white"
                      class="text-white q-mr-sm text-h7"
                      >Photoshop ✠</q-btn
                    >
                  </div>
                </div>
                <div class="row">
                  <div class="col-">24 Project found</div>
                  <div class="col"></div>
                  <div class="col-">
                    <q-expansion-item
                      dense
                      dense-toggle
                      expand-separator
                      label="Sort by"
                    >
                      <q-card class="bg-grey-2">
                        <q-card-section>
                          <div class="row">relevence</div>
                          <div class="row">Newest</div>
                          <div class="row">Other</div>
                          <div class="row">Etc.</div>
                        </q-card-section>
                      </q-card>
                    </q-expansion-item>
                  </div>
                </div>
                <q-separator />
              </q-card-section>
            </div>
          </div>

          <q-separator />
        </div>
      </div>
    </div>
    <!-- Card 3 div -->

    <!-- Footer Div -->
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
      onItemClick() {
        // console.log('Clicked on an Item')
      },
      description: ref(),
      pricelist1: ref("15|"),
      pricelist2: ref("55|"),
      pricelist3: ref("15|"),
      pricelist4: ref("2000|"),
      checkbox1: ref(true),
      checkbox2: ref(true),
      checkbox3: ref(true),
      checkbox4: ref(true),
      checkbox5: ref(true),
      checkbox6: ref(true),
      checkbox7: ref(true),
      checkbox8: ref(true),
      checkbox9: ref(true),
      checkbox10: ref(true),
      checkbox11: ref(true),
      checkbox12: ref(true),
      checkbox13: ref(true),
      checkbox14: ref(true),
      checkbox15: ref(true),
      checkbox16: ref(true),
      checkbox17: ref(true),
      checkbox18: ref(true),
      checkbox19: ref(true),
      checkbox20: ref(false),
      checkbox21: ref(false),
      checkbox22: ref(false),
      checkbox23: ref(false),
      checkbox24: ref(true),
      checkbox25: ref(true),
      checkbox26: ref(true),
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
