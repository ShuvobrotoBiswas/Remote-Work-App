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
            Create your profile (contractor + company)
          </div>
        </q-card-section>
        <q-separator />
        <div class="q-pa-md">
          <div class="row">
            <div class="col-5">
              <contractorPicture />
            </div>
            <div class="col-1"></div>
            <div class="col-6">
              <q-form @submit.prevent="profile">
                <q-input v-model="name" label="Complete name*" />
                <q-input v-model="res_address" label="Address*" />
                <q-input v-model="billing_address" label="Billing address*" />
                <q-input v-model="phone" type="tel" label="Phone number" />
                <div class="text-bold q-py-md">
                  Search/Select your Skills & Tools
                </div>
                <q-input
                  v-model="skill_ids"
                  outlined
                  style="max-width: 300px"
                  type="search"
                >
                  <template v-slot:append>
                    <q-icon name="search" />
                    <q-menu>
                      <q-list style="min-width: 250px">
                        <q-item clickable v-close-popup>
                          <q-item-section>Graphic Tools</q-item-section>
                        </q-item>
                        <q-option-group
                          :options="options"
                          type="checkbox"
                          v-model="group"
                          color="cyan"
                        />
                      </q-list>
                    </q-menu>
                  </template>
                </q-input>
                <div class="q-py-md">
                  <q-btn
                    size="7px"
                    rounded
                    color="white"
                    class="text-black q-mr-sm text-h7"
                    >Adobe Photoshop ✠</q-btn
                  >
                  <q-btn
                    size="7px"
                    rounded
                    color="white"
                    class="text-black q-mr-sm text-h7"
                    >Adobe Illustrator ✠</q-btn
                  >
                  <q-btn
                    size="7px"
                    rounded
                    color="white"
                    class="text-black q-mr-sm text-h7"
                    >Adobe XD ✠</q-btn
                  >
                  <q-btn
                    size="7px"
                    rounded
                    color="white"
                    class="text-black text-h7"
                    >CSS3 ✠</q-btn
                  >
                </div>
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
            <div class="row">
              <div class="col"></div>
              <div class="row"></div>
              <div class="row"></div>
              <div class="row"></div>
              <div class="row"></div>
              <div class="row"></div>
              <div class="row"></div>
              <div class="row"></div>
              <div class="row"></div>
            </div>
          </div>

          <q-separator />
        </div>

        <!-- Card 2 Div -->

        <addProject />

        <!-- Card 3 div -->

        <CreateContractorProfile />

        <!-- Footer Div -->

        <div class="row flex-center q-pa-md">
          <q-btn
            size="10px"
            rounded
            color="black"
            icon="add"
            label="Add Companies"
            class="text-white text-h7 q-mr-sm"
          ></q-btn>
          <q-btn
            size="10px"
            rounded
            outlined
            to="/Client-Company-Profile-Doc-Verification"
            label="Go to ID verification →"
            class="text-h7"
          ></q-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import contractorPicture from "components/contractor-picture.vue";
import CreateContractorProfile from "components/create-contractor1-profile.vue";
import addProject from "components/add-project.vue";
import { ref } from "vue";
import axios from "axios";

export default defineComponent({
  components: { contractorPicture, CreateContractorProfile, addProject },
  // name: "IndexPage",
  setup() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      search: ref(""),
      name: ref(" "),
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
      description: ref(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      ),
      pricelist1: ref("15"),
      pricelist2: ref("55"),
      skill_ids: ref(""),
    };
  },

  methods: {
    profile() {
      const profile = new FormData();
      profile.append("name", this.name);
      profile.append("res_address", this.res_address);
      profile.append("billing_address", this.billing_address);
      profile.append("skill_ids", this.skill_ids);
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
.bid1
  // background: rgba(255,0,0,.1)
  // border: 1px solid rgba(86,61,124,.2)
  margin-top: 1rem
.bid2
  // border: 1px solid rgba(86,61,124,.2)
  // background: rgba(255,0,0,.1)
  height: 100px

.image1
  height: 70px
  width: 80px




.my-home
  border: 1px solid rgba(86,61,124,.2)
  background: white
  border-radius: 10px


.custom-text-me
  font-size: 8px

.underline-font
  text-decoration: underline
</style>
