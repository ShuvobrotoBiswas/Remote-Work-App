<template>
  <div class="q-pa-md">
    <div class="q-gutter-md row">
      <q-select
        v-model="model"
        outlined
        use-input
        hide-selected
        fill-input
        hide-dropdown-icon
        use-chips
        input-debounce="0"
        :options="options"
        @filter="filterFn"
        style="width: 500px"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-select>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

const stringOptions = [
  "Adobe XD",
  "1",
  "Photoshop",
  "Adobe Photoshop",
  "CSS3",
  "Illustrator",
  "Adobe Illustrator",
  "Java",
  "Python",
  "Javascript",
  // { label: "XD", value: '1' },
];

export default defineComponent({
  name: "skillSearch",
  setup() {
    const options = ref(stringOptions);
    return {
      model: ref(null),
      options,

      filterFn(val, update, abort) {
        if (val.length < 2) {
          abort();
          return;
        }

        update(() => {
          const needle = val.toLowerCase();
          options.value = stringOptions.filter(
            (v) => v.toLowerCase().indexOf(needle) > -1
          );
        });
      },
    };
  },
});
</script>
