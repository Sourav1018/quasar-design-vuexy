<template>
  <q-page>
    <GpageContainer>
      <div class="row">
        <q-card class="col-xs-12 col-sm-12 col-md-4">
          <q-card-section> 00:00:00 </q-card-section>
          <q-card-actions>
            <GActionButton v-bind="button"></GActionButton>
          </q-card-actions>
        </q-card>
      </div>
    </GpageContainer>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
const button = {
  name: "Check-In",
};
export default defineComponent({
  name: "AttendanceTime",
  setup() {
    return { button };
  },
});
</script>
