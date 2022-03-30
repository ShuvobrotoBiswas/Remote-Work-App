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
      <h5>5. REVIEW & PUBLISH</h5>
      <div>
        <p class="text-weight-bold">Project title</p>
        <fieldset>
          <legend>Project Title*</legend>
          <q-input
            borderless
            v-model="text"
            placeholder="Lorem ipsum dolor sit amet"
          />
        </fieldset>
      </div>
      <div>
        <p class="text-weight-bold">Project Description</p>
        <fieldset>
          <legend>Project Description</legend>
          <q-input
            borderless
            v-model="text"
            placeholder="Lorem ipsum dolor sit amet"
          />
        </fieldset>
      </div>
      <div>
        <q-btn class="q-mt-md" color="teal" icon="add" label="Upload File" />
      </div>
      <div style="max-width: 300px">
        <q-item>
          <q-item-section>
            <q-item-label>Category job project</q-item-label>
            <q-item-label caption>Full Stack Development</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-btn padding="xs" round color="teal-4" icon="edit" />
          </q-item-section>
        </q-item>
      </div>
      <div>
        <q-item tag="label" v-ripple>
          <q-item-section avatar top>
            <q-checkbox v-model="color" val="" color="teal" />
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
      </div>
      <div>
        <h6>CONTRACTORS</h6>
        <div>
          <p>Skills required</p>
        </div>
        <div style="max-width: 300px">
          <q-item>
            <q-item-section>
              <q-item-label>Category job project</q-item-label>
              <q-item-label caption>Full Stack Development</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-btn padding="xs" round color="teal-4" icon="edit" />
            </q-item-section>
          </q-item>
        </div>
        <div>
          <p class="text-weight-bold">
            Create specific question to which the contractors will have to
            answer
          </p>
          <q-card class="my-card bg-teal-1">
            <q-card-section>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </q-card-section>
          </q-card>
          <q-card class="my-card q-mt-md bg-teal-1">
            <q-card-section clearable>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </q-card-section>
          </q-card>
        </div>
        <div class="q-mt-md">
          <p class="text-weight-bold">
            Choose the desired level of expertise of the contractors
          </p>
          <div class="q-gutter-sm">
            <q-radio left-label v-model="shape" val="line" label="Junior" />
            <q-radio
              left-label
              v-model="shape"
              val="rectangle"
              label="Middle"
            />
            <q-radio
              left-label
              v-model="shape"
              val="rectangle"
              label="Senior"
            />
          </div>
        </div>
        <div class="q-mt-md">
          <p class="text-weight-bold">Contractor Availability</p>
          <div class="q-gutter-sm">
            <q-radio
              left-label
              v-model="shape"
              val="line"
              label="Less then 20hour/Week"
            />
            <q-radio
              left-label
              v-model="shape"
              val="rectangle"
              label="20-30 hours/Week"
            />
            <q-radio
              left-label
              v-model="shape"
              val="rectangle"
              label="More than 30 hours/Week"
            />
          </div>
        </div>
        <div style="max-width: 300px">
          <q-item>
            <q-item-section>
              <q-item-label>Preferred type of contractor</q-item-label>
              <q-item-label caption>Agency</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-btn padding="xs" round color="teal-4" icon="edit" />
            </q-item-section>
          </q-item>
        </div>
        <div style="max-width: 300px">
          <q-item>
            <q-item-section>
              <q-item-label>Contractor availability</q-item-label>
              <q-item-label caption>20-30 h/week</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-btn padding="xs" round color="teal-4" icon="edit" />
            </q-item-section>
          </q-item>
        </div>
        <h5>3. PAYMENT & BUDGET</h5>
        <div>
          <p class="text-weight-bold">Project Duration</p>
          <div class="q-gutter-sm">
            <q-radio
              left-label
              v-model="shape"
              val="line"
              label="Max. 2 Weeks"
            />
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
            <q-radio
              left-label
              v-model="shape"
              val="line"
              label="Fixed Price"
            />
          </div>
        </div>

        <div class="q-mt-md">
          <p>Rate of Payment</p>
          <fieldset style="max-width: 200px">
            <legend>Maximum Rate</legend>
            <q-input borderless v-model="text" placeholder="2600" />
          </fieldset>
        </div>
      </div>
      <div>
        <h6>INVITATIONS</h6>
        <q-item style="max-width: 172px">
          <q-item-section>
            <q-item-label caption>Add invitations</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-btn
              padding="xs"
              round
              color="teal-4"
              icon="add_circle_outline"
            />
          </q-item-section>
        </q-item>
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
          </q-item>
        </div>
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
