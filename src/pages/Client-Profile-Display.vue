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
            Your client profile/Account (client)
          </div>
        </q-card-section>
        <q-separator />
        <div class="q-pa-md">
          <div class="row">
            <div class="col-5">
              <!-- <q-avatar size="100px" class="q-mb-sm"> -->
              <q-img sizes="200px" src="~/assets/Avator11.png"></q-img>
              <!-- </q-avatar> -->
            </div>
            <div class="col-7">
              <div class="text-h6 text-bold">Laura Plamer</div>
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
            <div class="row flex-center">
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
                class="text-white flex-center text-h7"
              ></q-btn>
            </div>
          </div>

          <q-separator />

          <!-- Card 2 Div -->

          <div class="row flex-center">
            <div flat bordered class="my-card" style="max-width: 800px">
              <div class="row q-pa-md flex-center">
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
          </div>
        </div>
      </div>
    </div>

    <!-- Card 3 div -->

    <!-- Footer Div -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
export default defineComponent({
  // name: "IndexPage",
  setup() {
    return {
      
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

</style>
