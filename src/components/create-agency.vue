<template>
  <div>
    <q-form @submit.prevent="createAgency">
      <!-- Card 3 div -->

      <div class="q-pa-md row flex-center items-start q-gutter-md">
        <q-card
          class="my-card this-card text-black bg-grey-4"
          style="max-width: 800px"
        >
          <div class="q-pa-md">
            <div class="row">
              <div class="col-9 text-h6">Add Company</div>
              <div class="col-6">
                <div class="row justify-between" style="width: 250px">
                  <div
                    class="my-home col-4"
                    style="width: 130px; height: 130px"
                  >
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
                <div class="row underline-font">
                  <q-input borderless v-model="name">
                    <template v-slot:prepend>
                      <p class="text-bold custom-text-you underline-font">
                        Company Name
                      </p>
                    </template>
                  </q-input>
                </div>

                <div class="underline-font">
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
                <div class="text-h7 underline-font">
                  <q-input borderless v-model="vat_code">
                    <template v-slot:prepend>
                      <p class="text-bold custom-text-you underline-font">
                        Fascial code:
                      </p>
                    </template>
                  </q-input>
                  <!-- <strong>Fascial code:</strong> MTS SMI 84R11 Z114H -->
                </div>
                <div class="underline-font">
                  <strong>Add Legal Note company owner</strong>
                  <span class="q-mr-sm"></span>
                  <q-btn round outline size="5px" icon="add"></q-btn>
                </div>
                <div class="text-h7 underline-font">
                  <q-input borderless v-model="registration_code">
                    <template v-slot:prepend>
                      <p class="text-bold custom-text-you underline-font">
                        Register number:
                      </p>
                    </template>
                  </q-input>
                  <!-- <strong>Register number:</strong> 123 456 789 -->
                </div>
                <div class="text-h7 underline-font q-py-md">
                  <q-input borderless v-model="website">
                    <template v-slot:prepend>
                      <p class="text-bold custom-text-you underline-font">
                        Website:
                      </p>
                    </template>
                  </q-input>
                  <!-- <strong>Website:</strong> https://domain.com -->
                </div>
                <div class="text-h7 underline-font">
                  <q-input borderless v-model="phone">
                    <template v-slot:prepend>
                      <p class="text-bold custom-text-you underline-font">
                        Phone:
                      </p>
                    </template>
                  </q-input>
                  <!-- <strong>Phone:</strong> +39 321 654 987 -->
                </div>
              </div>
            </div>
          </div>
          <div class="row q-pa-md">* Fields marked with "*" are mandatory.</div>
        </q-card>
      </div>

      <!-- Footer Div -->

      <div class="row flex-center q-pa-md">
        <q-btn
          size="10px"
          rounded
          color="black"
          type="submit"
          icon="check_circle_outline"
          label="Settings saved!"
          class="text-white text-h7 q-mr-sm"
        ></q-btn>
        <q-btn
          size="10px"
          rounded
          outlined
          label="Go to ID verification →"
          class="text-h7"
        ></q-btn>
      </div>
    </q-form>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";
import { ref } from "vue";
export default defineComponent({
  name: "createAgency",
  setup() {
    return {
      name: ref(""),
      search: ref(""),
      phone: ref(""),
      vat_code:ref(""),
      website: ref(""),
      res_address: ref(""),
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
    createAgency() {
      const profile = new FormData();
      profile.append("name", this.name);
      profile.append("res_address", this.res_address);
      profile.append("vat_code", this.vat_code);
      profile.append("website", this.website);
      profile.append("registration_code", this.registration_code);
      profile.append("phone", this.phone);
      profile.append("profile_picture", this.profile_picture);

      const options = {
        method: "POST",
        url: "https://rwapi.zupria.com/api/user/agency",
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
  color: black

.custom-text-you
  font-size: 14px
  color: black

.underline-font
  text-decoration: underline
</style>
