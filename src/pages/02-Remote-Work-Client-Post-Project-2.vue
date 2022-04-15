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
        <p class="q-pa-md text-h5 text-bold">2. CHOOSE CONTRACTORS</p>
        <div class="q-pa-md">
          <p class="text-bold">
            Choose how many contractors are needed for the project
          </p>
          <div class="row">
            <div class="col-2">
              <q-radio
                left-label
                v-model="shape"
                color="black"
                val="line"
                label="One"
              />
            </div>
            <div class="col-3">
              <q-radio
                left-label
                v-model="shape"
                color="black"
                val="rectangle"
                label="More than One"
              />
            </div>
          </div>
        </div>
        <div class="row q-pa-md">
          <p class="text-bold">
            Create specific question to which the contractors will have to
            answer
          </p>

          <q-card flat class="my-card bg-grey-5">
            <q-card-section>
              <div class="row items-center no-wrap">
                <div class="col">
                  <div class="text-h7">{{ lorem }}</div>
                </div>

                <div class="col-auto">
                  <q-btn color="black" round flat icon="cancel">
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
                  <div class="text-h7">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip?
                  </div>
                </div>

                <div class="col-auto">
                  <q-btn color="black" round flat icon="cancel">
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
        <div class="q-mt-md">
          <q-item>
            <q-item-section>
              <fieldset
                style="border-radius: 7px; height: 80px"
                class="q-pa-md"
              >
                <legend>Add Question</legend>
                <q-input
                  borderless
                  v-model="text"
                  placeholder="Lorem ipsum dolor sit amet"
                />
              </fieldset>
            </q-item-section>
            <q-item-section side>
              <q-btn padding="xs" round color="black" icon="add" />
            </q-item-section>
          </q-item>
        </div>
        <div class="q-pa-md">
          <p class="text-weight-bold">
            Choose the technological skills and qualifications required of the
            contractor
          </p>
          <div class="row">
            <div class="col">
              <q-expansion-item
                class="q-mt-md bordered"
                dense
                dense-toggle
                expand-separator
                label="Skills required"
                style="max-width: 350px"
              >
                <q-list dense bordered padding class="borders">
                  <q-item clickable v-ripple>
                    <q-item-section>Angular JS </q-item-section>
                  </q-item>

                  <q-item clickable v-ripple>
                    <q-item-section>Java</q-item-section>
                  </q-item>

                  <q-item clickable v-ripple>
                    <q-item-section> PHP </q-item-section>
                  </q-item>
                  <q-item clickable v-ripple>
                    <q-item-section> Etc. </q-item-section>
                  </q-item>
                </q-list>
              </q-expansion-item>
            </div>
            <div class="col">
              <q-btn
                unelevated
                size="10px"
                rounded
                outline
                icon-right="cancel"
                color="grey-8"
                label="Angular Js"
                class="q-mr-md"
              />
              <q-btn
                unelevated
                size="10px"
                rounded
                outline
                icon-right="cancel"
                color="grey-8"
                label="java"
                class="q-mr-md"
              />
              <q-btn
                unelevated
                size="10px"
                rounded
                outline
                icon-right="cancel"
                color="grey-8"
                label="php"
                class="q-mr-md"
              />
            </div>
          </div>
        </div>
        <div class="q-pa-md">
          <p class="text-weight-bold">
            Choose the desired level of expertise of the contractors
          </p>
          <div class="row">
            <div class="col-3">
              <q-radio
                left-label
                color="black"
                v-model="shape"
                val="line"
                label="Junior"
              />
            </div>
            <div class="col-3">
              <q-radio
                left-label
                color="black"
                v-model="shape"
                val="rectangle"
                label="Middle"
              />
            </div>
            <div class="col-3">
              <q-radio
                left-label
                color="black"
                v-model="shape"
                val="rectangle"
                label="Senior"
              />
            </div>
          </div>
        </div>
        <div class="q-pa-md">
          <p class="text-weight-bold">Contractor Availability</p>
          <div class="row">
            <div class="col-4">
              <q-radio
                left-label
                color="black"
                v-model="shape"
                val="line"
                label="Less then 20hour/Week"
              />
            </div>
            <div class="col-4">
              <q-radio
                left-label
                color="black"
                v-model="shape"
                val="rectangle"
                label="20-30 hours/Week"
              />
            </div>
            <div class="col-4">
              <q-radio
                left-label
                color="black"
                v-model="shape"
                val="rectangle"
                label="More than 30 hours/Week"
              />
            </div>
          </div>
        </div>
        <div class="q-pa-md">
          <p class="text-weight-bold">Choose project visibility*</p>
          <div class="row">
            <div class="col-4">
              <q-radio
                left-label
                color="black"
                v-model="shape"
                val="line"
                label="Only on the platform"
              />
            </div>
            <div class="col-4">
              <q-radio
                left-label
                color="black"
                v-model="shape"
                val="rectangle"
                label="Indexable by search engines"
              />
            </div>
            <div class="col-4">
              <q-radio
                left-label
                color="black"
                v-model="shape"
                val="rectangle"
                label="Available only to invited contractors"
              />
            </div>
          </div>
        </div>
        <div class="q-pa-md">
          <p class="text-weight-bold">Choose preferred type of contractor</p>
          <div class="row">
            <div class="col-3">
              <q-radio
              left-label
              color="black"
              v-model="shape"
              val="line"
              label="Freelancer"
            />
            </div>
            <div class="col-3">
              <q-radio
              left-label
              color="black"
              v-model="shape"
              val="rectangle"
              label="Agency"
            />
            </div>
          </div>
        </div>
        <p class="q-pa-md">Fields marked with "*" are mandatory</p>
        <div class="flex justify-center">
          <q-btn
            unelevated
            size="10px"
            style="width: 100px"
            rounded
            color="grey-6"
            label="Back"
            class="q-mr-md"
          />
          <q-btn
            unelevated
            size="10px"
            style="width: 100px"
            rounded
            color="black"
            label="Next"
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
  background-color: #008080
  border-radius: 50%


.timeline-icon.one
  background-color: #000000 !important


.timeline-icon.two
  background-color: #000000 !important


.timeline-icon.three
  background-color: #808080 !important


.timeline-icon.four
  background-color: #808080 !important

.timeline-icon.five
  background-color: #808080 !important


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
