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
        <p class="q-pa-md text-bold text-h5">2. CHOOSE CONTRACTORS</p>
        <div class="q-pa-md">
          <p class="text-weight-bold">
            Choose the technological skills and qualifications required of the
            contractor
          </p>
          <div class="row" style="max-width: 900px">
            <div class="col-6">
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
            <div class="col-6">
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
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row flex-center">
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
