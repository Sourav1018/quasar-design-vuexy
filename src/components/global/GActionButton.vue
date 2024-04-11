<template>
  <q-btn
    class="meterial-btn-design meterial-btn-background m-btn-text text-capitalize"
    flat
    @click="handleButtonClick"
    >{{ name }}</q-btn
  >
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "GActionButton",
  props: {
    name: { type: String, required: true },
    action: {
      type: Function,
      required: true,
    },
  },
  setup(props, { emit }) {
    const handleButtonClick = () => {
      emit("buttonClick", props);
    };

    return {
      handleButtonClick,
    };
  },
});
</script>

<style scoped>
.meterial-btn-background {
  border-color: #7367f0;
  background-color: #7367f0;
}
.meterial-btn-design {
  border: 1px solid transparent;
  border-radius: 0.358rem;
}
.m-btn-text {
  color: #fff;
}

.meterial-btn-design:hover {
  box-shadow: 0 8px 25px -8px #7367f0;
}
</style>
