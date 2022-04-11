<template>
  <div>
    <!-- Body Div  From Sub-Header Component-->
    <SubHeader />
    <div class="row q-pa-md flex-center items-start">
      <div style="width: 1000px">
        <div class="q-pa-md">
          <div class="row timeline-wrap" style="max-width: 1000px">
            <div id="timeline"></div>
            <div class="marker mfirst timeline-icon one">
              <p>1</p>
            </div>
            <div class="marker m2 timeline-icon two">
              <p>2</p>
            </div>
            <div class="marker m3 timeline-icon three">
              <p>3</p>
            </div>
            <div class="marker m4 timeline-icon four">
              <p>4</p>
            </div>
            <div class="marker mlast timeline-icon four">
              <p>5</p>
            </div>
          </div>
        </div>

        <p class="q-pa-md text-h5 text-bold">5. REVIEW & PUBLISH</p>
        <div class="q-pa-md">
          <div class="q-pa-md">
            <p class="text-bold text-h6">DEFINE PROJECT</p>
            <div class="q-pa-md">
              <p class="text-weight-bold">Project title</p>
              <fieldset style="border-radius: 7px">
                <legend>Project Title*</legend>
                <q-input
                  autofocus
                  borderless
                  v-model="text"
                  placeholder="Lorem ipsum dolor sit amet"
                />
              </fieldset>
            </div>
            <div class="q-pa-md">
              <p class="text-weight-bold">Project Description</p>
              <fieldset style="border-radius: 7px">
                <legend>Project Description</legend>
                <q-input
                  borderless
                  v-model="text"
                  placeholder="Lorem ipsum dolor sit amet"
                />
              </fieldset>
            </div>
            <div class="q-pa-md row">
              <q-btn color="black" icon="add" label="Upload File" />
            </div>
            <div class="q-pa-md row">
              <q-btn
                color="black"
                size="10px"
                class="q-mr-sm"
                rounded
                outline
                icon-right="cancel"
                label="Color Scheme.jpg"
              />
              <q-btn
                color="black"
                size="10px"
                class="q-mr-sm"
                rounded
                outline
                icon-right="cancel"
                label="Brand Identity Guidelines.pdf"
              />
              <q-btn
                color="black"
                size="10px"
                class="q-mr-sm"
                rounded
                outline
                icon-right="cancel"
                label="Brief.doc"
              />
            </div>
            <div style="max-width: 300px" class="q-pa-md row">
              <q-item>
                <q-item-section>
                  <q-item-label class="text-bold"
                    >Category job project</q-item-label
                  >
                  <q-item-label caption>Full Stack Development</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-btn padding="xs" round color="black" icon="edit" />
                </q-item-section>
              </q-item>
            </div>
            <q-separator />
            <div class="q-pa-md">
              <p class="row text-bold text-h6">CONTRACTORS</p>
              <p class="text-h6 q-pa-md text-bold">Skills required</p>
              <div style="max-width: 400px">
                <q-item>
                  <div class="row">
                    <q-btn
                      size="10px"
                      rounded
                      outline
                      icon-right="cancel"
                      color="black"
                      class="text-black q-mr-sm"
                      label="Angular JS"
                    >
                    </q-btn>
                    <q-btn
                      size="10px"
                      rounded
                      outline
                      icon-right="cancel"
                      color="black"
                      class="text-black q-mr-sm"
                      label="Java"
                    ></q-btn>
                    <q-btn
                      size="10px"
                      rounded
                      outline
                      icon-right="cancel"
                      color="black"
                      class="text-black q-mr-sm"
                      label="PHP"
                    ></q-btn>
                  </div>
                  <q-item-section side>
                    <q-btn padding="xs" round color="black" icon="edit" />
                  </q-item-section>
                </q-item>
              </div>
            </div>
            <div>
              <div style="max-width: 500px" class="q-pa-md row">
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-bold text-h6"
                      >Contractors needed for the project</q-item-label
                    >
                    <q-item-label caption>5 Contractor</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-btn padding="xs" round color="black" icon="edit" />
                  </q-item-section>
                </q-item>
              </div>
              <div class="q-pa-md">
                <p class="text-weight-bold q-pa-md">
                  Questions for contractors
                </p>
              </div>
              <div class="q-pa-md">
                <q-card flat class="my-card bg-grey-5">
                  <q-card-section>
                    <div class="row items-center no-wrap">
                      <div class="col">
                        <div class="text-h7 bg-grey-5">{{ lorem }}</div>
                      </div>

                      <div class="col-auto">
                        <q-btn color="grey-7" round flat icon="cancel">
                          <q-menu cover auto-close>
                            <q-list>
                              <q-item clickable>
                                <q-item-section>Remove Card</q-item-section>
                              </q-item>
                            </q-list>
                          </q-menu>
                        </q-btn>
                      </div>
                    </div>
                  </q-card-section>
                </q-card>

                <q-card flat class="my-card q-mt-md bg-grey-5">
                  <q-card-section>
                    <div class="row items-center no-wrap">
                      <div class="col">
                        <div class="text-h7 bg-grey-5">
                          Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip?
                        </div>
                      </div>

                      <div class="col-auto">
                        <q-btn color="grey-7" round flat icon="cancel">
                          <q-menu cover auto-close>
                            <q-list>
                              <q-item clickable>
                                <q-item-section>Remove Card</q-item-section>
                              </q-item>
                            </q-list>
                          </q-menu>
                        </q-btn>
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
            <div style="max-width: 500px" class=" row">
              <q-item>
                <q-item-section>
                  <q-item-label caption class="text-bold text-black"
                    >Add Questions</q-item-label
                  >
                </q-item-section>
                <q-item-section side>
                  <q-btn padding="xs" round color="black" icon="add" />
                </q-item-section>
              </q-item>
            </div>
            <div class="q-pa-md">
              <p class="text-weight-bold">
                Desired level of expertise of the contractors
              </p>
              <div class="q-gutter-sm">
                <q-radio
                  left-label
                  v-model="shape"
                  color="black"
                  val="line"
                  label="Junior"
                />
                <q-radio
                  left-label
                  v-model="shape"
                  color="black"
                  val="rectangle"
                  label="Middle"
                />
                <q-radio
                  left-label
                  v-model="shape"
                  color="black"
                  val="rectangle"
                  label="Senior"
                />
              </div>
            </div>
            <div class="q-pa-md">
              <p class="text-weight-bold">Contractor Availability</p>
              <div class="q-gutter-sm">
                <q-radio
                  left-label
                  v-model="shape"
                  color="black"
                  val="line"
                  label="1 Hour/Day"
                />
                <q-radio
                  left-label
                  color="black"
                  v-model="shape"
                  val="rectangle"
                  label="2 Hours/Day"
                />
                <q-radio
                  left-label
                  color="black"
                  v-model="shape"
                  val="rectangle"
                  label="4 Hours/Day"
                />
              </div>
            </div>
            <q-separator />

            <div class="q-pa-md">
              <h5>3. PAYMENT & BUDGET</h5>
              <p class="text-weight-bold">Project Duration</p>
              <div class="q-gutter-sm">
                <q-radio
                  left-label
                  color="black"
                  v-model="shape"
                  val="line"
                  label="Max. 2 Weeks"
                />
                <q-radio
                  left-label
                  color="black"
                  v-model="shape"
                  val="rectangle"
                  label="Max. 1 Month"
                />
                <q-radio
                  left-label
                  color="black"
                  v-model="shape"
                  val="rectangle"
                  label="Max. 3 Months"
                />
                <q-radio
                  left-label
                  color="black"
                  v-model="shape"
                  val="rectangle"
                  label="More than 3 Months"
                />
              </div>
            </div>
            <div class="q-pa-md">
              <h6>Payment</h6>
              <p class="text-weight-bold">Type of Payment</p>
              <div class="q-gutter-sm">
                <q-radio
                  left-label
                  color="black"
                  v-model="shape"
                  val="line"
                  label="Hourly Payment"
                />
                <q-radio
                  left-label
                  color="black"
                  v-model="shape"
                  val="line"
                  label="Fixed Price"
                />
              </div>
            </div>

            <div class="q-pa-md">
              <p class="text-bold">Rate of Payment</p>
              <fieldset
                style="border-radius: 7px; max-width: 200px; max-height: 70px"
              >
                <legend>Maximum Rate</legend>
                <q-input borderless v-model="text" placeholder="2600" />
              </fieldset>
            </div>
          </div>
        </div>
        <q-separator />

        <!-- ho -->

        <div class="q-pa-md">
          <div class="text-bold text-h7">INVITATIONS</div>
          <q-item style="max-width: 172px">
            <q-item-section>
              <q-item-label caption>Add invitations</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-btn padding="xs" round color="black" icon="add" />
            </q-item-section>
          </q-item>
          <div class="flex">
            <q-item clickable v-ripple>
              <q-item-section side>
                <q-avatar circle size="48px">
                  <img src="~assets/Avator10.png" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>Gill Dobrica</q-item-label>
                <q-item-label caption>Senior Bacend Developer</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section side>
                <q-avatar circle size="48px">
                  <img src="~assets/Avator12.png" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>Vioroca Dancila</q-item-label>
                <q-item-label caption>Middle Bacend Developer</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section side>
                <q-avatar circle size="48px">
                  <img src="~assets/Avator13.png" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>Gabriel Cotabita</q-item-label>
                <q-item-label caption>Java Developer</q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>
        <div class="flex q-pa-md justify-center">
          <q-btn
            unelevated
            size="10px"
            rounded
            style="width: 100px"
            color="grey-6"
            label="Back"
            class="q-mr-md"
          />

          <q-btn
            unelevated
            size="10px"
            rounded
            color="black"
            label="post project"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
