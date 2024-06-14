<script setup>
import { ref } from "vue";
import addSpecialModal from "./addSpecialModa.vue";

const isOpen = ref(false);
const isHovered = ref(false);
const specialHours = [
  {
    day: "Friday",
    time: "10:00 AM to 4:00 PM",
  },
  {
    day: "Saturday",
    time: "08:00 AM to 6:30 PM",
  },
];

const closeDialog = () => {
  isOpen.value = false;
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
        Special Hours:
      </h2>
    </div>
    <!-- Business Hours -->
    <div class="mt-7">
      <div
        class="flex justify-start pb-[13px]"
        v-for="(hours, index) in specialHours"
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
      <div class="flex items-center">
        <div>
          <button
            type="button"
            class="rounded-md font-montserrat bg-white px-3.5 py-2.5 text-sm font-semibold text-secondary hover:text-white shadow-sm ring-2 ring-inset ring-accent-green-gradient-2 hover:bg-green-gradient-3 flex items-center custom-button"
            @click="isOpen = !isOpen"
            @mouseover="isHovered = true"
            @mouseleave="isHovered = false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 8.2793C0 3.8609 3.5816 0.279297 8 0.279297C12.4184 0.279297 16 3.8609 16 8.2793C16 12.6977 12.4184 16.2793 8 16.2793C3.5816 16.2793 0 12.6977 0 8.2793ZM8 1.8793C6.30261 1.8793 4.67475 2.55358 3.47452 3.75381C2.27428 4.95405 1.6 6.58191 1.6 8.2793C1.6 9.97668 2.27428 11.6045 3.47452 12.8048C4.67475 14.005 6.30261 14.6793 8 14.6793C9.69739 14.6793 11.3253 14.005 12.5255 12.8048C13.7257 11.6045 14.4 9.97668 14.4 8.2793C14.4 6.58191 13.7257 4.95405 12.5255 3.75381C11.3253 2.55358 9.69739 1.8793 8 1.8793Z"
                :fill="isHovered ? '#fff' : 'url(#paint1_linear_2499_224)'"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.79999 4.2793C8.79999 4.06713 8.7157 3.86365 8.56567 3.71362C8.41564 3.56359 8.21216 3.4793 7.99999 3.4793C7.78781 3.4793 7.58433 3.56359 7.4343 3.71362C7.28427 3.86365 7.19999 4.06713 7.19999 4.2793V7.4793H3.99999C3.78781 7.4793 3.58433 7.56359 3.4343 7.71362C3.28427 7.86365 3.19999 8.06713 3.19999 8.2793C3.19999 8.49148 3.28427 8.69496 3.4343 8.84499C3.58433 8.99502 3.78781 9.0793 3.99999 9.0793H7.19999V12.2793C7.19999 12.4915 7.28427 12.695 7.4343 12.845C7.58433 12.995 7.78781 13.0793 7.99999 13.0793C8.21216 13.0793 8.41564 12.995 8.56567 12.845C8.7157 12.695 8.79999 12.4915 8.79999 12.2793V9.0793H12C12.2122 9.0793 12.4156 8.99502 12.5657 8.84499C12.7157 8.69496 12.8 8.49148 12.8 8.2793C12.8 8.06713 12.7157 7.86365 12.5657 7.71362C12.4156 7.56359 12.2122 7.4793 12 7.4793H8.79999V4.2793Z"
                :fill="isHovered ? '#fff' : 'url(#paint1_linear_2499_224)'"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2499_224"
                  x1="4"
                  y1="1.7793"
                  x2="13"
                  y2="14.7793"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#97C72F" />
                  <stop offset="1" stop-color="#1CA2CC" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_2499_224"
                  x1="4"
                  y1="1.7793"
                  x2="13"
                  y2="14.7793"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#97C72F" />
                  <stop offset="1" stop-color="#1CA2CC" />
                </linearGradient>
              </defs>
            </svg>

            <span class="pl-2">Add Special Hours</span>
          </button>
        </div>
      </div>
      <addSpecialModal :isShowModal="isOpen" @close="closeDialog()" />
    </div>
  </div>
</template>
