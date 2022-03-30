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
        <h6>1.Project Template</h6>
        <div>
          <div class="row bid1 text-center">
            <div class="col-1 my-home q-mr-sm">
              <q-btn
                round
                color="cyan"
                class="flex-center"
                icon="arrow_back_ios_new"
              />
            </div>
            <div class="col my-home bid2 bg-cyan-1 my-font q-mr-sm">
              <q-img src="~assets/Avator5.png" class="image1"> </q-img>
              <div class="q-pa-mg text-center custom-text-me">LOGO Design</div>
            </div>
            <div class="col my-home bid2 my-font q-mr-sm">
              <q-img src="~assets/Avator6.png" class="image1"> </q-img>
              <div class="q-pa-mg text-center custom-text-me">
                Website Design
              </div>
            </div>
            <div class="col my-home bid2 my-font q-mr-sm">
              <q-img src="~assets/Avator21.png " class="image1"> </q-img>
              <div class="q-pa-mg text-center custom-text-me">Translation</div>
            </div>
            <div class="col my-home bid2 my-font">
              <div class="row">
                <div class="col">
                  <q-btn
                    flat
                    size="5px"
                    color="black"
                    padding="5px"
                    icon="check_box_outline_blank"
                  />
                </div>
                <div class="col">
                  <q-btn
                    flat
                    size="5px"
                    color="black"
                    padding="5px"
                    icon="check_box_outline_blank"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <q-btn
                    flat
                    size="5px"
                    color="black"
                    padding="5px"
                    icon="check_box_outline_blank"
                  />
                </div>
                <div class="col">
                  <q-btn
                    flat
                    size="5px"
                    color="black"
                    padding="5px"
                    icon="add"
                  />
                </div>
              </div>
              <div class="q-pa-mg text-center custom-text-me">Others</div>
            </div>
            <div class="col-1 my-home q-mr-sm">
              <q-btn
                round
                color="cyan"
                class="flex-center"
                icon="arrow_forward_ios"
              />
            </div>
          </div>

          <q-separator />
          <div>
            <h6>2. Project From Scratch</h6>
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
            <q-btn
              class="q-mt-md"
              color="cyan"
              icon="add"
              label="Upload File"
            />
            <q-item tag="label" v-ripple>
              <q-item-section avatar top>
                <q-checkbox v-model="color" val="cyan" color="cyan" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-h7"
                  >NDA(Non Disclosure agreement)- contractor undertakes not to
                  disclose to anyone what is in the document for a period
                  established by the client only contractors who sign the NDA
                  will receive access to the project data.</q-item-label
                >
              </q-item-section>
            </q-item>
            <div class="row q-pa-md my-font">
              <p>* Fields marked with "*" are mandatory.</p>
            </div>
          </div>
        </div>

        <div class="flex flex-center q-pa-md">
          <q-btn  unelevated size="10px" rounded color="primary" label="Next" />
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
.bid1
  // background: rgba(255,0,0,.1)
  // border: 1px solid rgba(86,61,124,.2)
  margin-top: 1rem
.bid2
  border: 1px solid rgba(86,61,124,.2)
  height: 100px

.image1
  height: 70px
  width: 80px

.company
  background: white
  height: 75px
  width: 85px
  rounded

.description

.image2
  background: cyan


.my-font
  font-size: 10px
</style>
