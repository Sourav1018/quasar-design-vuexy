<template>
  <q-menu :offset="[-6, 15]" class="shadow-4">
    <q-list bordered style="width: 240px">
      <q-item>
        <q-item-section avatar>
          <q-avatar size="40px">
            <q-img
              src="../assets/static/profile-circle-icon-512x512-dt9lf8um.png"
            />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label> Name </q-item-label>
          <q-item-label caption> email@email.com </q-item-label>
        </q-item-section>
      </q-item>
      <q-separator />
      <q-item tag="li" class="gap-1 items-center" clickable>
        <q-icon
          name="mdi-account-outline"
          size="24px"
          class="profile_menu_icon_color"
        />
        <p class="text-capitalize q-pt-none q-ma-none" style="font-size: 1rem">
          my profile
        </p>
      </q-item>
      <q-item>
        <q-btn
          dense
          class="full-width logout-button-color reset-line-height"
          style="height: 0.75rem"
        >
          <div class="row gap-1 items-center">
            <span class="text-capitalize" style="font-size: 0.75rem"
              >logout</span
            >
            <q-icon name="logout" size="0.75rem" />
          </div>
        </q-btn>
      </q-item>
    </q-list>
  </q-menu>
</template>
