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

    <!-- Card 1 Div -->
    <!-- v-for="proposal in proposals" :key="proposal.id" -->
    <div class="row flex-center items-start" >
      <div style="max-width: 950px">
        <div class="q-pa-md">
          <div class="row">
            <div>
              <q-card-section>
                <div class="text-h5 text-bold q-py-md text-left">
                  List of Application to project
                </div>
                <q-separator />
                <div class="q-pa-md">
                  <div class="row">
                    <div class="col-3">
                      <div class="text-h7 row flex-center text-bold">
                        Anna Doyle
                      </div>
                      <div class="text-h7 row flex-center">
                        <q-img
                          sizes="100px"
                          style="max-width: 80px; max-height: 90px"
                          src="profile_picture"
                        ></q-img>
                      </div>
                      <div class="text-h7 flex-center row">
                        <span>{{ account_status }}</span>
                      </div>
                      <div class="text-h7 flex-center row">
                        <q-btn
                          outline
                          round
                          size="8px"
                          color="grey"
                          icon="military_tech"
                        />
                      </div>
                      <div class="text-h7 row flex-center">
                        <div class="text-h7">
                          <q-rating
                            v-model="avg_rating"
                            size="20px"
                            :max="5"
                            color="black"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-9">
                      <div class="text-h7 row text-bold">
                        {{ title }} | UX | UI
                      </div>
                      <div class="my-font row">
                        {{ designer }}
                      </div>
                      <div class="row">
                        <div class="col-12 col-md">
                          <div class="text-h7 text-bold">Requested price</div>
                          <div class="text-h7">€ {{ price }}</div>
                        </div>
                        <div class="col-12 col-md">
                          <div class="text-h7 text-bold">Exexution time</div>
                          <div class="text-h7">
                            {{ project_execution_weeks }} weeks
                          </div>
                        </div>
                        <div class="col-12 col-md">
                          <div class="text-h7 text-bold">Offer validity</div>
                          <div class="text-h7">{{ offer_validity }} days</div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-12 col-md">
                          <div class="text-h7 text-bold">Skills</div>
                          <div class="text-h7">
                            <q-btn
                              outline
                              size="6px"
                              rounded
                              class="q-mr-sm"
                              color="black"
                              label="Graphic Design"
                            />
                            <q-btn
                              outline
                              size="6px"
                              rounded
                              color="black"
                              label="Logo Design"
                            />
                          </div>
                        </div>
                        <div class="col-12 col-md">
                          <div class="text-h7 text-bold">
                            Type of contractor
                          </div>
                          <div class="text-h7">{{ account_type }}</div>
                        </div>
                        <div class="col">
                          <div class="text-h7 text-bold"></div>
                          <div class="text-h7"></div>
                        </div>
                      </div>
                      <div class="row text-h7 text-bold">
                        Answer to your questions
                      </div>
                      <div class="row text-h7 bg-grey-4">
                        <strong class="q-mr-sm">Q</strong>
                        {{ questionAnswers }}
                      </div>
                      <div class="row text-h7 text-white bg-black">
                        <strong class="q-mr-sm">A</strong>
                        {{ questionAnswers }}
                      </div>
                      <div class="row text-h7 bg-grey-4">
                        <strong class="q-mr-sm">Q</strong>
                        {{ questionAnswers }}
                      </div>
                      <div class="row text-h7 text-white bg-black">
                        <strong class="q-mr-sm">A</strong>
                        {{ questionAnswers }}
                      </div>
                    </div>
                  </div>

                 <add-project />
                  <div class="row q-pa-md my-font">
                    <p>* Fields marked with "*" are mandatory.</p>
                  </div>

                  <!-- Footer Div -->

                  <div class="row flex-center">
                    <div class="col-12 col-md">
                      <q-btn
                        size="8px"
                        rounded
                        style="width:100px"
                        color="black"
                        label="Ask more info"
                        class="text-white text-h7"
                      ></q-btn>
                    </div>

                    <div class="col-12 col-md">
                      <q-btn
                        size="8px"
                        rounded
                        to="10-REMOTE-WORK-CLIENT-MILESTONES-LIST-FOR-FREELANCER"
                        color="black"
                        label="Hire"
                        class="text-white text-h7"
                      ></q-btn>
                    </div>
                  </div>
                  <q-separator />
                  <div class="row">
                    <div class="col-3">
                      <div class="text-h7 row flex-center text-bold">
                        Avraam iancu
                      </div>
                      <div class="text-h7 row flex-center">
                        <q-img
                          sizes="100px"
                          style="max-width: 80px; max-height: 90px"
                          src="~/assets/Avator17.png"
                        ></q-img>
                      </div>
                      <div class="text-h7 flex-center row">
                        <span>Verified</span>
                      </div>
                      <div class="text-h7 flex-center row">
                        <q-btn
                          round
                          size="8px"
                          color="black"
                          icon="military_tech"
                        />
                      </div>
                      <div class="text-h7 row flex-center">
                        <div class="text-h7">
                          <q-rating
                            v-model="avg_rating"
                            size="20px"
                            :max="5"
                            color="black"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-9">
                      <div class="text-h7 row text-bold">
                        Type Designer | Logo Designer
                      </div>
                      <div class="my-font row">
                        {{ designer }}
                      </div>
                      <div class="row">
                        <div class="col-12 col-md">
                          <div class="text-h7 text-bold">Requested price</div>
                          <div class="text-h7">€500</div>
                        </div>
                        <div class="col-12 col-md">
                          <div class="text-h7 text-bold">Exexution time</div>
                          <div class="text-h7">2 weeks</div>
                        </div>
                        <div class="col-12 col-md">
                          <div class="text-h7 text-bold">Offer validity</div>
                          <div class="text-h7">3 days</div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-12 col-md">
                          <div class="text-h7 row text-bold">Skills</div>
                          <div class="text-h7 r">
                            <q-btn
                              outline
                              size="6px"
                              class="q-mr-sm"
                              rounded
                              color="black"
                              label="Graphic Design"
                            />
                            <q-btn
                              outline
                              size="6px"
                              rounded
                              class="q-mr-sm"
                              color="black"
                              label="Logo Design"
                            />
                            <q-btn
                              outline
                              size="6px"
                              rounded
                              class="q-mr-sm"
                              color="black"
                              label="Branding & Logo Design"
                            />
                            <q-btn
                              outline
                              size="6px"
                              rounded
                              class="q-mr-sm"
                              color="black"
                              label="Illustrator"
                            />
                            <q-btn
                              outline
                              size="6px"
                              rounded
                              class="q-mr-sm"
                              color="black"
                              label="InDesign"
                            />
                            <q-btn
                              outline
                              size="6px"
                              class="q-mr-sm"
                              rounded
                              color="black"
                              label="Photoshop"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <q-separator />
                  <div class="row">
                    <div class="col-3">
                      <div class="text-h7 row flex-center text-bold">
                        alexandru cumpanasu
                      </div>
                      <div class="text-h7 row flex-center">
                        <q-img
                          sizes="100px"
                          style="max-width: 80px; max-height: 90px"
                          src="~/assets/Avator18.png"
                        ></q-img>
                      </div>
                      <div class="text-h7 flex-center row">
                        <span>Verified</span>
                      </div>
                      <div class="text-h7 flex-center row">
                        <q-btn
                          round
                          size="8px"
                          color="black"
                          icon="military_tech"
                        />
                      </div>
                      <div class="text-h7 row flex-center">
                        <div class="text-h7">
                          <q-rating
                            v-model="avg_rating"
                            size="20px"
                            :max="5"
                            color="black"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-9">
                      <div class="text-h7 row text-bold">Branding Designer</div>
                      <div class="my-font row">
                        {{ designer }}
                      </div>
                      <div class="row">
                        <div class="col-12 col-md">
                          <div class="text-h7 text-bold">Requested price</div>
                          <div class="text-h7">€500</div>
                        </div>
                        <div class="col-12 col-md">
                          <div class="text-h7 text-bold">Exexution time</div>
                          <div class="text-h7">2 weeks</div>
                        </div>
                        <div class="col-12 col-md">
                          <div class="text-h7 text-bold">Offer validity</div>
                          <div class="text-h7">3 days</div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-12 col-md">
                          <div class="text-h7 row text-bold">Skills</div>
                          <div class="text-h7 r">
                            <q-btn
                              outline
                              size="6px"
                              rounded
                              class="q-mr-sm"
                              color="black"
                              label="Graphic Design"
                            />
                            <q-btn
                              outline
                              size="6px"
                              class="q-mr-sm"
                              rounded
                              color="black"
                              label="Logo Design"
                            />
                            <q-btn
                              outline
                              size="6px"
                              rounded
                              class="q-mr-sm"
                              color="black"
                              label="Branding & Logo Design"
                            />
                            <q-btn
                              outline
                              size="6px"
                              class="q-mr-sm"
                              rounded
                              color="black"
                              label="Illustrator"
                            />
                            <q-btn
                              outline
                              size="6px"
                              class="q-mr-sm"
                              rounded
                              color="black"
                              label="InDesign"
                            />
                            <q-btn
                              outline
                              size="6px"
                              class="q-mr-sm"
                              rounded
                              color="black"
                              label="Photoshop"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <q-separator />
                </div>
              </q-card-section>
            </div>
          </div>
          <div class="row q-pa-md flex-center">
            <q-btn
              size="8px"
              rounded
              style="100px"
              color="black"
              label="show more"
              class="text-white text-h7"
            ></q-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import axios from "axios";
