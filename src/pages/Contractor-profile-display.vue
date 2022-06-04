<template>
  <div v-for="user in users" :key="user.id">
    <!-- <q-form @submit.prevent="profile"> -->
      <div class="flex-break"></div>
      <div class="text-h7 text-center">
        Hi Florin, welcome to your dashboard!
      </div>
      <div class="flex-break q-py-md"></div>
      <q-separator />
      <div class="">
        <div class="row">
          <div class="col"></div>
          <div class="col">
            <div class="text-black text-h7 text-center">
              <q-btn
                to="/Contractor-profile-display"
                dense
                flat
                color="black"
                icon="person"
              ></q-btn>
              <div>Profile</div>
            </div>
          </div>
          <div class="col">
            <div class="text-black text-h7 text-center">
              <q-btn
                dense
                to="/01-remote-work-Client-Post-Proj"
                flat
                color="black"
                icon="addchart"
              ></q-btn>
              <div>Post a Project</div>
            </div>
          </div>
          <div class="col">
            <div class="text-black text-h7 text-center">
              <q-btn
                dense
                to="/06-Remote-Work-Contractor-Search-Proj"
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
              <q-btn
                dense
                flat
                to="/Client-Company-Profile-Doc-Verification"
                color="black"
                icon="local_atm"
              ></q-btn>
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

      <!-- Card 1 Div -->

      <div class="row flex-center items-start">
        <div flat bordered class="my-card" style="max-width: 750px">
          <q-card-section>
            <div class="text-h6 text-center">
              Your Profile/Accounts (account and companies)
            </div>
          </q-card-section>
          <q-separator />
          <div class="q-pa-md">
            <!-- <q-item v-for="user in profile" : key="user.id"> -->
            <div class="row">
              <div class="col-4">
                <!-- <q-avatar size="100px" class="q-mb-sm"> -->
                <q-img sizes="200px" src="~/assets/Avator1.png"></q-img>
                <!-- </q-avatar> -->
              </div>
              <div class="col-1"></div>
              <div class="col-6">
                <div class="text-h6 text-bold">{{ user.name }}</div>
                <div class="text-h7 q-py-md">
                  <strong>Address:</strong> {{ user.res_address }}
                </div>
                <div class="text-h7">
                  <strong> Billing address:</strong> {{ user.billing_address }}
                </div>
                <div class="text-h7 q-py-md">
                  <strong>Phone:</strong> {{ user.phone }}
                </div>
                <div class="text-h7">
                  <strong>CV:</strong> Tom Petty Europass CV
                </div>
                <div class="q-py-md">
                  <q-btn
                    size="7px"
                    rounded
                    color="grey-5"
                    class="text-black q-mr-sm text-h7"
                    >#{{}}</q-btn
                  >
                  <q-btn
                    size="7px"
                    rounded
                    color="grey-5"
                    class="text-black q-mr-sm text-h7"
                    >#{{}}</q-btn
                  >
                  <q-btn
                    size="7px"
                    rounded
                    color="grey-5"
                    class="text-black q-mr-sm text-h7"
                    >#{{}}</q-btn
                  >
                  <q-btn
                    size="7px"
                    rounded
                    color="grey-5"
                    class="text-black text-h7"
                    >#{{}}</q-btn
                  >
                </div>
              </div>
            </div>
            <!-- </q-item> -->
            <div class="row flex-center q-py-md">
              <q-btn
                size="10px"
                rounded
                color="black"
                to="/Create-Contractor-Profile"
                icon="edit"
                label="Edit Profile"
                class="text-white text-h7"
              ></q-btn>
            </div>
            <q-separator />
          </div>
        </div>
      </div>

      <!-- Card 2 Div -->

      <getAgencyDisplay />
    <!-- </q-form> -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import getAgencyDisplay from "components/get-agency-display.vue";
import axios from "axios";
export default defineComponent({
  components: { getAgencyDisplay },

  data() {
    return {
      profile: "",
      users: [],
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },

  // SHOW
  created() {
    const options = {
      method: "GET",
      url: "https://rwapi.zupria.com/api/user/profile",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvcndhcGkuenVwcmlhLmNvbVwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY1MDY2NTQ3NCwiZXhwIjoxNjgyMjAxNDc0LCJuYmYiOjE2NTA2NjU0NzQsImp0aSI6ImRaUGlZem9YTXZZS25ITU4iLCJzdWIiOjgsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.m127K5q8Fy_6CxXEWJZyXqb_HJL4U-EUcHmdwmHTytI",
      },
    };
    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        this.users = response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  },
});
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px

.row > div
  padding: 10px 15px
  // background: rgba(86,61,124,.15)
  // border: 1px solid rgba(86,61,124,.2)
.row + .row
  margin-top: 1rem
.row
  // background: rgba(255,0,0,.1)


.this-card
  // background: rgba(255,0,0,.1)
  border-radius: 30px


.my-home
  border: 1px solid rgba(86,61,124,.2)
  background: white
  border-radius: 10px

.custom-text-me
  font-size: 7px
</style>
