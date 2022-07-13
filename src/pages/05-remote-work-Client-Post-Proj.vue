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
              to="/Contractor-profile-display"
              flat
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
    <q-form @submit.prevent="post">
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

          <p class="q-pa-md text-h5 text-bold">5. REVIEW & PUBLISH</p>
          <div class="text-h6 q-pa-md">DEFINE PROJECT</div>
          <div class="q-pa-md">
            <p class="text-weight-bold">Project title</p>
            <fieldset style="border-radius: 7px; max-width: 850px">
              <legend class="text-cyan">Project Title*</legend>
              <q-input borderless v-model="title" placeholder="Project name" />
            </fieldset>
          </div>
          <div class="q-pa-md">
            <p class="text-weight-bold">Project Description</p>
            <fieldset style="border-radius: 7px; max-width: 850px">
              <legend class="text-cyan">Project Description</legend>
              <q-input
                borderless
                v-model="description"
                placeholder="Lorem ipsum dolor sit amet"
              />
            </fieldset>
          </div>
          <div class="q-pa-md">
            <q-file
              bg-color="cyan"
              style="width: 150px"
              class="q-mt-md"
              filled
              v-model="attachments"
              label="Upload File"
            >
              <template v-slot:prepend>
                <q-icon name="add" />
              </template>
            </q-file>
          </div>
          <div class="row q-pa-md">
            <q-btn
              size="7px"
              rounded
              outline
              icon-right="cancel"
              color="white"
              class="text-black q-mr-sm text-h7"
              >Color Scheme.jpg</q-btn
            >
            <q-btn
              size="7px"
              rounded
              outline
              icon-right="cancel"
              color="white"
              class="text-black q-mr-sm text-h7"
            >
              Brand identity Guidelines.pdf</q-btn
            >
            <q-btn
              size="7px"
              rounded
              outline
              icon-right="cancel"
              color="white"
              class="text-black q-mr-sm text-h7"
              >Brief.doc</q-btn
            >
          </div>
          <div style="max-width: 300px" class="q-pa-md">
            <p class="text-h6 text-bold">Category job project</p>
            <q-item>
              <q-item-section>
                <q-item-label>Full Stack Development</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn padding="xs" round color="cyan" icon="edit" />
              </q-item-section>
            </q-item>
          </div>
          <div class="q-pa-md">
            <q-item tag="label" v-ripple>
              <q-item-section avatar top>
                <q-checkbox v-model="colorbox" val="" color="cyan" />
              </q-item-section>
              <q-item-section>
                <q-item-label
                  >NDA(Non Disclosure agreement)- contractor undertakes not to
                  disclose to anyone what is in the document for a period
                  established by the client only contractors who sign the NDA
                  will receive access to the project data.</q-item-label
                >
              </q-item-section>
            </q-item>
          </div>
          <q-separator color="cyan" />
          <div class="q-pa-md">
            <p class="text-h6 text-bold">CONTRACTORS</p>
            <div>
              <p class="text-h6 text-bold">Skills required</p>
            </div>
            <div style="max-width: 400px">
              <q-item>
                <div class="row">
                  <q-btn
                    size="7px"
                    rounded
                    outline
                    icon-right="cancel"
                    color="white"
                    class="text-black q-mr-sm text-h7"
                    >Angular JS</q-btn
                  >
                  <q-btn
                    size="7px"
                    rounded
                    outline
                    icon-right="cancel"
                    color="white"
                    class="text-black q-mr-sm text-h7"
                  >
                    Java</q-btn
                  >
                  <q-btn
                    size="7px"
                    rounded
                    outline
                    icon-right="cancel"
                    color="white"
                    class="text-black q-mr-sm text-h7"
                    >PHP</q-btn
                  >
                </div>
                <q-item-section side>
                  <q-btn padding="xs" round color="cyan" icon="edit" />
                </q-item-section>
              </q-item>
            </div>
            <div style="max-width: 400px" class="q-py-md">
              <q-item>
                <q-item-section>
                  <q-item-label class="text-h6 text-bold"
                    >Contractors needed for the project</q-item-label
                  >
                  <q-item-label caption>5 Contractors </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-btn padding="xs" round color="cyan" icon="edit" />
                </q-item-section>
              </q-item>
            </div>
            <div>
              <p class="text-weight-bold">Question for contractors</p>
              <q-card flat class="my-card bg-teal-1" style="max-width: 850px">
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
              <q-card
                flat
                class="my-card q-mt-md bg-teal-1"
                style="max-width: 750px"
              >
                <q-card-section>
                  <div class="row items-center no-wrap">
                    <div class="col">
                      <div class="text-h7 bg-teal-1">
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip?
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
              <q-item style="max-width: 180px">
                <q-item-section>
                  <q-item-label>Add Question</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-btn padding="xs" round color="cyan" icon="add" />
                </q-item-section>
              </q-item>
            </div>
            <div class="q-mt-md">
              <p class="text-weight-bold">
                Choose the desired level of expertise of the contractors
              </p>
              <div class="row">
                <div class="col-2">
                  <q-radio
                    left-label
                    v-model="exp_level"
                    val="Junior"
                    label="Junior"
                    color="cyan"
                  />
                </div>
                <div class="col-2">
                  <q-radio
                    left-label
                    v-model="exp_level"
                    color="cyan"
                    val="Middle"
                    label="Middle"
                  />
                </div>
                <div class="col-2">
                  <q-radio
                    left-label
                    v-model="exp_level"
                    color="cyan"
                    val="Senior"
                    label="Senior"
                  />
                </div>
              </div>
            </div>
            <div class="q-mt-md">
              <p class="text-weight-bold">Contractor Availability</p>
              <div class="row">
                <div class="col">
                  <q-radio
                    left-label
                    v-model="contractor_availability"
                    color="cyan"
                    val="Less then 20hour/Week"
                    label="Less then 20hour/Week"
                  />
                </div>
                <div class="col">
                  <q-radio
                    left-label
                    v-model="contractor_availability"
                    color="cyan"
                    val="20-30 hours/Week"
                    label="20-30 hours/Week"
                  />
                </div>
                <div class="col">
                  <q-radio
                    left-label
                    v-model="contractor_availability"
                    color="More Than"
                    val="More than 30 hours/Week"
                    label="More than 30 hours/Week"
                  />
                </div>
              </div>
            </div>
            <div style="max-width: 300px" class="q-py-md">
              <p class="text-h7 text-bold">Preferred type of contractor</p>
              <q-item style="max-width: 140px">
                <q-item-section>
                  <q-item-label>Agency</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-btn padding="xs" round color="cyan" icon="edit" />
                </q-item-section>
              </q-item>
            </div>
            <div style="max-width: 300px" class="q-py-md">
              <p class="text-h7 text-bold">Contractor availability</p>
              <q-item style="max-width: 170px">
                <q-item-section>
                  <q-item-label>20-30 h/week</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-btn padding="xs" round color="cyan" icon="edit" />
                </q-item-section>
              </q-item>
            </div>
            <q-separator color="cyan" />
            <p class="text-bold text-h6 q-py-md">PAYMENT & BUDGET</p>
            <div>
              <p class="text-bold text-h6">Project Time</p>
              <div class="row">
                <div class="col">
                  <q-radio
                    left-label
                    color="cyan"
                    v-model="project_duration_weeks"
                    val="2"
                    label="Max. 2 Weeks"
                  />
                </div>
                <div class="col">
                  <q-radio
                    left-label
                    color="cyan"
                    v-model="project_duration_weeks"
                    val="4"
                    label="Max. 1 Month"
                  />
                </div>
                <div class="col">
                  <q-radio
                    left-label
                    color="cyan"
                    v-model="project_duration_weeks"
                    val="12"
                    label="Max. 3 Month"
                  />
                </div>
              </div>
            </div>
            <div>
              <p class="text-h6">Payment</p>
              <p class="text-weight-bold">Type of Payment</p>
              <div class="row">
                <div class="col">
                  <q-radio
                    left-label
                    color="cyan"
                    v-model="price_type"
                    val="hourly"
                    label="Hourly Payment"
                  />
                </div>
                <div class="col">
                  <q-radio
                    left-label
                    color="cyan"
                    v-model="price_type"
                    val="fixed"
                    label="Fixed Price"
                  />
                </div>
              </div>
            </div>

            <div class="q-mt-md">
              <p class="text-h7 text-bold">Rate of Payment</p>
              <fieldset
                style="border-radius: 7px; max-width: 200px; max-height: 70px"
              >
                <legend class="text-cyan">Maximum Rate</legend>
                <q-input borderless v-model="maximum_rate" placeholder="2600" />
              </fieldset>
            </div>
          </div>
          <q-separator color="cyan" />
          <div class="q-pa-md">
            <p class="text-bold text-h6">INVITATIONS</p>
            <q-item style="max-width: 172px">
              <q-item-section>
                <q-item-label caption>Add invitations</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn
                  padding="xs"
                  round
                  color="cyan"
                  icon="add_circle_outline"
                />
              </q-item-section>
            </q-item>
            <div class="flex">
              <q-item clickable v-ripple v-model="invitation_profile_ids">
                <q-item-section side>
                  <q-avatar circle size="48px">
                    <img src="~assets/Avator18.png" />
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Gill Dobrica</q-item-label>
                  <q-item-label caption>Senior Bacend Developer</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple v-model="invitation_profile_ids">
                <q-item-section side>
                  <q-avatar circle size="48px">
                    <img src="~assets/Avator10.png" />
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Vioroca Dancila</q-item-label>
                  <q-item-label caption>Middle Bacend Developer</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple v-model="invitation_profile_ids">
                <q-item-section side>
                  <q-avatar circle size="48px">
                    <img src="~assets/Avator18.png" />
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Gabriel Cotabita</q-item-label>
                  <q-item-label caption>Java Developer</q-item-label>
                </q-item-section>
              </q-item>
            </div>
          </div>
          <div class="flex q-pa-md justify-center">
            <q-btn
              unelevated
              size="10px"
              rounded
              style="width: 100px"
              color="grey-6"
              to="04-remote-work-Client-Post-Proj"
              label="Back"
              class="q-mr-md"
            />

            <q-btn
              unelevated
              size="10px"
              rounded
              type="submit"
              color="cyan"
              label="post project"
            />
          </div>
        </div>
      </div>
    </q-form>
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
      shape: ref("line"),
      submitResult,
      colorbox: ref(true),

      // From page1
      project_type: ref("line"),
      color: ref(true),
      project_catagory: ref(null),
      title: ref(null),
      description: ref(null),
      attachments: ref(null),

      // from page 2
      contractors_no: ref("1"),
      skill_ids: ref(null),
      questions: "",
      exp_level: ref("Junior"),
      contractor_availability: ref("Less then 20hour/Week"),
      project_visibility: ref("Available only to invited contractors"),
      profile_type: ref("Agency"),

      // from page 3
      project_duration_weeks: ref("2"),
      price_type: ref("fixed"),
      maximum_rate: "",

      // from page 4
      val: ref(true),
      text: ref("Gil Dobrica"),
      noData: ref("null Data"),
      invitation_profile_ids: ref("id"),

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
      // from page 1
      post.append("project_type", this.project_type);
      post.append("title", this.title);
      post.append("description", this.description);
      post.append("attachments", this.attachments);
      post.append("project_catagory", this.project_catagory);

      // from page 2
      post.append("profile_type", this.profile_type);
      post.append("contractors_no", this.contractors_no);
      post.append("questions", this.questions);
      post.append("skill_ids", this.skill_ids);
      post.append("exp_level", this.exp_level);
      post.append("contractor_availability", this.contractor_availability);
      post.append("project_visibility", this.project_visibility);

      // from page 3
      post.append("project_duration_weeks", this.project_duration_weeks);
      post.append("price_type", this.price_type);
      post.append("maximum_rate", this.maximum_rate);

      // from page 4
      post.append("invitation_profile_ids", this.invitation_profile_ids);

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
          this.$router.push("/06-Remote-Work-Contractor-Search-Proj");
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
  background-color: #008080 !important


.timeline-icon.four
  background-color: #008080 !important


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
