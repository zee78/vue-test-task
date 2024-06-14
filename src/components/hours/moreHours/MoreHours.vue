<script setup>
import { ref } from "vue";
import addMoreModal from "./addMoreModal.vue";

const activeCate = ref("delivery");
const isOpen = ref(false);
const isHovered = ref("delivery");

const moreHours = [
  {
    day: "Sunday",
    time: "10:00 AM to 4:00 PM",
  },
];
const categories = [
  {
    id: "access",
    name: "Access",
  },
  {
    id: "breakfast",
    name: "Breakfast",
  },
  {
    id: "brunch",
    name: "Brunch",
  },
  {
    id: "delivery",
    name: "Delivery",
  },
  {
    id: "dinner",
    name: "Dinner",
  },
  {
    id: "driveThrough",
    name: "Drive Through",
  },
  {
    id: "happyHours",
    name: "Happy Hours",
  },
  {
    id: "kitchen",
    name: "Kitchen",
  },
  {
    id: "onlineServiceHours",
    name: "Online Service Hours",
  },
  {
    id: "seniorHours",
    name: "Senior Hours",
  },
  {
    id: "takeout",
    name: "Takeout",
  },
  {
    id: "lunch",
    name: "Lunch",
  },
  {
    id: "pickup",
    name: "Pickup",
  },
];

const activeCategory = (id) => {
  activeCate.value = id;
};

const closeDialog = () => {
  isOpen.value = false;
};
const isCategoryHovered = (id) => {
  isHovered.value = id;
};
const isCategoryLeaved = (id) => {
  isHovered.value = null;
};
</script>

<template>
  <div class="p-7.5">
    <!-- Hours Data -->
    <div class="flex">
      <div>
        <img src="../../../assets/clock.svg" />
      </div>
      <h2
        class="pl-2 font-semibold text-sm font-montserrat text-secondary-darker"
      >
        More Hours:
      </h2>
    </div>
    <!-- Business Hours -->
    <div class="mt-7">
      <div
        class="flex justify-start pb-[13px]"
        v-for="(hours, index) in moreHours"
      >
        <div class="w-28">
          <h3
            class="font-montserrat text-sm font-semibold text-secondary-darker"
          >
            {{ hours.day }}
          </h3>
        </div>
        <div class="">
          <h4 class="font-montserrat text-sm font-normal text-secondary-darker">
            {{ hours.time }}
          </h4>
        </div>
      </div>
    </div>
    <!-- Add Time Period Button -->
    <div class="mt-7">
      <div class="flex items-center gap-2.5 flex-wrap">
        <template v-for="(category, index) in categories">
          <button
            type="button"
            class="rounded-md bg-[#FCFCFC] px-3.5 py-2.5 text-sm font-semibold text-secondary-darker shadow-sm ring-1 ring-inset ring-[#BDBDBD] hover:bg-green-gradient-3 flex items-center hover:text-white"
            :class="category.id === activeCate ? 'item-active' : ''"
            @click="
              activeCategory(category.id);
              isOpen = !isOpen;
            "
            @mouseover="isCategoryHovered(category.id)"
            @mouseleave="isCategoryLeaved(category.id)"
          >
            <svg
              :class="[
                isHovered === category.id || category.id === activeCate
                  ? 'svg-hover'
                  : '#314456',
              ]"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M1.22781 6.11929L6.19006 6.11929L6.19006 1.18275C6.18655 1.0702 6.2058 0.958098 6.24667 0.853168C6.28754 0.748239 6.34918 0.652643 6.42789 0.572113C6.59836 0.401638 6.82958 0.305866 7.07066 0.305866C7.31175 0.305866 7.54297 0.401638 7.71344 0.572114C7.79375 0.64942 7.85741 0.742323 7.90051 0.845118C7.94362 0.947914 7.96527 1.05843 7.96413 1.1699L7.93199 6.13857H12.9328C13.1424 6.13628 13.3449 6.2145 13.4984 6.35712C13.6689 6.52759 13.7647 6.75881 13.7647 6.99989C13.7647 7.24098 13.6689 7.4722 13.4984 7.64267C13.4199 7.72799 13.3245 7.79605 13.2183 7.84252C13.1121 7.889 12.9973 7.91288 12.8814 7.91264L7.95127 7.8805L7.95127 12.8299C7.95306 12.9403 7.93296 13.05 7.89214 13.1526C7.85132 13.2552 7.79059 13.3487 7.71344 13.4277C7.54297 13.5982 7.31175 13.6939 7.07066 13.6939C6.82958 13.6939 6.59836 13.5982 6.42789 13.4277C6.34758 13.3504 6.28392 13.2575 6.24081 13.1547C6.19771 13.0519 6.17606 12.9414 6.1772 12.8299L6.20934 7.86122L1.20853 7.86122C0.998946 7.86352 0.796476 7.78529 0.642883 7.64267C0.472407 7.4722 0.376635 7.24098 0.376635 6.9999C0.376635 6.75881 0.472407 6.52759 0.642883 6.35712C0.799078 6.20478 1.00927 6.11929 1.22781 6.11929Z"
              />
            </svg>
            <span class="pl-2 font-montserrat text-[13px] font-normal">{{
              category.name
            }}</span>
          </button>
        </template>
      </div>

      <addMoreModal
        :categories="categories"
        :isShowModal="isOpen"
        @close="closeDialog()"
      />
    </div>
  </div>
</template>
