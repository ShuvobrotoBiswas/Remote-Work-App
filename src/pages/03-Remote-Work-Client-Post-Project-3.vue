<template>
  <div>
    <!-- Body Div  From Sub-Header Component-->
    <SubHeader />
    <!-- Card 1 Div -->
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
        <p class="q-pa-md text-h5 text-bold">3. PAYMENT & BUDGET</p>

        <div class="q-pa-md">
          <p class="text-bold">Project Duration</p>
          <div class="row">
            <div class="col-3">
              <q-radio
                left-label
                color="black"
                v-model="shape"
                val="line"
                label="Max. 2 Weeks"
              />
            </div>
            <div class="col-3">
              <q-radio
                left-label
                color="black"
                v-model="shape"
                val="rectangle"
                label="Max. 1 Month"
              />
            </div>
            <div class="col-3">
              <q-radio
                left-label
                color="black"
                v-model="shape"
                val="rectangle"
                label="Max. 3 Months"
              />
            </div>
            <div class="col-3">
              <q-radio
                left-label
                color="black"
                v-model="shape"
                val="rectangle"
                label="More than 3 Months"
              />
            </div>
          </div>
        </div>
        <div class="q-pa-md">
          <p class="text-bold text-h6">Payment</p>
          <p class="text-weight-bold">Type of Payment</p>
          <div class="row">
            <div class="col-3">
              <q-radio
              left-label
              color="black"
              v-model="shape"
              val="line"
              label="Hourly Payment"
            />
            </div>
            <div class="col-3">
              <q-radio
              left-label
              color="black"
              v-model="shape"
              val="line"
              label="Fixed Price"
            />
            </div>
          </div>
        </div>

        <div class="q-pa-md">
          <p class="text-bold">Rate of Payment</p>
          <fieldset style="border-radius: 7px; max-width: 200px; height: 70px">
            <legend>Maximum Rate</legend>
            <q-input borderless autofocus v-model="text" placeholder="500" />
          </fieldset>
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
  background-color: #008080
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
  background-color: #000000 !important


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
