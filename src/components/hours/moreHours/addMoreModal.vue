<script setup>
import { ref, onMounted, watch, watchEffect } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

const props = defineProps({
  categories: Array,
  isShowModal: false,
});
const emit = defineEmits(["close"]);

const activeCate = ref("delivery");
const open = ref("false");
const isHovered = ref("delivery");
const isHoveredBtn = ref("");
const plans = [
  {
    id: 1,
    name: "Open With Main Hours",
    description: "Show when your business is open",
  },
  {
    id: 2,
    name: "Open With No Main Hours",
    description: "Don’t show any business hours",
  },
  {
    id: 3,
    name: "Temporarily Closed",
    description: "Show that your business will open again in the future",
  },
  {
    id: 4,
    name: "Permanently Closed",
    description: "Show that your business no longer exist",
  },
];

watchEffect(() => {
  open.value = props.isShowModal;
});

const days = [
  { id: 1, name: "Sunday" },
  { id: 2, name: "Monday" },
  { id: 3, name: "Tuesday" },
  { id: 4, name: "Wednesday" },
  { id: 5, name: "Thursday" },
  { id: 6, name: "Friday" },
  { id: 7, name: "Saturday" },
];

const closeModal = () => {
  open.value = false;
  emit("close");
};
const save = () => {
  this.closeModal();
};

