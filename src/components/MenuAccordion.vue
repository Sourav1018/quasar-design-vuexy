<template>
  <q-list>
    <q-item class="montserrat-font menu-font__size text-color__custome-grey">
      <div class="col">
        <q-item-label header class="text-capitalize"
          >Apps and Pages</q-item-label
        >
        <q-item-section>
          <q-expansion-item
            icon="fact_check"
            label="Attendance"
            class="sidebar-accordion"
            @show="showAccordion"
            @hide="hideAccordion"
            :header-class="{
              'accordion-active-background-color': openedAccordion,
            }"
          >
            <q-card>
              <q-card-section class="q-pa-none q-ma-none">
                <q-list class="accordion-submenu-list">
                  <q-item clickable v-ripple>
                    <q-item-section avatar>
                      <q-icon name="circle"></q-icon>
                    </q-item-section>
                    <q-item-section>In/Out</q-item-section>
                  </q-item>
                </q-list>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-item-section>
      </div>
    </q-item>
  </q-list>
</template>
<script>
import { ref, computed, defineComponent } from "vue";

export default defineComponent({
  name: "MenuAccordion",
  props: {},
  setup() {
    const openedAccordion = ref(false);

    const showAccordion = () => {
      return (openedAccordion.value = true);
    };
    const hideAccordion = () => {
      return (openedAccordion.value = false);
    };
    const logger = (...params) => {
      console.log(...params);
    };
    return { openedAccordion, logger, showAccordion, hideAccordion };
  },
});
</script>
<style scoped>
.sidebar-accordion:deep(.q-item__section--avatar),
.accordion-submenu-list:deep(.q-item__section--avatar) {
  min-width: 0;
  transition: transform 0.3s ease;
  transform: translateX(0);
  font-size: 0.5rem;
}

.menu-font__size {
  font-size: 1rem;
  font-weight: 400;
}

.sidebar-accordion:deep(.q-item__label),
.accordion-submenu-list:deep(.q-item__section--main) {
  transition: transform 0.3s ease;
  transform: translateX(0);
}

.sidebar-accordion:deep(.q-item:hover .q-item__label),
.sidebar-accordion:deep(.q-item:hover .q-item__section--avatar),
.accordion-submenu-list:deep(.q-item:hover .q-item__section--main),
.accordion-submenu-list:deep(.q-item:hover .q-item__section--avatar) {
  transition: transform 0.3s ease;
  transform: translateX(3px);
}

:global(.accordion-active-background-color) {
  background-color: #f8f8f8;
}
</style>
