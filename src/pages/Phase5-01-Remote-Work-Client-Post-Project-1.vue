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
        <div class="q-pa-md">
          <h5 class="text-bold">1. DEFINE PROJECT</h5>
          <h6 class="text-bold">Project Catagory</h6>
          <div class="row text-bold">
            <div class="col">
              <q-radio
                left-label
                color="black"
                v-model="shape"
                val="line"
                label="Well Defined Project"
              />
            </div>
            <div class="col">
              <q-radio
                left-label
                color="black"
                v-model="shape"
                val="rectangle"
                label="Ongoing Work"
              />
            </div>
            <div class="col">
              <q-radio
                left-label
                color="black"
                v-model="shape"
                val="ellipse"
                label="Market Research"
              />
            </div>
            <div class="col">
              <q-radio
                left-label
                color="black"
                v-model="shape"
                val="polygon"
                label="Guaranted Prize Contest"
              />
            </div>
          </div>

          <div>
            <h6 class="text-bold">Project info</h6>
            <fieldset style="border-radius: 5px">
              <legend>Project Title*</legend>
              <q-input
                borderless
                v-model="text"
                placeholder="Lorem ipsum dolor sit amet"
              />
            </fieldset>
            <q-expansion-item
              class="q-mt-md"
              dense
              dense-toggle
              expand-separator
              label="Project Catagory*"
              style="max-width: 250px"
            >
              <q-card class="bg-grey-2">
                <q-card-section>
                  <div class="row">Logo Design</div>
                  <div class="row">Cerate Website</div>
                  <div class="row">Translation</div>
                  <div class="row">Etc.</div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <fieldset class="q-mt-md" style="border-radius: 5px">
              <legend>Project Description*</legend>
              <q-input
                borderless
                v-model="text"
                placeholder="Lorem ipsum dolor sit amet"
              />
            </fieldset>
            <div class="row q-py-md">
              <q-btn
                class="q-mt-md"
                color="black"
                icon="add"
                label="Upload File"
              />
            </div>
            <div class="row">
              <q-btn
                unelevated
                size="10px"
                class="q-mr-sm"
                rounded
                outline
                icon-right="cancel"
                color="black"
                label="Color Scheme.jpg "
              />
              <q-btn
                unelevated
                size="10px"
                class="q-mr-sm"
                rounded
                outline
                icon-right="cancel"
                color="black"
                label="Brand identity guidelines.pdf"
              />
              <q-btn
                unelevated
                size="10px"
                class="q-mr-sm"
                rounded
                outline
                icon-right="cancel"
                color="black"
                label="brief.doc"
              />
            </div>
            <div class="text-bold row q-py-md">Project Duration*</div>

            <div class="row">
              <div class="col">
                <q-radio
                  left-label
                  color="black"
                  v-model="shape"
                  val="line"
                  label="Max. 7 Days"
                />
              </div>
              <div class="col">
                <q-radio
                  left-label
                  color="black"
                  v-model="shape"
                  val="rectangle"
                  label="Max. 15 Days"
                />
              </div>
              <div class="col">
                <q-radio
                  left-label
                  color="black"
                  v-model="shape"
                  val="ellipse"
                  label="Max. 30 Days"
                />
              </div>
            </div>

            <div class="row my-font">
              <p>* Fields marked with "*" are mandatory.</p>
            </div>
          </div>

          <div class="flex flex-center q-pa-md">
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
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
// import TimeLine from "components/Timeline.vue";
import SubHeader from "components/Sub-Header.vue";
export default defineComponent({
  components: { SubHeader },

  components: {
    // TimeLine,
  },
  setup() {
    const submitResult = ref([]);

    return {
      shape: ref("ellipse"),
      submitResult,
      color: ref(true),

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

.my-font
  font-size: 10px

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
  background-color: #808080 !important


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
