<script setup lang="ts">
import { ref } from "@vue/reactivity";
    const props = defineProps<{
        country:string;
        src_img:string;
    }>()
    console.log(props.src_img)
    </script>
<template>
  <div class="m-5">
    <div
      class="w-full bg-white h-24 flex justify-between items-center rounded-3xl shadow-inherit drop-shadow-xl "
    >
      <img  src = '@/assets/aragh.jpg' class="w-28 h-full rounded-l-2xl" />
      <h3 class="pr-5 text-2xl font-bold text-black  ">لهجه {{props.country}}</h3>
    </div>
  </div>
</template>
