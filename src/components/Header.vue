<script setup lang="ts">
import { ref } from "vue";
</script>

<template>
  <div
    class="header w-auto mt-0 p-2 flex text-right justify-between justify-self-start items-center bg-slate-50 shadow-md drop-shadow-sm"
  >
    <img src="../assets/logo.png" class="w-12 h-10 ml-3" />
    <div class=" flex-row">
      <h2 class="mb-1 text-xl text-black font-bold ">دیکشنری عربی نبراس</h2>
      <div class="flex  justify-center  ">
        <img  src="../assets/lobnan.jpg"   class="flag w-6 h-4 mr-3 "/>

        <h1 class="country text-sm ">لهجه {{"لبنانی"}}</h1>
      </div>
    </div>
    <button class="w-8 h-8 md:w-10 md:h-10 flex-center">
      <fa
        class="text-xl text-gray-600 self-center font-thin"
        :icon="['fas', 'bars']"
      />
    </button>
  </div>
</template>
