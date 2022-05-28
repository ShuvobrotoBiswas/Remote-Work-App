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
    <q-form @submit.prevent="post">
      <div class="row flex-center items-start">
        <div style="width: 1000px">
          <div class="q-mt-xl">
            <TimeLine />
          </div>
          <h5 class="text-bold">1. DEFINE PROJECT</h5>
          <div class="q-pa-md text-h6">Project Catagory</div>

          <div class="row">
            <div class="col-3">
              <q-radio
                left-label
                color="cyan"
                v-model="project_type"
                val="line"
                label="Well Defined Project"
              />
            </div>
            <div class="col-2">
              <q-radio
                left-label
                color="cyan"
                v-model="project_type"
                val="rectangle"
                label="Ongoing Work"
              />
            </div>
            <div class="col-3">
              <q-radio
                left-label
                color="cyan"
                v-model="project_type"
                val="ellipse"
                label="Market Research"
              />
            </div>
            <div class="col-3">
              <q-radio
                left-label
                color="cyan"
                v-model="project_type"
                val="polygon"
                label="Guaranted Prize Contest"
              />
            </div>
          </div>

          <h6>1.Project Template</h6>
          <div>
            <div class="row bid1 q-py-md text-center">
              <div class="col-1 my-home q-mr-sm">
                <q-btn
                  round
                  color="cyan"
                  class="flex-center"
                  icon="arrow_back_ios_new"
                />
              </div>
              <div class="col my-home my-box bid2 bg-cyan-1 my-font q-mr-sm">
                <q-img
                  src="~assets/Avator27.png"
                  class="image1"
                  style="width: 60px; height: 50px"
                >
                </q-img>
                <div class="q-pa-mg text-center custom-text-me">
                  LOGO Design
                </div>
              </div>
              <div class="col my-home bid2 my-box my-font q-mr-sm">
                <q-img
                  src="~assets/Avator28.png"
                  class="image1"
                  style="width: 40px; height: 40px"
                >
                </q-img>
                <div class="q-pa-mg text-center custom-text-me">
                  Website Design
                </div>
              </div>
              <div class="col my-home bid2 my-box my-font q-mr-sm">
                <q-img
                  src="~assets/Avator21.png"
                  class="image1"
                  style="width: 40px; height: 40px"
                >
                </q-img>
                <div class="q-pa-mg text-center custom-text-me">
                  Translation
                </div>
              </div>
              <div class="col my-home bid2 my-font my-box1 q-mr-sm">
                <div class="col">
                  <q-btn
                    flat
                    size="5px"
                    color="black"
                    padding="5px"
                    icon="check_box_outline_blank"
                  />
                  <q-btn
                    flat
                    size="5px"
                    color="black"
                    padding="5px"
                    icon="check_box_outline_blank"
                  />
                </div>
                <div class="col">
                  <q-btn
                    flat
                    size="5px"
                    color="black"
                    padding="5px"
                    icon="check_box_outline_blank"
                  />
                  <q-btn
                    flat
                    size="5px"
                    color="black"
                    padding="5px"
                    icon="add"
                  />
                </div>
                Others
              </div>
              <div class="col-1 my-home q-mr-sm">
                <q-btn
                  round
                  color="cyan"
                  class="flex-center"
                  icon="arrow_forward_ios"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <q-separator style="max-width: 500px" color="cyan" />
              </div>
              <div class="col-1 my-font">OR</div>
              <div class="col-5">
                <q-separator style="max-width: 500px" color="cyan" />
              </div>
            </div>

            <div>
              <h6>2. Project From Scratch</h6>
              <fieldset style="border-radius: 5px; border: 2px solid cyan">
                <legend>Project Title*</legend>
                <q-input
                  borderless
                  v-model="title"
                  placeholder="Lorem ipsum dolor sit amet"
                />
              </fieldset>
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
                    <q-item-section v-model="project_catagory"
                      >Logo Design
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-ripple>
                    <q-item-section v-model="project_catagory" val="1"
                      >Cerate Website</q-item-section
                    >
                  </q-item>

                  <q-item clickable v-ripple>
                    <q-item-section v-model="project_catagory">
                      Translation
                    </q-item-section>
                  </q-item>
                  <q-item clickable v-ripple>
                    <q-item-section v-model="project_catagory">
                      Etc.
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-expansion-item>
              <fieldset style="border-radius: 5px; border: 2px solid cyan">
                <legend>Project Description*</legend>
                <q-input
                  borderless
                  v-model="description"
                  placeholder="Lorem ipsum dolor sit amet"
                />
              </fieldset>
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

              <div class="row q-py-md">
                <q-btn
                  rounded
                  outline
                  size="8px"
                  icon-right="cancel"
                  color="black"
                  class="q-mr-sm"
                  label="Color scheme.jpg"
                />
                <q-btn
                  rounded
                  outline
                  size="8px"
                  icon-right="cancel"
                  color="black"
                  class="q-mr-sm"
                  label="brand identity guidelines.pdf"
                />
                <q-btn
                  rounded
                  outline
                  size="8px"
                  icon-right="cancel"
                  color="black"
                  class="q-mr-sm"
                  label="brief.doc"
                />
              </div>
              <q-item tag="label" v-ripple>
                <q-item-section avatar top>
                  <q-checkbox v-model="color" val="cyan" color="cyan" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-h7"
                    >NDA(Non Disclosure agreement)- contractor undertakes not to
                    disclose to anyone what is in the document for a period
                    established by the client only contractors who sign the NDA
                    will receive access to the project data.</q-item-label
                  >
                </q-item-section>
              </q-item>
              <div class="row q-pa-md my-font">
                <p>* Fields marked with "*" are mandatory.</p>
              </div>
            </div>
          </div>

          <div class="flex flex-center q-pa-md">
            <q-btn
              unelevated
              size="10px"
              style="width: 100px"
              rounded
              type="submit"
              color="cyan"
              label="Next"
            />
          </div>
        </div>
      </div>
    </q-form>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import TimeLine from "components/Timeline.vue";
import axios from "axios";

export default defineComponent({
  components: {
    TimeLine,
  },
  setup() {
    const submitResult = ref([]);

    return {
      project_type: ref("line"),
      submitResult,
      color: ref(true),
      project_catagory: ref(null),
      title: ref(null),
      description: ref(null),
      skill_ids: "",
      attachments: ref(null),

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
      post.append("project_type", this.project_type);
      post.append("title", this.title);
      post.append("description", this.description);
      post.append("attachments", this.attachments);
      post.append("project_catagory", this.project_catagory);

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
          this.$router.push("/02-remote-work-Client-Post-Proj");
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
  // border: 1px solid rgba(86,61,124,.2)
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


.image2
  background: cyan


.my-font
  font-size: 10px

.my-box
  // background: grey
  border: 1px solid rgba(86,61,124,.2)
  border-radius: 7px
  height: 100px
  width: 80px

.my-box1
  // background: grey
  // border: 1px solid rgba(86,61,124,.2)
  height: 100px
  width: 80px
  border-radius: 7px
</style>
