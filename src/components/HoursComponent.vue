<script setup>
import BusinessHours from "./hours/businessHours/BusinessHours.vue";
import SpecialHours from "./hours/specialHours/SpecialHours.vue";
import MoreHours from "./hours/moreHours/MoreHours.vue";
</script>

<template>
  <div>
    <div class="flex items-center mb-6">
      <h1 class="font-semibold text-[22px] text-secondary-darker">Hours:</h1>
      <div class="pl-2 mt-1">
        <img src="../assets/dot.svg" />
      </div>
    </div>
    <!-- Hours Data -->
    <div class="bg-white border border-[#dddddd]">
      <BusinessHours />
      <div class="border border-spacing-1"></div>
      <SpecialHours />
      <div class="border border-spacing-1"></div>
      <MoreHours />
    </div>
  </div>
</template>
