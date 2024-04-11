<template>
  <q-page>
    <GpageContainer>
      <div class="row">
        <q-card class="col-xs-12 col-sm-12 col-md-4">
          <q-card-section> 00:00:00 </q-card-section>
          <q-card-actions>
            <GActionButton
              v-for="(button, index) in buttons"
              :key="index"
              :action="actions[index]"
              @buttonClick="actions[index]"
              v-bind="button"
            ></GActionButton>
          </q-card-actions>
        </q-card>
      </div>
    </GpageContainer>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "AttendanceTime",
  setup() {
    const buttons = ref([
      {
        name: "Check-In",
      },
      {
        name: "Check-out",
      },
    ]);

    const actions = ref([
      function checkIn(item) {
        console.log("checkin", item);
      },
      function checkOut(item) {
        console.log("checkout", item);
      },
    ]);
    return { buttons, actions };
  },
});
</script>
