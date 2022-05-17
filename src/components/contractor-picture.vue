<template>
  <div>
    <q-form @submit.prevent="profilePic">
      <q-img sizes="200px" src="~/assets/Avator1.png"></q-img>
      <div class="q-pa-md">
        <q-file
          rounded
          style="width: 250px"
          outlined
          v-model="file"
          label="upload new picture"
        >
          <template v-slot:append>
            <q-icon
              v-if="file !== null"
              name="close"
              @click.stop="file = null"
              class="cursor-pointer"
            />
          </template>
        </q-file>
      </div>
      <div class="q-pa-md">
        <q-btn outline style="width: 250px" bottom-slots rounded>
          remove exsting
        </q-btn>
      </div>
      <div class="q-pa-md text-h6 text-bold">Europass & Portfolio</div>
      <div class="q-pa-md">
        <q-btn
          icon="link"
          class="q-mr-sm text-h7"
          style="width: 250px"
          rounded
          color="black"
        >
          Link Your Europass CV
        </q-btn>
      </div>
      <div class="row flex-center">
        <div flat bordered class="my-card" style="max-width: 800px">
          <div class="row q-pa-md">
            <q-btn
              size="10px"
              rounded
              type="submit"
              color="black"
              icon="add"
              label="Add Companies"
              class="text-white text-h7"
            ></q-btn>
          </div>
        </div>
      </div>
    </q-form>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import axios from "axios";
export default defineComponent({
  name: "contractor-picture",
  setup() {
    return {
      name: ref(" "),
      search: ref(""),
      phone: ref(""),
      res_address: ref(""),
      billing_address: ref(""),
      file: ref(""),
      address: "",
    };
  },
  methods: {
    onFileSelected(event) {
      console.log(event.target);
    },
    profilePic() {
      const profilePic = new FormData();
      profilePic.append("file", this.file);

      const options = {
        method: "POST",
        url: "https://rwapi.zupria.com/api/user/profilePic",
        data: profilePic,
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
