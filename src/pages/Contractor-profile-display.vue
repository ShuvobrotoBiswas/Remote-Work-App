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
      <div flat bordered class="my-card" style="max-width: 750px">
        <q-card-section>
          <div class="text-h6 text-center">
            Your Profile/Accounts (account and companies)
          </div>
        </q-card-section>
        <q-separator />
        <div class="q-pa-md">
          <div class="row">
            <div class="col-5">
              <!-- <q-avatar size="100px" class="q-mb-sm"> -->
              <q-img sizes="200px" src="~/assets/Avator1.png"></q-img>
              <!-- </q-avatar> -->
            </div>
            <div class="col-7">
              <div class="text-h6 text-bold">Tom Petty</div>
              <div class="text-h7 q-py-md">
                <strong>Address:</strong> Street Name, etc.
              </div>
              <div class="text-h7">
                <strong> Billing address:</strong> Lorem ipsum dolor sit amet
              </div>
              <div class="text-h7 q-py-md">
                <strong>Phone:</strong> +04072123456789
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

          <q-separator />
        </div>
      </div>
    </div>

    <!-- Card 2 Div -->

    <div class="q-pa-md row flex-center items-start q-gutter-md">
      <q-card class="my-card text-black bg-grey-4" style="max-width: 800px">
        <div class="q-pa-md">
          <div class="row">
            <div class="col-9 text-h6">Company name [Company #1]</div>
            <div class="col-6">
              <q-img
                src="~assets/Avator2.png"
                style="height: 40px; max-width: 40px"
              >
              </q-img>
              <strong>Verification status</strong> <br />
              ✓ Verified ✓ <br />
              <Strong>Company #1</Strong> <br />
              <div class="q-py-md"></div>
              <strong>Address:</strong> Via dei Faggi 24 , Rome, 254321, Italy
              <div></div>
              <br />
              <strong>Description</strong> <br />
              <!-- <div class="q-py-md"></div> -->
              {{ lorem }} <br />
              <div class="q-py-md"></div>
              <strong>Price range:</strong> €15-55/hour <br />
              <div class="q-py-md"></div>
              <Strong>Skills</Strong>
              <div>
                <q-btn
                  size="7px"
                  rounded
                  color="white"
                  class="text-black q-mr-sm text-h7"
                  >Graphic Design</q-btn
                >
                <q-btn
                  size="7px"
                  rounded
                  color="white"
                  class="text-black q-mr-sm text-h7"
                  >Logo Design</q-btn
                >
                <q-btn
                  size="7px"
                  rounded
                  color="white"
                  class="text-black q-mr-sm text-h7"
                  >Web design</q-btn
                >
                <q-btn
                  size="7px"
                  rounded
                  color="white"
                  class="text-black text-h7"
                  >UI design</q-btn
                >
              </div>
            </div>
            <div class="col-6">
              <div class="text-h7">
                <strong>Fascial code:</strong> MTS SMI 84R11 Z114H
              </div>
              <div class="text-h7 q-py-md">
                <strong>Legal note comapany owner</strong> ✔
              </div>
              <div class="text-h7">
                <strong>Register number:</strong> 123 456 789
              </div>
              <div class="text-h7 q-py-md">
                <strong>Website:</strong> https://domain.com
              </div>
              <div class="text-h7"><strong>Phone:</strong> +39 321 654 987</div>
              <div class="text-h7 q-py-md">
                <strong>Freelanchers associated</strong>
              </div>
              <div>
                <q-btn
                  size="7px"
                  rounded
                  color="white"
                  class="text-black q-mr-sm text-h7"
                  >Gill Dobrica</q-btn
                >
                <q-btn
                  size="7px"
                  rounded
                  color="white"
                  class="text-black q-mr-sm text-h7"
                  >Viorica Dancila</q-btn
                >
                <q-btn
                  size="7px"
                  rounded
                  color="white"
                  class="text-black text-h7"
                  >Gabriel Cotabita</q-btn
                >
              </div>
              <br />
              <div class="text-h7 q-py-md">
                <strong>Projects job range</strong>
              </div>
              <div>
                <q-btn
                  size="7px"
                  rounded
                  color="white"
                  class="text-black q-mr-sm text-h7"
                  >Branding & Logo Design</q-btn
                >
                <q-btn
                  size="7px"
                  rounded
                  color="white"
                  class="text-black text-h7"
                  >Web Design</q-btn
                >
              </div>
              <br />
              <div class="text-h7 q-py-md">
                <strong>Relevent projects from your portfolio</strong>
              </div>
              <div>
                <q-btn
                  size="7px"
                  rounded
                  color="white"
                  class="text-black q-mr-sm text-h7"
                  >Logo Design</q-btn
                >
                <q-btn
                  size="7px"
                  rounded
                  color="white"
                  class="text-black q-mr-sm text-h7"
                  >Website Design</q-btn
                >
                <q-btn
                  size="7px"
                  rounded
                  color="white"
                  class="text-black text-h7"
                  >UX Design</q-btn
                >
              </div>
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
        </div>
      </q-card>
    </div>

    <!-- Card 3 Div -->

    <div class="q-pa-md row flex-center items-start q-gutter-md">
      <q-card class="my-card text-black bg-grey-4" style="max-width: 800px">
        <div class="q-pa-md">
          <div class="row">
            <div class="col-9 text-h6">Company name [Company #2]</div>
            <div class="col-6">
              <q-img
                src="~assets/Avator2.png"
                style="height: 40px; max-width: 40px"
              >
              </q-img>
              <strong>Verification status</strong> <br />
              ✓ Verified ✓ <br />
              <Strong>Company #2</Strong> <br />
              <div class="q-py-md"></div>
              <strong>Address:</strong> Via dei Faggi 24 , Rome, 254321, Italy
              <div></div>
              <br />
              <strong>Description</strong> <br />
              <!-- <div class="q-py-md"></div> -->
              {{ lorem }} <br />
              <div class="q-py-md"></div>
              <strong>Price range:</strong> €15-55/hour <br />
              <div class="q-py-md"></div>
              <Strong>Skills</Strong>
              <div>
                <q-btn
                  size="7px"
                  rounded
                  color="white"
                  class="text-black q-mr-sm text-h7"
                  >Graphic Design</q-btn
                >
                <q-btn
                  size="7px"
                  rounded
                  color="white"
                  class="text-black q-mr-sm text-h7"
                  >Logo Design</q-btn
                >
                <q-btn
                  size="7px"
                  rounded
                  color="white"
                  class="text-black q-mr-sm text-h7"
                  >Web design</q-btn
                >
                <q-btn
                  size="7px"
                  rounded
                  color="white"
                  class="text-black text-h7"
                  >UI design</q-btn
                >
              </div>
            </div>
            <div class="col-6">
              <div class="text-h7">
                <strong>Fascial code:</strong> MTS SMI 84R11 Z114H
              </div>
              <div class="text-h7 q-py-md">
                <strong>Legal note comapany owner</strong> ✔
              </div>
              <div class="text-h7">
                <strong>Register number:</strong> 123 456 789
              </div>
              <div class="text-h7 q-py-md">
                <strong>Website:</strong> https://domain.com
              </div>
              <div class="text-h7"><strong>Phone:</strong> +39 321 654 987</div>
              <div class="text-h7 q-py-md">
                <strong>Freelanchers associated</strong>
              </div>
              <div>
                <q-btn
                  size="7px"
                  rounded
                  color="white"
                  class="text-black q-mr-sm text-h7"
                  >Gill Dobrica</q-btn
                >
                <q-btn
                  size="7px"
                  rounded
                  color="white"
                  class="text-black q-mr-sm text-h7"
                  >Viorica Dancila</q-btn
                >
                <q-btn
                  size="7px"
                  rounded
                  color="white"
                  class="text-black text-h7"
                  >Gabriel Cotabita</q-btn
                >
              </div>
              <br />
              <div class="text-h7 q-py-md">
                <strong>Projects job range</strong>
              </div>
              <div>
                <q-btn
                  size="7px"
                  rounded
                  color="white"
                  class="text-black q-mr-sm text-h7"
                  >Branding & Logo Design</q-btn
                >
                <q-btn
                  size="7px"
                  rounded
                  color="white"
                  class="text-black text-h7"
                  >Web Design</q-btn
                >
              </div>
              <br />
              <div class="text-h7 q-py-md">
                <strong>Relevent projects from your portfolio</strong>
              </div>
              <div>
                <q-btn
                  size="7px"
                  rounded
                  color="white"
                  class="text-black q-mr-sm text-h7"
                  >Logo Design</q-btn
                >
                <q-btn
                  size="7px"
                  rounded
                  color="white"
                  class="text-black q-mr-sm text-h7"
                  >Website Design</q-btn
                >
                <q-btn
                  size="7px"
                  rounded
                  color="white"
                  class="text-black text-h7"
                  >UX Design</q-btn
                >
              </div>
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
        </div>
      </q-card>
    </div>
    <div class="row flex-center q-pa-md">
      <!-- <div class="col"></div> -->
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

export default defineComponent({
  name: "IndexPage",
  setup() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
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
</style>