// import TimeLine from "components/Timeline.vue";
import SubHeader from "components/Sub-Header.vue";

export default defineComponent({
  components: { SubHeader },
  // components: {
  //   TimeLine,
  // },
  setup() {
    const submitResult = ref([]);

    return {
      shape: ref("line"),
      submitResult,
      colorbox: ref(true),
      lorem:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

      onSubmit(evt) {
        const formData = new FormData(evt.target);
        const data = [];

        for (const [name, value] of formData.entries()) {
          data.push({
            name,
            value,
          });
        }

        submitResult.value = data;
      },
    };
  },
});
</script>
<style lang="sass" scoped>
.timeline-wrap
  margin: 20%% 20%
  top: 100
  position: relative


#timeline
  height: 4px
  width: 100%
  background-color: #808080
  position: relative


.marker
  z-index: 1000
  color: #fff
  width: 32px
  height: 32px
  line-height: 32px
  font-size: 1.4em
  text-align: center
  position: absolute
  margin-left: -25px
  background-color: #808080
  border-radius: 50%


.timeline-icon.one
  background-color: #000000 !important


.timeline-icon.two
  background-color: #000000 !important


.timeline-icon.three
  background-color: #000000 !important


.timeline-icon.four
  background-color: #000000 !important


.mfirst
  top: -16px


.m2
  top: -16px
  left: 25%


.m3
  top: -16px
  left: 50%


.m4
  top: -16px
  left: 75%

.mlast
  top: -16px
  left: 100%
</style>
