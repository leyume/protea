<script setup>
import CardPost from "../components/CardPost.vue";
import { getQ } from "@/modules";
// setABC();

const { data: albums, isLoading } = getQ("albums");
const { data: posts, isLoading: loadingPost } = getQ("posts");
const { data: abc } = getQ("abc");
</script> 
<template>
  <!-- Albums Post -->
  <section>
    <h1 class="text-4xl mb-8">
      Albums <span v-if="albums?.length">({{ albums.length }})</span>
    </h1>

    <div class="mb-8">POST - {{ posts?.length }}</div>
    <div class="mb-8">ABC - {{ abc }}</div>

    <div v-if="isLoading">Loading ....</div>
    <div v-else class="grid md:grid-cols-3 gap-8">
      <CardPost v-for="album in albums.slice(0, 9)" :key="album.id" :title="album.title.slice(0, 20)" body="" date="" :user="{}" />
    </div>
  </section>
</template>