const activeCategory = (id) => {
  activeCate.value = id;
};
const isCategoryHovered = (id) => {
  isHovered.value = id;
};
const isCategoryLeaved = (id) => {
  isHovered.value = null;
};
</script>
<template>
  <TransitionRoot as="template" :show="open">
    <Dialog class="relative z-10" @close="closeModal()">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:p-10 lg:w-3/6 w-full"
            >
              <div class="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                <button
                  type="button"
                  class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  @click="closeModal()"
                >
                  <span class="sr-only">Close</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 8C0 3.5816 3.5816 0 8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16C3.5816 16 0 12.4184 0 8ZM8 1.6C6.30261 1.6 4.67475 2.27428 3.47452 3.47452C2.27428 4.67475 1.6 6.30261 1.6 8C1.6 9.69739 2.27428 11.3253 3.47452 12.5255C4.67475 13.7257 6.30261 14.4 8 14.4C9.69739 14.4 11.3253 13.7257 12.5255 12.5255C13.7257 11.3253 14.4 9.69739 14.4 8C14.4 6.30261 13.7257 4.67475 12.5255 3.47452C11.3253 2.27428 9.69739 1.6 8 1.6Z"
                      fill="url(#paint0_linear_2228_918)"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.74038 4.60608C5.59035 4.45605 5.38687 4.37177 5.1747 4.37177C4.96252 4.37177 4.75904 4.45605 4.60901 4.60608C4.45898 4.75611 4.3747 4.9596 4.3747 5.17177C4.3747 5.38394 4.45898 5.58743 4.60901 5.73745L6.87175 8.0002L4.60901 10.2629C4.45898 10.413 4.3747 10.6164 4.3747 10.8286C4.3747 11.0408 4.45898 11.2443 4.60901 11.3943C4.75904 11.5443 4.96253 11.6286 5.1747 11.6286C5.38687 11.6286 5.59035 11.5443 5.74038 11.3943L8.00313 9.13157L10.2659 11.3943C10.4159 11.5443 10.6194 11.6286 10.8316 11.6286C11.0437 11.6286 11.2472 11.5443 11.3972 11.3943C11.5473 11.2443 11.6316 11.0408 11.6316 10.8286C11.6316 10.6164 11.5473 10.413 11.3972 10.2629L9.1345 8.0002L11.3972 5.73745C11.5473 5.58742 11.6316 5.38394 11.6316 5.17177C11.6316 4.95959 11.5473 4.75611 11.3972 4.60608C11.2472 4.45605 11.0437 4.37177 10.8316 4.37177C10.6194 4.37177 10.4159 4.45605 10.2659 4.60608L8.00312 6.86882L5.74038 4.60608Z"
                      fill="url(#paint1_linear_2228_918)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_2228_918"
                        x1="8"
                        y1="0"
                        x2="8"
                        y2="16"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#84C030" />
                        <stop offset="1" stop-color="#23A4BF" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_2228_918"
                        x1="8"
                        y1="0"
                        x2="8"
                        y2="16"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#84C030" />
                        <stop offset="1" stop-color="#23A4BF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </button>
              </div>
              <div class="">
                <div class="sm:flex sm:items-center mb-6">
                  <div
                    class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center sm:mx-0 sm:h-10 sm:w-10"
                  >
                    <img src="../../../assets/clock.svg" />
                  </div>
                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle
                      as="h3"
                      class="text-2xl font-semibold text-secondary-darker"
                      >More Hours</DialogTitle
                    >
                  </div>
                </div>
                <div class="border border-spacing-1 border-[#D3D3D3]"></div>
                <!-- radio Button -->
                <div class="my-[22px]">
                  <div class="flex items-center gap-2.5 flex-wrap">
                    <template v-for="(category, index) in categories">
                      <button
                        type="button"
                        class="rounded-md bg-[#FCFCFC] px-3.5 py-2.5 text-sm font-semibold text-secondary-darker hover:text-white shadow-sm ring-1 ring-inset ring-[#BDBDBD] hover:bg-green-gradient-3 flex items-center"
                        @click="activeCategory(category.id)"
                        :class="category.id === activeCate ? 'item-active' : ''"
                        @mouseover="isCategoryHovered(category.id)"
                        @mouseleave="isCategoryLeaved(category.id)"
                      >
                        <svg
                          :class="[
                            isHovered === category.id ||
                            category.id === activeCate
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
                        <span
                          class="pl-2 font-montserrat text-[13px] font-normal"
                          >{{ category.name }}</span
                        >
                      </button>
                    </template>
                  </div>
                </div>
                <!-- End radio Button -->
                <div class="border border-spacing-1 border-[#D3D3D3]"></div>
                <!-- Add deliver -->
                <div class="mt-[21px] mb-[26px]">
                  <div class="mb-[18px]">
                    <h4
                      class="text-secondary-darker font-montserrat font-semibold text-lg"
                    >
                      Delivery
                    </h4>
                    <span
                      class="text-sm text-[#939393] font-montserrat font-normal"
                      >Add hours for a typical week.</span
                    >
                  </div>
                  <div>
                    <div v-for="(day, index) in days" class="mb-[18px]">
                      <label
                        class="text-sm font-montserrat font-semibold text-secondary-darker"
                        >{{ day.name }}</label
                      >
                      <div class="flex items-center">
                        <div class="mr-8 flex items-center">
                          <input
                            type="checkbox"
                            value="closed"
                            class="w-25 custom-checkbox"
                          />
                          <span
                            class="pl-2 text-secondary-darker text-sm font-montserrat"
                            >Closed</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End Add delovery -->
                <div class="border border-spacing-1 border-[#D3D3D3]"></div>
              </div>
              <div class="mt-5 sm:mt-8 sm:flex sm:flex-row-reverse justify-end">
                <button
                  type="button"
                  class="flex items-center w-full justify-center rounded-md bg-white px-7 py-3 text-sm font-semibold font-montserrat ring-accent-green-gradient-2 text-secondary shadow-sm hover:bg-green-gradient-3 ring-2 ring-inset hover:text-white hover:ring-0 sm:ml-3 sm:w-[120px]"
                  @click="save"
                  @mouseover="isHoveredBtn = 'save'"
                  @mouseleave="isHoveredBtn = ''"
                >
                  <img
                    v-if="isHoveredBtn === 'save'"
                    src="../../../assets/saveWhite.svg"
                  />
                  <img v-else src="../../../assets/save.svg" />

                  <span class="pl-2">Save</span>
                </button>
                <button
                  type="button"
                  class="mt-3 flex w-full items-center justify-center rounded-md bg-white px-7 py-3 text-sm font-semibold font-montserrat text-secondary shadow-sm ring-2 ring-inset ring-accent-green-gradient-2 hover:bg-green-gradient-3 hover:text-white hover:ring-0 sm:mt-0 sm:w-[120px]"
                  @click="closeModal"
                  @mouseover="isHoveredBtn = 'cancel'"
                  @mouseleave="isHoveredBtn = ''"
                >
                  <img
                    v-if="isHoveredBtn === 'cancel'"
                    src="../../../assets/closeWhite.svg"
                  />
                  <img v-else src="../../../assets/close.svg" />

                  <span class="pl-2">Cancel</span>
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
