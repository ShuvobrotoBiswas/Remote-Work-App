<template>
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
      <div class="text-black q-mr-sm">
        <q-btn flat label="LOGOUT" dense to="/Create-Account-Step3"></q-btn>
      </div>
    </q-toolbar>
  </q-header>

  <!-- Body Div -->
  <div>
    <div class="flex-break"></div>
    <div class="text-h7 text-center">Hi Florin, welcome to your dashboard!</div>
    <div class="flex-break q-py-md"></div>
    <q-separator />
    <div class="row flex-center q-pa-md">
      <div class="text-black text-h7 text-center q-pr-md">
        <q-btn
          to="/Contractor-profile-display"
          dense
          flat
          color="black"
          icon="person"
        ></q-btn>
        <div>Profile</div>
      </div>
      <div class="text-black text-h7 text-center q-pr-md">
        <q-btn
          dense
          to="/01-remote-work-Client-Post-Proj"
          flat
          color="black"
          icon="addchart"
        ></q-btn>
        <div>Post a Project</div>
      </div>
      <div class="text-black text-h7 text-center q-pr-md">
        <q-btn
          dense
          flat
          to="/06-Remote-Work-Contractor-Search-Proj"
          color="black"
          icon="insert_chart_outlined"
        ></q-btn>
        <div>Projects</div>
      </div>
      <div class="text-black text-h7 text-center q-pr-md">
        <q-btn dense flat color="black" icon="mark_email_unread"></q-btn>
        <div>Messages</div>
      </div>
      <div class="text-black text-h7 text-center q-pr-md">
        <q-btn
          dense
          flat
          to="/Client-Company-Profile-Doc-Verification"
          color="black"
          icon="local_atm"
        ></q-btn>
        <div>Accounts</div>
      </div>
      <div class="text-black text-h7 text-center q-pr-md">
        <q-btn dense flat color="black" icon="tune"></q-btn>
        <div>Settings</div>
      </div>
    </div>
    <q-separator />

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
            <div class="marker mlast timeline-icon five">
              <p>5</p>
            </div>
          </div>
        </div>
        <p class="q-pa-md text-h5 text-bold">4. SEND INVITATIONS</p>
        <div style="max-width: 300px" class="q-pa-md">
          <p class="text-weight-bold">Search by name</p>
          <div class="q-gutter-md row">
            <q-select
              v-model="invitation_profile_ids"
              use-input
              hide-selected
              fill-input
              hide-dropdown-icon
              use-chips
              input-debounce="0"
              :options="options"
              @filter="filterFn"
              style="width: 300px"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-select>
          </div>
          <q-expansion-item class="bordered" dense style="max-width: 350px">
            <q-list dense bordered padding class="borders">
              <q-item clickable v-ripple>
                <q-item-section> {{ invitation_profile_ids }} </q-item-section>
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section> {{ invitation_profile_ids }} </q-item-section>
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section> {{ invitation_profile_ids }} </q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section> {{ invitation_profile_ids }} </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>
        </div>

        <div class="flex">
          <p class="q-ma-md">Search result: 3 contractors found</p>
          <q-checkbox
            left-label
            color="cyan"
            v-model="val"
            label="Select all"
          />
        </div>
        <q-form @submit.prevent="post">
          <div class="flex">
            <q-item clickable v-ripple>
              <q-item-section side>
                <q-avatar circle size="48px">
                  <img src="~assets/Avator18.png" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label> {{ invitation_profile_ids }}</q-item-label>
                <q-item-label caption>Senior Bacend Developer</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-checkbox v-model="invitation_profile_ids" color="cyan" />
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section side>
                <q-avatar circle size="48px">
                  <img src="~assets/Avator10.png" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ invitation_profile_ids }}</q-item-label>
                <q-item-label caption>Middle Bacend Developer</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-checkbox v-model="invitation_profile_ids" color="cyan" />
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section side>
                <q-avatar circle size="48px">
                  <img src="~assets/Avator18.png" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ invitation_profile_ids }}</q-item-label>
                <q-item-label caption>Java Developer</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-checkbox v-model="invitation_profile_ids" color="cyan" />
              </q-item-section>
            </q-item>
          </div>
          <div class="flex q-pa-md justify-center">
            <q-btn
              unelevated
              size="10px"
              rounded
              style="width: 100px"
              color="grey-6"
              label="Back"
              to="/03-remote-work-Client-Post-Proj"
              class="q-mr-md"
            />

            <q-btn
              unelevated
              style="width: 100px"
              size="10px"
              rounded
              type="submit"
              color="cyan"
              label="Next"
            />
          </div>
        </q-form>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import axios from "axios";
import NameSearch from "src/components/Name-Search.vue";
// import TimeLine from "components/Timeline.vue";
const stringOptions = [
  "Gill Dobrica",
  "1",
  "Gabriel Cotabita",
  "Vioroca Dancila",
  "Akila",
  "Amunet",
  "Anat",
  "Anippe",
  "Asenath",
  "Auset",
  "Bahiti",
  "Bastet",
  "Khepri",
  "Kissa",
  "Kleopatra",
  "Lapis",
  "Lateefah",
  "Lotus",
  "Maibe",
  "Mandisa",
  "Mariam",
  "Masika",
  "Massika",
  "Maye",
  "Midge",
  "Moswen",
  "Nailah",
  "Nane",
  "Nanu",
  "Nefertari",
  "Neferteri",
  "Nefertiri",
  "Neferure",
  "Nefret",
  "Neith",
  "Nenet",
];
export default defineComponent({
  // components: {
  //   TimeLine,
  // },

  setup() {
    const submitResult = ref([]);
    const options = ref(stringOptions);

    return {
      val: ref(true),
      shape: ref("line"),
      submitResult,
      text: ref("Gil Dobrica"),
      noData: ref("null Data"),
      invitation_profile_ids:ref([]),
      // invitation_users: ref(null),
      options,
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
      filterFn(val, update, abort) {
        if (val.length < 1) {
          abort();
          return;
        }

        update(() => {
          const needle = val.toLowerCase();
          options.value = stringOptions.filter(
            (v) => v.toLowerCase().indexOf(needle) > -1
          );
        });
      },
    };
  },
  methods: {
    post() {
      const post = new FormData();
      post.append("invitation_profile_ids", this.invitation_profile_ids);
      const options = {
        method: "POST",
        url: "https://rwapi.zupria.com/api/post",
        data: post,
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvcndhcGkuenVwcmlhLmNvbVwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY1MDY2NjAyMSwiZXhwIjoxNjgyMjAyMDIxLCJuYmYiOjE2NTA2NjYwMjEsImp0aSI6InVkbmUyZ3NsRHJ5VjY5Z3UiLCJzdWIiOjksInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.4_rBRo4Yo7rQ58dKVNdbUEtp6_EKjF79744-cfrUQWM",
        },
      };
      axios
        .request(options)
        .then((response) => {
          console.log(response.data);
          this.user = response.data;
          this.id = response.data.data.id;
          this.token = response.data.token;
          localStorage.setItem("token", response.data.token);
          this.$router.push("/05-remote-work-Client-Post-Proj");
        })
        .catch(function (error) {
          console.error(error);
        });
    },
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
  background-color: #48D1CC
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
  background-color: #008080 !important


.timeline-icon.two
  background-color: #008080 !important


.timeline-icon.three
  background-color: #008080 !important


.timeline-icon.four
  background-color: #008080 !important

.timeline-icon.five
  background-color: #48D1CC !important


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
