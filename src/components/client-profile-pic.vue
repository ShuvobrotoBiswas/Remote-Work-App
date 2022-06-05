<template>
  <div>
    <q-form @submit.prevent="profilePic">
      <div class="row flex-center">
        <q-img
          :src="imageUrl"
          sizes="180px"
          style="border-radius: 50%; height: 180px; width: 170px"
        ></q-img>
      </div>
      <div class="q-pa-md">
        <q-file
          rounded
          class="bg-grey-3 text-bold"
          style="width: 250px; border-radius: 30px"
          outlined
          type="file"
          v-model="file"
          label="upload new picture"
          @update:model-value="handleUpload()"
        >
        </q-file>
        <!-- <q-btn
          @click="getFile"
          style="width: 250px"
          outline
          rounded
          color="grey"
          label="upload new picture"
        >
        </q-btn> -->
      </div>
      <div class="q-pa-md">
        <q-btn outline style="width: 250px" type="submit" bottom-slots rounded>
          remove exsting
        </q-btn>
      </div>
    </q-form>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import axios from "axios";
export default defineComponent({
  name: "clientProfilePic",
  setup() {
    const file = ref(null);
    const imageUrl = ref("https://rwapi.zupria.com/api/user/profilePic");
    const handleUpload = () => {
      console.log("Initially Uploaded Successful");
      if (file.value) {
        imageUrl.value = URL.createObjectURL(file.value);
      }
    };

    // const getFile = function () {
    //   let fileUpload = document.getElementById('fileUpload')
    //   if (fileUpload != null) {
    //     fileUpload.click()
    //   }
    // }
    return {
      document,
      other: true,
      file,
      imageUrl,
      handleUpload,
      getFile: true,
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
