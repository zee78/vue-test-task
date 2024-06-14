<script setup>
import { ref } from "vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";

const friendly = ref("");
const safespace = ref("");
const restRoom = ref("");
const seating = ref("");
const language = ref("");

const languageAssistance = [
  {
    name: "American Sign Language",
    selectedOption: "",
  },
  {
    name: "Arabic",
    selectedOption: "",
  },
  {
    name: "Cantonese",
    selectedOption: "",
  },
  {
    name: "English",
    selectedOption: "",
  },
  {
    name: "Filipino",
    selectedOption: "",
  },
  {
    name: "French",
    selectedOption: "",
  },
  {
    name: "German",
    selectedOption: "",
  },
];
</script>

<template>
  <div>
    <div class="flex items-center mt-[25px] mb-6">
      <h1
        class="font-semibold text-[22px] text-secondary-darker font-montserrat"
      >
        GBP Attributes:
      </h1>
      <div class="pl-2 mt-0.5">
        <img src="../assets/dot.svg" />
      </div>
    </div>
    <!-- Hours Data -->
    <div class="bg-white border border-[#dddddd] pb-12">
      <div class="w-full px-4 pt-[27px]">
        <div class="w-full rounded-2xl bg-white p-2">
          <Disclosure v-slot="{ open }">
            <DisclosureButton
              class="flex w-full justify-between border-b border-color-[#DDD] py-4 text-left text-md font-semibold focus:outline-none"
            >
              <h4
                class="flex text- font-semibold text-secondary-darker font-montserrat items-center"
              >
                <img src="../assets/bag.svg" />
                <span class="pl-[9px]">From The Business</span>
              </h4>
              <img src="../assets/arrowDown.svg" v-if="open" />
              <img src="../assets/arrowUp.svg" v-else />
            </DisclosureButton>
            <DisclosurePanel
              class="pt-4 pb-8 text-md border-b border-color-[#DDD]"
            >
              <div>
                <label
                  for="business"
                  class="block font-semibold text-md text-secondary-darker font-montserrat"
                  >From the Business:</label
                >
                <select
                  id="business"
                  name="location"
                  class="mt-2 block w-full border-0 py-3 px-3 pr-10 ring-1 ring-inset ring-[#DDDDDD] focus:ring-1 focus:ring-indigo sm:text-sm font-montserrat"
                >
                  <option selected="">Identifies as Asian-owned</option>
                  <option>Identifies as Black-owned</option>
                  <option>Identifies as disable-owned</option>
                </select>
              </div>
            </DisclosurePanel>
          </Disclosure>

          <Disclosure
            as="div"
            v-slot="{ open }"
            class="border-b border-color-[#DDD]"
          >
            <DisclosureButton
              class="flex w-full justify-between border-b border-color-[#DDD] py-4 text-left text-md font-semibold focus:outline-none"
            >
              <h4
                class="flex text- font-semibold text-secondary-darker font-montserrat items-center"
              >
                <img src="../assets/accessability.svg" />
                <span class="pl-[9px]">Accessibility</span>
              </h4>
              <img src="../assets/arrowDown.svg" v-if="open" />
              <img src="../assets/arrowUp.svg" v-else />
            </DisclosureButton>

            <DisclosurePanel class="pb-2 pt-4 mb-6 text-md">
              <div class="mb-3">
                <label
                  for="business"
                  class="block font-semibold text-md text-secondary-darker font-montserrat"
                  >Accessibility:</label
                >
              </div>
              <div>
                <div class="flex items-center mb-3 flex-wrap">
                  <div class="lg:w-3/12 w-8/12">
                    <label class="font-montserrat"
                      >Has wheelchair accessible restroom:</label
                    >
                  </div>
                  <div class="flex items-center clas">
                    <input
                      type="radio"
                      v-model="restRoom"
                      name="restRoom"
                      class="custom-radio mr-3"
                    />
                    <span
                      class="text-secondary-darker font-semibold font-montserrat text-sm"
                      >Yes</span
                    >
                    <input
                      type="radio"
                      v-model="restRoom"
                      name="restRoom"
                      class="custom-radio ml-5 mr-3"
                    />
                    <span
                      class="text-secondary-darker font-semibold font-montserrat text-sm"
                      >No</span
                    >
                  </div>
                </div>
                <div class="flex items-center mb-3 flex-wrap">
                  <div class="lg:w-3/12 w-8/12">
                    <label class="font-montserrat"
                      >Has wheelchair accessible seating:</label
                    >
                  </div>
                  <div class="flex items-center clas">
                    <input
                      type="radio"
                      v-model="seating"
                      id="seatingYes"
                      value="yes"
                      class="custom-radio mr-3"
                    />
                    <span
                      class="text-secondary-darker font-semibold font-montserrat text-sm"
                      >Yes</span
                    >
                    <input
                      type="radio"
                      v-model="seating"
                      id="seatingNo"
                      value="no"
                      class="custom-radio ml-5 mr-3"
                    />
                    <span
                      class="text-secondary-darker font-semibold font-montserrat text-sm"
                      >No</span
                    >
                  </div>
                </div>
              </div>
            </DisclosurePanel>
          </Disclosure>

          <Disclosure
            as="div"
            v-slot="{ open }"
            class="border-b border-color-[#DDD]"
          >
            <DisclosureButton
              class="flex w-full justify-between py-4 border-b border-color-[#DDD] text-left text-md font-semibold focus:outline-none"
            >
              <h4
                class="flex text- font-semibold text-secondary-darker font-montserrat items-center"
              >
                <img src="../assets/amentities.svg" />
                <span class="pl-[9px]">Amenities</span>
              </h4>
              <img src="../assets/arrowDown.svg" v-if="open" />
              <img src="../assets/arrowUp.svg" v-else />
            </DisclosureButton>

            <DisclosurePanel class="pb-2 pt-4 mb-4 text-md">
              <div class="mb-3">
                <label
                  for="business"
                  class="block font-semibold text-md text-secondary-darker font-montserrat"
                  >Amenities:</label
                >
              </div>
              <div>
                <div class="flex items-center">
                  <input type="checkbox" class="custom-checkbox mr-3" />
                  <label class="font-montserrat text-sm"
                    >Has gender-neutral restroom</label
                  >
                </div>
              </div>
            </DisclosurePanel>
          </Disclosure>

          <Disclosure
            as="div"
            v-slot="{ open }"
            class="border-b border-color-[#DDD]"
          >
            <DisclosureButton
              class="flex w-full justify-between border-b border-color-[#DDD] py-4 text-left text-md font-semibold focus:outline-none"
            >
              <h4
                class="flex text- font-semibold text-secondary-darker font-montserrat items-center"
              >
                <img src="../assets/crowd.svg" />
                <span class="pl-[9px]">Crowd</span>
              </h4>
              <img src="../assets/arrowDown.svg" v-if="open" />
              <img src="../assets/arrowUp.svg" v-else />
            </DisclosureButton>

            <DisclosurePanel class="pb-2 pt-4 mb-6 text-md">
              <div class="mb-3">
                <label
                  for="business"
                  class="block font-semibold text-md text-secondary-darker"
                  >Crowd:</label
                >
              </div>
              <div>
                <div class="flex items-center mb-3 flex-wrap">
                  <div class="lg:w-3/12 w-6/12">
                    <label class="font-montserrat text-secondary-darker text-sm"
                      >LGBTQ + friendly:</label
                    >
                  </div>
                  <div class="flex items-center">
                    <input
                      type="radio"
                      v-model="friendly"
                      value="yes"
                      id="friendly1"
                      class="custom-radio mr-3"
                    />
                    <span
                      class="text-secondary-darker font-semibold font-montserrat text-sm"
                      >Yes</span
                    >
                    <input
                      type="radio"
                      v-model="friendly"
                      value="no"
                      id="friendly2"
                      class="custom-radio ml-5 mr-3"
                    />
                    <span
                      class="text-secondary-darker font-semibold font-montserrat text-sm"
                      >No</span
                    >
                  </div>
                </div>
                <div class="flex items-center mb-3 flex-wrap">
                  <div class="lg:w-3/12 w-6/12">
                    <label class="text-secondary-darker font-montserrat text-sm"
                      >Transgender safespace:</label
                    >
                  </div>
                  <div class="flex items-center">
                    <input
                      type="radio"
                      v-model="safespace"
                      value="yes"
                      id="safespace1"
                      class="custom-radio mr-3"
                    />
                    <span
                      class="text-secondary-darker font-semibold font-montserrat"
                      >Yes</span
                    >
                    <input
                      type="radio"
                      v-model="safespace"
                      id="safespace2"
                      value="no"
                      class="custom-radio ml-5 mr-3"
                    />
                    <span
                      class="text-secondary-darker font-semibold font-montserrat"
                      >No</span
                    >
                  </div>
                </div>
              </div>
            </DisclosurePanel>
          </Disclosure>

          <Disclosure
            as="div"
            v-slot="{ open }"
            class="border-b border-color-[#DDD]"
          >
            <DisclosureButton
              class="flex w-full justify-between border-b border-color-[#DDD] py-4 text-left text-md font-semibold focus:outline-none"
            >
              <h4
                class="flex text- font-semibold text-secondary-darker font-montserrat items-center"
              >
                <img src="../assets/language.svg" />
                <span class="pl-[9px]">Language Assistance</span>
              </h4>
              <img src="../assets/arrowDown.svg" v-if="open" />
              <img src="../assets/arrowUp.svg" v-else />
            </DisclosureButton>

            <DisclosurePanel class="pb-2 pt-4 mb-6 text-md">
              <div class="mb-3">
                <label
                  for="business"
                  class="block font-semibold text-md text-secondary-darker font-montserrat"
                  >Language Assitance:</label
                >
              </div>
              <div>
                <div
                  class="flex items-center mb-3"
                  v-for="(language, index) in languageAssistance"
                >
                  <div class="lg:w-3/12 w-6/12">
                    <label
                      class="text-secondary-darker font-montserrat text-sm font-normal"
                      >{{ language.name }}:</label
                    >
                  </div>
                  <div class="flex items-center clas">
                    <input
                      type="radio"
                      v-model="language.selectedOption"
                      :name="language.name"
                      value="yes"
                      :id="`language-${index}-yes`"
                      class="custom-radio mr-3"
                    />
                    <label
                      :for="`language-${index}-yes`"
                      class="text-secondary-darker font-semibold font-montserrat text-sm"
                      >Yes</label
                    >
                    <input
                      type="radio"
                      v-model="language.selectedOption"
                      :name="language.name"
                      :value="'no'"
                      :id="`language-${index}-no`"
                      class="custom-radio ml-5 mr-3"
                    />
                    <label
                      :for="`language-${index}-no`"
                      class="text-secondary-darker font-semibold font-montserrat text-sm"
                      >No</label
                    >
                  </div>
                </div>
              </div>
            </DisclosurePanel>
          </Disclosure>
        </div>
      </div>
    </div>
  </div>
</template>
