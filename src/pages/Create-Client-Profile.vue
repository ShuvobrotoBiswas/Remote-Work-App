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
        <div class="text-black q-mr-sm">
          <q-btn flat label="LOGOUT" dense to="/Create-Account-Step3"></q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <!-- Body Div -->

    <div class="flex-break"></div>
    <div class="text-h7 text-center">Hi Florin, welcome to your dashboard!</div>
    <div class="flex-break q-py-md"></div>
    <q-separator />
    <div class="row flex-center q-pa-md">
      <!-- <div class="col"></div> -->
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
      <div class="text-black text-h7 text-center">
        <q-btn dense flat color="black" icon="mark_email_unread"></q-btn>
        <div>Messages</div>
      </div>
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
      <div class="text-black text-h7 text-center">
        <q-btn dense flat color="black" icon="tune"></q-btn>
        <div>Settings</div>
      </div>
      <!-- <div class="col"></div> -->
    </div>
    <q-separator />

    <!-- Card 1 Div -->
    <q-form @submit.prevent="profile">
      <div class="row flex-center items-start">
        <div flat bordered class="my-card" style="max-width: 800px">
          <q-card-section>
            <div class="text-h6 text-bold text-center">
              Create your client profile (client)
            </div>
          </q-card-section>
          <q-separator />
          <div class="q-pa-md">
            <div class="row">
              <div class="col-5">
                <clientProfilePic />
              </div>
              <div class="col-1"></div>
              <div class="col-6">
                <q-input v-model="name" label="Complete name*" />
                <q-input v-model="res_address" label="Address*" />
                <q-input v-model="billing_address" label="Billing address*" />
                <q-input v-model="phone" type="tel" label="Phone number" />
                <div class="row flex-center">
                  <div flat bordered class="my-card" style="max-width: 800px">
                    <div class="row q-pa-md"></div>
                  </div>
                </div>
              </div>
            </div>
            <q-separator />

            <div class="q-pa-md">
              <q-btn
                size="12px"
                rounded
                type="submit"
                color="black"
                icon="add"
                label="Add Companies"
                class="text-white text-h7"
              ></q-btn>
            </div>
            <div class="row q-pa-md">
              * Fields marked with "*" are mandatory.
            </div>
          </div>
        </div>
      </div>
    </q-form>

    <!-- Footer Div -->

    <div class="row flex-center q-pa-md">
      <q-btn
        size="10px"
        rounded
        color="black"
        to="/Client-Profile-Display"
        icon="check_circle_outline"
        label="Settings saved!"
        class="text-white text-h7 q-mr-sm"
      ></q-btn>
      <q-btn
        size="10px"
        rounded
        to="/Client-Profile-Doc-Verification"
        outlined
        type="submit"
        label="Go to ID verification →"
        class="text-h7"
      ></q-btn>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import axios from "axios";
import clientProfilePic from "components/client-profile-pic.vue";
export default defineComponent({
  components: { clientProfilePic },
  setup() {
    return {
      name: ref(" "),
      search: ref(""),
      phone: ref(""),
      res_address: ref(""),
      billing_address: ref(""),
      file: ref(""),
      address: "",
    };
  },
  methods: {
    profile() {
      const profile = new FormData();
      profile.append("name", this.name);
      profile.append("res_address", this.res_address);
      profile.append("billing_address", this.billing_address);
      profile.append("phone", this.phone);

      const options = {
        method: "POST",
        url: "https://rwapi.zupria.com/api/user/profile",
        data: profile,
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
        })
        .catch(function (error) {
          console.error(error);
        });
    },
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
