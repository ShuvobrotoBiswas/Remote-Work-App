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
        <div class="text-black q-mr-sm">
          <q-btn flat label="LOGOUT" dense to="/Create-Account-Step3"></q-btn>
        </div>
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
            <q-btn
              dense
              flat
              to="/Contractor-profile-display"
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
              flat
              to="/01-remote-work-Client-Post-Proj"
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
              to="/06-Remote-Work-Contractor-Search-Proj"
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
    <div
      v-for="post in posts"
      :key="post.id"
      class="row flex-center items-start"
    >
      <div style="max-width: 750px">
        <div class="row">
          <q-card-section>
            <div class="text-h5 text-bold q-py-md text-left">
              {{ post.title }}
              <!-- <li v-for="post in posts" :key="post.id" > {{post.title}} </li> -->
              <!-- <div v-for="post in posts" :key="post.id"> Hello {{post.title}} </div> -->
            </div>
            <q-separator />
            <div class="my-font row text-left">Posted 1 hr ago</div>
            <div class="row text-7 q-py-md text-left">
              {{ post.description }}
            </div>
            <q-separator />
            <div class="row q-py-md">
              <div class="col">
                <div class="text-h7 text-bold">Category job Project</div>
                <div class="text-h7">{{ post.post_type }}</div>
              </div>
              <div class="col">
                <div class="text-h7 text-bold">Project type</div>
                <div class="text-h7">{{ post.post_type_text }}</div>
              </div>
              <div class="col">
                <div class="text-h7 text-bold">Payment</div>
                <div class="text-h7">
                  {{ post.price_type }} price - €{{ post.budget }}
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="text-h7 text-bold">Duration</div>
                <div class="text-h7">
                  Max. {{ post.project_duration_weeks }} weeks
                </div>
              </div>
              <div class="col">
                <div class="text-h7 text-bold">Availability in hours</div>
                <div class="text-h7">{{ post.max_hrs_per_week }} h/week</div>
              </div>
              <div class="col">
                <div class="text-h7 text-bold">Level of expertise</div>
                <div class="text-h7">{{ post.exp_level }}</div>
              </div>
            </div>
            <div class="row q-py-md">
              <div class="col">
                <div class="text-h7 text-bold">Required skills</div>
                <div class="text-h7">{{ post.skills }}</div>
              </div>
              <div class="col">
                <div class="text-h7 text-bold">Type of contractor</div>
                <div class="text-h7">{{ post.profile_type }}</div>
              </div>
              <div class="col">
                <div class="text-h7 text-bold">Contractor availability</div>
                <div class="text-h7">{{ post.min_hrs_per_week }}h/week</div>
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

            <q-separator />

            <div class="q-py-md text-bold text-h7">Attachments</div>
            <q-btn
              size="13px"
              flat
              icon="content_copy"
              label="File1.pdf"
              class="text-black row text-h7"
            ></q-btn>
            <q-btn
              size="13px"
              flat
              color="black"
              icon="content_copy"
              label="File2.eps"
              class="text-grey row text-h7"
            ></q-btn>
            <q-btn
              size="13px"
              flat
              icon="content_copy"
              label="File3.psd"
              class="text-black row text-h7"
            ></q-btn>

            <q-separator />

            <div class="row q-py-md">
              <div class="col">
                <div class="text-h7 text-bold">Client rating</div>
                <div class="text-h7">
                  <q-rating
                    v-model="ratingModel"
                    size="15px"
                    :max="5"
                    color="black"
                  />
                </div>
              </div>
              <div class="col">
                <div class="text-h7 text-bold">Client Location</div>
                <div class="text-h7">Argentina</div>
              </div>
              <div class="col">
                <div class="text-h7 text-bold"></div>
                <div class="text-h7"></div>
              </div>
            </div>
            <!-- Footer Div -->

            <div class="row flex-center">
              <div class="col">
                <q-btn
                  size="8px"
                  rounded
                  color="grey"
                  to="06-Remote-Work-Contractor-Search-Proj"
                  label="Back to Search"
                  class="text-white text-h7"
                ></q-btn>
              </div>

              <div class="col-5">
                <q-btn
                  size="8px"
                  rounded
                  color="black"
                  label="Request additional information"
                  class="text-white text-h7"
                ></q-btn>
              </div>
              <div class="col-3">
                <q-btn
                  size="8px"
                  rounded
                  color="black"
                  to="08-REMOTE-WORK-CONTRACTOR-APPLICATION-TO-PROJECT-BY-FREELANCER"
                  label="Apply to project"
                  class="text-white text-h7"
                ></q-btn>
              </div>
            </div>
          </q-card-section>
        </div>
      </div>
    </div>
    <!-- Card 3 div -->
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
export default {
  // name: "IndexPage",
  data() {
    return {
      text: " We have a logo that is about 13 years old and we are looking to update/change our branding, we need a logo that is more up to date and we want to keep the versatillity. We want to go bold/innovative with this change. Previous logo is attached for reference",
      ratingModel: ref(2),
      posts: [],
      title: "",
    };
  },
  // SHOW
  created() {
    const options = {
      method: "GET",
      url: "https://rwapi.zupria.com/api/post/1",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvcndhcGkuenVwcmlhLmNvbVwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY1MDY2NTQ3NCwiZXhwIjoxNjgyMjAxNDc0LCJuYmYiOjE2NTA2NjU0NzQsImp0aSI6ImRaUGlZem9YTXZZS25ITU4iLCJzdWIiOjgsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.m127K5q8Fy_6CxXEWJZyXqb_HJL4U-EUcHmdwmHTytI",
      },
    };
    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        this.posts = response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  },
};
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

.my-font
  font-size: 10px
</style>
