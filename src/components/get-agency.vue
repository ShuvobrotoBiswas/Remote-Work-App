<template>
  <!-- <div v-for="user in users" :key="user.id"> -->
  <div>
    <!-- Card 2 Div -->

    <div class="q-pa-md row flex-center items-start q-gutter-md">
      <q-card
        class="my-card my-home text-black bg-grey-4"
        style="max-width: 800px"
      >
        <div class="q-pa-md">
          <div class="row">
            <div class="col-9 text-h6">Company name {{ agency.name }}</div>
            <div class="col-6">
              <div class="row justify-between" style="max-width: 250px">
                <div class="my-home" style="width: 77px; height: 70px">
                  <q-img
                    src="~assets/Avator2.png"
                    style="height: 40px; max-width: 40px"
                  >
                  </q-img>
                  <p class="custom-text-me">Change Logo</p>
                </div>
                <div>
                  <strong>Verification status</strong> <br />
                  <q-btn
                    round
                    icon="bookmark_border"
                    size="7px"
                    color="black"
                  ></q-btn>
                  Verified
                  <q-btn
                    round
                    icon="done"
                    outline
                    color="black"
                    size="7px"
                  ></q-btn>
                </div>
              </div>
              <strong> {{ agency.name }}</strong> <br />
              <div class="q-py-md"></div>
              <strong>Address:</strong> {{ agency.billing_address }}
              <div></div>
            </div>
            <div class="col-6">
              <div class="text-h7">
                <strong>Fascial code:</strong> {{ agency.vat_code }}
              </div>
              <div class="q-py-md underline-font q-mr-sm">
                <strong>Legal Note company owner</strong>
                <span class="q-mr-sm"></span>
                <q-btn round color="black" size="5px" icon="done"></q-btn>
              </div>
              <div class="text-h7">
                <strong>Register number:</strong> {{ agency.registration_code }}
              </div>
              <div class="text-h7 q-py-md">
                <strong>Website:</strong> {{ agency.website }}
              </div>
              <div class="text-h7">
                <strong>Phone:</strong> {{ agency.phone }}
              </div>
            </div>
          </div>
          <div class="row flex-center">
            <q-btn
              size="10px"
              rounded
              color="black"
              icon="edit"
              label="Edit Company"
              class="text-white text-h7"
            ></q-btn>
          </div>
        </div>
      </q-card>
    </div>

    <!-- Card 3 Div -->

    <div class="q-pa-md row flex-center items-start q-gutter-md">
      <q-card
        class="my-card my-home text-black bg-grey-4"
        style="max-width: 800px"
      >
        <div class="q-pa-md">
          <div class="row">
            <div class="col-9 text-h6">Company name {{ agency.name }}</div>
            <div class="col-6">
              <div class="row justify-between" style="max-width: 250px">
                <div class="my-home col-4" style="width: 77px; height: 70px">
                  <q-img
                    src="~assets/Avator2.png"
                    style="height: 40px; max-width: 40px"
                  >
                  </q-img>
                  <p class="custom-text-me">Change Logo</p>
                </div>
                <div class="col-8">
                  <strong>Verification status</strong> <br />
                  <q-btn
                    round
                    icon="bookmark_border"
                    size="7px"
                    color="black"
                  ></q-btn>
                  Verified
                  <q-btn
                    round
                    icon="done"
                    outline
                    color="black"
                    size="7px"
                  ></q-btn>
                </div>
              </div>
              <strong>Company #2</strong> <br />
              <div class="q-py-md"></div>
              <strong>Address:</strong> {{ agency.billing_address }}
            </div>
            <div class="col-6">
              <div class="text-h7">
                <strong>Fascial code:</strong> {{ agency.vat_code }}
              </div>
              <div class="q-py-md underline-font q-mr-sm">
                <strong>Legal Note company owner</strong>
                <span class="q-mr-sm"></span>
                <q-btn round color="black" size="5px" icon="done"></q-btn>
              </div>
              <div class="text-h7">
                <strong>Register number:</strong> {{ agency.registration_code }}
              </div>
              <div class="text-h7 q-py-md">
                <strong>Website:</strong> {{ agency.website }}
              </div>
              <div class="text-h7">
                <strong>Phone:</strong> {{ agency.phone }}
              </div>
            </div>
          </div>
          <div class="row flex-center">
            <q-btn
              size="10px"
              rounded
              color="black"
              icon="edit"
              label="Edit Profile"
              class="text-white text-h7"
            ></q-btn>
          </div>
        </div>
      </q-card>
    </div>
    <div class="row flex-center q-pa-md">
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
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "getAgency",
  data() {
    return {
      agency: [],
    };
  },

  // SHOW
  created() {
    const options = {
      method: "GET",
      url: "https://rwapi.zupria.com/api/user/agency",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvcndhcGkuenVwcmlhLmNvbVwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY1MDY2NTQ3NCwiZXhwIjoxNjgyMjAxNDc0LCJuYmYiOjE2NTA2NjU0NzQsImp0aSI6ImRaUGlZem9YTXZZS25ITU4iLCJzdWIiOjgsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.m127K5q8Fy_6CxXEWJZyXqb_HJL4U-EUcHmdwmHTytI",
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

.my-home
  // border: 1px solid rgba(86,61,124,.2)
  background: white
  border-radius: 10px

.custom-text-me
  font-size: 8px
</style>
