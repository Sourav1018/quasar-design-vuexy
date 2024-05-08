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
              @buttonClick="handleButtonClick"
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
      function checkIn() {
        console.log("checkin");
      },
      function checkOut() {
        console.log("checkout");
      },
    ]);
    const handleButtonClick = (action) => {
      action();
    };
    return { buttons, actions, handleButtonClick };
  },
});
</script>
