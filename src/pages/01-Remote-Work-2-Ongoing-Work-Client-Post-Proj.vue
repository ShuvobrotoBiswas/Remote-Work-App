<template>
  <div>
    <!-- Body Div  From Sub-Header Component-->
    <SubHeader />
    <!-- Card 1 Div -->
    <div class="row flex-center items-start">
      <div style="max-width: 1100px" class="q-pa-md">
        <q-card-section>
          <div class="text-h6 q-pa-md flex-left">Project Category</div>
          <div class="row">
            <div class="col-4" style="max-width: 200px">
              <q-radio
                left-label
                v-model="shape"
                class="text-bold"
                color="black"
                val="1"
                label="Well Defined Project"
              />
            </div>
            <div class="col-3" style="max-width: 163px">
              <q-radio
                left-label
                v-model="shape"
                class="text-bold"
                color="black"
                val="2"
                label="Ongoing Work"
              />
            </div>
            <div class="col-3" style="max-width: 180px">
              <q-radio
                left-label
                v-model="shape"
                class="text-bold"
                color="black"
                val="3"
                label="Market Research"
              />
            </div>
            <div class="col" style="width: 240px">
              <q-radio
                left-label
                v-model="shape"
                class="text-bold"
                color="black"
                val="4"
                label="Guaranteed Price Contest"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <p class="text-h7 text-bold">Job name</p>
              <q-input
                outlined
                v-model="input1"
                autofocus
                placeholder=" Designer"
              ></q-input>
            </div>
            <div class="col-6">
              <p class="text-h7 text-bold">Description</p>
              <q-input outlined v-model="input2" type="textarea"></q-input>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <q-radio
                left-label
                v-model="shape1"
                class="text-bold"
                color="black"
                val="1"
                label="Hiring more than one person"
              />
            </div>
            <div class="col-6">
              <p class="text-h7 text-bold">Weekly salary</p>
              <q-input
                outlined
                v-model="input3"
                autofocus
                placeholder="€500"
              ></q-input>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <p class="text-h7">
                <span class="text-bold">Language of communication </span>
                <span>(if it is not English)</span>
              </p>

              <q-select v-model="language" :options="languageOptions" />
            </div>
            <div class="col-6">
              <p class="text-h7 text-bold">
                Minimum requirements of the job-Education
              </p>

              <q-select v-model="education" :options="educationOptions" />
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <p class="text-h7">
                <span class="text-bold"
                  >Minimum requirements of the job-Experience
                </span>
              </p>
              <q-select v-model="experience" :options="experienceOptions" />
            </div>
            <div class="col-6">
              <p class="text-h7 text-bold">
                Minimum requirements of the job-Skills
              </p>
              <q-option-group
                :options="skillsOptions"
                type="checkbox"
                v-model="skills"
              />
            </div>
          </div>
          <div class="q-py-md">
            <p class="text-bold">
              Create specific question to which the contractors will have to
              answer
            </p>

            <q-card flat class="my-card bid3" style="max-width: 1000px">
              <q-card-section>
                <div class="row items-center no-wrap">
                  <div class="col">
                    <div class="text-h7">{{ lorem }}</div>
                  </div>

                  <div class="col-auto">
                    <q-btn color="black" round flat icon="cancel">
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
            <div class="q-py-md"></div>
            <q-card flat class="my-card bid3" style="max-width: 1000px">
              <q-card-section>
                <div class="row items-center no-wrap">
                  <div class="col">
                    <div class="text-h7">
                      {{ lorem }}
                    </div>
                  </div>
                  <div class="col-auto">
                    <q-btn color="black" round flat icon="cancel">
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
            <div class="q-py-md"></div>
            <q-card flat class="my-card bid3 bg-grey-3" style="max-width: 1000px">
              <q-card-section>
                <div class="row items-center no-wrap">
                  <div class="col">
                    <div class="text-h7">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </div>
                  </div>
                  <div class="col-auto">
                    <q-btn color="black" round flat icon="add">
                    </q-btn>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </q-card-section>
        <div class="flex q-pa-md justify-center">
          <q-btn
            unelevated
            size="10px"
            rounded
            style="width:100px"
            color="grey-6"
            label="Back"
            class="q-mr-md"
          />
          <q-btn unelevated size="10px" style="width:120px" rounded color="black" label="Post Project" />
        </div>
      </div>
    </div>
    <!-- Card 3 div -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import SubHeader from "components/Sub-Header.vue";
export default defineComponent({
  // name: "IndexPage",
  setup() {
    return {
      lorem:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

      text: " We have a logo that is about 13 years old and we are looking to update/change our branding, we need a logo that is more up to date and we want to keep the versatillity. We want to go bold/innovative with this change. Previous logo is attached for reference",
      ratingModel: ref(2),
      shape: ref("2"),
      input1: null,
      input2: ref(
        "Lorem ipsum dolor Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labors nisi ut aliquip."
      ),
      input3: null,
      shape1: ref("1"),
      language: ref("Algerian"),
      languageOptions: ["Algerian", "French", "German"],
      education: ref("High School"),
      educationOptions: ["High School", "College", "Master"],
      experience: ref("No experience"),
      experienceOptions: ["No experience", "Junior", "Middle", "Senior"],
      skills: ref(["Java", "PHP"]),
      skillsOptions: [
        { label: "Java", value: "Java", color: "black" },
        { label: "PHP", value: "PHP", color: "black" },
        { label: "Python", value: "Python", color: "black" },
      ],
    };
  },
  components: { SubHeader },
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

.bid3
  border: 1px solid rgba(86,61,124,.2)



.my-font
  font-size: 10px
</style>
