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
      <h5>4. SEND INVITATIONS</h5>
      <div style="max-width: 300px">
        <p class="text-weight-bold">Search by name</p>
        <q-input bottom-slots v-model="text" :dense="dense">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
      <div class="flex">
        <p class="q-ma-md">Search result: 3 contractors found</p>
        <q-checkbox left-label v-model="val" label="Select all" />
      </div>

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
          <q-item-section side>
            <q-checkbox v-model="val" />
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
          <q-item-section side>
            <q-checkbox v-model="val" />
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
          <q-item-section side>
            <q-checkbox v-model="val" />
          </q-item-section>
        </q-item>
      </div>
      <div class="flex justify-center">
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
<style>
.container {
  width: 1200px;
  margin: auto;
}
</style>
