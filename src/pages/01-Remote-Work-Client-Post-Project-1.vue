<template>
  <div>
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
          <TimeLine />
        </div>
        <h5>1. DEFINE PROJECT</h5>
        <h6>Project Catagory</h6>
        <div class="q-gutter-sm">
          <q-radio
            left-label
            v-model="shape"
            val="line"
            label="Well Defined Project"
          />
          <q-radio
            left-label
            v-model="shape"
            val="rectangle"
            label="Ongoing Work"
          />
          <q-radio
            left-label
            v-model="shape"
            val="ellipse"
            label="Market Research"
          />
          <q-radio
            left-label
            v-model="shape"
            val="polygon"
            label="Guaranted Prize Contest"
          />
        </div>
        <div>
          <q-separator />
          <div>
            <h6>2. Project infor</h6>
            <fieldset>
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
              style="max-width: 350px"
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
            <fieldset class="q-mt-md">
              <legend>Project Description*</legend>
              <q-input
                borderless
                v-model="text"
                placeholder="Lorem ipsum dolor sit amet"
              />
            </fieldset>
            <div class="row">
              <q-btn
                class="q-mt-md"
                color="black"
                icon="add"
                label="Upload File"
              />
            </div>
            <div class="row">
          <q-btn unelevated size="10px" class="q-mr-sm" rounded   outline icon-right="cancel" color="black" label="Color Scheme.jpg " />
          <q-btn unelevated size="10px" class="q-mr-sm" rounded outline icon-right="cancel" color="black" label="Brand identity guidelines.pdf" />
          <q-btn unelevated size="10px" class="q-mr-sm" rounded outline icon-right="cancel" color="black" label="brief.doc" />

            </div>

            <div class="row q-pa-md my-font">
              <p>* Fields marked with "*" are mandatory.</p>
            </div>
          </div>
        </div>

        <div class="flex flex-center q-pa-md">
          <q-btn unelevated size="10px" style="width:100px" rounded color="black" label="Next" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import TimeLine from "components/Timeline.vue";

export default defineComponent({
  components: {
    TimeLine,
  },
  setup() {
    const submitResult = ref([]);

    return {
      shape: ref("line"),
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
.container
  width: 1200px
  margin: auto

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
