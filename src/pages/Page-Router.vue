<template>
  <div class="q-pa-md">
    <div class="absolute-center q-pa-md">
      <!-- Card 1 Div -->

      <div class="q-pa-md  q-py-md row flex flex-center items-start q-gutter-md">
        <q-card
          class="my-card this-card flex flex-center text-black bg-white"
          style="max-width: 750px"
        >
          <div class="q-pa-md">
            <div class="row">
              <q-list>
                <div class="q-pa-md">
                  <q-btn
                    to="Create-Account-Step1"
                    label="Create-Account-Step1"
                    outline style="color: goldenrod;"
                  >
                  </q-btn>
                </div>
                <div class="q-pa-md">
                  <q-btn
                    to="Create-Account-Step2"
                    label="Create-Account-Step2"
                    outline style="color: goldenrod;"
                  >
                  </q-btn>
                </div>
                <div class="q-pa-md">
                  <q-btn
                    to="Create-Account-Step2-1"
                    label="Create-Account-Step2-1"
                    outline style="color: goldenrod;"
                  >
                  </q-btn>
                </div>
                <div class="q-pa-md">
                  <q-btn
                    to="Create-Account-Step3"
                    label="Create-Account-Step3"
                    outline style="color: goldenrod;"
                  >
                  </q-btn>
                </div>
                <div class="q-pa-md">
                  <q-btn
                    to="Contractor-profile-display"
                    label="Contractor-profile-display"
                    outline style="color: goldenrod;"
                  >
                  </q-btn>
                </div>
                <div class="q-pa-md">
                  <q-btn
                    to="Create-Contractor-Profile"
                    label="Create-Contractor-Profile"
                    outline style="color: goldenrod;"
                  >
                  </q-btn>
                </div>
                <div class="q-pa-md">
                  <q-btn
                    to="Create-Contractor-freelancer-profile"
                    label="Create-Contractor-freelancer-profile"
                    outline style="color: goldenrod;"
                  >
                  </q-btn>
                </div>
                <div class="q-pa-md">
                  <q-btn
                    to="Create-Client-Profile"
                    label="Create-Client-Profile"
                    outline style="color: goldenrod;"
                  >
                  </q-btn>
                </div>
                <div class="q-pa-md">
                  <q-btn
                    to="Create-Client-Company-Profile"
                    label="Create-Client-Company-Profile"
                    outline style="color: goldenrod;"
                  >
                  </q-btn>
                </div>
                <div class="q-pa-md">
                  <q-btn
                    to="Client-Company-Profile-Doc-Verification"
                    label="Client-Company-Profile-Doc-Verification"
                    outline style="color: goldenrod;"
                  >
                  </q-btn>
                </div>
                <div class="q-pa-md">
                  <q-btn
                    to="Client-Profile-Doc-Verification"
                    label="Client-Profile-Doc-Verification"
                    outline style="color: goldenrod;"
                  >
                  </q-btn>
                </div>
                <div class="q-pa-md">
                  <q-btn
                    to="Client-Profile-Display"
                    label="Client-Profile-Display"
                    outline style="color: goldenrod;"
                  >
                  </q-btn>
                </div>
                <div class="q-pa-md">
                  <q-btn
                    to="Contractor-freelancer-profile-display"
                    label="Contractor-freelancer-profile-display"
                    outline style="color: goldenrod;"
                  >
                  </q-btn>
                </div>
                <div class="q-pa-md">
                  <q-btn
                    to="Client-Company-Profile-Display"
                    label="Client-Company-Profile-Display"
                    outline style="color: goldenrod;"
                  >
                  </q-btn>
                </div>
                <div class="q-pa-md">
                  <q-btn
                    to="Create--Contractor-Company-Profile-Add-Freelancers"
                    label="Create--Contractor-Company-Profile-Add-Freelancers"
                    outline style="color: goldenrod;"
                  >
                  </q-btn>
                </div>
              </q-list>
            </div>
          </div>
        </q-card>
      </div>

      <!-- Footer Div -->
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
export default defineComponent({
  // name: "IndexPage",
  setup() {
    return {
      confirm_password: ref(null),
      email: ref(null),
      password: ref(null),
      confirm_password1: ref(null),
      email1: ref(null),
      password1: ref(null),
      submit: "",
    };
  },
});
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
  margin-top: 20rem


.row > div
  padding: 10px 15px
  // background: rgba(86,61,124,.15)
  // border: 1px solid rgba(86,61,124,.2)
.row + .row
  margin-top: 1rem
.bid1
  // background: rgba(255,0,0,.1)
  border: 1px solid rgba(86,61,124,.2)
  margin-top: 1rem
.bid2
  border: 1px solid rgba(86,61,124,.2)
  height: 100px

.image1
  height: 70px
  width: 80px

.company
  background: white
  height: 75px
  width: 85px
  rounded

.description

.this-card
  // background: rgba(255,0,0,.1)
  border-radius: 30px

</style>
