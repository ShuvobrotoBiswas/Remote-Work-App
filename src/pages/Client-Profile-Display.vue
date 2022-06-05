<template>
  <div v-for="user in users" :key="user.id">
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

        <div class="text-grey text-bold">Hello,</div>
        <div class="text-black text-bold">Laura</div>
        <div>
          <q-avatar>
            <q-img
              src="~assets/Avator12.png"
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
              flat
              to="/01-remote-work-Client-Post-Proj"
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
              flat
              to="/06-Remote-Work-Contractor-Search-Proj"
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
      <div flat bordered class="my-card" style="max-width: 800px">
        <q-card-section>
          <div class="text-h6 text-bold text-center">
            Your client profile/Account (client)
          </div>
        </q-card-section>
        <q-separator />
        <div class="q-pa-md">
          <div class="row">
            <div class="col-4">
              <!-- <q-avatar size="100px" class="q-mb-sm"> -->
              <q-img sizes="200px" :src="user.image"></q-img>
              <!-- </q-avatar> -->
            </div>
            <div class="col-1"></div>
            <div class="col-7">
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
              <div class="text-h7"><strong>CV:</strong> {{ user.cv }}</div>
              <div class="q-py-md">
                <q-btn
                  size="7px"
                  rounded
                  color="grey-5"
                  class="text-black q-mr-sm text-h7"
                  >#photoshop</q-btn
                >
                <q-btn
                  size="7px"
                  rounded
                  color="grey-5"
                  class="text-black q-mr-sm text-h7"
                  >#illustrator</q-btn
                >
                <q-btn
                  size="7px"
                  rounded
                  color="grey-5"
                  class="text-black q-mr-sm text-h7"
                  >#CSS3</q-btn
                >
                <q-btn
                  size="7px"
                  rounded
                  color="grey-5"
                  class="text-black text-h7"
                  >#Adobe XD</q-btn
                >
              </div>
            </div>
          </div>
          <div class="row flex-center q-py-md">
            <q-btn
              size="10px"
              rounded
              color="black"
              to="/Create-Client-Profile"
              icon="edit"
              label="Edit Profile"
              class="text-white flex-center text-h7"
            ></q-btn>
          </div>
          <q-separator />

          <!-- Card 2 Div -->

          <div class="row flex-center">
            <div flat bordered class="my-card" style="max-width: 800px">
              <div class="row q-pa-md flex-center">
                <q-btn
                  size="10px"
                  rounded
                  color="black"
                  icon="add"
                  label="Add Companies"
                  class="text-white text-h7"
                ></q-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Card 3 div -->

    <!-- Footer Div -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  // name: "IndexPage",
  data() {
    return {
      users: [],
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
</style>
