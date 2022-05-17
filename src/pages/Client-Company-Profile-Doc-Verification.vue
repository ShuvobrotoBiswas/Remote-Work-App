<template>
  <div>
    <q-form @submit.prevent="upDocument">
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

    <div class="row q-pa-md flex-center">
      <div flat bordered class="my-card" style="max-width: 920px">
        <q-card-section>
          <div class="text-h6">Your Profile/Document Verification</div>
        </q-card-section>

        <!-- Card 2 & 3 & 4 Div -->

        <div class="row" style="max-width: 920px">
          <div class="q-pa-md col-6 flex-center items-start q-gutter-md">
            <q-card
              class="my-card this-card text-black bg-grey-4"
              style="max-width: 360px"
            >
              <div class="q-pa-md">
                <div class="row">
                  <div class="col-9 text-h7 text-bold">
                    Personal ID verification
                  </div>
                  <div class="col-12 text-h7">
                    Upload at least two documents for verification
                  </div>
                </div>

                <div class="row">
                  <div class="col-3 q-pa-md text-h7 text center">
                    <span
                      style="display: block; margin-bottom: 15px"
                      class="text-bold"
                    >
                      Upload ID Card</span
                    >
                    <q-btn
                      color="black"
                      dense
                      round
                      icon="done"
                      style="margin-bottom: 15px"
                    ></q-btn>
                    <div class="text-h7"> {{file}} </div>
                  </div>
                  <div class="col-5 q-pa-md text-h7 text center">
                    <span
                      style="display: block; margin-bottom: 15px"
                      class="text-bold"
                    >
                      Upload Address Proof</span
                    >
                    <q-btn
                      color="black"
                      dense
                      round
                      icon="done"
                      style="margin-bottom: 15px"
                    ></q-btn>
                    <div class="text-h7">Address Proof.pdf</div>
                  </div>
                </div>
              </div>
            </q-card>
          </div>

          <!-- Card 2 -->

          <div class="q-pa-md col-6 flex-center items-start q-gutter-md">
            <q-card
              class="my-card this-card text-black bg-grey-4"
              style="max-width: 850px"
            >
              <div class="q-pa-md">
                <div class="row">
                  <div class="col-10 text-h7 text-bold">
                    Company [Company#1]/ID verification
                  </div>
                  <div class="col-11 text-h7">
                    Upload documents for verification
                  </div>
                </div>
                <div class="row">
                  <div class="col-3 q-pa-md text-h7 text center">
                    <span
                      style="display: block; margin-bottom: 15px"
                      class="text-bold"
                    >
                      Comapny certificate</span
                    >
                    <!-- <q-btn
                      color="black"
                      dense
                      round
                      icon="add"
                      style="margin-bottom: 15px"
                    ></q-btn> -->
                    <q-btn
                      icon="add"
                      style="margin-bottom: 15px"
                      round
                      color="black"
                    >
                      <q-file
                        style="width: 5px; height: 5px"
                        v-model="file"
                      ></q-file>
                    </q-btn>
                  </div>
                  <div class="col-3 q-pa-md text-h7 text center">
                    <span
                      style="display: block; margin-bottom: 15px"
                      class="text-bold"
                    >
                      Billing Address
                    </span>
                    <q-btn
                      color="black"
                      dense
                      round
                      icon="done"
                      style="margin-bottom: 15px"
                    ></q-btn>
                    <div class="text-h7">Billing.pdf</div>
                  </div>
                  <div class="col-2 q-pa-md text-h7 text center">
                    <span
                      style="display: block; margin-bottom: 15px"
                      class="text-bold"
                    >
                      Fiscal Code</span
                    >
                    <!-- <q-btn
                      color="black"
                      dense
                      round
                      icon="add"
                      style="margin-bottom: 15px"
                    ></q-btn> -->
                    <q-btn
                      icon="add"
                      style="margin-bottom: 15px"
                      round
                      color="black"
                    >
                      <q-file
                        style="width: 5px; height: 5px"
                        v-model="file"
                      ></q-file>
                    </q-btn>
                  </div>
                  <div class="col-4 q-pa-md text-h7" style="max-width: 140px">
                    <div style="display: block" class="text-bold row">
                      Legal Note Company Owner
                    </div>
                    <div class="row">
                      <q-btn
                        color="black"
                        dense
                        round
                        icon="done"
                        style="margin-bottom: 15px"
                      ></q-btn>
                    </div>
                    <div class="text-h7 row">Legal.pdf</div>
                  </div>
                </div>
              </div>
            </q-card>
          </div>

          <!-- Card 3 -->

          <div class="q-pa-md col-6 flex-center items-start q-gutter-md">
            <q-card
              class="my-card this-card text-black bg-grey-4"
              style="max-width: 360px"
            >
              <div class="q-pa-md">
                <div class="row">
                  <div class="col-9 text-h7 text-bold">
                    Add paycheck receive method
                  </div>
                  <div class="col-9 text-h7">
                    Add any verify the payments method
                  </div>
                </div>
                <div class="row">
                  <div class="col-4 q-pa-md text-h7 text center">
                    <span
                      style="display: block; margin-bottom: 15px"
                      class="text-bold"
                    >
                      Add credit card</span
                    >
                    <q-btn
                      color="black"
                      dense
                      round
                      icon="done"
                      style="margin-bottom: 15px"
                    ></q-btn>
                    <div class="text-h7">Credit card added</div>
                  </div>
                  <div class="col-5 q-pa-md text-h7 text center">
                    <span
                      style="display: block; margin-bottom: 15px"
                      class="text-bold"
                    >
                      Add bank account</span
                    >
                    <!-- <q-btn
                      color="black"
                      dense
                      round
                      icon="add"
                      style="margin-bottom: 15px"
                    ></q-btn> -->
                    <q-btn
                      icon="add"
                      style="margin-bottom: 15px"
                      round
                      color="black"
                    >
                      <q-file
                        style="width: 5px; height: 5px"
                        v-model="file"
                      ></q-file>
                    </q-btn>
                  </div>
                </div>
              </div>
            </q-card>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Div -->

    <div class="row flex-center q-pa-md">
      <!-- <div class="col"></div> -->
      <q-btn
        size="10px"
        rounded
        type="submit"
        color="black"
        label="Submit documents -→"
        class="text-white text-h7"
      ></q-btn>
    </div>
    </q-form>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  // name: "IndexPage",
  setup() {
    return {
      // file: ['empty'],
    };
  },
  methods: {
    onFileSelected(event) {
      console.log(event.target);
    },
    upDocument() {
      const doc = new FormData();
      doc.append("file", this.file);
      // doc.append("file1", this.file1);
      // doc.append("file2", this.file2);

      const options = {
        method: "POST",
        url: "https://rwapi.zupria.com/api/user/doc",
        data: doc,
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
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  },
  // SHOW

  // created() {
  //   const options = {
  //     method: "GET",
  //     url: "https://rwapi.zupria.com/api/user/verifDocs",
  //     headers: {
  //       Authorization:
  //         "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvcndhcGkuenVwcmlhLmNvbVwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY1MDY2NTQ3NCwiZXhwIjoxNjgyMjAxNDc0LCJuYmYiOjE2NTA2NjU0NzQsImp0aSI6ImRaUGlZem9YTXZZS25ITU4iLCJzdWIiOjgsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.m127K5q8Fy_6CxXEWJZyXqb_HJL4U-EUcHmdwmHTytI",
  //     },
  //   };
  //   axios
  //     .request(options)
  //     .then((response) => {
  //       console.log(response.data);
  //       this.user = response.data;
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // },
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

.this-card
  // background: rgba(255,0,0,.1)
  border-radius: 30px
</style>
