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
    <div class="row flex-center q-pa-md">
      <div class="text-black text-h7 text-center q-pr-md">
        <q-btn
          to="/Contractor-profile-display"
          dense
          flat
          color="black"
          icon="person"
        ></q-btn>
        <div>Profile</div>
      </div>
      <div class="text-black text-h7 text-center q-pr-md">
        <q-btn
          dense
          to="/01-remote-work-Client-Post-Proj"
          flat
          color="black"
          icon="addchart"
        ></q-btn>
        <div>Post a Project</div>
      </div>
      <div class="text-black text-h7 text-center q-pr-md">
        <q-btn
          dense
          flat
          to="/06-Remote-Work-Contractor-Search-Proj"
          color="black"
          icon="insert_chart_outlined"
        ></q-btn>
        <div>Projects</div>
      </div>
      <div class="text-black text-h7 text-center q-pr-md">
        <q-btn dense flat color="black" icon="mark_email_unread"></q-btn>
        <div>Messages</div>
      </div>
      <div class="text-black text-h7 text-center q-pr-md">
        <q-btn
          dense
          flat
          to="/Client-Company-Profile-Doc-Verification"
          color="black"
          icon="local_atm"
        ></q-btn>
        <div>Accounts</div>
      </div>
      <div class="text-black text-h7 text-center q-pr-md">
        <q-btn dense flat color="black" icon="tune"></q-btn>
        <div>Settings</div>
      </div>
    </div>
    <q-separator />
    <div class="row q-pa-md flex-center items-start">
      <div style="width: 1000px">
        <div class="q-pa-md">
          <div class="row timeline-wrap" style="max-width: 1000px">
            <div id="timeline"></div>
            <div class="marker mfirst timeline-icon one">
              <p>1</p>
            </div>
            <div class="marker m2 timeline-icon two">
              <p>2</p>
            </div>
            <div class="marker m3 timeline-icon three">
              <p>3</p>
            </div>
            <div class="marker m4 timeline-icon four">
              <p>4</p>
            </div>
            <div class="marker mlast timeline-icon four">
              <p>5</p>
            </div>
          </div>
        </div>
        <q-form @submit.prevent="post">
          <p class="q-pa-md text-h5 text-bold">2. CHOOSE CONTRACTORS</p>
          <div class="q-pa-md">
            <p class="text-bold">
              Choose how many contractors are needed for the project
            </p>
            <div class="q-gutter-sm">
              <q-radio
                left-label
                v-model="contractors_no"
                val="1"
                label="One"
                color="cyan"
              />
              <q-radio
                left-label
                v-model="contractors_no"
                val="2,3.."
                color="cyan"
                label="More than One"
              />
            </div>
          </div>
          <div class="row q-pa-md">
            <p class="text-bold">
              Create specific question to which the contractors will have to
              answer
            </p>

            <q-card flat class="my-card bg-teal-1" style="max-width: 800px">
              <q-card-section>
                <div class="row items-center no-wrap">
                  <div class="col">
                    <div class="text-h7 bg-teal-1">{{ lorem }}</div>
                  </div>

                  <div class="col-auto">
                    <q-btn color="cyan" round flat icon="cancel">
                      <q-menu cover auto-close>
                        <q-list>
                          <q-item clickable>
                            <q-item-section>Remove Card</q-item-section>
                          </q-item>
                        </q-list>
                      </q-menu>
                    </q-btn>
                  </div>
                </div>
              </q-card-section>
            </q-card>
            <q-card flat class="my-card q-mt-md bg-teal-1">
              <q-card-section>
                <div class="row items-center no-wrap">
                  <div class="col">
                    <div class="text-h7 bg-teal-1">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip?
                    </div>
                  </div>

                  <div class="col-auto">
                    <q-btn color="cyan" round flat icon="cancel">
                      <q-menu cover auto-close>
                        <q-list>
                          <q-item clickable>
                            <q-item-section>Remove Card</q-item-section>
                          </q-item>
                        </q-list>
                      </q-menu>
                    </q-btn>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="q-mt-md">
            <q-item>
              <q-item-section>
                <fieldset style="border-radius: 7px" class="q-pa-md">
                  <legend class="text-cyan">Add Question</legend>
                  <q-input
                    borderless
                    v-model="questions"
                    placeholder="Lorem ipsum dolor sit amet"
                  />
                </fieldset>
              </q-item-section>
              <q-item-section side>
                <q-btn padding="xs" round color="cyan" icon="add" />
              </q-item-section>
            </q-item>
          </div>
          <div class="q-pa-md">
            <p class="text-weight-bold">
              Choose the technological skills and qualifications required of the
              contractor
            </p>
            <div class="row">
              <div class="col" style="max-width: 200px">
                <q-expansion-item
                  class="q-mt-md"
                  dense
                  dense-toggle
                  expand-separator
                  label="Project Catagory*"
                  style="max-width: 350px"
                >
                  <q-list dense bordered padding class="borders bg-grey-2">
                    <q-item clickable v-ripple>
                      <q-item-section>
                        <q-checkbox
                          v-model="skill_ids"
                          size="0px"
                          dence
                          true-value="Angular JS"
                          label="Angular JS"
                        />
                      </q-item-section>
                    </q-item>

                    <q-item clickable v-ripple>
                      <q-item-section>
                        <q-checkbox
                          v-model="skill_ids"
                          size="0px"
                          dence
                          true-value="Java"
                          label="Java"
                        />
                      </q-item-section>
                    </q-item>

                    <q-item clickable v-ripple>
                      <q-item-section>
                        <q-checkbox
                          v-model="skill_ids"
                          size="0px"
                          dence
                          true-value="PHP"
                          label="PHP"
                        />
                      </q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                      <q-item-section>
                        <q-checkbox
                          v-model="skill_ids"
                          size="0px"
                          dence
                          true-value="Etc."
                          label="Etc."
                        />
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-expansion-item>
              </div>
              <div class="col q-pa-md">
                <q-btn
                  rounded
                  outline
                  size="6px"
                  icon-right="cancel"
                  color="black"
                  class="q-mr-sm"
                  label="Angular js"
                />
                <q-btn
                  rounded
                  outline
                  size="6px"
                  icon-right="cancel"
                  color="black"
                  class="q-mr-sm"
                  label="Java"
                />
                <q-btn
                  rounded
                  outline
                  size="6px"
                  icon-right="cancel"
                  color="black"
                  class="q-mr-sm"
                  label="PHP"
                />
              </div>
            </div>
          </div>
          <div class="q-pa-md">
            <p class="text-weight-bold">
              Choose the desired level of expertise of the contractors
            </p>
            <div class="q-gutter-sm">
              <q-radio
                left-label
                v-model="exp_level"
                val="Junior"
                label="Junior"
                color="cyan"
              />
              <q-radio
                left-label
                v-model="exp_level"
                color="cyan"
                val="Middle"
                label="Middle"
              />
              <q-radio
                left-label
                v-model="exp_level"
                color="cyan"
                val="Senior"
                label="Senior"
              />
            </div>
          </div>
          <div class="q-pa-md">
            <p class="text-weight-bold">Contractor Availability</p>
            <div class="q-gutter-sm">
              <q-radio
                left-label
                v-model="contractor_availability"
                color="cyan"
                val="Less then 20hour/Week"
                label="Less then 20hour/Week"
              />
              <q-radio
                left-label
                v-model="contractor_availability"
                color="cyan"
                val="20-30 hours/Week"
                label="20-30 hours/Week"
              />
              <q-radio
                left-label
                v-model="contractor_availability"
                color="More Than"
                val="More than 30 hours/Week"
                label="More than 30 hours/Week"
              />
            </div>
          </div>
          <div class="q-pa-md">
            <p class="text-weight-bold">Choose project visibility*</p>
            <div class="q-gutter-sm">
              <q-radio
                left-label
                v-model="project_visibility"
                color="cyan"
                val="Only on the platform"
                label="Only on the platform"
              />
              <q-radio
                left-label
                v-model="project_visibility"
                color="cyan"
                val="Indexable by search engines"
                label="Indexable by search engines"
              />
              <q-radio
                left-label
                v-model="project_visibility"
                color="cyan"
                val="Available only to invited contractors"
                label="Available only to invited contractors"
              />
            </div>
          </div>
          <div class="q-pa-md">
            <p class="text-weight-bold">Choose preferred type of contractor</p>
            <div class="q-gutter-sm">
              <q-radio
                left-label
                v-model="profile_type"
                val="Freelancer"
                label="Freelancer"
                color="cyan"
              />
              <q-radio
                left-label
                v-model="profile_type"
                color="cyan"
                val="Agency"
                label="Agency"
              />
            </div>
          </div>
          <p class="q-pa-md">Fields marked with "*" are mandatory</p>
          <div class="flex justify-center">
            <q-btn
              unelevated
              size="10px"
              rounded
              style="width: 100px"
              color="grey-6"
              label="Back"
              to="/01-remote-work-Client-Post-Proj"
              class="q-mr-md"
            />
            <q-btn
              unelevated
              size="10px"
              type="submit"
              style="width: 100px"
              rounded
              color="cyan"
              label="Next"
            />
          </div>
        </q-form>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import axios from "axios";
