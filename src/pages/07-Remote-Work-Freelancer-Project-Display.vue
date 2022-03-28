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

        <div>
          <q-avatar>
            <q-img
              src="~assets/Avator4.png"
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
      <div style="max-width: 750px">
        <div class="q-pa-md">
          <div class="row">
            <div>
              <q-card-section>
                <div class="text-h5 text-bold q-py-md text-left">
                  Logo design for Insurance Agency
                </div>
                <q-separator />
                <div class="my-font row text-left">Posted 1 hr ago</div>
                <div class="row text-7 q-py-md text-left">
                  {{ text }}
                </div>
                <q-separator />
                <div class="row q-py-md">
                  <div class="col">
                    <div class="text-h7 text-bold">Category job Project</div>
                    <div class="text-h7">Branding & logo Design</div>
                  </div>
                  <div class="col">
                    <div class="text-h7 text-bold">Project type</div>
                    <div class="text-h7">Well Defined Project</div>
                  </div>
                  <div class="col">
                    <div class="text-h7 text-bold">Payment</div>
                    <div class="text-h7">Fixed price - €500</div>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <div class="text-h7 text-bold">Duration</div>
                    <div class="text-h7">Max. 2 weeks</div>
                  </div>
                  <div class="col">
                    <div class="text-h7 text-bold">Availability in hours</div>
                    <div class="text-h7">20 h/week</div>
                  </div>
                  <div class="col">
                    <div class="text-h7 text-bold">Level of expertise</div>
                    <div class="text-h7">Middle</div>
                  </div>
                </div>
                <div class="row q-py-md">
                  <div class="col">
                    <div class="text-h7 text-bold">Required skills</div>
                    <div class="text-h7">Design</div>
                  </div>
                  <div class="col">
                    <div class="text-h7 text-bold">Type of contractor</div>
                    <div class="text-h7">Freelancer</div>
                  </div>
                  <div class="col">
                    <div class="text-h7 text-bold">Contractor availability</div>
                    <div class="text-h7">20-30h/week</div>
                  </div>
                </div>
                <div class="q-pa-md">
                  <q-btn
                    size="7px"
                    rounded
                    outline
                    class="text-black q-mr-sm text-h7"
                    >Graphic Design</q-btn
                  >
                  <q-btn
                    size="7px"
                    rounded
                    outline
                    class="text-black q-mr-sm text-h7"
                    >Logo Design</q-btn
                  >
                  <q-btn
                    size="7px"
                    rounded
                    outline
                    class="text-black q-mr-sm text-h7"
                    >Branding & Logo Design</q-btn
                  >
                   <q-btn
                    size="7px"
                    rounded
                    outline
                    class="text-black q-mr-sm text-h7"
                    >Illustrator</q-btn
                  >
                  <q-btn
                    size="7px"
                    rounded
                    outline
                    class="text-black q-mr-sm text-h7"
                  >
                    Photoshop</q-btn
                  >
                </div>
                <!-- Footer Div -->

                <div class="row flex-center q-pa-md">
                  <q-btn
                    size="8px"
                    rounded
                    color="grey"
                    label="First"
                    class="text-white text-h7"
                  ></q-btn>
                  <q-btn
                    size="6px"
                    flat
                    padding="6px"
                    icon="arrow_back_ios_new"
                    color="grey"
                    class="text-white text-h7"
                  ></q-btn>
                  <q-btn
                    size="6px"
                    padding="6px"
                    unelevated
                    color="cyan"
                    label="1"
                    class="text-white text-h7 q-mr-sm"
                  ></q-btn>
                  <q-btn
                    size="6px"
                    padding="6px"
                    outline
                    color="grey"
                    label="2"
                    class="text-white text-bold text-h7 q-mr-sm"
                  ></q-btn>
                  <q-btn
                    size="6px"
                    padding="6px"
                    outline
                    color="grey"
                    label="3"
                    class="text-white text-bold text-h7 q-mr-sm"
                  ></q-btn>
                  <q-btn
                    size="6px"
                    padding="6px"
                    outline
                    color="grey"
                    label="4"
                    class="text-white text-bold text-h7 q-mr-sm"
                  ></q-btn>
                  <q-btn
                    size="6px"
                    padding="6px"
                    outline
                    color="grey"
                    label="5"
                    class="text-white text-bold text-h7"
                  ></q-btn>
                  <q-btn
                    size="6px"
                    icon="arrow_forward_ios"
                    flat
                    padding="6px"
                    color="cyan"
                    class="text-white text-h7"
                  ></q-btn>
                  <q-btn
                    size="8px"
                    rounded
                    color="cyan"
                    outlined
                    label="Last"
                    class="text-h7"
                  ></q-btn>
                </div>
              </q-card-section>
            </div>
          </div>

          <q-separator />
        </div>
      </div>
    </div>
    <!-- Card 3 div -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
export default defineComponent({
  // name: "IndexPage",
  setup() {
    return {
      text: " We have a logo that is about 13 years old and we are looking to update/change our branding, we need a logo that is more up to date and we want to keep the versatillity. We want to go bold/innovative with this change. Previous logo is attached for reference",
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


.my-font
  font-size: 10px
</style>
