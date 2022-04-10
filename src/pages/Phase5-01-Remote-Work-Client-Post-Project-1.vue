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
        <div class="text-black my-font">LOGOUT</div>
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
          <TimeLine />
        </div>
        <p class="text-bold text-h5 q-py-md">1. DEFINE PROJECT</p>

        <div class="q-pa-md">
          <div class="row">
            <div class="text-h6 row q-pa-md row">Project Catagory</div>
            <div class="row">
              <q-radio
                left-label
                v-model="shape"
                color="black"
                class="text-bold"
                val="line"
                label="Well Defined Project"
              />
              <q-radio
                left-label
                v-model="shape"
                color="black"
                class="text-bold"
                val="rectangle"
                label="Ongoing Work"
              />
              <q-radio
                left-label
                v-model="shape"
                color="black"
                class="text-bold"
                val="ellipse"
                label="Market Research"
              />
              <q-radio
                left-label
                v-model="shape"
                color="black"
                class="text-bold"
                val="polygon"
                label="Guaranted Prize Contest"
              />
            </div>
          </div>
          <h6 class="text-bold">Project info</h6>
          <fieldset style="border-radius: 7px">
            <legend class="q-mr-sm">Project Title*</legend>
            <q-input
              style=""
              borderless
              v-model="text"
              placeholder="Lorem ipsum dolor sit amet"
            />
          </fieldset>
          <div>
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
          </div>
          <fieldset style="border-radius: 7px">
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
            <q-btn
              class="q-mr-sm"
              color="grey-8"
              rounded
              outline
              size="10px"
              icon-right="cancel"
              label="Color Scheme.jpg"
            />
            <q-btn
              class="q-mr-sm"
              color="grey-8"
              rounded
              outline
              size="10px"
              icon-right="cancel"
              label="Brand Identity Guidelines.pdf"
            />
            <q-btn
              class="q-mr-sm"
              color="grey-8"
              rounded
              outline
              size="10px"
              icon-right="cancel"
              label="Brief.doc"
            />
          </div>
          <div>
            <p class="text-h7 text-bold q-py-md">Project Duration*</p>
            <div class="row">
              <q-radio
                left-label
                v-model="shape1"
                color="black"
                val="line"
                label="Max. 7 Days"
              />
              <q-radio
                left-label
                v-model="shape1"
                color="black"
                val="rectangle"
                label="Max. 15 Days"
              />
              <q-radio
                left-label
                v-model="shape1"
                color="black"
                val="ellipse"
                label="Max. 30 Days"
              />
            </div>
          </div>
          <div class="row q-pa-md my-font">
            <p>* Fields marked with "*" are mandatory.</p>
          </div>
          <div class="flex flex-center q-pa-md">
            <q-btn
              unelevated
              size="10px"
              rounded
              style="width:100px"
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
import TimeLine from "components/Timeline.vue";

export default defineComponent({
  components: {
    TimeLine,
  },
  setup() {
    const submitResult = ref([]);

    return {
      shape: ref("line"),
      shape1: ref("rectangle"),
      submitResult,
      color: ref(true),
      val: ref("rectangle"),

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
.row > div
  padding: 10px 15px
  // background: rgba(86,61,124,.15)
  // border: 1px solid rgba(86,61,124,.2)
.row + .row
  margin-top: 1rem

.my-font
  font-size: 10px
</style>