import AddProject from "src/components/add-project.vue";
export default defineComponent({
    // name: "IndexPage",
    data() {
        return {
            lorem: "",
            text: "",
            checkbox19: ref(true),
            checkbox20: ref(false),
            checkbox21: ref(false),
            checkbox22: ref(false),
            checkbox23: ref(false),
            price: ref(""),
            input1: ref("Your answer here."),
            input2: ref("Your answer here."),
            date: ref("2020/07/08 , 2020/07/17"),
            group: ref("op1"),
            listProposal: [],
            options: [
                {
                    label: "Freelancer",
                    value: "op1",
                },
                {
                    label: "Agency",
                    value: "op2",
                },
            ],
            designer: "",
            avg_rating: ref(1),
            ratingModel1: ref(1),
            ratingModel2: ref(1),
            account_status: "",
            title: "",
            project_execution_weeks: "",
            offer_validity: "",
            account_type: "",
            questionAnswers: "",
            proposals: [],
        };
    },
    // SHOW
    created() {
        const options = {
            method: "GET",
            url: "https://rwapi.zupria.com/api/proposal/received/1",
            headers: {
                Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvcndhcGkuenVwcmlhLmNvbVwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY1MDY2NTQ3NCwiZXhwIjoxNjgyMjAxNDc0LCJuYmYiOjE2NTA2NjU0NzQsImp0aSI6ImRaUGlZem9YTXZZS25ITU4iLCJzdWIiOjgsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.m127K5q8Fy_6CxXEWJZyXqb_HJL4U-EUcHmdwmHTytI",
            },
        };
        axios
            .request(options)
            .then((response) => {
            console.log(response.data);
            this.proposals = response.data;
        })
            .catch(function (error) {
            console.error(error);
        });
    },
    components: { AddProject }
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
  background: grey


.my-font
  font-size: 10px

.my-box1
  // background: grey
  // border: 1px solid rgba(86,61,124,.2)
  border-radius: 7px

.my-box-4
  height: 100px
  width: 100px
</style>
