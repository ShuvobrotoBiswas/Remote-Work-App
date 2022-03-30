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
      <div class="q-mt-xl">
        <TimeLine />
      </div>
      <h5>3. PAYMENT & BUDGET</h5>
      <div>
        <p class="text-weight-bold">Project Duration</p>
        <div class="q-gutter-sm">
          <q-radio left-label v-model="shape" val="line" label="Max. 2 Weeks" />
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
          <q-radio left-label v-model="shape" val="line" label="Fixed Price" />
        </div>
      </div>

      <div class="q-mt-md">
        <fieldset>
          <legend>Maximum Rate</legend>
          <q-input borderless v-model="text" placeholder="2600" />
        </fieldset>
      </div>

      <div class="flex justify-center q-mt-md">
        <q-btn unelevated rounded color="grey-6" label="Back" class="q-mr-md" />
        <q-btn unelevated rounded color="primary" label="Next" />
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
<style>
.container {
  width: 1200px;
  margin: auto;
}
</style>
