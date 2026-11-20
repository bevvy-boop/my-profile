<script setup lang="ts">
const links = [
  { to: '/', label: 'Home' },
  { to: '/profile', label: 'Profile' },
]
</script>

<template>
  <header class="bg-white/80 backdrop-blur border-b border-plum-200 sticky top-0 z-10">
    <nav class="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
      <NuxtLink to="/" class="font-bold text-lg text-plum-700">Beverly Nicole</NuxtLink>
      <ul class="flex gap-2">
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="px-4 py-2 rounded-full text-sm font-medium text-plum-700 hover:bg-plum-100 transition"
            active-class="!bg-coral-500 !text-white"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
