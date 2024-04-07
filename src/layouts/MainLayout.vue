<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      class="app-header q-mx-md q-my-md shadow-4 custom-background-color"
    >
      <q-toolbar class="justify-between">
        <div class="row">
          <q-btn
            class="custom-icon-color"
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />
          <div class="row items-center search-container">
            <q-btn class="custom-icon-color" flat dense round icon="search" />
            <div class="custom-text-grey search-text text-capitalize">
              search
            </div>
          </div>
        </div>
        <div>
          <q-btn round dense flat>
            <q-avatar rounded size="2rem">
              <img
                src="../assets/static/profile-circle-icon-512x512-dt9lf8um.png"
              />
            </q-avatar>
            <ProfileIconMenu />
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container class="custom-container-padding-top">
      <router-view />
    </q-page-container>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      class="shadow-4"
      width="240"
    >
      <q-list>
        <q-item-label header>
          <q-avatar class="full-width" square>
            <q-img src="../assets/static/company-logo.png" />
          </q-avatar>
        </q-item-label>
        <q-item
          class="q-pa-none q-ma-none"
          v-for="(accordion, index) in accordionList"
          :key="index"
        >
          <MenuAccordion v-bind="accordion" />
        </q-item>
        <!-- <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        /> -->
      </q-list>
    </q-drawer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import ProfileIconMenu from "components/ProfileIconMenu.vue";
import MenuAccordion from "components/menuaccordion/MenuAccordion.vue";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

const accordionList = [
  {
    section: "apps and pages",
    expansions: [
      {
        icon: "mdi-calendar-clock-outline",
        label: "Attendance",
        items: [
          {
            icon: "mdi-circle-outline",
            label: "In & Out",
            to: {
              name: "attendance.checkInOut",
            },
          },
          {
            icon: "mdi-circle-outline",
            label: "Holidays",
            to: {
              name: "attendance.holidaysView",
            },
          },
          {
            icon: "mdi-circle-outline",
            label: "Leave Apply",
            to: {
              name: "attendance.applyLeave",
            },
          },
        ],
      },
      {
        icon: "mdi-list-box-outline",
        label: "Tasks",
        items: [
          {
            icon: "mdi-circle-outline",
            label: "todo",
            to: "/chek-in-and-check-out",
          },
          {
            icon: "mdi-circle-outline",
            label: "project tasks",
            to: "/chek-in-and-check-out",
          },
        ],
      },
    ],
  },
  {
    section: "others",
    expansions: [
      {
        icon: "fact_check",
        label: "Attendance",
        items: [
          {
            icon: "mdi-circle-outline",
            label: "In/Out",
            to: "/chek-in-and-check-out",
          },
          {
            icon: "mdi-circle-outline",
            label: "Holidays",
            to: "/chek-in-and-check-out",
          },
          {
            icon: "mdi-circle-outline",
            label: "Leave Apply",
            to: "/chek-in-and-check-out",
          },
        ],
      },
    ],
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    // EssentialLink,
    ProfileIconMenu,
    MenuAccordion,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      accordionList,
      linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style>
.app-header {
  border-radius: 0.4rem;
}

.custom-container-padding-top {
  padding-top: 80px !important ;
}
</style>