// import TimeLine from "components/Timeline.vue";

export default defineComponent({
  // components: {
  //   TimeLine,
  // },
  setup() {
    const submitResult = ref([]);

    return {
      submitResult,
      contractors_no: ref("1"),
      skill_ids: ref("Angular JS"),
      questions: ref(""),
      exp_level: ref("Junior"),
      contractor_availability: ref("Less then 20hour/Week"),
      project_visibility: ref("Available only to invited contractors"),
      profile_type: ref("Agency"),

      lorem:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

      onSubmit(evt) {
        const formData = new FormData(evt.target);
        const data = [];

        for (const [name, value] of formData.entries()) {
          data.push({
            name,
            value,
          });
        }

        submitResult.value = data;
      },
    };
  },
  methods: {
    post() {
      const post = new FormData();
      post.append("profile_type", this.profile_type);
      post.append("contractors_no", this.contractors_no);
      post.append("questions", this.questions);
      post.append("skill_ids", this.skill_ids);
      post.append("exp_level", this.exp_level);
      post.append("contractor_availability", this.contractor_availability);
      post.append("project_visibility", this.project_visibility);

      const options = {
        method: "POST",
        url: "https://rwapi.zupria.com/api/post",
        data: post,
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
          this.id = response.data.data.id;
          this.token = response.data.token;
          localStorage.setItem("token", response.data.token);
          this.$router.push("/03-remote-work-Client-Post-Proj");
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  },
});
</script>
<style lang="sass" scoped>
.container
  width: 1200px
  margin: auto

.row + .row
  margin-top: 1rem
.timeline-wrap
  margin: 20%% 20%
  top: 100
  position: relative


#timeline
  height: 4px
  width: 100%
  background-color: #48D1CC
  position: relative


.marker
  z-index: 1000
  color: #fff
  width: 32px
  height: 32px
  line-height: 32px
  font-size: 1.4em
  text-align: center
  position: absolute
  margin-left: -25px
  background-color: #008080
  border-radius: 50%


.timeline-icon.one
  background-color: #008080 !important


.timeline-icon.two
  background-color: #008080 !important


.timeline-icon.three
  background-color: #48D1CC !important


.timeline-icon.four
  background-color: #48D1CC !important


.mfirst
  top: -16px


.m2
  top: -16px
  left: 25%


.m3
  top: -16px
  left: 50%


.m4
  top: -16px
  left: 75%

.mlast
  top: -16px
  left: 100%
</style>
