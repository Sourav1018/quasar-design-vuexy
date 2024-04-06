<template>
  <q-list>
    <q-item class="montserrat-font menu-font__size text-color__custome-grey">
      <div class="col">
        <q-item-label header class="text-capitalize">
          {{ section }}
        </q-item-label>
        <q-item-section>
          <q-expansion-item
            v-for="(expansion, expansionIndex) in expansions"
            :key="expansionIndex"
            :icon="expansion.icon"
            :label="expansion.label"
            class="sidebar-accordion"
            @show="showAccordion(expansionIndex)"
            @hide="hideAccordion(expansionIndex)"
            :header-class="{
              'accordion-active-background-color': isExpanded(expansionIndex),
            }"
            group="menu"
          >
            <q-card>
              <q-card-section class="q-pa-none q-ma-none">
                <q-list class="accordion-submenu-list">
                  <q-item
                    clickable
                    v-ripple
                    v-for="(item, expansionItemIndex) in expansion.items"
                    :key="expansionItemIndex"
                  >
                    <q-item-section avatar>
                      <q-icon :name="item.icon" size="0.75rem"></q-icon>
                    </q-item-section>
                    <q-item-section class="text-capitalize">
                      {{ item.label }}
                    </q-item-section>
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
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "MenuAccordion",
  props: {
    section: {
      type: String,
      required: true,
    },
    expansions: {
      type: Array,
      required: true,
      validator: (value) => {
        return (
          Array.isArray(value) &&
          value.every((item) => {
            return (
              typeof item === "object" &&
              "icon" in item &&
              "label" in item &&
              "items" in item &&
              Array.isArray(item.items) &&
              item.items.every((subItem) => {
                return (
                  typeof subItem === "object" &&
                  "icon" in subItem &&
                  "label" in subItem
                );
              })
            );
          })
        );
      },
    },
  },
  setup() {
    const expandedIndex = ref(null);

    const showAccordion = (index) => {
      expandedIndex.value = index;
    };
    const hideAccordion = (index) => {
      if (expandedIndex.value === index) {
        expandedIndex.value = null;
      }
    };
    const isExpanded = (index) => {
      return expandedIndex.value === index;
    };
    const logger = (...params) => {
      console.log(...params);
    };

    return {
      logger,
      showAccordion,
      hideAccordion,
      isExpanded,
    };
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
