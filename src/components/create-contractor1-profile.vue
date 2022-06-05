<template>
  <div>
    <!-- Card 3 div -->
    <q-form @submit.prevent="createContractor">
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
      <div class="q-pa-md row flex-center items-start q-gutter-md">
        <q-card class="my-card text-black bg-grey-4" style="max-width: 800px">
          <div class="q-pa-md">
            <div class="row">
              <div class="col-9 text-h6">Add Company</div>
              <div class="col-6">
                <div class="row justify-between" style="width: 300px">
                  <div class="my-home" style="width: 130px; height: 130px">
                    <q-img
                      src="~assets/Avator2.png"
                      style="height: 90px; max-width: 90px"
                    >
                    </q-img>
                    <p class="custom-text-me row flex-center">
                      <q-file
                        style="width: 20px; height: 5px"
                        v-model="profile_picture"
                        borderless
                        class="custom-text-me row flex-center"
                      >
                        Change Logo</q-file
                      >
                    </p>
                  </div>
                </div>
                <div class="text-bold text-h7 underline-font q-py-md">
                  <q-input borderless v-model="name">
                    <template v-slot:prepend>
                      <p class="text-bold custom-text-you underline-font">
                        Company Name
                      </p>
                    </template>
                  </q-input>
                </div>
                <div class="text-h7 underline-font">
                  <q-input borderless v-model="res_address">
                    <template v-slot:prepend>
                      <p class="text-bold custom-text-you underline-font">
                        Address:
                      </p>
                    </template>
                  </q-input>
                </div>
              </div>
              <div class="col-6">
                <div class="underline-font">
                  <q-input borderless v-model="vat_code">
                    <template v-slot:prepend>
                      <p class="text-bold custom-text-you underline-font">
                        Fascial code:
                      </p>
                    </template>
                  </q-input>
                </div>
                <div class="q-py-md underline-font q-mr-sm">
                  <strong>Add Legal Note company owner</strong>
                  <span class="q-mr-sm"></span>
                  <q-btn round outline size="5px" icon="add"></q-btn>
                </div>
                <div class="underline-font">
                  <q-input borderless v-model="registration_code">
                    <template v-slot:prepend>
                      <p class="text-bold custom-text-you underline-font">
                        Register number:
                      </p>
                    </template>
                  </q-input>
                </div>
                <div class="underline-font">
                  <q-input borderless v-model="website">
                    <template v-slot:prepend>
                      <p class="text-bold custom-text-you underline-font">
                        Website:
                      </p>
                    </template>
                  </q-input>
                </div>
                <div class="q-py-md underline-font">
                  <q-input borderless v-model="phone">
                    <template v-slot:prepend>
                      <p class="text-bold custom-text-you underline-font">
                        Phone:
                      </p>
                    </template>
                  </q-input>
                </div>
                <div><strong>Freelanchers associated</strong></div>
                <div>
                  <div class="q-py-md">
                    <q-btn
                      size="7px"
                      rounded
                      color="white"
                      class="text-black q-mr-sm text-h7"
                      >Gil Dobrica ✠</q-btn
                    >
                    <q-btn
                      size="7px"
                      rounded
                      color="white"
                      class="text-black q-mr-sm text-h7"
                    >
                      Viorica Dancila ✠</q-btn
                    >
                    <q-btn
                      size="7px"
                      rounded
                      color="white"
                      class="text-black q-mr-sm text-h7"
                      >Gabriel Cotabita ✠</q-btn
                    >
                  </div>
                  <q-btn
                    size="7px"
                    rounded
                    to="/Create--Contractor-Company-Profile-Add-Freelancers"
                    color="white"
                    class="text-black q-mr-sm text-bold text-h7"
                    icon="add"
                    >Add freelance account</q-btn
                  >
                </div>
              </div>
              <div class="row text-bold">Add an Company description</div>
              <div class="q-pa-md" style="max-width: 655px; min-width: 655px">
                <q-input v-model="description" clearable outlined />
                <div class="row q-py-md text-bold">Price range*</div>
                <div class="row">
                  <div class="col-3">
                    <fieldset
                      style="
                        max-width: 80px;
                        min-height: 40px;
                        border-radius: 5px;
                      "
                    >
                      <legend class="bg-white">€Min/hour</legend>
                      <input
                        style="max-width: 80px; min-height: 40px"
                        class="q-mr-sm bg-grey-4"
                        type="number"
                        maxlength="10"
                        v-model="hourly_rate"
                      />
                    </fieldset>
                  </div>
                  <div class="col-2">
                    <fieldset
                      style="
                        max-width: 80px;
                        min-height: 40px;
                        border-radius: 5px;
                      "
                    >
                      <legend class="bg-white">€Max/hour</legend>
                      <input
                        style="max-width: 80px; min-height: 40px"
                        class="q-mr-sm bg-grey-4"
                        type="number"
                        maxlength="10"
                        v-model="hourly_rate"
                      />
                    </fieldset>
                  </div>
                </div>
              </div>

              <div>
                <div class="text-bold">Projects Categories</div>
                <q-input
                  style="width: 400px"
                  v-model="search"
                  outlined
                  type="search"
                >
                  <template v-slot:append>
                    <q-icon name="search" />
                    <q-menu>
                      <q-list style="min-width: 250px">
                        <q-item clickable v-close-popup>
                          <q-item-section class="text-bold"
                            >Design</q-item-section
                          >
                        </q-item>
                        <q-option-group
                          :options="options1"
                          type="checkbox"
                          v-model="group1"
                        />
                        <q-item clickable v-close-popup>
                          <q-item-section class="text-bold"
                            >Development</q-item-section
                          >
                        </q-item>
                      </q-list>
                    </q-menu>
                  </template>
                </q-input>
                <div>
                  <div class="q-py-md">
                    <q-btn
                      size="7px"
                      rounded
                      color="white"
                      class="text-black q-mr-sm text-h7"
                      >Branding & Logo Design ✠</q-btn
                    >
                    <q-btn
                      size="7px"
                      rounded
                      color="white"
                      class="text-black q-mr-sm text-h7"
                    >
                      Web Design ✠</q-btn
                    >
                  </div>
                </div>
              </div>

              <div class="text-bold" style="max-width: 420px">
                <div class="col text-bold">
                  Skills*
                  <skillSearch />
                  <div>
                    <div class="q-py-md">
                      <q-btn
                        size="7px"
                        rounded
                        color="white"
                        class="text-black q-mr-sm text-h7"
                        >Branding & Logo Design ✠</q-btn
                      >
                      <q-btn
                        size="7px"
                        rounded
                        color="white"
                        class="text-black q-mr-sm text-h7"
                      >
                        Graphic Design ✠</q-btn
                      >
                      <q-btn
                        size="7px"
                        rounded
                        color="white"
                        class="text-black q-mr-sm text-h7"
                      >
                        Logo Design ✠</q-btn
                      >
                      <q-btn
                        size="7px"
                        rounded
                        color="white"
                        class="text-black q-mr-sm text-h7"
                      >
                        Web Design ✠</q-btn
                      >
                      <q-btn
                        size="7px"
                        rounded
                        color="white"
                        class="text-black q-mr-sm text-h7"
                      >
                        UI Design ✠</q-btn
                      >
                      <q-btn
                        size="7px"
                        rounded
                        color="white"
                        class="text-black q-mr-sm text-h7"
                      >
                        UX Design ✠</q-btn
                      >
                    </div>
                  </div>
                </div>
              </div>

              <!-- add project -->
              <addProject />
            </div>
          </div>
          <div>* Fields marked with "*" are mendatory.</div>
        </q-card>

      </div>
    </q-form>
    <!-- Footer Div -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import addProject from "components/add-project.vue";
import skillSearch from "components/skillSearch.vue";
import axios from "axios";

export default defineComponent({
  components: { addProject, skillSearch },
  name: "CreateContractorProfile",
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
      website: ref(""),
      group: ref([]),
      registration_code: ref(""),
      vat_code: ref(""),
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
    createContractor() {
      const agency = new FormData();
      agency.append("name", this.name);
      agency.append("res_address", this.res_address);
      agency.append("website", this.website);
      // agency.append("skill_ids", this.skill_ids);
      agency.append("phone", this.phone);
      agency.append("description", this.description);
      agency.append("hourly_rate", this.hourly_rate);
      agency.append("profile_picture", this.profile_picture);
      agency.append("vat_code", this.vat_code);
      agency.append("registration_code", this.registration_code);

      const options = {
        method: "POST",
        url: "https://rwapi.zupria.com/api/user/agency	",
        data: agency,
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

.custom-text-you
  font-size: 14px
  color: black

.underline-font
  text-decoration: underline
</style>
