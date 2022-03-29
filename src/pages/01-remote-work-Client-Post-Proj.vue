<template>
  <div>
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
    <div>
      <q-linear-progress size="25px" :value="progress1" color="accent">
        <div class="absolute-full flex flex-center">
          <q-badge color="white" text-color="accent" :label="progressLabel1" />
        </div>
      </q-linear-progress>
    </div>
    <div class="container">
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
        <div class="row justify-around">
          <div class="col-2">
            <q-avatar
              circle
              size="64px"
              font-size="48px"
              color="cyan"
              text-color="black"
              icon="chevron_left"
            />
          </div>
          <div class="col-2">
            <q-avatar
              square
              size="100px"
              font-size="82px"
              color="cyan"
              text-color="white"
              icon="g_translate"
            />
            <p>Logo Design</p>
          </div>

          <div class="col-2">
            <q-avatar
              square
              size="100px"
              font-size="82px"
              color="cyan"
              text-color="white"
              icon="g_translate"
            />
            <p>Create Website</p>
          </div>
          <div class="col-2">
            <q-avatar
              square
              size="100px"
              font-size="82px"
              color="cyan"
              text-color="white"
              icon="g_translate"
            />
            <p>Translation</p>
          </div>
          <div class="col-2">
            <q-avatar
              square
              size="100px"
              font-size="82px"
              color="cyan"
              text-color="white"
              icon="g_translate"
            />
            <p>Others</p>
          </div>
          <div class="col-2">
            <q-avatar
              circle
              size="64px"
              font-size="48px"
              color="cyan"
              text-color="black"
              icon="chevron_right"
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
          <q-btn class="q-mt-md" color="cyan" icon="add" label="Upload File" />
          <q-item tag="label" v-ripple>
            <q-item-section avatar top>
              <q-checkbox v-model="color" val="cyan" color="cyan" />
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
          <p>Fields marked with "*" are mandatory</p>
        </div>
      </div>
      <div class="flex flex-center">
        <q-btn unelevated rounded color="primary" label="Next" />
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
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
};
</script>
<style>
.container {
  position: absolute;
  left: 250px;
}
</style>
