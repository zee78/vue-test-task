<script setup>
import { ref, watchEffect } from "vue";
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
const open = ref(false);
const isHovered = ref("");

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

const days = [
  { id: 1, name: "Sunday" },
  { id: 2, name: "Monday" },
  { id: 3, name: "Tuesday" },
  { id: 4, name: "Wednesday" },
  { id: 5, name: "Thursday" },
  { id: 6, name: "Friday" },
  { id: 7, name: "Saturday" },
];
watchEffect(() => {
  open.value = props.isShowModal;
});

var isOpenDate = ref(false);
const closeModal = () => {
  open.value = false;
  emit("close");
};
const save = () => {
  this.closeModal();
};

const addDate = () => {
  isOpenDate.value = true;
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
                      >Add Special Hours</DialogTitle
                    >
                  </div>
                </div>
                <div class="border border-spacing-1 border-[#D3D3D3]"></div>
                <!-- radio Button -->
                <div class="my-[22px]">
                  <div class="flex justify-between items-center">
                    <div>
                      <h2
                        class="text-secondary-darker font-montserrat text-lg font-semibold"
                      >
                        4th of July
                      </h2>
                      <p
                        class="text-[#939393] font-montserrat font-normal text-sm"
                      >
                        July 4, 2024
                      </p>
                    </div>
                    <div>
                      <a
                        href="#"
                        class="text-[#0442E3] font-montserrat text-sm font-semibold"
                        >Review</a
                      >
                    </div>
                  </div>
                </div>
                <!-- End radio Button -->
                <div class="border border-spacing-1 border-[#D3D3D3]"></div>
                <!-- Add deliver -->
                <div class="mt-[21px] mb-[26px]">
                  <div v-if="isOpenDate">
                    <div class="">
                      <div class="lg:flex justify-between items-center">
                        <div class="mr-[17px] lg:w-3/12 flex-none">
                          <label
                            for=""
                            class="text-sm font-montserrat font-semibold text-secondary-darker"
                            >Special Hours:</label
                          >
                          <input
                            type="date"
                            value="06/12/2024"
                            class="block w-full rounded-sm border-0 py-[9px] text-secondary-darker shadow-sm ring-1 ring-inset ring-[#DDD] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm px-4"
                          />
                        </div>
                        <!-- Flex -->
                        <div class="flex-1">
                          <div class="flex items-center w-full">
                            <div class="w-[45%]">
                              <label
                                for=""
                                class="text-sm font-montserrat font-semibold text-secondary-darker"
                                >Opens At:</label
                              >
                              <input
                                type="time"
                                value="10:00"
                                class="block w-full rounded-sm border-0 py-2.5 text-secondary-darker shadow-sm ring-1 ring-inset ring-[#DDD] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm px-4"
                              />
                            </div>
                            <div class="mt-5">
                              <span
                                class="px-[10px] text-sm font-montserrat font-semibold text-secondary-darker"
                                >To</span
                              >
                            </div>
                            <div class="w-[45%]">
                              <label
                                class="text-sm font-montserrat font-semibold text-secondary-darker"
                                >Closes At:</label
                              >
                              <input
                                type="time"
                                value="16:00"
                                class="block w-full rounded-sm border-0 py-2.5 text-secondary-darker shadow-sm ring-1 ring-inset ring-[#DDD] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm px-4"
                              />
                            </div>
                            <div class="mt-5 ml-[14px]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="4"
                                height="22"
                                viewBox="0 0 4 22"
                                fill="none"
                              >
                                <path
                                  d="M4 2C4 3.10457 3.10457 4 2 4C0.89543 4 0 3.10457 0 2C0 0.89543 0.89543 0 2 0C3.10457 0 4 0.89543 4 2Z"
                                  fill="#2A3F54"
                                />
                                <path
                                  d="M4 11C4 12.1046 3.10457 13 2 13C0.89543 13 0 12.1046 0 11C0 9.89543 0.89543 9 2 9C3.10457 9 4 9.89543 4 11Z"
                                  fill="#2A3F54"
                                />
                                <path
                                  d="M4 20C4 21.1046 3.10457 22 2 22C0.89543 22 0 21.1046 0 20C0 18.8954 0.89543 18 2 18C3.10457 18 4 18.8954 4 20Z"
                                  fill="#2A3F54"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <!-- Flex -->
                      </div>
                      <div class="mr-8 mt-[19px] flex items-center">
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

                  <div class="block mt-6">
                    <button
                      type="button"
                      class="flex items-center w-full justify-center rounded-md bg-white px-5 py-2 text-sm font-semibold font-montserrat ring-accent-green-gradient-2 text-secondary shadow-sm hover:bg-green-gradient-3 ring-2 ring-inset hover:text-white hover:ring-0 sm:w-[144px]"
                      @click="addDate"
                      @mouseover="isHovered = 'date'"
                      @mouseleave="isHovered = ''"
                    >
                      <img
                        v-if="isHovered === 'date'"
                        src="../../../assets/plusCircleWhite.svg"
                      />
                      <img v-else src="../../../assets/plusCircle.svg" />
                      <span class="pl-1">Add a Date</span>
                    </button>
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
                  @mouseover="isHovered = 'save'"
                  @mouseleave="isHovered = ''"
                >
                  <img
                    v-if="isHovered === 'save'"
                    src="../../../assets/saveWhite.svg"
                  />
                  <img v-else src="../../../assets/save.svg" />
                  <span class="pl-2">Save</span>
                </button>
                <button
                  type="button"
                  class="mt-3 flex w-full items-center justify-center rounded-md bg-white px-7 py-3 text-sm font-semibold font-montserrat text-secondary shadow-sm ring-2 ring-inset ring-accent-green-gradient-2 hover:bg-green-gradient-3 hover:text-white hover:ring-0 sm:mt-0 sm:w-[120px]"
                  @click="closeModal"
                  @mouseover="isHovered = 'cancel'"
                  @mouseleave="isHovered = ''"
                >
                  <img
                    v-if="isHovered === 'cancel'"
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
