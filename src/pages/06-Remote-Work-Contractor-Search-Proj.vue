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
        <q-form @submit.prevent="postSearch">
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
                            <div class="q-pa-md text-bold">
                              <q-checkbox
                                color="cyan"
                                val="Hourly"
                                v-model="price_type"
                                label="Hourly"
                              ></q-checkbox>
                              <!-- <q-checkbox
                              color="cyan"
                              v-model="checkbox2"
                            ></q-checkbox> -->
                              <input
                                style="max-width: 80px; min-height: 50px"
                                class="q-mr-sm"
                                type="number"
                                maxlength="10"
                                v-model="hourly_min_rate"
                              />
                              <input
                                style="max-width: 80px; min-height: 50px"
                                type="number"
                                maxlength="10"
                                v-model="hourly_max_rate"
                              />
                              <q-checkbox
                                class="text-bold"
                                color="cyan"
                                val="Fixed"
                                v-model="price_type"
                                label="Fixed price"
                              ></q-checkbox>
                              <div class="row">
                                <q-checkbox
                                  color="cyan"
                                  val="50"
                                  v-model="maximum_rate"
                                  label="Less than €50"
                                ></q-checkbox>
                                <q-checkbox
                                  color="cyan"
                                  val="500"
                                  v-model="maximum_rate"
                                  label="€50 - €500"
                                >
                                </q-checkbox>
                                <q-checkbox
                                  val="1000"
                                  color="cyan"
                                  v-model="maximum_rate"
                                  label="€500 - €1000"
                                ></q-checkbox>
                                <q-checkbox
                                  color="cyan"
                                  val="maximum_rate"
                                  v-model="maximum_rate"
                                ></q-checkbox>
                                <input
                                  style="max-width: 80px; min-height: 50px"
                                  class="q-mr-sm"
                                  type="number"
                                  maxlength="10"
                                  v-model="fixed_min_rate"
                                />
                                <input
                                  style="max-width: 80px; min-height: 50px"
                                  type="number"
                                  maxlength="10"
                                  v-model="fixed_max_rate"
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
                            <q-checkbox
                              color="cyan"
                              val="2"
                              v-model="project_duration"
                              label="Max. 2 weeks"
                            ></q-checkbox>
                            <q-checkbox
                              color="cyan"
                              val="4"
                              v-model="project_duration"
                              label="Max. 1 month"
                            ></q-checkbox>
                            <q-checkbox
                              color="cyan"
                              val="12"
                              v-model="project_duration"
                              label="Max. 3 month"
                            ></q-checkbox>
                            <q-checkbox
                              color="cyan"
                              val="48"
                              v-model="project_duration"
                              label="More than 3 month"
                            ></q-checkbox>
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
                                val="Well Defined Project"
                                v-model="project_type"
                                label="Well Defined Project"
                              ></q-checkbox>
                            </div>
                            <div class="row">
                              <q-checkbox
                                color="cyan"
                                val="On Going Work"
                                v-model="project_type"
                                label="On Going Work"
                              ></q-checkbox>
                            </div>
                            <div class="row">
                              <q-checkbox
                                color="cyan"
                                val="Guranteed Prize Contest"
                                v-model="project_type"
                                label="Guranteed Prize Contest"
                              ></q-checkbox>
                            </div>
                            <div class="row">
                              <q-checkbox
                                color="cyan"
                                val="Get an Information Quote"
                                v-model="project_type"
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
                                val="20"
                                v-model="contractor_availability"
                                label="20 h/w"
                              ></q-checkbox>
                            </div>
                            <div class="row">
                              <q-checkbox
                                color="cyan"
                                val="20/30"
                                v-model="contractor_availability"
                                label="20 / 30 h/w"
                              ></q-checkbox>
                            </div>
                            <div class="row">
                              <q-checkbox
                                color="cyan"
                                val="30"
                                v-model="contractor_availability"
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
                            <q-rating
                              v-model="client_rating"
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
                  <q-separator color="light-blue-3" />
                  <div class="text-h6 q-py-md text-center">
                    <q-input
                      v-model="search"
                      outlined
                      style="width: 400px"
                      type="search"
                    >
                      <q-btn round size="15px" flat type="submit" icon="search"></q-btn>
                      <!-- <template v-slot:append>
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
                      </template> -->
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
                      <p class="text-bold text-h7">
                        Logo Design for Insurance Agency
                      </p>
                      <p class="my-font">
                        Fixed price | Budget: €500 | 2 weeks | Algeria 1 hr.ago
                      </p>
                      <p class="text-h7">
                        {{ text }}
                      </p>
                    </div>
                    <div class="row">
                      <q-btn
                        size="7px"
                        rounded
                        color="white"
                        class="text-black q-mr-sm text-h7"
                        >Graphics Design ✠</q-btn
                      >
                      <q-btn
                        size="7px"
                        rounded
                        color="white"
                        class="text-black q-mr-sm text-h7"
                      >
                        Logo Design ✠</q-btn
                      >
                      <q-btn
                        size="7px"
                        rounded
                        color="white"
                        class="text-black q-mr-sm text-h7"
                        >Branding & Logo Design ✠</q-btn
                      >
                      <q-btn
                        size="7px"
                        rounded
                        color="white"
                        class="text-black q-mr-sm text-h7"
                      >
                        Illustrator ✠</q-btn
                      >
                    </div>
                    <div class="row" style="width: 500px">
                      <div class="col-8"></div>
                      <div class="col-4">
                        <q-btn
                          size="7px"
                          rounded
                          to="07-REMOTE-WORK-FREELANCER-PROJECT-DISPLAY"
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
                      <p class="text-bold q-my-none text-h7">Logo Designer</p>
                    </div>
                    <div class="row">
                      <p class="my-font">
                        Fixed price | Budget: €49 | 2 weeks | Algeria 1 hr.ago
                      </p>
                      <p class="text-h7">
                        {{ lorem }}
                      </p>
                    </div>

                    <div class="row">
                      <q-btn
                        size="7px"
                        rounded
                        color="white"
                        class="text-black q-mr-sm text-h7"
                        >Graphics Design ✠</q-btn
                      >
                      <q-btn
                        size="7px"
                        rounded
                        color="white"
                        class="text-black q-mr-sm text-h7"
                      >
                        Logo Design ✠</q-btn
                      >
                      <q-btn
                        size="7px"
                        rounded
                        color="white"
                        class="text-black q-mr-sm text-h7"
                        >Branding & Logo Design ✠</q-btn
                      >
                      <q-btn
                        size="7px"
                        rounded
                        color="white"
                        class="text-black q-mr-sm text-h7"
                      >
                        Illustrator ✠</q-btn
                      >
                    </div>
                    <div class="row" style="width: 500px">
                      <div class="col-8"></div>
                      <div class="col-4">
                        <q-btn
                          size="7px"
                          rounded
                          to="07-REMOTE-WORK-FREELANCER-PROJECT-DISPLAY"
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
                        Need 3 HQ logos created
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
                        color="white"
                        class="text-black q-mr-sm text-h7"
                        >Graphics Design ✠</q-btn
                      >
                      <q-btn
                        size="7px"
                        rounded
                        color="white"
                        class="text-black q-mr-sm text-h7"
                      >
                        Logo Design ✠</q-btn
                      >
                      <q-btn
                        size="7px"
                        rounded
                        color="white"
                        class="text-black q-mr-sm text-h7"
                        >Branding & Logo Design ✠</q-btn
                      >
                      <q-btn
                        size="7px"
                        rounded
                        color="white"
                        class="text-black q-mr-sm text-h7"
                      >
                        Illustrator ✠</q-btn
                      >
                    </div>
                    <div class="row" style="width: 500px">
                      <div class="col-8"></div>
                      <div class="col-4">
                        <q-btn
                          size="7px"
                          rounded
                          to="07-REMOTE-WORK-FREELANCER-PROJECT-DISPLAY"
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
        </q-form>
      </div>
    </div>
    <!-- Card 3 div -->
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
      onItemClick() {
        // console.log('Clicked on an Item')
      },
      price_type: ref(["Hourly"]),
      minimum_rate: "",
      maximum_rate: ref(["1000"]),
      hourly_min_rate: "",
      hourly_max_rate: "",
      fixed_min_rate: "",
      fixed_max_rate: "",
      project_duration: ref(["48", "4"]),
      project_type: ref(["On Going Work"]),
      contractor_availability: ref(["20"]),
      client_rating: ref(4),
      search: "",
      text:"",
    };
  },
  methods: {
    postSearch() {
      const post = new FormData();
      post.append("price_type", this.price_type);
      post.append("minimum_rate", this.minimum_rate);
      post.append("maximum_rate", this.maximum_rate);
      post.append("hourly_min_rate", this.hourly_min_rate);
      post.append("hourly_max_rate", this.hourly_max_rate);
      post.append("fixed_min_rate", this.fixed_min_rate);

      post.append("project_duration", this.project_duration);
      post.append("project_type", this.project_type);
      post.append("contractor_availability", this.contractor_availability);
      post.append("client_rating", this.client_rating);

      const options = {
        method: "POST",
        url: "https://rwapi.zupria.com/api/post",
        data: post,
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvcndhcGkuenVwcmlhLmNvbVwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY1MDY2NjAyMSwiZXhwIjoxNjgyMjAyMDIxLCJuYmYiOjE2NTA2NjYwMjEsImp0aSI6InVkbmUyZ3NsRHJ5VjY5Z3UiLCJzdWIiOjksInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.4_rBRo4Yo7rQ58dKVNdbUEtp6_EKjF79744-cfrUQWM",
        },
      };
      axios
        .request(options)
        .then((response) => {
          console.log(response.data);
          this.user = response.data;
          this.id = response.data.data.id;
        })
        .catch(function (error) {
          console.error(error);
        });
    },
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
