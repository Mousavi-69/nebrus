<script setup lang="ts">
import { ref } from "vue";
import Header from "../components/Header.vue";
import SelectCountery from "@/components/SelectCountery.vue";
</script>

<template>
  <div class="w-auto h-screen bg-gray-200">
    <Header></Header>
    <div class="m-5 mb-10">
      <div
        class="w-full  h-32 mt-10 flex justify-between items-center rounded-3xl"
      >
        <img src="@/assets/arbaein.jpg" class="w-full h-full rounded-2xl" />
        
      </div>
    </div>
    <SelectCountery
      :src_img="'@/assets/aragh.jpg'"
      :country="'عراقی'"
    ></SelectCountery>
    <SelectCountery
      :src_img="'@/assets/lobnan.jpg'"
      :country="'لبنانی'"
    ></SelectCountery>
    <SelectCountery
      :src_img="'@/assets/lobnan.jpg'"
      :country="'خلیجی'"
    ></SelectCountery>
    <div class="m-5">
      <div
        class="w-full bg-black h-32  flex justify-between items-center rounded-3xl"
      >
        <img src="@/assets/vip.jpeg" class="w-36 h-full rounded-l-2xl" />
        <h3 class="pr-5 text-4xl font-bold text-white ml-10 text-center">
          دوره های ویژه
        </h3>
      </div>
    </div>
  </div>
</template>
