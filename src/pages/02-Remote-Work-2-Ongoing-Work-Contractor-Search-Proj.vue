<template>
  <div>
    <!-- Body Div  From Sub-Header Component-->
    <SubHeader />
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
                                      >Desktop Software Development</q-item-section
                                    >
                                  </q-item>
                                  <q-item clickable v-close-popup>
                                    <q-item-section
                                      >Mobile Design</q-item-section
                                    > </q-item
                                  ><q-item clickable v-close-popup>
                                    <q-item-section
                                      >Web Design</q-item-section
                                    > </q-item
                                  >
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
                      label="Payment"
                    >
                      <q-card class="bg-grey-2">
                        <q-card-section>
                          <div class="q-pa-md">
                            <div class="text-bold">
                              <q-checkbox
                                color="cyan"
                                v-model="checkbox1"
                                label=" Weekly"
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
                                      >Albania</q-item-section
                                    >
                                  </q-item>
                                  <q-item clickable v-close-popup>
                                    <q-item-section
                                      >Algeria</q-item-section
                                    > </q-item
                                  ><q-item clickable v-close-popup>
                                    <q-item-section
                                      >Argentina</q-item-section
                                    > </q-item
                                  >
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
                          <q-rating
                            v-model="ratingModel"
                            size="2em"
                            :max="5"
                            color="cyan"
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
                                      >Programming Apps</q-item-section
                                    >
                                  </q-item>
                                  <q-item clickable v-close-popup>
                                    <q-item-section
                                      >Programmer PHP</q-item-section
                                    > </q-item
                                  ><q-item clickable v-close-popup>
                                    <q-item-section
                                      >Programmer JAVA</q-item-section
                                    > </q-item
                                  >
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
                                      >Java</q-item-section
                                    >
                                  </q-item>
                                  <q-item clickable v-close-popup>
                                    <q-item-section
                                      >PHP</q-item-section
                                    > </q-item
                                  ><q-item clickable v-close-popup>
                                    <q-item-section
                                      >Python</q-item-section
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
                                outline
                                color="white"
                                class="text-black q-mr-sm text-h7"
                                >Java ✠</q-btn
                              >
                              <q-btn
                                size="7px"
                                rounded
                                outline
                                color="white"
                                class="text-black q-mr-sm text-h7"
                              >
                                Python ✠</q-btn
                              >
                              <q-btn
                                size="7px"
                                rounded
                                outline
                                color="white"
                                class="text-black q-mr-sm text-h7"
                              >
                                PHP ✠</q-btn
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
                <q-separator color="light-blue-3" style="max-width: 1000px" />
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
                  <div class="q-py-md" style="max-width: 400px">
                    <q-btn
                      size="7px"
                      rounded
                      color="light-blue-3"
                      class="text-white q-mr-sm text-h7"
                      >Programmer PHP ✠</q-btn
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
                      Fixed price Min. €15-Max. €2000 ✠</q-btn
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
                      PHP ✠</q-btn
                    >
                    <q-btn
                      size="7px"
                      rounded
                      color="light-blue-3"
                      class="text-white q-mr-sm text-h7"
                    >
                      Java ✠</q-btn
                    >
                    <q-btn
                      size="7px"
                      rounded
                      color="light-blue-3"
                      style="text-bg-white"
                      class="text-white q-mr-sm text-h7"
                      >Python ✠</q-btn
                    >
                  </div>
                </div>
                <div class="row" style="width: 400px">
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
                <q-separator color="light-blue-3" />
                <div class="row" style="max-width: 500px">
                  <div class="row">
                    <p class="text-bold text-h7">Job name (Programmer PHP)</p>
                    <p class="my-font">
                      Fixed price | Budget: €500 | 2 weeks | Algeria 1 hr.ago
                    </p>
                    <p class="text-h7">
                      {{ lorem }}
                    </p>
                  </div>
                  <div class="q-py-md">
                    <q-btn
                      size="7px"
                      rounded
                      outline
                      color="white"
                      class="text-black q-mr-sm text-h7"
                      >PHP ✠</q-btn
                    >
                    <q-btn
                      size="7px"
                      rounded
                      outline
                      color="white"
                      class="text-black q-mr-sm text-h7"
                    >
                      JavaScript ✠</q-btn
                    >
                    <q-btn
                      size="7px"
                      rounded
                      outline
                      color="white"
                      class="text-black q-mr-sm text-h7"
                      >Other programmes ✠</q-btn
                    >
                  </div>
                  <div class="row" style="width: 500px">
                    <div class="col-8"></div>
                    <div class="col-4">
                      <q-btn
                        size="7px"
                        rounded
                        color="cyan"
                        class="text-black q-ml-md"
                        label="Read more"
                      >
                      </q-btn>
                    </div>
                  </div>
                </div>
                <q-separator color="light-blue-3" />
                <div class="row" style="max-width: 500px">
                  <div class="row">
                    <p class="text-bold q-my-none text-h7">
                      Programmer Java-Lorem ipsum dolor sit amet
                    </p>
                  </div>
                  <div class="row">
                    <p class="my-font">
                      Fixed price | Budget: €49 | 2 weeks | Algeria 1 hr.ago
                    </p>
                    <p class="text-h7">
                      {{ lorem }}
                    </p>
                  </div>

                  <div class="q-py-md">
                    <q-btn
                      size="7px"
                      rounded
                      outline
                      color="white"
                      class="text-black q-mr-sm text-h7"
                      >Java ✠</q-btn
                    >
                    <q-btn
                      size="7px"
                      rounded
                      outline
                      color="white"
                      class="text-black q-mr-sm text-h7"
                    >
                      Other ✠</q-btn
                    >
                    <q-btn
                      size="7px"
                      rounded
                      outline
                      color="white"
                      class="text-black q-mr-sm text-h7"
                      >Other ✠</q-btn
                    >
                  </div>
                  <div class="row" style="width: 500px">
                    <div class="col-8"></div>
                    <div class="col-4">
                      <q-btn
                        size="7px"
                        rounded
                        color="cyan"
                        class="text-black q-ml-md"
                        label="Read more"
                      >
                      </q-btn>
                    </div>
                  </div>
                </div>
                <q-separator color="light-blue-3" />
                <div class="row" style="max-width: 500px">
                  <div class="row">
                    <p class="text-bold q-my-none text-h7">
                      Programmer Java-Lorem ipsum dolor sit amet
                    </p>
                    <br />
                  </div>
                  <div class="row">
                    <p class="my-font">
                      Fixed price | Budget: €500 | 2 weeks | Algeria 1 hr.ago
                    </p>
                    <p class="text-h7">
                      {{ lorem }}
                    </p>
                  </div>
                  <div class="row">
                    <q-btn
                      size="7px"
                      rounded
                      outline
                      color="white"
                      class="text-black q-mr-sm text-h7"
                      >Java ✠</q-btn
                    >
                    <q-btn
                      size="7px"
                      rounded
                      outline
                      color="white"
                      class="text-black q-mr-sm text-h7"
                    >
                      Other ✠</q-btn
                    >
                    <q-btn
                      size="7px"
                      rounded
                      outline
                      color="white"
                      class="text-black q-mr-sm text-h7"
                      >Other ✠</q-btn
                    >
                  </div>
                  <div class="row" style="width: 500px">
                    <div class="col-8"></div>
                    <div class="col-4">
                      <q-btn
                        size="7px"
                        rounded
                        color="cyan"
                        class="text-black q-ml-md"
                        label="Read more"
                      >
                      </q-btn>
                    </div>
                  </div>
                </div>
                <q-separator color="light-blue-3" />
                <!-- Footer Div -->

                <div class="row flex-center q-pa-md">
                  <q-btn
                    size="8px"
                    rounded
                    color="grey"
                    label="First"
                    class="text-white text-h7"
                  ></q-btn>
                  <q-btn
                    size="6px"
                    flat
                    padding="6px"
                    icon="arrow_back_ios_new"
                    color="grey"
                    class="text-white text-h7"
                  ></q-btn>
                  <q-btn
                    size="6px"
                    padding="6px"
                    unelevated
                    color="cyan"
                    label="1"
                    class="text-white text-h7 q-mr-sm"
                  ></q-btn>
                  <q-btn
                    size="6px"
                    padding="6px"
                    outline
                    color="grey"
                    label="2"
                    class="text-white text-bold text-h7 q-mr-sm"
                  ></q-btn>
                  <q-btn
                    size="6px"
                    padding="6px"
                    outline
                    color="grey"
                    label="3"
                    class="text-white text-bold text-h7 q-mr-sm"
                  ></q-btn>
                  <q-btn
                    size="6px"
                    padding="6px"
                    outline
                    color="grey"
                    label="4"
                    class="text-white text-bold text-h7 q-mr-sm"
                  ></q-btn>
                  <q-btn
                    size="6px"
                    padding="6px"
                    outline
                    color="grey"
                    label="5"
                    class="text-white text-bold text-h7"
                  ></q-btn>
                  <q-btn
                    size="6px"
                    icon="arrow_forward_ios"
                    flat
                    padding="6px"
                    color="cyan"
                    class="text-white text-h7"
                  ></q-btn>
                  <q-btn
                    size="8px"
                    rounded
                    color="cyan"
                    outlined
                    label="Last"
                    class="text-h7"
                  ></q-btn>
                </div>
              </q-card-section>
            </div>
          </div>

          <q-separator />
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
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
      text: " We have a logo that is about 13 years old and we are looking to update/change our branding, we need a logo that is more up to date and we want to keep the versatillity. We want to go bold/innovative with this change. Previous logo is attached for reference",
      ratingModel: ref(1),
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
