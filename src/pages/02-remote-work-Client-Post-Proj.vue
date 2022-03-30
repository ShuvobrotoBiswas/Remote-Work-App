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
    <div class="row flex-center items-start">
      <div style="width: 1000px">
        <div class="q-mt-xl">
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
        <p class="q-pa-md text-bold">2. CHOOSE CONTRACTORS</p>
        <div class="q-pa-md">
          <p class="text-bold">
            Choose how many contractors are needed for the project
          </p>
          <div class="q-gutter-sm">
            <q-radio left-label v-model="shape" val="line" label="One" />
            <q-radio
              left-label
              v-model="shape"
              val="rectangle"
              label="More than One"
            />
          </div>
        </div>
        <div class="row q-pa-md">
          <p class="text-bold">
            Create specific question to which the contractors will have to
            answer
          </p>
          <q-card class="my-card bg-teal-1">
            <q-card-section>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </q-card-section>
          </q-card>
          <q-card class="my-card q-mt-md bg-teal-1">
            <q-card-section clearable>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </q-card-section>
          </q-card>
        </div>
        <div class="q-mt-md">
          <q-item>
            <q-item-section>
              <fieldset>
                <legend>Add Question</legend>
                <q-input
                  borderless
                  v-model="text"
                  placeholder="Lorem ipsum dolor sit amet"
                />
              </fieldset>
            </q-item-section>
            <q-item-section side>
              <q-btn padding="xs" round color="teal-4" icon="add" />
            </q-item-section>
          </q-item>
        </div>
        <div class="q-pa-md">
          <p class="text-weight-bold">
            Choose the technological skills and qualifications required of the
            contractor
          </p>
          <q-expansion-item
            class="bg-grey-2 q-mt-md bordered"
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
        <div class="q-pa-md">
          <p class="text-weight-bold">
            Choose the desired level of expertise of the contractors
          </p>
          <div class="q-gutter-sm">
            <q-radio left-label v-model="shape" val="line" label="Junior" />
            <q-radio
              left-label
              v-model="shape"
              val="rectangle"
              label="Middle"
            />
            <q-radio
              left-label
              v-model="shape"
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
              val="line"
              label="Less then 20hour/Week"
            />
            <q-radio
              left-label
              v-model="shape"
              val="rectangle"
              label="20-30 hours/Week"
            />
            <q-radio
              left-label
              v-model="shape"
              val="rectangle"
              label="More than 30 hours/Week"
            />
          </div>
        </div>
        <div class="q-pa-md">
          <p class="text-weight-bold">Choose project visibility*</p>
          <div class="q-gutter-sm">
            <q-radio
              left-label
              v-model="shape"
              val="line"
              label="Only on the platform"
            />
            <q-radio
              left-label
              v-model="shape"
              val="rectangle"
              label="Indexable by search engines"
            />
            <q-radio
              left-label
              v-model="shape"
              val="rectangle"
              label="Available only to invited contractors"
            />
          </div>
        </div>
        <div class="q-pa-md">
          <p class="text-weight-bold">Choose preferred type of contractor</p>
          <div class="q-gutter-sm">
            <q-radio left-label v-model="shape" val="line" label="Freelancer" />
            <q-radio
              left-label
              v-model="shape"
              val="rectangle"
              label="Agency"
            />
          </div>
        </div>
        <p class="q-pa-md">Fields marked with "*" are mandatory</p>
        <div class="flex justify-center">
          <q-btn
            unelevated
            size="10px"
            rounded
            color="grey-6"
            label="Back"
            class="q-mr-md"
          />
          <q-btn unelevated size="10px" rounded color="primary" label="Next" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import TimeLine from "components/Timeline.vue";

export default defineComponent({
  // components: {
  //   TimeLine,
  // },
  setup() {
    const submitResult = ref([]);

    return {
      shape: ref("line"),
      submitResult,

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
.container
  width: 1200px
  margin: auto
.timeline-wrap
  margin: 20%% 20%
  top: 100
  position: relative


#timeline
  height: 4px
  width: 100%
  background-color: #48D1CC
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
  background-color: #008080 !important


.timeline-icon.two
  background-color: #008080 !important


.timeline-icon.three
  background-color: #48D1CC !important


.timeline-icon.four
  background-color: #48D1CC !important


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
