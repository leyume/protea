<script setup>
defineProps({
  title: { type: String, default: "Cool Title" },
  body: { type: String, default: "Cool Title" },
  date: { type: String, default: "2024-06-06" },
  user: { type: Object, default: { name: "Jon Doe" } },
});
</script>
<template>
  <div class="grid gap-3">
    <div class="h-[200px] bg-yellow-500"></div>
    <h2 class="text-2xl">{{ title }}</h2>
    <p class="opacity-50">{{ body }}</p>
    <div class="flex">
      <div class="grow">{{ user?.name }}</div>
      <div class="text-yellow-500">{{ date }}</div>
    </div>
  </div>
</template>