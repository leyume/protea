<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div class="bg-gray-800 text-gray-300 p-12 min-h-screen text-sm">
    <header class="flex items-center justify-between">
      <div>
        <router-link to="/">
          <img src="/img/logo.svg" alt="LOGO" />
        </router-link>
      </div>
      <nav class="uppercase [&_a]:p-4 [&_a]:mx-1 [&_a]:border-b-2 [&_a]:border-gray-600">
        <router-link to="/albums">Albums</router-link>
        <router-link to="/albums">Photos</router-link>
        <router-link to="/blog">Blog</router-link>
      </nav>
    </header>
    <main class="">
      <div class="py-12">
        <router-view />
      </div>
    </main>
  </div>
</template>
