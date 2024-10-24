<script setup>
import CardPost from "../components/CardPost.vue";
import { getQ, mPost } from "@/modules";

const { data: posts, isLoading } = getQ("posts");
const { mutate, isPending } = mPost();
</script> 
<template>
  <!-- Blog Post -->
  <section>
    <h1 class="text-4xl mb-8 flex justify-between items-center">
      <div>
        Blog Posts <span v-if="posts?.length">({{ posts.length }})</span>
      </div>
      <a
        class="bg-yellow-500 cursor-pointer text-black py-2.5 px-4 text-base uppercase hover:bg-rose-600 hover:text-white transition-all duration-500"
        @click="mutate({ title: 'New Post', body: 'New Body' })"
      >
        {{ isPending ? "Sending..." : "New Post" }}
      </a>
    </h1>

    <div v-if="isLoading">Loading ....</div>
    <div v-else class="grid md:grid-cols-3 gap-8">
      <CardPost v-for="post in posts.slice(0, 9)" :key="post.id" :title="post.title.slice(0, 20)" :body="post.body.slice(0, 50)" />
    </div>
  </section>
</template>