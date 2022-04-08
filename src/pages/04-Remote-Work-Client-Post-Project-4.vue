<template>
  <div>
    <!-- Body Div  From Sub-Header Component-->
    <SubHeader />
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
            <div class="marker mlast timeline-icon five">
              <p>5</p>
            </div>
          </div>
        </div>
        <p class="q-pa-md text-h6 text-bold">4. SEND INVITATIONS</p>
        <div style="max-width: 300px" class="q-pa-md">
          <p class="text-weight-bold">Search by name</p>
          <q-input outlined  autofocus bottom-slots v-model="text" :dense="dense">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
        <div class="flex">
          <p class="q-pa-md">Search result: 3 contractors found</p>
          <q-checkbox color="black" left-label v-model="val" label="Select all" />
        </div>

        <div class="flex q-pa-md">
          <q-item clickable v-ripple>
            <q-item-section side>
              <q-avatar circle size="48px">
                <img src="~assets/Avator4.png" />
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label>Gill Dobrica</q-item-label>
              <q-item-label caption>Senior Bacend Developer</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-checkbox color="black" v-model="val" />
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section side>
              <q-avatar circle size="48px">
                <img src="~assets/Avator10.png" />
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label>Vioroca Dancila</q-item-label>
              <q-item-label caption>Middle Bacend Developer</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-checkbox color="black" v-model="val" />
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section side>
              <q-avatar circle size="48px">
                <img src="~assets/Avator12.png" />
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label>Gabriel Cotabita</q-item-label>
              <q-item-label caption>Java Developer</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-checkbox color="black" v-model="val" />
            </q-item-section>
          </q-item>
        </div>
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
        color="black"
        label="Next"
      />
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
      val: ref(true),
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
