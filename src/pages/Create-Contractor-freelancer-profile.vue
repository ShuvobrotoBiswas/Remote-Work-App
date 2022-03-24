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
        <div class="text-black text-bold">Anna</div>
        <div>
          <q-avatar>
            <q-img
              src="~assets/Avator10.png"
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
            Create your profile (freelancer)
          </div>
        </q-card-section>
        <q-separator />
        <div class="q-pa-md">
          <div class="row">
            <div class="col-5">
              <!-- <q-avatar size="100px" class="q-mb-sm"> -->
              <q-img sizes="200px" src="~/assets/Avator9.png"></q-img>
              <!-- </q-avatar> -->
              <div class="q-pa-md">
                <q-file
                  rounded
                  outlined
                  v-model="model"
                  label="upload new picture"
                >
                  <template v-slot:append>
                    <q-icon
                      v-if="model !== null"
                      name="close"
                      @click.stop="model = null"
                      class="cursor-pointer"
                    />
                  </template>
                </q-file>
              </div>
              <div class="q-pa-md">
                <q-btn outline bottom-slots rounded> remove exsting </q-btn>
              </div>
              <div class="q-pa-md text-h7 text-bold">Europass & Portfolio</div>
              <div class="q-pa-md">
                <q-btn
                  icon="link"
                  class="q-mr-sm text-h7"
                  rounded
                  color="black"
                >
                  Link Your Europass CV
                </q-btn>
              </div>
            </div>
            <div class="col-7">
              <q-input v-model="completeName" label="Complete name*" />
              <q-input v-model="address" label="Address*" />
              <q-input v-model="billingAddress" label="Billing address*" />
              <q-input v-model="tel" type="tel" label="Phone number" />
              <div class="text-bold q-py-md">
                Search/Select your Skills & Tools
              </div>
              <q-input v-model="search" outlined type="search">
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
            </div>
          </div>
          <q-separator />
        </div>
      </div>
    </div>

    <!-- Card 2 Div -->

    <div class="row flex-center items-start">
      <div flat bordered class="my-card" style="max-width: 800px">
        <div class="q-pa-md">
          <div class="col-9 text-h6 text-bold">
            Add relevent projects from you portfolio
          </div>
        </div>
        <div class="row bid1 text-center">
          <div class="col bid2">
            <q-img src="~assets/Avator5.png" class="image1"> </q-img>
            <div class="q-pa-mg text-center text-h7">LOGO Design</div>
          </div>
          <div class="col bid2">
            <q-img src="~assets/Avator6.png" class="image1"> </q-img>
            <div class="q-pa-mg text-center text-h7">Website Design</div>
          </div>
          <div class="col bid2">
            <q-img src="~assets/Avator7.png" class="image1"> </q-img>
            <div class="q-pa-mg text-center text-h7">UX Design</div>
          </div>
          <div class="col bid2">
            <q-img src="~assets/Avator8.png" class="image1"> </q-img>
            <div class="q-pa-mg text-center text-h7">+ Add Project</div>
          </div>
        </div>

        <div class="row q-pa-md">
          <q-btn
            size="10px"
            rounded
            color="black"
            icon="add"
            label="Add Companies"
            class="text-white text-h7"
          ></q-btn>
        </div>
        <div class="row q-pa-md">* Fields marked with "*" are mandatory.</div>
      </div>
    </div>

    <!-- Card 3 div -->
    <!-- <div class="row q-pa-md"> hello</div> -->

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
        label="Go to ID verification →"
        class="text-h7"
      ></q-btn>
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
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      completeName: ref(""),
      search: ref(""),
      tel: ref(""),
      billingAddress: "",
      address: "",
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
      pricelist1: ref("15|"),
      pricelist2: ref("55|"),
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
</style>
