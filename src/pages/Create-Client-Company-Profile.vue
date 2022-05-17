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
        <div class="text-black text-bold">Meat</div>
        <div>
          <q-avatar>
            <q-img
              src="~assets/Avator13.png"
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

    <!-- Card 1 Div -->

    <div class="row flex-center items-start">
      <div flat bordered class="my-card" style="max-width: 800px">
        <q-card-section>
          <div class="text-h6 text-bold text-center">
            Create your client profile (client + company)
          </div>
        </q-card-section>
        <q-separator />
        <div class="q-pa-md">
          <div class="row">
            <div class="col-5">
              <ClientPicture />
            </div>
            <div class="col-1"></div>
            <div class="col-6">
              <q-form @submit.prevent="profile">
                <q-input v-model="name" type="name" label="Complete name*" />
                <q-input v-model="res_address" label="Address*" />
                <q-input v-model="billing_address" label="Billing address*" />
                <q-input v-model="phone" type="tel" label="Phone number" />
                <div class="row flex-center">
                  <div flat bordered class="my-card" style="max-width: 800px">
                    <div class="row q-pa-md">
                      <q-btn
                        size="10px"
                        rounded
                        type="submit"
                        color="black"
                        icon="add"
                        label="Add Companies"
                        class="text-white text-h7"
                      ></q-btn>
                    </div>
                  </div>
                </div>
              </q-form>
            </div>
          </div>

          <q-separator />
        </div>
      </div>
    </div>

    <!-- Card 3 div -->

    <createAgency />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";
import { ref } from "vue";
import ClientPicture from "components/Client-Pic.vue";
import createAgency from "components/create-agency.vue";
export default defineComponent({
  components: { ClientPicture , createAgency },
  // components: { createAgency },
  // name: "IndexPage",
  setup() {
    return {
      name: ref(" "),
      search: ref(""),
      phone: ref(""),
      res_address: ref(""),
      billing_address: ref(""),
      model: ref(null),
      group: ref([]),
      options: [
        { label: "Adobe Illustrator" },
        { label: "Adobe Photoshop" },
        { label: "Adobe XD" },
      ],
      group1: ref([]),
      options1: [{ label: "Branding & Logo Design" }, { label: "Web Design" }],
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

.this-card
  // background: rgba(255,0,0,.1)
  border-radius: 30px

.my-home
  border: 1px solid rgba(86,61,124,.2)
  background: white
  border-radius: 10px

.custom-text-me
  font-size: 7px

.underline-font
  text-decoration: underline
</style>
