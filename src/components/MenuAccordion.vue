<template>
  <q-list>
    <q-item class="montserrat-font menu-font__size text-color__custome-grey">
      <div class="col">
        <q-item-label header>Apps and Pages</q-item-label>
        <q-item-section>
          <q-expansion-item
            icon="fact_check"
            label="Attendance"
            class="hover-expansion__sidebar-menu sidebar-accordion"
          >
            <q-list>
              <q-item>
                <q-item-section>In/Out </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>
        </q-item-section>
      </div>
    </q-item>
  </q-list>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    return {};
  },
};
</script>
<style scoped>
.sidebar-accordion::v-deep .q-item__section--avatar {
  min-width: 0;
  transition: transform 0.3s ease;
  transform: translateX(0);
  font-size: 0.5rem;
}
.sidebar-accordion:hover::v-deep .q-item__section--avatar {
  transition: transform 0.3s ease;
  transform: translateX(3px);
}

.menu-font__size {
  font-size: 1rem;
  font-weight: 400;
}
/* Hover in animation */
.hover-expansion__sidebar-menu:hover::v-deep .q-item__label {
  transition: transform 0.3s ease;
  transform: translateX(3px);
}
/* Hover out animation */
.hover-expansion__sidebar-menu::v-deep .q-item__label {
  transition: transform 0.3s ease;
  transform: translateX(0);
}
</style>
