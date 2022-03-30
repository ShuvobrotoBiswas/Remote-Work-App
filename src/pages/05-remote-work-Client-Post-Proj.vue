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

        <p class="q-pa-md text-h6 text-bold">5. REVIEW & PUBLISH</p>

        <div class="q-pa-md">
          <p class="text-weight-bold">Project title</p>
          <fieldset>
            <legend>Project Title*</legend>
            <q-input
              borderless
              v-model="text"
              placeholder="Lorem ipsum dolor sit amet"
            />
          </fieldset>
        </div>
        <div class="q-pa-md">
          <p class="text-weight-bold">Project Description</p>
          <fieldset>
            <legend>Project Description</legend>
            <q-input
              borderless
              v-model="text"
              placeholder="Lorem ipsum dolor sit amet"
            />
          </fieldset>
        </div>
        <div class="q-pa-md">
          <q-btn class="q-mt-md" color="teal" icon="add" label="Upload File" />
        </div>
        <div style="max-width: 300px" class="q-pa-md">
          <q-item>
            <q-item-section>
              <q-item-label>Category job project</q-item-label>
              <q-item-label caption>Full Stack Development</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-btn padding="xs" round color="teal-4" icon="edit" />
            </q-item-section>
          </q-item>
        </div>
        <div class="q-pa-md">
          <q-item tag="label" v-ripple>
            <q-item-section avatar top>
              <q-checkbox v-model="color" val="" color="teal" />
            </q-item-section>
            <q-item-section>
              <q-item-label
                >NDA(Non Disclosure agreement)- contractor undertakes not to
                disclose to anyone what is in the document for a period
                established by the client only contractors who sign the NDA will
                receive access to the project data.</q-item-label
              >
            </q-item-section>
          </q-item>
        </div>
        <div class="q-pa-md">
          <h6>CONTRACTORS</h6>
          <div>
            <p>Skills required</p>
          </div>
          <div style="max-width: 300px">
            <q-item>
              <q-item-section>
                <q-item-label>Category job project</q-item-label>
                <q-item-label caption>Full Stack Development</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn padding="xs" round color="teal-4" icon="edit" />
              </q-item-section>
            </q-item>
          </div>
          <div>
            <p class="text-weight-bold">
              Create specific question to which the contractors will have to
              answer
            </p>
            <q-card class="my-card bg-teal-1">
              <q-card-section>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </q-card-section>
            </q-card>
            <q-card class="my-card q-mt-md bg-teal-1">
              <q-card-section clearable>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </q-card-section>
            </q-card>
          </div>
          <div class="q-mt-md">
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
          <div class="q-mt-md">
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
          <div style="max-width: 300px">
            <q-item>
              <q-item-section>
                <q-item-label>Preferred type of contractor</q-item-label>
                <q-item-label caption>Agency</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn padding="xs" round color="teal-4" icon="edit" />
              </q-item-section>
            </q-item>
          </div>
          <div style="max-width: 300px">
            <q-item>
              <q-item-section>
                <q-item-label>Contractor availability</q-item-label>
                <q-item-label caption>20-30 h/week</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn padding="xs" round color="teal-4" icon="edit" />
              </q-item-section>
            </q-item>
          </div>
          <h5>3. PAYMENT & BUDGET</h5>
          <div>
            <p class="text-weight-bold">Project Duration</p>
            <div class="q-gutter-sm">
              <q-radio
                left-label
                v-model="shape"
                val="line"
                label="Max. 2 Weeks"
              />
              <q-radio
                left-label
                v-model="shape"
                val="rectangle"
                label="Max. 1 Month"
              />
              <q-radio
                left-label
                v-model="shape"
                val="rectangle"
                label="Max. 3 Months"
              />
              <q-radio
                left-label
                v-model="shape"
                val="rectangle"
                label="More than 3 Months"
              />
            </div>
          </div>
          <div>
            <h6>Payment</h6>
            <p class="text-weight-bold">Type of Payment</p>
            <div class="q-gutter-sm">
              <q-radio
                left-label
                v-model="shape"
                val="line"
                label="Hourly Payment"
              />
              <q-radio
                left-label
                v-model="shape"
                val="line"
                label="Fixed Price"
              />
            </div>
          </div>

          <div class="q-mt-md">
            <p>Rate of Payment</p>
            <fieldset style="max-width: 200px">
              <legend>Maximum Rate</legend>
              <q-input borderless v-model="text" placeholder="2600" />
            </fieldset>
          </div>
        </div>
        <div class="q-pa-md">
          <h6>INVITATIONS</h6>
          <q-item style="max-width: 172px">
            <q-item-section>
              <q-item-label caption>Add invitations</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-btn
                padding="xs"
                round
                color="teal-4"
                icon="add_circle_outline"
              />
            </q-item-section>
          </q-item>
          <div class="flex">
            <q-item clickable v-ripple>
              <q-item-section side>
                <q-avatar circle size="48px">
                  <img src="https://cdn.quasar.dev/img/avatar.png" />
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
                  <img src="https://cdn.quasar.dev/img/avatar.png" />
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
                  <img src="https://cdn.quasar.dev/img/avatar.png" />
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
            style="width: 100px"
            size="10px"
            rounded
            color="primary"
            label="Next"
          />
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
  background-color: #008080 !important


.timeline-icon.four
  background-color: #008080 !important


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
